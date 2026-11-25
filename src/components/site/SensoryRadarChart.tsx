import { useState } from "react";

import type { SensoryProfile } from "@/config/wines";
import { useLanguage } from "@/i18n/LanguageContext";

type SensoryKey = keyof SensoryProfile;

const AXES: SensoryKey[] = ["sweetness", "acidity", "fruitiness", "body", "aroma"];
const LEVELS = [1, 2, 3, 4] as const;
const CX = 180;
const CY = 168;
const MAX_R = 92;

function polarPoint(index: number, radius: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / AXES.length;
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

function polygonPoints(radii: number[]) {
  return radii
    .map((r, i) => {
      const { x, y } = polarPoint(i, r);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function SensoryRadarChart({ profile }: { profile: SensoryProfile }) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const labels = t.wineDetail.sensoryLabels;
  const values = AXES.map((key) => profile[key]);
  const dataPoints = values.map((val, i) => polarPoint(i, (val / 4) * MAX_R));
  const dataPolygon = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const activeKey = activeIndex !== null ? AXES[activeIndex] : undefined;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[23rem]">
        <svg
          viewBox="0 0 360 326"
          role="img"
          aria-label={`${t.wineDetail.sensoryTitle}: ${AXES.map((k) => `${labels[k]} ${profile[k]}/4`).join(", ")}`}
          className="h-auto w-full overflow-visible select-none"
        >
          {/* Griglia a pentagoni concentrici (scala 1–4) */}
          {LEVELS.map((level) => {
            const r = (level / 4) * MAX_R;
            return (
              <polygon
                key={level}
                points={polygonPoints(AXES.map(() => r))}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth={level === 4 ? 1.2 : 0.9}
                strokeDasharray={level === 4 ? undefined : "3 3"}
              />
            );
          })}

          {/* Assi radiali */}
          {AXES.map((key, i) => {
            const outer = polarPoint(i, MAX_R);
            return (
              <line
                key={key}
                x1={CX}
                y1={CY}
                x2={outer.x}
                y2={outer.y}
                stroke="var(--color-border)"
                strokeWidth={0.9}
              />
            );
          })}

          {/* Indicatori numerici della scala 1–4 lungo l'asse superiore */}
          {LEVELS.map((level) => {
            const y = CY - (level / 4) * MAX_R;
            return (
              <text
                key={level}
                x={CX + 7}
                y={y + 3}
                fontSize="10"
                fill="var(--color-muted-foreground)"
                aria-hidden="true"
              >
                {level}
              </text>
            );
          })}

          {/* Area dei valori */}
          <polygon
            points={dataPolygon}
            fill="var(--color-bordeaux)"
            fillOpacity={0.18}
            stroke="var(--color-bordeaux)"
            strokeWidth={2}
            strokeLinejoin="round"
          />

          {/* Vertici interattivi (hover, tocco, tastiera) */}
          {dataPoints.map((pt, i) => {
            const key = AXES[i];
            if (!key) return null;
            const isActive = activeIndex === i;
            return (
              <g
                key={key}
                tabIndex={0}
                role="button"
                aria-label={`${labels[key]}: ${profile[key]} / 4`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(i)}
                onBlur={() => setActiveIndex(null)}
                onClick={() => setActiveIndex((prev) => (prev === i ? null : i))}
                className="cursor-pointer focus:outline-none"
              >
                <circle cx={pt.x} cy={pt.y} r={14} fill="transparent" />
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isActive ? 6 : 4.2}
                  fill={isActive ? "var(--color-bordeaux)" : "var(--color-offwhite)"}
                  stroke="var(--color-bordeaux)"
                  strokeWidth={2}
                  className="transition-all duration-200"
                />
              </g>
            );
          })}

          {/* Etichette degli assi */}
          {AXES.map((key, i) => {
            const pos = polarPoint(i, MAX_R + 26);
            const anchor = i === 0 ? "middle" : i === 1 || i === 2 ? "start" : "end";
            const dy = i === 0 ? -2 : i === 2 || i === 3 ? 10 : 4;
            const isActive = activeIndex === i;
            return (
              <text
                key={key}
                x={pos.x}
                y={pos.y + dy}
                textAnchor={anchor}
                fontSize="12.5"
                fontWeight={isActive ? 600 : 500}
                fill={isActive ? "var(--color-bordeaux)" : "var(--color-foreground)"}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex((prev) => (prev === i ? null : i))}
                className="cursor-pointer transition-colors"
              >
                {labels[key]}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Riquadro valore attivo (hover / tocco / tastiera) */}
      <div
        aria-live="polite"
        className="mt-2 flex min-h-8 items-center justify-center rounded-full border border-border/70 bg-offwhite px-4 py-1 text-xs font-medium text-muted-foreground"
      >
        {activeKey ? (
          <span>
            <strong className="font-semibold text-bordeaux">{labels[activeKey]}</strong>: {profile[activeKey]} / 4
          </span>
        ) : (
          <span>{t.wineDetail.sensoryScaleHint}</span>
        )}
      </div>
    </div>
  );
}