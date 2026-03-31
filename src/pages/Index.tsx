import { motion } from "framer-motion";
import logo from "@/assets/quebramar_logo.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <img
          src={logo}
          alt="Quebramar Creative Studio"
          className="h-64 w-64 object-contain sm:h-80 sm:w-80"
        />

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'hsl(180, 30%, 15%)', fontFamily: 'Georgia, "Times New Roman", serif' }}>
            TERRA À VISTA!
          </h1>
          <p className="max-w-md text-lg text-foreground/70">
            Preparando o navio. Volte em breve. Ahoy!
          </p>
        </div>

        <svg
          width="120"
          height="24"
          viewBox="0 0 120 24"
          fill="none"
          className="overflow-visible"
        >
          <motion.path
            d="M0 12 Q15 2, 30 12 Q45 22, 60 12 Q75 2, 90 12 Q105 22, 120 12"
            stroke="hsl(195, 50%, 45%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: [
              "M0 12 Q15 2, 30 12 Q45 22, 60 12 Q75 2, 90 12 Q105 22, 120 12",
              "M0 12 Q15 22, 30 12 Q45 2, 60 12 Q75 22, 90 12 Q105 2, 120 12",
              "M0 12 Q15 2, 30 12 Q45 22, 60 12 Q75 2, 90 12 Q105 22, 120 12",
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Index;
