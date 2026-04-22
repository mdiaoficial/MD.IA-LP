"use client";

import { motion } from "framer-motion";
import { diagnosticoUrl } from "@/lib/utils";

export function PainSectionCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-graphite via-ink-carbon to-ink-graphite p-10 text-center md:mt-32 md:p-16"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-brand-blue/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-brand-gold/10 blur-[100px]" />

      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-3">
          <div className="h-px w-8 bg-brand-gold" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold-bright">
            A boa notícia
          </span>
          <div className="h-px w-8 bg-brand-gold" />
        </div>

        <h3
          className="mx-auto max-w-4xl font-display font-normal tracking-tight text-fg-primary"
          style={{
            fontSize: "clamp(1.75rem, 3.8vw, 3.25rem)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
          }}
        >
          Tudo isso é mensurável.{" "}
          <em className="italic text-brand-gold-bright">E reversível.</em>
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-secondary md:text-lg">
          Em 3 minutos, o diagnóstico aponta cada gargalo da sua operação e te mostra, em reais,
          quanto ele está custando por mês. Sem login, sem cadastro.
        </p>

        <a
          href={diagnosticoUrl("pain")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-gradient px-8 py-5 text-base font-semibold text-white transition-all hover:scale-[1.02] glow-blue md:text-lg"
        >
          <span>Calcular quanto minha clínica perde hoje</span>
          <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
          <span>3 min</span>
          <span>·</span>
          <span>Gratuito</span>
          <span>·</span>
          <span>Resultado imediato em R$</span>
        </div>
      </div>
    </motion.div>
  );
}
