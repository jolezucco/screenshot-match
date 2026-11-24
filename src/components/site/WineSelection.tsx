import { wines, type CardStyle } from "@/config/wines";
import { useLanguage } from "@/i18n/LanguageContext";

import { CatalogDownload } from "./CatalogDownload";
import { Reveal } from "./Reveal";
import { WineCard } from "./WineCard";

// Didascalie per confrontare le 8 proposte di stile. Rimuovile quando avrai scelto lo stile definitivo.
const styleNames: Record<CardStyle, string> = {
  minimal: "Minimal elegante",
  catalogo: "Catalogo premium",
  luminoso: "Luminoso contemporaneo",
  arco: "Arco in vigna",
  orizzontale: "Moderno orizzontale",
  etichetta: "Cartellino bordeaux",
  artigianale: "Naturale artigianale",
  editoriale: "Editoriale",
};
const SHOW_STYLE_CAPTIONS = true;

export function WineSelection() {
  const { t } = useLanguage();

  return (
    <section id="selezione" aria-labelledby="wines-title" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-bordeaux">{t.wines.eyebrow}</p>
          <h2 id="wines-title" className="mt-4 text-4xl md:text-5xl">
            {t.wines.title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {wines.map((wine, i) => (
            <Reveal as="li" key={wine.id} delay={(i % 4) * 90}>
              <WineCard wine={wine} index={i} />
              {SHOW_STYLE_CAPTIONS && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  {t.wines.styleNote} {i + 1} · {styleNames[wine.cardStyle]}
                </p>
              )}
            </Reveal>
          ))}
        </ul>

        <CatalogDownload />
      </div>
    </section>
  );
}
