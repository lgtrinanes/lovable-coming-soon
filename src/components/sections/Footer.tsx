import logo from "@/assets/quebramar_logo.png.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/40 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Quebramar Creative Studio"
            className="h-20 w-auto object-contain"
            loading="lazy"
            width={105}
            height={80}
          />
          <div>
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
