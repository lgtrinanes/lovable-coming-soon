import { useState } from "react";
import { motion } from "framer-motion";
import { studioProjects, StudioProject } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Portfolio = () => {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<StudioProject | null>(null);

  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          description={t("portfolio.description")}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {studioProjects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-card"
            >
              <img
                src={project.image}
                alt={project.title[lang]}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-deep">{project.title[lang]}</h3>
                  <p className="text-sm text-foreground/60">{project.category[lang]}</p>
                </div>
                <span className="text-sm font-semibold text-primary">{project.year}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card">
          {selected && (
            <>
              <img
                src={selected.image}
                alt={selected.title[lang]}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full rounded-lg object-cover"
              />
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-deep">
                  {selected.title[lang]}
                </DialogTitle>
                <DialogDescription className="text-sm text-primary">
                  {selected.category[lang]} · {selected.year}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-foreground/70">{selected.description[lang]}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
