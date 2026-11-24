/**
 * ============================================================
 *  CONFIGURAZIONE CENTRALE DEL SITO — modifica qui i placeholder
 * ============================================================
 * Tutti i contatti, i link e le immagini principali sono qui.
 * Le immagini stanno nella cartella /public: puoi sostituire il file
 * mantenendo lo stesso nome, oppure cambiare il percorso qui sotto.
 */

export const site = {
  brandName: "Carcioffi",

  /** LOGO CARCIOFFI (rotondo, header) — public/images/loghi/logo-carcioffi.png */
  logoMain: "/images/loghi/logo-carcioffi.png",
  /** LOGO CARCIOFFI nel footer (sfondo scuro) — stesso logo rotondo */
  logoMainOnDark: "/images/loghi/logo-carcioffi.png",
  /** LOGO COMODA BIKE — public/images/loghi/logo-comoda-bike.png */
  logoSecondary: "/images/loghi/logo-comoda-bike.png",
  /** LINK DEL LOGO COMODA BIKE — per ora vuoto: incolla qui il sito o il profilo Instagram (es. "https://...") */
  logoSecondaryUrl: "",

  /** IMMAGINE DELLA VIGNA (hero) — versione desktop e versione verticale per smartphone */
  heroImage: "/images/hero-vigna.webp",
  heroImageMobile: "/images/hero-vigna-mobile.webp",

  /** FOTO DI SFONDO DEI CONTATTI */
  contactImage: "/images/contatti-sfondo.webp",

  /** CATALOGO PDF — sostituisci public/catalogo/catalogo-vini.pdf */
  catalogPdf: "/catalogo/catalogo-vini.pdf",

  contacts: {
    /** NUMERO WHATSAPP — solo cifre con prefisso internazionale, senza "+" né spazi (es. 393331234567) */
    whatsappNumber: "39XXXXXXXXXX",
    /** Numero come viene mostrato sul sito */
    whatsappDisplay: "+39 XXX XXX XXXX",
    /** Telefono mostrato nel footer */
    phoneDisplay: "+39 XXX XXX XXXX",
    phoneHref: "tel:+39XXXXXXXXXX",
    /** EMAIL */
    email: "info@esempio.it",
    /** INSTAGRAM — nome utente e link al profilo */
    instagramHandle: "@nomeazienda",
    instagramUrl: "https://www.instagram.com/nomeazienda",
    /** INDIRIZZO */
    address: "Via di esempio 1, Comune, Italia",
    /** LINK GOOGLE MAPS (pulsante "Apri in Google Maps") — incolla qui il link di condivisione della tua sede */
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+di+esempio+1+Comune+Italia",
    /** MAPPA INCORPORATA — da Google Maps: Condividi → Incorpora una mappa → copia solo l'URL "src" */
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Via%20di%20esempio%201%2C%20Comune%2C%20Italia&output=embed",
  },

  legal: {
    vatNumber: "P.IVA 00000000000",
    privacyUrl: "#privacy-policy",
    cookieUrl: "#cookie-policy",
  },
} as const;

/** Link WhatsApp con messaggio precompilato, codificato correttamente */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.contacts.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
