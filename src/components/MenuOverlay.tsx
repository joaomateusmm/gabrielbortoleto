"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { title: "INÍCIO", href: "/" },
  { title: "SOBRE", href: "/sobre" },
  { title: "CARREIRA", href: "/carreira" },
  { title: "NOTÍCIAS", href: "/noticias" },
  { title: "GALERIA", href: "/galeria" },
  { title: "CONTATO", href: "/contato" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop com blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            onClick={onClose}
          />

          {/* Menu lateral */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#000a03] border-l border-green-800/30 z-50 shadow-2xl"
          >
            {/* Header do Menu */}
            <div className="flex justify-between items-center p-8 border-b border-white/10">
              <h2 className="text-3xl font-bold text-white/90 tracking-wider">
                MENU
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white/70" />
              </motion.button>
            </div>

            {/* Items do Menu */}
            <nav className="flex flex-col gap-2 p-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 10 }}
                  className="group relative py-4 px-6 rounded-lg overflow-hidden"
                  onClick={onClose}
                >
                  {/* Background hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-[#4dff29]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />

                  {/* Borda verde animada */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#4dff29] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"
                    initial={false}
                  />

                  {/* Texto */}
                  <span className="relative text-2xl font-bold text-white/60 group-hover:text-white/90 transition-colors tracking-wider">
                    {item.title}
                  </span>

                  {/* Número do index */}
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-white/20 group-hover:text-[#4dff29]/50 transition-colors font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Footer com informações */}
            <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <p className="text-white/30 text-sm">
                  © 2025 Gabriel Bortoleto
                </p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-white/40 hover:text-[#4dff29] transition-colors text-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-white/40 hover:text-[#4dff29] transition-colors text-sm"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-white/40 hover:text-[#4dff29] transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Efeito de partículas decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#4dff29] rounded-full opacity-10"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
