import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, Flame, Percent, Sparkles, Thermometer, Utensils, Wine as WineIcon } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { SensoryRadarChart } from "@/components/site/SensoryRadarChart";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SparklingGlassIcon, WhatsAppIcon } from "@/components/site/icons";
import { site, whatsappLink } from "@/config/site";
import { wines } from "@/config/wines";
import { useLanguage } from "@/i18n/LanguageContext";

function findWineWithDetail(wineId: string) {
  const wine = wines.find((w) => w.id === wineId);
  if (!wine?.detail) return undefined;
  return { wine, detail: wine.detail };
}

export const Route = createFileRoute("/vini/$wineId")({
  loader: ({ params }) => {
    const found = findWineWithDetail(params.wineId);
    if (!found) throw notFound();
    return found;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Vino non trovato — Carcioffi" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.wine.name} — ${site.brandName} Vini e Spumanti`;
    const description = loaderData.detail.description.it;
    const url = `/vini/${params.wineId}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: WineDetailPage,
});

function WineDetailPage() {
  const { wine, detail } = Route.useLoaderData();
  const { lang, t } = useLanguage();
  const wd = t.wineDetail;

  const waHref = whatsappLink(detail.whatsappMessage[lang]);

  return (
    <div id="top">
      <Header />

      <main className="bg-background pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="container-site">
          {/* 1. Navigazione */}
          <nav aria-label={wd.backToWines}>
            <Link
              to="/"
              hash="selezione"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-bordeaux/50 hover:text-bordeaux"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {wd.backToWines}
            </Link>
          </nav>

          {/* 2. Sezione principale */}
          <section aria-labelledby="wine-detail-title" className="mt-8 grid items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-14">
            {/* Colonna sinistra: foto frontale della bottiglia */}
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-cream p-8 shadow-soft md:aspect-auto md:h-[34rem] md:p-12">
              <img
                src={wine.image}
                alt={wine.alt[lang]}
                width={240}
                height={720}
                className="h-full max-h-[26rem] w-auto object-contain md:max-h-[29rem]"
              />
            </div>

            {/* Colonna destra: icona bicchiere, tipo, titolo, descrizione */}
            <div>
              <div className="inline-flex items-center gap-2.5 text-bordeaux">
                <SparklingGlassIcon
                  className="h-5 w-5 shrink-0"
                  role="img"
                  aria-label={wd.sparklingIconLabel}
                />
                <span className="eyebrow">{detail.wineTypeLabel[lang]}</span>
              </div>

              <h1 id="wine-detail-title" className="mt-4 text-5xl text-foreground md:text-6xl">
                {wine.name}
              </h1>

              <p className="mt-2 font-serif text-xl italic text-muted-foreground md:text-2xl">
                {detail.shortDescription[lang]}
              </p>

              <p className="mt-6 text-base leading-relaxed text-foreground/90 md:text-lg">
                {detail.description[lang]}
              </p>
            </div>
          </section>

          {/* 3. Informazioni tecniche + 4. Profilo sensoriale */}
          <section className="mt-16 grid gap-8 md:mt-24 md:grid-cols-2 md:gap-10">
            <Reveal className="rounded-3xl border border-border bg-cream p-6 shadow-soft md:p-8">
              <h2 className="text-3xl text-foreground">{wd.technicalTitle}</h2>

              <dl className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-offwhite p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <Thermometer className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                    {wd.servingTemp}
                  </dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">{detail.servingTemp}</dd>
                </div>
                <div className="rounded-2xl bg-offwhite p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <Percent className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                    {wd.alcohol}
                  </dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">{detail.alcohol}</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-border pt-6">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {wd.grapes}
                </h3>
                <ul className="mt-4 space-y-3">
                  {detail.grapes.map((grape) => (
                    <li key={grape.name}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="font-medium text-foreground">{grape.name}</span>
                        <span className="tabular-nums text-muted-foreground">{grape.percentage}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-offwhite">
                        <div
                          className="h-full rounded-full bg-bordeaux/75"
                          style={{ width: `${grape.percentage}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={90} className="rounded-3xl border border-border bg-cream p-6 shadow-soft md:p-8">
              <h2 className="text-3xl text-foreground">{wd.sensoryTitle}</h2>
              <div className="mt-4">
                <SensoryRadarChart profile={detail.sensory} />
              </div>
            </Reveal>
          </section>

          {/* 5. Abbinamenti */}
          <Reveal as="section" className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft md:mt-12 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl text-foreground">{wd.pairingsTitle}</h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                  {detail.pairings[lang]}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3 text-bordeaux/80" aria-hidden="true">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                  <Utensils className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                  <Flame className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                  <WineIcon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                  <Sparkles className="h-4 w-4" strokeWidth={1.6} />
                </span>
              </div>
            </div>
          </Reveal>

          {/* 6. Come acquistare & 7. Download della scheda */}
          <Reveal
            as="section"
            className="mt-10 rounded-3xl border border-border bg-cream px-6 py-10 text-center shadow-soft md:mt-12 md:px-10 md:py-12"
          >
            <h2 className="text-3xl text-foreground md:text-4xl">{wd.buyTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground md:text-lg">
              {wd.buyText}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-float transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                {wd.buyCta}
              </a>

              <a
                href={detail.techSheetPdf}
                download
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full border-2 border-vine bg-transparent px-6 py-3 text-sm font-semibold text-vine transition-all duration-300 hover:bg-vine hover:text-primary-foreground active:scale-[0.98] sm:w-auto"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                {wd.downloadSheet}
              </a>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}