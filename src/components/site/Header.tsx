import { useEffect, useState } from "react";

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

  const secondaryLogo = (
    <img
      src={site.logoSecondary}
      alt="Comoda Bike"
      width={170}
      height={48}
      className={cn(
        "h-auto w-[4.5rem] transition-all duration-500 min-[380px]:w-20 md:w-32",
        compact && "md:w-28",
      )}
    />
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-500",
        compact
          ? "border-border/70 bg-offwhite/90 shadow-soft backdrop-blur-md"
          : "border-transparent bg-offwhite",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between gap-3 transition-all duration-500 md:grid md:grid-cols-3",
          compact ? "py-1.5" : "py-2.5 md:py-4",
        )}
      >
        {/* Logo principale + "Vendita vini" */}
        <a href="#top" className="flex min-w-0 flex-col items-start leading-none" aria-label={`${site.brandName} — ${t.tagline}`}>
          <img
            src={site.logoMain}
            alt={site.brandName}
            width={230}
            height={60}
            className={cn(
              "h-auto transition-all duration-500",
              compact ? "w-28 md:w-36" : "w-32 min-[380px]:w-36 md:w-44",
            )}
          />
          <span
            className={cn(
              "eyebrow mt-0.5 whitespace-nowrap pl-[26%] text-[0.62rem] text-vine transition-all duration-500 md:text-[0.68rem]",
              compact && "md:text-[0.62rem]",
            )}
          >
            {t.tagline}
          </span>
        </a>

        {/* Logo secondario (centrato su desktop) */}
        <div className="flex items-center gap-2 md:justify-self-center">
          {site.logoSecondaryUrl ? (
            <a href={site.logoSecondaryUrl} target="_blank" rel="noopener noreferrer">
              {secondaryLogo}
            </a>
          ) : (
            secondaryLogo
          )}
        </div>

        <div className="md:justify-self-end">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
