import { site } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

const linkCls =
  "underline decoration-cream/30 underline-offset-4 transition-colors hover:text-mustard hover:decoration-mustard";

export function Footer() {
  const { t } = useLanguage();
  const c = site.contacts;
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-vine-deep pb-28 pt-14 text-cream md:pb-12">
      <span className="absolute inset-x-0 top-0 h-1 bg-mustard" aria-hidden="true" />
      <div className="container-site grid gap-10 md:grid-cols-3">
        <div className="flex items-center gap-4 md:items-start">
          <img src={site.logoMainOnDark} alt={site.brandName} width={320} height={320} loading="lazy" className="h-16 w-16 shrink-0" />
          <div>
            <p className="font-serif text-2xl font-semibold italic leading-none">{site.brandName}</p>
            <p className="mt-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-mustard">{t.tagline}</p>
            <p className="mt-3 text-sm text-cream/65">{site.legal.vatNumber}</p>
          </div>
        </div>

        <div>
          <h2 className="eyebrow font-sans text-[0.7rem] text-mustard">{t.footer.contacts}</h2>
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
              <address className="not-italic text-cream/85">{c.address}</address>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow font-sans text-[0.7rem] text-mustard">{t.footer.legal}</h2>
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

      <div className="container-site mt-12 border-t border-cream/15 pt-6 text-xs text-cream/60">
        <p suppressHydrationWarning>
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
