import { useLanguage } from "@/i18n/LanguageContext";

import { HillsOrnament, VineOrnament } from "./icons";
import { Reveal } from "./Reveal";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="azienda" aria-labelledby="about-title" className="relative overflow-hidden bg-cream">
      <div className="container-site py-20 text-center md:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow text-bordeaux">{t.about.eyebrow}</p>
          <VineOrnament className="mx-auto mt-5 h-8 w-36 text-vine" />
          {/* TESTO FORNITO DA ALE — modifica in src/i18n/translations.ts (about.title, about.body) */}
          <h2 id="about-title" className="mt-5 text-4xl text-foreground md:text-5xl">
            {t.about.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[38ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.about.body}
          </p>
        </Reveal>
      </div>
      <HillsOrnament className="pointer-events-none block h-14 w-full text-sage md:h-20" />
    </section>
  );
}
