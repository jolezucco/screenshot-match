/**
 * ============================================================
 *  TESTI DEL SITO (IT / EN)
 * ============================================================
 * Qui trovi tutti i testi visibili. Modifica le stringhe mantenendo le chiavi.
 * Il "TESTO FORNITO DA ALE" va in about.title e about.body.
 */

export type Lang = "it" | "en";

export const translations = {
  it: {
    langLabel: "Seleziona la lingua",
    tagline: "Vendita vini",
    secondaryLogoLabel: "Comoda Bike",
    hero: {
      eyebrow: "Carcioffi · Vendita vini",
      title: "Vini autentici del territorio",
      cta: "Scopri i nostri vini",
      scrollHint: "Scorri verso il basso",
      scrollLabel: "Scorri",
      imageAlt: "Filari di vigna sulle colline, con la casa dell’azienda sullo sfondo",
    },
    about: {
      eyebrow: "La nostra storia",
      // TESTO FORNITO DA ALE — titolo
      title: "Titolo",
      // TESTO FORNITO DA ALE — testo
      body: "Il testo racconterà la storia dell’azienda, il legame con il territorio, la produzione e la filosofia alla base della selezione dei vini.",
    },
    wines: {
      eyebrow: "I vini",
      title: "La nostra selezione",
      types: { rosso: "Rosso", bianco: "Bianco", rosato: "Rosato", passito: "Passito" },
      styleNote: "Proposta stile",
    },
    catalog: {
      title: "Il catalogo completo",
      cta: "Scarica il catalogo PDF",
      meta: "PDF",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Vieni a trovarci",
      subtitle: "Contattaci per conoscere i nostri vini o per organizzare una visita.",
      whatsapp: "WhatsApp",
      email: "Email",
      instagram: "Instagram",
      address: "Indirizzo",
      openMaps: "Apri in Google Maps",
      mapTitle: "Mappa con la posizione dell’azienda",
      imageAlt: "Grappoli di uva nera tra le foglie della vigna",
    },
    footer: {
      rights: "Vendita Vini. Tutti i diritti riservati.",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      contacts: "Contatti",
      legal: "Informazioni",
    },
    whatsapp: {
      label: "Contattaci su WhatsApp",
      message: "Buongiorno, vorrei ricevere maggiori informazioni sui vostri vini.",
    },
  },
  en: {
    langLabel: "Select language",
    tagline: "Wine shop",
    secondaryLogoLabel: "Comoda Bike",
    hero: {
      eyebrow: "Carcioffi · Wine shop",
      title: "Authentic wines from our land",
      cta: "Discover our wines",
      scrollHint: "Scroll down",
      scrollLabel: "Scroll",
      imageAlt: "Vineyard rows on the hills, with the estate house in the background",
    },
    about: {
      eyebrow: "Our story",
      title: "Title",
      body: "This text will tell the story of the estate, its bond with the land, the way we produce and the philosophy behind our selection of wines.",
    },
    wines: {
      eyebrow: "The wines",
      title: "Our selection",
      types: { rosso: "Red", bianco: "White", rosato: "Rosé", passito: "Passito" },
      styleNote: "Style option",
    },
    catalog: {
      title: "The full catalogue",
      cta: "Download the PDF catalogue",
      meta: "PDF",
    },
    contact: {
      eyebrow: "Contact",
      title: "Come and visit us",
      subtitle: "Get in touch to discover our wines or to arrange a visit.",
      whatsapp: "WhatsApp",
      email: "Email",
      instagram: "Instagram",
      address: "Address",
      openMaps: "Open in Google Maps",
      mapTitle: "Map showing the estate location",
      imageAlt: "Bunches of black grapes among the vine leaves",
    },
    footer: {
      rights: "Vendita Vini. All rights reserved.",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      contacts: "Contact",
      legal: "Information",
    },
    whatsapp: {
      label: "Contact us on WhatsApp",
      message: "Hello, I would like to receive more information about your wines.",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Lang];
