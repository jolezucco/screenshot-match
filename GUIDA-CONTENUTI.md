# Guida: dove sostituire i contenuti segnaposto

| Cosa | Dove |
| --- | --- |
| Logo Carcioffi (header e footer) | `public/images/loghi/logo-carcioffi.png` |
| Logo Comoda Bike | `public/images/loghi/logo-comoda-bike.png` |
| Link del logo Comoda Bike (ora vuoto) | `src/config/site.ts` → `logoSecondaryUrl` |
| Immagine della vigna | `public/images/hero-vigna.webp` (desktop) e `public/images/hero-vigna-mobile.webp` (smartphone, verticale) |
| Testo fornito da Ale | `src/i18n/translations.ts` → `about.title` e `about.body` (IT ed EN) |
| Immagini delle 8 bottiglie | `public/images/bottiglie/` + percorso `image` di ogni vino in `src/config/wines.ts` |
| Nomi/tipologie dei vini | `src/config/wines.ts` |
| Foto di sfondo dei contatti | `public/images/contatti-sfondo.webp` |
| Catalogo PDF | `public/catalogo/catalogo-vini.pdf` |
| Numero WhatsApp | `src/config/site.ts` → `whatsappNumber` e `whatsappDisplay` |
| Email | `src/config/site.ts` → `email` |
| Instagram | `src/config/site.ts` → `instagramHandle` e `instagramUrl` |
| Indirizzo | `src/config/site.ts` → `address` |
| Link Google Maps | `src/config/site.ts` → `googleMapsUrl` (pulsante) e `googleMapsEmbedUrl` (mappa) |
| Partita IVA, Privacy, Cookie | `src/config/site.ts` → `legal` |
| Favicon | `public/favicon.svg` e `public/favicon.ico` |
| Tutti gli altri testi (IT/EN) | `src/i18n/translations.ts` |

Sostituendo un file con lo **stesso nome** non serve toccare il codice.

## Stile delle card
Ogni vino ha un `cardStyle` in `src/config/wines.ts`. Scelto lo stile definitivo, imposta lo
stesso valore per tutti e metti `SHOW_STYLE_CAPTIONS = false` in
`src/components/site/WineSelection.tsx` per togliere le didascalie "Proposta stile".
