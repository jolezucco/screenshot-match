import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { WineSelection } from "@/components/site/WineSelection";
import { LanguageProvider } from "@/i18n/LanguageContext";

const TITLE = "Vendita Vini | Vini autentici del territorio";
const DESCRIPTION =
  "Scopri la nostra selezione di vini, scarica il catalogo e contattaci per informazioni e visite.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div id="top">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <WineSelection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
