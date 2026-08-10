import logo from "@/assets/quebramar_logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/40 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo do Quebramar Creative Studio"
            className="h-10 w-10 rounded-full object-contain"
            loading="lazy"
            width={40}
            height={40}
          />
          <div>
            <p className="font-display font-bold text-deep">Quebramar Creative Studio</p>
            <p className="text-xs text-foreground/60">{t("footer.tagline")}</p>
          </div>
        </div>

        <p className="text-xs text-foreground/60">
          © {new Date().getFullYear()} Quebramar. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};
