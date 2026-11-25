import { describe, expect, it } from "vitest";

import { site, whatsappLink } from "@/config/site";
import { wines } from "@/config/wines";
import { translations } from "@/i18n/translations";

describe("WhatsApp link", () => {
  it("points to the configured number with the Italian message correctly encoded", () => {
    const link = whatsappLink(translations.it.whatsapp.message);
    expect(link.startsWith(`https://wa.me/${site.contacts.whatsappNumber}?text=`)).toBe(true);
    const text = new URL(link).searchParams.get("text");
    expect(text).toBe("Buongiorno, vorrei ricevere maggiori informazioni sui vostri vini.");
    expect(link).not.toContain(" ");
  });
});

describe("Wine selection", () => {
  it("lists the eight wines in the requested order", () => {
    expect(wines.map((w) => w.name)).toEqual([
      "Prima Luna",
      "Corla",
      "Bianco Perla",
      "Carciofino",
      "Robi",
      "Generale",
      "Punto Fermo",
      "Passito",
    ]);
  });

  it("uses the chosen 'lino' style for every card", () => {
    expect(wines.every((w) => w.cardStyle === "lino")).toBe(true);
  });

  it("includes Robi detail data with grapes summing to 100% and sensory values in 1-4", () => {
    const robi = wines.find((w) => w.id === "robi");
    expect(robi?.detail).toBeDefined();
    const detail = robi?.detail;
    expect(detail?.servingTemp).toBe("10–12 °C");
    expect(detail?.alcohol).toBe("12% vol");
    expect(detail?.grapes.reduce((sum, g) => sum + g.percentage, 0)).toBe(100);
    expect(detail?.sensory).toEqual({
      sweetness: 4,
      acidity: 1,
      fruitiness: 3,
      body: 3,
      aroma: 3,
    });
    const wa = whatsappLink(detail?.whatsappMessage.it ?? "");
    expect(new URL(wa).searchParams.get("text")).toBe(
      "Ciao, vorrei ricevere informazioni su disponibilità, spedizione e prezzo del vino Robi.",
    );
  });
});
