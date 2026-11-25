import { Link } from "@tanstack/react-router";
import { Wine as WineGlass } from "lucide-react";
import type { ReactNode } from "react";

import type { Wine } from "@/config/wines";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Card di presentazione di un vino. Lo stile grafico dipende da `wine.cardStyle`
 * (impostato in src/config/wines.ts). Nessun pulsante d'acquisto: solo presentazione.
 */

type CardProps = { wine: Wine; index: number };

// Base condivisa: stessa altezza, angoli, microanimazioni (hover su desktop, tocco su mobile)
const base =
  "group relative h-[28rem] overflow-hidden rounded-2xl transition-all duration-500 ease-out active:scale-[0.985] md:hover:-translate-y-1.5 md:hover:shadow-lift";

function Bottle({ wine, className, imgClassName }: { wine: Wine; className?: string; imgClassName?: string }) {
  const { lang } = useLanguage();
  return (
    <div className={cn("flex min-h-0 items-center justify-center", className)}>
      {/* IMMAGINE BOTTIGLIA — percorso in src/config/wines.ts */}
      <img
        src={wine.image}
        alt={wine.alt[lang]}
        loading="lazy"
        decoding="async"
        width={240}
        height={720}
        className={cn(
          "h-full w-auto max-w-full object-contain transition-transform duration-700 ease-out md:group-hover:-translate-y-1 md:group-hover:scale-[1.03]",
          imgClassName,
        )}
      />
    </div>
  );
}

function TypeTag({ wine, className, iconClassName }: { wine: Wine; className?: string; iconClassName?: string }) {
  const { t } = useLanguage();
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]", className)}>
      <WineGlass className={cn("h-4 w-4", iconClassName)} aria-hidden="true" strokeWidth={1.6} />
      {t.wines.types[wine.type]}
    </span>
  );
}

const num = (i: number) => String(i + 1).padStart(2, "0");

/* 1 — Minimal elegante */
function MinimalCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col items-center border border-border/50 bg-card px-6 pb-7 pt-8 text-center shadow-soft")}>
      <Bottle wine={wine} className="h-full flex-1" imgClassName="drop-shadow-[0_14px_14px_oklch(0.3_0.03_60_/_0.18)]" />
      <h3 className="mt-5 text-3xl text-foreground">{wine.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
      <TypeTag wine={wine} className="mt-3 text-bordeaux" />
    </article>
  );
}

/* 2 — Catalogo premium */
function CatalogoCard({ wine, index }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col border border-bordeaux/70 bg-offwhite p-6 shadow-soft")}>
      <span className="pointer-events-none absolute inset-2 rounded-xl border border-bordeaux/25" aria-hidden="true" />
      <div className="flex items-center justify-between text-bordeaux">
        <span className="font-serif text-lg italic">N° {num(index)}</span>
        <TypeTag wine={wine} />
      </div>
      <Bottle wine={wine} className="mt-3 h-full flex-1" />
      <div className="mt-4 flex items-center gap-3 text-bordeaux/60" aria-hidden="true">
        <span className="h-px flex-1 bg-current" />
        <span className="h-1.5 w-1.5 rotate-45 bg-current" />
        <span className="h-px flex-1 bg-current" />
      </div>
      <h3 className="mt-3 text-center font-serif text-3xl italic text-foreground">{wine.name}</h3>
      <p className="mt-1 text-center text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
        {wine.subtitle[lang]}
      </p>
    </article>
  );
}

/* 3 — Lino: fondo crema, testo allineato a sinistra */
function LinoCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col bg-cream p-6 shadow-soft")}>
      <Bottle wine={wine} className="h-full flex-1" />
      <div className="mt-5 border-t border-border pt-4">
        <TypeTag wine={wine} className="text-muted-foreground" />
        <h3 className="mt-2 text-3xl text-foreground">{wine.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
      </div>
    </article>
  );
}

/* 4 — Salvia: verde tenue, tutto centrato */
function SalviaCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col items-center bg-sage-soft/70 px-6 pb-7 pt-8 text-center shadow-soft")}>
      <Bottle wine={wine} className="h-full flex-1" />
      <h3 className="mt-5 text-3xl text-vine-deep">{wine.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
      <TypeTag wine={wine} className="mt-3 text-vine" />
    </article>
  );
}

/* 5 — Sabbia: bottiglia su fondo beige, testo su bianco */
function SabbiaCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col border border-border/60 bg-card shadow-soft")}>
      <div className="flex min-h-0 flex-1 bg-beige/45 px-6 pt-8 pb-5">
        <Bottle wine={wine} className="h-full w-full" />
      </div>
      <div className="flex items-end justify-between gap-3 px-6 py-5">
        <div className="min-w-0">
          <h3 className="text-3xl text-foreground">{wine.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
        </div>
        <TypeTag wine={wine} className="mb-1 shrink-0 text-muted-foreground" />
      </div>
    </article>
  );
}

/* 6 — Nicchia: bottiglia dentro un arco chiaro, senza decorazioni */
function NicchiaCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col items-center border border-border/60 bg-card px-6 pb-7 pt-6 text-center shadow-soft")}>
      <div className="flex min-h-0 w-full flex-1 items-end justify-center rounded-t-full bg-cream px-4 pt-10 pb-4">
        <Bottle wine={wine} className="h-full" />
      </div>
      <h3 className="mt-5 text-3xl text-foreground">{wine.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
      <TypeTag wine={wine} className="mt-3 text-muted-foreground" />
    </article>
  );
}

/* 7 — Pietra: fondo carta, numero discreto */
function PietraCard({ wine, index }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col bg-paper p-6 shadow-soft")}>
      <div className="flex items-center justify-between text-muted-foreground">
        <TypeTag wine={wine} />
        <span className="font-serif text-lg italic">{num(index)}</span>
      </div>
      <Bottle wine={wine} className="mt-3 h-full flex-1" />
      <h3 className="mt-5 text-3xl text-foreground">{wine.name}</h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
    </article>
  );
}

/* 8 — Cerchio: bottiglia davanti a un cerchio beige tenue */
function CerchioCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col items-center border border-border/60 bg-offwhite px-6 pb-7 pt-8 text-center shadow-soft")}>
      <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
        <span className="absolute aspect-square w-[70%] max-w-[13rem] rounded-full bg-beige/50" aria-hidden="true" />
        <Bottle wine={wine} className="relative h-full" />
      </div>
      <TypeTag wine={wine} className="mt-5 text-muted-foreground" />
      <h3 className="mt-1.5 text-3xl text-foreground">{wine.name}</h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
    </article>
  );
}

const variants: Record<Wine["cardStyle"], (p: CardProps) => ReactNode> = {
  minimal: MinimalCard,
  catalogo: CatalogoCard,
  lino: LinoCard,
  salvia: SalviaCard,
  sabbia: SabbiaCard,
  nicchia: NicchiaCard,
  pietra: PietraCard,
  cerchio: CerchioCard,
};

export function WineCard(props: CardProps) {
  const Variant = variants[props.wine.cardStyle];
  if (props.wine.detail) {
    return (
      <Link
        to="/vini/$wineId"
        params={{ wineId: props.wine.id }}
        className="block rounded-2xl focus-visible:outline-none"
      >
        <Variant {...props} />
      </Link>
    );
  }
  return <Variant {...props} />;
}
