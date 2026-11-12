import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { manifesto } from "@/data/manifesto";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Manifesto = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="manifesto" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("manifesto.eyebrow")}
          title={t("manifesto.title")}
          description={t("manifesto.description")}
        />

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2">
          {/* Espaço reservado para a imagem — defina manifesto.image em src/data/manifesto.ts */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="min-h-[280px] overflow-hidden rounded-xl border border-dashed border-primary/40 bg-card/60 md:aspect-[3/4] md:min-h-0"
          >
            {manifesto.image ? (
              <img
                src={manifesto.image}
                alt={manifesto.imageAlt[lang]}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 p-8 text-center md:min-h-0">
                <ImageIcon className="h-8 w-8 text-primary/50" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground/55">
                  {t("manifesto.imagePlaceholder")}
                </p>
              </div>
            )}
          </motion.div>

          {/* Caixa de texto do manifesto — edite o conteúdo em src/data/manifesto.ts */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-card"
          >
            <div className="flex-1">
              {manifesto.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? "text-base text-foreground/75" : "mt-4 text-base text-foreground/75"}
                >
                  {p[lang]}
                </p>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
              <span className="font-display text-sm font-bold text-primary">
                {manifesto.signature[lang]}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-foreground/45">
                {t("manifesto.updated")} {manifesto.updated}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
