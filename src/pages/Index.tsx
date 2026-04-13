import { motion } from "framer-motion";
import logo from "@/assets/quebramar_logo.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-3"
      >
        <img
          src={logo}
          alt="Quebramar Creative Studio"
          className="h-64 w-64 object-contain sm:h-80 sm:w-80"
        />

        <div className="flex flex-col items-center gap-2">
          <svg
            width="100%"
            height="24"
            viewBox="0 0 300 24"
            fill="none"
            className="overflow-visible w-full max-w-[280px] sm:max-w-[320px]"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 12 Q37.5 2, 75 12 Q112.5 22, 150 12 Q187.5 2, 225 12 Q262.5 22, 300 12"
              stroke="hsl(195, 50%, 45%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              animate={{ d: [
                "M0 12 Q37.5 2, 75 12 Q112.5 22, 150 12 Q187.5 2, 225 12 Q262.5 22, 300 12",
                "M0 12 Q37.5 22, 75 12 Q112.5 2, 150 12 Q187.5 22, 225 12 Q262.5 2, 300 12",
                "M0 12 Q37.5 2, 75 12 Q112.5 22, 150 12 Q187.5 2, 225 12 Q262.5 22, 300 12",
              ]}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'hsl(180, 30%, 15%)', fontFamily: 'Georgia, "Times New Roman", serif' }}>
            TERRA À VISTA!
          </h1>
          <p className="max-w-md text-lg text-foreground/70">
            Preparando o navio. Volte em breve. Ahoy!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
