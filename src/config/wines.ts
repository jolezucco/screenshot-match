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

export type Wine = {
  id: string;
  name: string;
  subtitle: Localized;
  type: WineType;
  image: string;
  alt: Localized;
  cardStyle: CardStyle;
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
    cardStyle: "minimal",
  },
  {
    id: "corla",
    name: "Corla",
    subtitle: subtitlePlaceholder,
    type: "rosso",
    image: bottle("bottiglia-rosso.webp"),
    alt: { it: "Bottiglia di Corla, vino rosso", en: "Bottle of Corla, red wine" },
    cardStyle: "catalogo",
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
    cardStyle: "salvia",
  },
  {
    id: "robi",
    name: "Robi",
    subtitle: subtitlePlaceholder,
    type: "rosato",
    image: bottle("bottiglia-rosato.webp"),
    alt: { it: "Bottiglia di Robi, vino rosato", en: "Bottle of Robi, rosé wine" },
    cardStyle: "sabbia",
  },
  {
    id: "generale",
    name: "Generale",
    subtitle: subtitlePlaceholder,
    type: "rosso",
    image: bottle("bottiglia-rosso.webp"),
    alt: { it: "Bottiglia di Generale, vino rosso", en: "Bottle of Generale, red wine" },
    cardStyle: "nicchia",
  },
  {
    id: "punto-fermo",
    name: "Punto Fermo",
    subtitle: subtitlePlaceholder,
    type: "bianco",
    image: bottle("bottiglia-bianco.webp"),
    alt: { it: "Bottiglia di Punto Fermo, vino bianco", en: "Bottle of Punto Fermo, white wine" },
    cardStyle: "pietra",
  },
  {
    id: "passito",
    name: "Passito",
    subtitle: subtitlePlaceholder,
    type: "passito",
    image: bottle("bottiglia-passito.webp"),
    alt: { it: "Bottiglia di Passito, vino passito", en: "Bottle of Passito, dessert wine" },
    cardStyle: "cerchio",
  },
];
