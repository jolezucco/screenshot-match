import { useLanguage } from "@/i18n/LanguageContext";

import { Reveal } from "./Reveal";

/**
 * Sezione "Etichette personalizzate" — sotto il catalogo.
 * FOTO: collage di etichette d'epoca (ritagliato in 4:5 per la card).
 * Per cambiarla basta sostituire public/images/etichette/etichette-personalizzate.webp
 * con un'altra immagine dello stesso formato.
 */
const LABELS_IMAGE = "/images/etichette/etichette-personalizzate.webp";

export function CustomLabels() {
  const { t } = useLanguage();

  return (
    <section id="etichette" aria-labelledby="labels-title" className="bg-cream py-20 md:py-28">
      <div className="container-site">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="eyebrow text-bordeaux">{t.labels.eyebrow}</p>
            <h2 id="labels-title" className="mt-4 text-4xl md:text-5xl">
              {t.labels.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{t.labels.body}</p>
          </Reveal>

          <Reveal delay={120}>
            {/* FOTO TIPI DI ETICHETTE — percorso in cima a questo file */}
            <img
              src={LABELS_IMAGE}
              alt={t.labels.imageAlt}
              loading="lazy"
              decoding="async"
              width={495}
              height={619}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft md:mx-auto md:max-w-sm"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
