import { site } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

const linkCls =
  "underline decoration-anthracite-foreground/30 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold";

export function Footer() {
  const { t } = useLanguage();
  const c = site.contacts;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite pb-28 pt-14 text-anthracite-foreground md:pb-12">
      <div className="container-site grid gap-10 md:grid-cols-3">
        <div>
          <img src={site.logoMainOnDark} alt={site.brandName} width={230} height={60} loading="lazy" className="h-auto w-40" />
          <p className="eyebrow mt-2 text-[0.68rem] text-gold">{t.tagline}</p>
          <p className="mt-4 text-sm text-anthracite-foreground/70">{site.legal.vatNumber}</p>
        </div>

        <div>
          <h2 className="eyebrow font-sans text-[0.7rem] text-anthracite-foreground/60">{t.footer.contacts}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a className={linkCls} href={c.phoneHref}>{c.phoneDisplay}</a>
            </li>
            <li>
              <a className={linkCls} href={`mailto:${c.email}`}>{c.email}</a>
            </li>
            <li>
              <a className={linkCls} href={c.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram {c.instagramHandle}
              </a>
            </li>
            <li>
              <address className="not-italic text-anthracite-foreground/85">{c.address}</address>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow font-sans text-[0.7rem] text-anthracite-foreground/60">{t.footer.legal}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a className={linkCls} href={site.legal.privacyUrl}>{t.footer.privacy}</a>
            </li>
            <li>
              <a className={linkCls} href={site.legal.cookieUrl}>{t.footer.cookie}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 border-t border-anthracite-foreground/15 pt-6 text-xs text-anthracite-foreground/60">
        <p suppressHydrationWarning>
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
