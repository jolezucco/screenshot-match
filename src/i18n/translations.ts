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
    tagline: "Vini e spumanti",
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
      body: "Descrizione che ci manderai!🤙🤙",
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
    labels: {
      eyebrow: "Etichette personalizzate",
      title: "Un vino con la tua etichetta",
      body: "Per matrimoni, battesimi, anniversari e ricorrenze speciali realizziamo etichette personalizzate con nomi, date e dediche: un regalo originale che racconta il vostro momento.",
      imageAlt: "Bottiglie di vino con etichette personalizzate per eventi speciali",
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
    wineDetail: {
      backToWines: "Torna ai vini",
      sparklingIconLabel: "Frizzantezza del vino",
      technicalTitle: "Informazioni tecniche",
      servingTemp: "Temperatura di servizio",
      alcohol: "Alcol",
      grapes: "Uvaggi",
      sensoryTitle: "Profilo sensoriale",
      sensoryScaleHint: "Scala da 1 a 4",
      sensoryLabels: {
        sweetness: "Dolcezza",
        acidity: "Acidità",
        fruitiness: "Fruttato",
        body: "Corpo",
        aroma: "Profumo",
      },
      pairingsTitle: "Abbinamenti",
      buyTitle: "Come acquistare",
      buyText: "Per conoscere disponibilità, modalità di spedizione e prezzi, contattami direttamente su WhatsApp.",
      buyCta: "Contattami su WhatsApp",
      downloadSheet: "Scarica la scheda del vino",
    },
  },
  en: {
    langLabel: "Select language",
    tagline: "Wines and sparkling wines",
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
    labels: {
      eyebrow: "Custom labels",
      title: "A wine with your own label",
      body: "For weddings, christenings, anniversaries and special occasions we create personalised labels with names, dates and dedications: an original gift that tells your story.",
      imageAlt: "Wine bottles with custom labels for special events",
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
    wineDetail: {
      backToWines: "Back to wines",
      sparklingIconLabel: "Wine effervescence",
      technicalTitle: "Technical information",
      servingTemp: "Serving temperature",
      alcohol: "Alcohol",
      grapes: "Grape varieties",
      sensoryTitle: "Sensory profile",
      sensoryScaleHint: "Scale from 1 to 4",
      sensoryLabels: {
        sweetness: "Sweetness",
        acidity: "Acidity",
        fruitiness: "Fruitiness",
        body: "Body",
        aroma: "Aroma",
      },
      pairingsTitle: "Pairings",
      buyTitle: "How to buy",
      buyText: "To find out about availability, shipping and prices, contact me directly on WhatsApp.",
      buyCta: "Contact me on WhatsApp",
      downloadSheet: "Download the wine sheet",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Lang];
