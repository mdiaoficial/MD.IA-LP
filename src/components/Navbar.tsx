"use client";

import { Logo } from "./Logo";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink-black/70 backdrop-blur-xl"
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#metodo" className="text-sm text-fg-secondary transition-colors hover:text-fg-primary">
            Como funciona
          </a>
          <a href="#prova" className="text-sm text-fg-secondary transition-colors hover:text-fg-primary">
            Clientes
          </a>
          <a href="#ferramenta" className="text-sm text-fg-secondary transition-colors hover:text-fg-primary">
            A plataforma
          </a>
        </nav>
        <a
          href="/diagnostico"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-fg-primary transition-all hover:border-brand-blue/50 hover:bg-brand-blue/10"
        >
          Diagnóstico
          <span className="text-brand-blue transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  );
}
