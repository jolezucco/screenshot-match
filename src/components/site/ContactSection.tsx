import { ExternalLink, Mail, MapPin } from "lucide-react";
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

      <div className="container-site py-20 text-on-photo md:py-28">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-gold">{t.contact.eyebrow}</p>
          <h2 id="contact-title" className="mt-4 text-4xl md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-on-photo/85">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <Reveal as="ul" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex min-h-16 items-center gap-4 rounded-2xl border border-on-photo/20 bg-overlay/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-on-photo/45 hover:bg-overlay/60 active:scale-[0.99]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-offwhite text-vine transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow block text-[0.68rem] text-on-photo/70">{item.label}</span>
                    <span className="block break-words font-medium underline decoration-on-photo/40 underline-offset-4 group-hover:decoration-on-photo">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-on-photo/20 bg-cream shadow-lift">
              {/* MAPPA GOOGLE — URL in src/config/site.ts (googleMapsEmbedUrl) */}
              <iframe
                src={site.contacts.googleMapsEmbedUrl}
                title={t.contact.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full border-0 md:aspect-[16/10]"
              />
            </div>
            <a
              href={site.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-anthracite shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream active:translate-y-0"
            >
              <MapPin className="h-4 w-4 text-bordeaux" aria-hidden="true" />
              {t.contact.openMaps}
              <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
