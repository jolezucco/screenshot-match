import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const LANGS: Lang[] = ["it", "en"];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langLabel}
      className="flex shrink-0 items-center rounded-full border border-border bg-card p-0.5 shadow-soft"
    >
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={code === "it" ? "Italiano" : "English"}
            onClick={() => setLang(code)}
            className={cn(
              "inline-flex h-10 min-w-11 items-center justify-center rounded-full px-2.5 text-xs font-semibold tracking-[0.14em] transition-colors duration-300",
              active
                ? "bg-vine text-primary-foreground"
                : "text-muted-foreground hover:bg-cream hover:text-foreground",
            )}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
