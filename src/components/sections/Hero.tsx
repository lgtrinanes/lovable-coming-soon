import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/quebramar_logo.jpg";
import { WaveDivider } from "@/components/WaveDivider";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-sea px-6 pt-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-3"
      >
        <img
          src={logo}
          alt="Quebramar Creative Studio"
          className="h-56 w-56 object-contain sm:h-72 sm:w-72"
          width={288}
          height={288}
        />

        <div className="flex flex-col items-center gap-2">
          <WaveDivider className="my-[10px] w-full max-w-[280px] sm:max-w-[320px]" />

          <h1 className="font-display text-3xl font-bold tracking-tight text-deep sm:text-5xl">
            {t("hero.title")}
          </h1>

          <p className="mt-2 max-w-xl text-base text-foreground/70 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#assets"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              {t("hero.ctaAssets")}
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              {t("hero.ctaPortfolio")}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#assets"
        className="absolute bottom-8 flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-foreground/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {t("hero.scroll")}
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
};
