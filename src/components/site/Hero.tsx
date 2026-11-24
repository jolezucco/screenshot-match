import { ChevronDown } from "lucide-react";

import { site } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[82svh] items-end overflow-hidden md:min-h-[88svh]"
    >
      {/* IMMAGINE DELLA VIGNA — percorsi in src/config/site.ts */}
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 768px)" srcSet={site.heroImage} />
        <img
          src={site.heroImageMobile}
          alt={t.hero.imageAlt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-site pb-32 pt-24 text-on-photo md:pb-28">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 text-on-photo/85 duration-700">
          {t.hero.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="mt-3 max-w-[14ch] text-[2.6rem] leading-[1.02] animate-in fade-in slide-in-from-bottom-3 duration-1000 min-[380px]:text-5xl md:text-7xl"
        >
          {t.hero.title}
        </h1>
        <a
          href="#selezione"
          className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-offwhite px-7 py-3 text-sm font-semibold tracking-wide text-anthracite shadow-lift transition-all duration-300 animate-in fade-in hover:-translate-y-0.5 hover:bg-cream active:translate-y-0 active:scale-[0.98]"
        >
          {t.hero.cta}
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
        </a>
      </div>

      {/* Indicatore di scorrimento: una linea sottile con una luce che scende */}
      <a
        href="#azienda"
        className="group absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 px-4 pb-4 text-on-photo/75 hover:text-on-photo"
        aria-label={t.hero.scrollHint}
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em]" aria-hidden="true">
          {t.hero.scrollLabel}
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-on-photo/25" aria-hidden="true">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-mustard to-on-photo animate-scroll-line" />
        </span>
      </a>
    </section>
  );
}
