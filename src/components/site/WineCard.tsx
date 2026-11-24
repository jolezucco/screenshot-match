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

/* 3 — Luminoso contemporaneo (vetro discreto) */
function LuminosoCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "bg-glass-card border border-glass-border shadow-soft")}>
      <span className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sage-soft blur-3xl" aria-hidden="true" />
      <span className="absolute -right-8 bottom-24 h-32 w-32 rounded-full bg-amber-soft blur-3xl" aria-hidden="true" />
      <Bottle wine={wine} className="absolute inset-x-0 top-6 h-[62%]" imgClassName="bottle-reflection" />
      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-glass-border bg-glass p-4 shadow-soft backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl text-foreground">{wine.name}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
          </div>
          <TypeTag wine={wine} className="mt-1 shrink-0 text-vine" />
        </div>
      </div>
    </article>
  );
}

/* 4 — Fotografico */
function FotograficoCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "shadow-soft")}>
      <img
        src="/images/texture-vigna.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 md:group-hover:scale-105"
      />
      <div className="bg-photo-card-overlay absolute inset-0" aria-hidden="true" />
      <Bottle
        wine={wine}
        className="absolute inset-x-0 top-6 h-[66%]"
        imgClassName="drop-shadow-[0_24px_24px_oklch(0.1_0.02_140_/_0.55)]"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 text-on-photo">
        <TypeTag wine={wine} className="text-on-photo/85" />
        <h3 className="mt-2 text-3xl">{wine.name}</h3>
        <p className="mt-0.5 text-sm text-on-photo/80">{wine.subtitle[lang]}</p>
      </div>
    </article>
  );
}

/* 5 — Moderno orizzontale */
function OrizzontaleCard({ wine, index }: CardProps) {
  const { lang, t } = useLanguage();
  return (
    <article className={cn(base, "bg-horizontal-card grid grid-cols-[44%_1fr] border border-border/60 shadow-soft")}>
      <div className="relative m-3 mr-0 overflow-hidden rounded-xl bg-sage-soft">
        <Bottle wine={wine} className="absolute inset-0 py-6" />
      </div>
      <div className="flex flex-col justify-center gap-3 p-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bordeaux text-accent-foreground">
          <WineGlass className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
        </span>
        <span className="eyebrow text-bordeaux">{t.wines.types[wine.type]}</span>
        <h3 className="text-3xl text-foreground">{wine.name}</h3>
        <p className="text-sm text-muted-foreground">{wine.subtitle[lang]}</p>
        <span className="mt-2 font-serif text-sm italic text-vine">— {num(index)}</span>
      </div>
    </article>
  );
}

/* 6 — Luxury scuro */
function LuxuryCard({ wine }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "flex flex-col bg-luxe p-6 text-luxe-foreground shadow-soft")}>
      <div className="bg-luxe-spot absolute inset-0 transition-opacity duration-700 md:group-hover:opacity-90" aria-hidden="true" />
      <span className="pointer-events-none absolute inset-3 rounded-xl border border-gold/25" aria-hidden="true" />
      <TypeTag wine={wine} className="relative self-center text-gold" />
      <Bottle
        wine={wine}
        className="relative mt-3 h-full flex-1"
        imgClassName="drop-shadow-[0_0_28px_oklch(0.8_0.075_82_/_0.22)]"
      />
      <div className="relative mt-4 text-center">
        <h3 className="text-3xl uppercase tracking-[0.12em] text-gold">{wine.name}</h3>
        <span className="mx-auto mt-2 block h-px w-12 bg-gold/60" aria-hidden="true" />
        <p className="mt-2 text-sm text-luxe-foreground/75">{wine.subtitle[lang]}</p>
      </div>
    </article>
  );
}

/* 7 — Naturale artigianale */
function ArtigianaleCard({ wine, index }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "bg-paper-texture flex flex-col p-6 text-ink shadow-soft")}>
      <span className="pointer-events-none absolute inset-3 rounded-xl border border-dashed border-ink/35" aria-hidden="true" />
      <span
        className="absolute right-6 top-6 flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-bordeaux/60 font-serif text-sm font-semibold text-bordeaux/80"
        aria-hidden="true"
      >
        N°{num(index)}
      </span>
      <TypeTag wine={wine} className="relative" />
      <Bottle wine={wine} className="relative mt-3 h-full flex-1" imgClassName="sepia-[.12]" />
      <div className="relative mt-4 border-t border-ink/30 pt-4 text-center">
        <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">{wine.name}</h3>
        <p className="mt-1 font-serif text-base italic text-ink/80">{wine.subtitle[lang]}</p>
      </div>
    </article>
  );
}

/* 8 — Editoriale */
function EditorialeCard({ wine, index }: CardProps) {
  const { lang } = useLanguage();
  return (
    <article className={cn(base, "bg-editorial text-amber-deep shadow-soft")}>
      <span
        className="absolute right-3.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-amber-deep/70 [writing-mode:vertical-rl]"
        aria-hidden="true"
      >
        Vol. {num(index)} — {wine.name}
      </span>
      <h3 className="relative z-0 px-5 pt-6 font-serif text-[4.2rem] italic leading-[0.85] tracking-tight [overflow-wrap:anywhere]">
        {wine.name}
      </h3>
      <span className="absolute left-5 top-[48%] h-24 w-24 rounded-full bg-amber/60" aria-hidden="true" />
      <Bottle
        wine={wine}
        className="absolute bottom-6 right-10 top-20 z-10 w-[44%]"
        imgClassName="drop-shadow-[0_18px_20px_oklch(0.35_0.08_55_/_0.35)]"
      />
      <div className="absolute bottom-6 left-5 z-20 max-w-[44%]">
        <TypeTag wine={wine} />
        <p className="mt-2 font-serif text-base leading-snug">{wine.subtitle[lang]}</p>
      </div>
    </article>
  );
}

const variants: Record<Wine["cardStyle"], (p: CardProps) => ReactNode> = {
  minimal: MinimalCard,
  catalogo: CatalogoCard,
  luminoso: LuminosoCard,
  fotografico: FotograficoCard,
  orizzontale: OrizzontaleCard,
  luxury: LuxuryCard,
  artigianale: ArtigianaleCard,
  editoriale: EditorialeCard,
};

export function WineCard(props: CardProps) {
  const Variant = variants[props.wine.cardStyle];
  return <Variant {...props} />;
}
