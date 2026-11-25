/**
 * ============================================================
 *  I VINI — un unico elenco, nessun codice duplicato
 * ============================================================
 * Per ogni vino puoi cambiare:
 *  - name: nome della bottiglia
 *  - subtitle: nome/tipologia del vino (IT / EN)
 *  - type: "rosso" | "bianco" | "rosato" | "passito"
 *  - image: IMMAGINE DELLA BOTTIGLIA (cartella public/images/bottiglie)
 *  - alt: testo alternativo (IT / EN)
 *  - cardStyle: stile grafico della card (vedi WineCard.tsx)
 *
 * Quando avrai scelto lo stile definitivo, imposta lo stesso cardStyle per tutti.
 */

export type WineType = "rosso" | "bianco" | "rosato" | "passito";

export type CardStyle =
  | "minimal"
  | "catalogo"
  | "lino"
  | "salvia"
  | "sabbia"
  | "nicchia"
  | "pietra"
  | "cerchio";

export type Localized = { it: string; en: string };

export type GrapeVariety = {
  name: string;
  percentage: number;
};

export type SensoryProfile = {
  sweetness: number;
  acidity: number;
  fruitiness: number;
  body: number;
  aroma: number;
};

export type WineDetail = {
  wineTypeLabel: Localized;
  shortDescription: Localized;
  description: Localized;
  servingTemp: string;
  alcohol: string;
  grapes: GrapeVariety[];
  sensory: SensoryProfile;
  pairings: Localized;
  whatsappMessage: Localized;
  /** SCHEDA TECNICA PDF — sostituisci il file in public/schede/ */
  techSheetPdf: string;
};

export type Wine = {
  id: string;
  name: string;
  subtitle: Localized;
  type: WineType;
  image: string;
  alt: Localized;
  cardStyle: CardStyle;
  detail?: WineDetail;
};

const subtitlePlaceholder: Localized = {
  it: "Nome o tipologia del vino",
  en: "Wine name or variety",
};

const bottle = (file: string) => `/images/bottiglie/${file}`;

export const wines: Wine[] = [
  {
    id: "prima-luna",
    name: "Prima Luna",
    subtitle: subtitlePlaceholder,
    type: "rosso",
    image: bottle("bottiglia-rosso.webp"),
    alt: { it: "Bottiglia di Prima Luna, vino rosso", en: "Bottle of Prima Luna, red wine" },
    cardStyle: "lino",
  },
  {
    id: "corla",
    name: "Corla",
    subtitle: subtitlePlaceholder,
    type: "rosso",
    image: bottle("bottiglia-rosso.webp"),
    alt: { it: "Bottiglia di Corla, vino rosso", en: "Bottle of Corla, red wine" },
    cardStyle: "lino",
  },
  {
    id: "bianco-perla",
    name: "Bianco Perla",
    subtitle: subtitlePlaceholder,
    type: "bianco",
    image: bottle("bottiglia-bianco.webp"),
    alt: { it: "Bottiglia di Bianco Perla, vino bianco", en: "Bottle of Bianco Perla, white wine" },
    cardStyle: "lino",
  },
  {
    id: "carciofino",
    name: "Carciofino",
    subtitle: subtitlePlaceholder,
    type: "bianco",
    image: bottle("bottiglia-bianco.webp"),
    alt: { it: "Bottiglia di Carciofino, vino bianco", en: "Bottle of Carciofino, white wine" },
    cardStyle: "lino",
  },
  {
    id: "robi",
    name: "Robi",
    subtitle: { it: "Vino rosso spumante dry", en: "Dry sparkling red wine" },
    type: "rosso",
    image: bottle("bottiglia-rosso.webp"),
    alt: { it: "Bottiglia di Robi, vino rosso spumante dry", en: "Bottle of Robi, dry sparkling red wine" },
    cardStyle: "lino",
    detail: {
      wineTypeLabel: { it: "Vino rosso", en: "Red wine" },
      shortDescription: { it: "Vino rosso spumante dry", en: "Dry sparkling red wine" },
      description: {
        it: "Robi è un vino rosso spumante dry dal carattere vivace e piacevolmente fruttato. Le sue bollicine accompagnano profumi intensi e un corpo equilibrato, creando un sorso fresco e versatile. È ideale per momenti conviviali, aperitivi e abbinamenti con piatti saporiti della tradizione.",
        en: "Robi is a dry sparkling red wine with a lively, pleasantly fruity character. Its bubbles accompany intense aromas and a balanced body, creating a fresh and versatile sip. Ideal for convivial moments, aperitifs and pairings with savoury traditional dishes.",
      },
      servingTemp: "10–12 °C",
      alcohol: "12% vol",
      grapes: [
        { name: "Croatina", percentage: 30 },
        { name: "Barbera", percentage: 25 },
        { name: "Ervi", percentage: 40 },
        { name: "Ancellotta", percentage: 5 },
      ],
      sensory: {
        sweetness: 4,
        acidity: 1,
        fruitiness: 3,
        body: 3,
        aroma: 3,
      },
      pairings: {
        it: "Ideale con salumi, formaggi stagionati, primi piatti saporiti, carni rosse e aperitivi della tradizione.",
        en: "Ideal with cured meats, aged cheeses, savoury pasta dishes, red meats and traditional aperitifs.",
      },
      whatsappMessage: {
        it: "Ciao, vorrei ricevere informazioni su disponibilità, spedizione e prezzo del vino Robi.",
        en: "Hello, I would like to receive information about availability, shipping and price of Robi wine.",
      },
      techSheetPdf: "/schede/scheda-robi.pdf",
    },
  },
  {
    id: "generale",
    name: "Generale",
    subtitle: subtitlePlaceholder,
    type: "rosso",
    image: bottle("bottiglia-rosso.webp"),
    alt: { it: "Bottiglia di Generale, vino rosso", en: "Bottle of Generale, red wine" },
    cardStyle: "lino",
  },
  {
    id: "punto-fermo",
    name: "Punto Fermo",
    subtitle: subtitlePlaceholder,
    type: "bianco",
    image: bottle("bottiglia-bianco.webp"),
    alt: { it: "Bottiglia di Punto Fermo, vino bianco", en: "Bottle of Punto Fermo, white wine" },
    cardStyle: "lino",
  },
  {
    id: "passito",
    name: "Passito",
    subtitle: subtitlePlaceholder,
    type: "passito",
    image: bottle("bottiglia-passito.webp"),
    alt: { it: "Bottiglia di Passito, vino passito", en: "Bottle of Passito, dessert wine" },
    cardStyle: "lino",
  },
];
