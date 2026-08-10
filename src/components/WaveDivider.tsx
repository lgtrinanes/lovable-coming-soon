import { motion } from "framer-motion";

interface WaveDividerProps {
  className?: string;
}

export const WaveDivider = ({ className = "" }: WaveDividerProps) => (
  <svg
    width="100%"
    height="24"
    viewBox="0 0 300 24"
    fill="none"
    className={`overflow-visible ${className}`}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <motion.path
      d="M0 14 Q37.5 0, 75 14 Q112.5 28, 150 14 Q187.5 0, 225 14 Q262.5 28, 300 14"
      stroke="hsl(var(--wave))"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
      animate={{
        d: [
          "M0 14 Q37.5 0, 75 14 Q112.5 28, 150 14 Q187.5 0, 225 14 Q262.5 28, 300 14",
          "M0 14 Q37.5 28, 75 14 Q112.5 0, 150 14 Q187.5 28, 225 14 Q262.5 0, 300 14",
          "M0 14 Q37.5 0, 75 14 Q112.5 28, 150 14 Q187.5 0, 225 14 Q262.5 28, 300 14",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);
