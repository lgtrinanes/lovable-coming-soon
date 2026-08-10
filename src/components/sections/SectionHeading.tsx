import { motion } from "framer-motion";
import { WaveDivider } from "@/components/WaveDivider";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center"
  >
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
    <h2 className="mt-2 font-display text-3xl font-bold text-deep sm:text-4xl">{title}</h2>
    <WaveDivider className="my-3 w-full max-w-[180px]" />
    {description && (
      <p className="max-w-2xl text-base text-foreground/70">{description}</p>
    )}
  </motion.div>
);
