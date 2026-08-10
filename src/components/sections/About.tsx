import { motion } from "framer-motion";
import boats from "@/assets/asset-coastal-village.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { WaveDivider } from "@/components/WaveDivider";

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t("about.stat1") },
    { value: "25+", label: t("about.stat2") },
    { value: "6", label: t("about.stat3") },
  ];

  return (
    <section id="about" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("about.eyebrow")}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-deep sm:text-4xl">
            {t("about.title")}
          </h2>
          <WaveDivider className="my-4 w-full max-w-[200px]" />
          <p className="text-base text-foreground/75">{t("about.p1")}</p>
          <p className="mt-4 text-base text-foreground/75">{t("about.p2")}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card p-4 text-center">
                <dt className="font-display text-2xl font-bold text-primary">{s.value}</dt>
                <dd className="mt-1 text-xs text-foreground/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.img
          src={boats}
          alt="Cena 3D de vila costeira produzida pelo Quebramar Creative Studio"
          loading="lazy"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-xl object-cover shadow-card"
        />
      </div>
    </section>
  );
};
