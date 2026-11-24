import { Download, FileText } from "lucide-react";

import { site } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

import { Reveal } from "./Reveal";

export function CatalogDownload() {
  const { t } = useLanguage();

  return (
    <Reveal className="mt-16 md:mt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-cream px-6 py-10 text-center shadow-soft md:flex-row md:gap-8 md:px-10 md:text-left">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-offwhite text-vine shadow-soft">
          <FileText className="h-8 w-8" aria-hidden="true" strokeWidth={1.4} />
        </span>
        <div className="flex-1">
          <h3 className="text-3xl">{t.catalog.title}</h3>
        </div>
        {/* CATALOGO PDF — percorso in src/config/site.ts */}
        <a
          href={site.catalogPdf}
          download
          className="group inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full border-2 border-vine bg-transparent px-6 py-3 text-sm font-semibold text-vine transition-all duration-300 hover:bg-vine hover:text-primary-foreground active:scale-[0.98]"
        >
          <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          {t.catalog.cta}
          <span className="sr-only">({t.catalog.meta})</span>
        </a>
      </div>
    </Reveal>
  );
}
