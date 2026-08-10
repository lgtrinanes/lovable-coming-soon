import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fabStoreUrl, studioAssets } from "@/data/assets";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Assets = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="assets" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("assets.eyebrow")}
          title={t("assets.title")}
          description={t("assets.description")}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {studioAssets.map((asset, i) => (
            <motion.article
              key={asset.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={asset.image}
                  alt={asset.title[lang]}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex flex-wrap gap-2">
                  {asset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold text-deep">{asset.title[lang]}</h3>
                <p className="flex-1 text-sm text-foreground/70">{asset.description[lang]}</p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-bold text-primary">{asset.price}</span>
                  <a
                    href={asset.fabUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    {t("assets.cta")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={fabStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            {t("assets.all")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
