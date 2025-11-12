"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const loadingTexts = [
  "Buscando o Melhor tempo de volta...",
  "Pole Position de Gabriel Bortoleto...",
  "Dobradinha da Sauber...",
];

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [randomText] = useState(
    () => loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
  );

  useEffect(() => {
    // Simula carregamento progressivo
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 500); // Pequeno delay antes de esconder
          return 100;
        }
        return prev + Math.random() * 15; // Incremento aleatório para parecer natural
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0c0c]">
      {/* Logo ou Título */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <Image
          src="/icons/logo.svg"
          alt="Gabriel Bortoleto Logo"
          width={180}
          height={180}
          priority
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44"
        />
      </motion.div>

      {/* Porcentagem */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className=" text-white/50 text-sm font-medium"
      >
        {Math.floor(Math.min(progress, 100))}%
      </motion.p>

      {/* Texto de carregamento */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-white/30 text-xs tracking-widest text-center px-4"
      >
        {randomText}
      </motion.p>
    </motion.div>
  );
}
