import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/quebramar_logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const links = [
  { href: "#assets", key: "nav.assets" },
  { href: "#portfolio", key: "nav.portfolio" },
  { href: "#about", key: "nav.about" },
  { href: "#contact", key: "nav.contact" },
] as const;

export const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2" aria-label="Quebramar Creative Studio">
          <img
            src={logo}
            alt="Logo do Quebramar Creative Studio"
            className="h-10 w-10 rounded-full object-contain"
            width={40}
            height={40}
          />
          <span className="font-display text-lg font-bold tracking-tight text-deep">Quebramar</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {t(l.key)}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="rounded-md p-2 text-foreground/80 transition-colors hover:bg-secondary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-6 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {t(l.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const LangToggle = ({
  lang,
  setLang,
}: {
  lang: "pt" | "en";
  setLang: (l: "pt" | "en") => void;
}) => (
  <div className="flex items-center rounded-full border border-border bg-card/60 p-0.5 text-xs font-semibold">
    {(["pt", "en"] as const).map((l) => (
      <button
        key={l}
        onClick={() => setLang(l)}
        aria-pressed={lang === l}
        className={cn(
          "rounded-full px-2.5 py-1 uppercase transition-colors",
          lang === l ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-primary",
        )}
      >
        {l}
      </button>
    ))}
  </div>
);
