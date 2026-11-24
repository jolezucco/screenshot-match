import { useEffect, useState, type MouseEvent } from "react";

import { site } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Link del logo Comoda Bike: se in site.ts è vuoto, il logo resta cliccabile ma non apre nulla
  const bikeUrl = site.logoSecondaryUrl;
  const bikeLinkProps = bikeUrl
    ? { href: bikeUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href: "#", onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault() };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-500",
        compact
          ? "border-border/70 bg-offwhite/92 shadow-soft backdrop-blur-md"
          : "border-transparent bg-offwhite",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[80rem] items-center justify-between gap-2 px-4 transition-all duration-500 min-[380px]:px-5 md:px-8",
          compact ? "py-1.5 md:py-2" : "py-2.5 md:py-3.5",
        )}
      >
        {/* LOGO CARCIOFFI + "Vendita vini" — logo in src/config/site.ts */}
        <a href="#top" className="flex min-w-0 items-center gap-2 md:gap-3.5" aria-label={`${site.brandName} — ${t.tagline}`}>
          <img
            src={site.logoMain}
            alt=""
            width={320}
            height={320}
            className={cn(
              "h-10 w-10 shrink-0 transition-all duration-500 min-[380px]:h-11 min-[380px]:w-11",
              compact ? "md:h-12 md:w-12" : "md:h-16 md:w-16",
            )}
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-serif text-[1.3rem] font-semibold italic text-anthracite min-[380px]:text-[1.45rem] md:text-[1.9rem]">
              {site.brandName}
            </span>
            <span className="mt-1 flex items-center gap-2 whitespace-nowrap text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-mustard-deep min-[380px]:text-[0.58rem] min-[380px]:tracking-[0.26em] md:text-[0.68rem] md:tracking-[0.32em]">
              <span className="hidden h-px w-5 bg-mustard md:block" aria-hidden="true" />
              {t.tagline}
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2 min-[380px]:gap-3 md:gap-5">
          {/* LOGO COMODA BIKE — immagine cliccabile, link in src/config/site.ts */}
          <a
            {...bikeLinkProps}
            aria-label={t.secondaryLogoLabel}
            className="shrink-0 rounded-full transition-transform duration-500 hover:-rotate-6 hover:scale-105"
          >
            <img
              src={site.logoSecondary}
              alt={t.secondaryLogoLabel}
              width={320}
              height={312}
              className={cn(
                "h-10 w-10 object-contain transition-all duration-500 min-[380px]:h-11 min-[380px]:w-11",
                compact ? "md:h-14 md:w-14" : "md:h-[4.5rem] md:w-[4.5rem]",
              )}
            />
          </a>
          <span className="hidden h-8 w-px bg-border md:block" aria-hidden="true" />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
