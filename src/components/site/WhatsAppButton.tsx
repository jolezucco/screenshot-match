import { whatsappLink } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={whatsappLink(t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      title={t.whatsapp.label}
      className="safe-bottom fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-float transition-all duration-300 hover:scale-105 hover:shadow-lift active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
