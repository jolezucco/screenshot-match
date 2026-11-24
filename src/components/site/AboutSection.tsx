import { useLanguage } from "@/i18n/LanguageContext";

import { Reveal } from "./Reveal";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="azienda" aria-labelledby="about-title" className="border-b border-border/60 bg-cream">
      <div className="container-site py-10 md:py-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[0.68rem] text-bordeaux">{t.about.eyebrow}</p>
          {/* TESTO FORNITO DA ALE — modifica in src/i18n/translations.ts (about.title, about.body) */}
          <h2 id="about-title" className="mt-2 text-2xl text-foreground md:text-3xl">
            {t.about.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
            {t.about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
