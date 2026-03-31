import { motion } from "framer-motion";
import logo from "@/assets/quebramar_logo.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8 text-white"
      >
        <img
          src={logo}
          alt="Quebramar Creative Studio"
          className="h-64 w-64 rounded-2xl object-contain sm:h-80 sm:w-80"
        />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            EM BREVE
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Estamos preparando algo incrível. Volte em breve!
          </p>
        </div>

        <motion.div
          className="h-1 w-16 rounded-full bg-primary"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Index;
