import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";

import { site, whatsappLink } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

type ContactItem = { label: string; value: string; href: string; icon: ReactNode; external?: boolean };

export function ContactSection() {
  const { t } = useLanguage();
  const c = site.contacts;

  const items: ContactItem[] = [
    { label: t.contact.whatsapp, value: c.whatsappDisplay, href: whatsappLink(t.whatsapp.message), icon: <WhatsAppIcon className="h-5 w-5" />, external: true },
    { label: t.contact.email, value: c.email, href: `mailto:${c.email}`, icon: <Mail className="h-5 w-5" aria-hidden="true" strokeWidth={1.7} /> },
    { label: t.contact.instagram, value: c.instagramHandle, href: c.instagramUrl, icon: <InstagramIcon className="h-5 w-5" />, external: true },
    { label: t.contact.address, value: c.address, href: c.googleMapsUrl, icon: <MapPin className="h-5 w-5" aria-hidden="true" strokeWidth={1.7} />, external: true },
  ];

  return (
    <section id="contatti" aria-labelledby="contact-title" className="relative isolate overflow-hidden">
      {/* FOTO DI SFONDO DEI CONTATTI — percorso in src/config/site.ts */}
      <img
        src={site.contactImage}
        alt={t.contact.imageAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="bg-contact-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-site py-16 md:py-24">
        <Reveal className="mx-auto max-w-xl text-center text-on-photo">
          <p className="eyebrow text-mustard">{t.contact.eyebrow}</p>
          <h2 id="contact-title" className="mt-3 text-4xl md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-on-photo/85 md:text-lg">{t.contact.subtitle}</p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-offwhite shadow-lift md:mt-14">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <ul className="divide-y divide-border/80 p-2 sm:p-4">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-[4.75rem] items-center gap-4 rounded-2xl px-3 py-3 transition-colors duration-300 hover:bg-cream"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard/25 text-vine-deep transition-colors duration-300 group-hover:bg-mustard">
                      {item.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block break-words font-serif text-xl leading-snug text-anthracite md:text-[1.4rem]">
                        {item.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bordeaux"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col border-t border-border/80 lg:border-l lg:border-t-0">
              {/* MAPPA GOOGLE — URL in src/config/site.ts (googleMapsEmbedUrl) */}
              <iframe
                src={site.contacts.googleMapsEmbedUrl}
                title={t.contact.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full flex-1 border-0 lg:aspect-auto lg:min-h-[20rem]"
              />
              <a
                href={site.contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-center gap-2 bg-vine-deep px-6 py-4 text-sm font-semibold text-on-photo transition-colors duration-300 hover:bg-vine"
              >
                <MapPin className="h-4 w-4 text-mustard" aria-hidden="true" />
                {t.contact.openMaps}
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
