"use client";

import { motion } from "framer-motion";

export function FinalCTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[140px]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[500px] rounded-full bg-brand-magenta/15 blur-[120px]" />
        <div className="absolute right-1/3 bottom-1/3 h-[300px] w-[400px] rounded-full bg-brand-gold/10 blur-[120px]" />
      </div>

      <svg
        className="pointer-events-none absolute left-0 right-0 top-1/2 h-32 w-full -translate-y-1/2 opacity-40"
        viewBox="0 0 1400 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="cta-ecg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A944" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8C467" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4A944" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 60 L400 60 L430 60 L445 35 L460 85 L475 10 L490 105 L505 60 L900 60 L930 60 L945 35 L960 85 L975 10 L990 105 L1005 60 L1400 60"
          stroke="url(#cta-ecg)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0.15, pathOffset: 0 }}
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="container-page relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-brand-blue" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue-bright">
              Diagnóstico MD.IA
            </span>
            <div className="h-px w-8 bg-brand-blue" />
          </div>

          <h2
            className="font-display font-normal tracking-tight text-fg-primary"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 5rem)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
          >
            Quanto sua clínica
            <br />
            <em className="italic text-brand-gold-bright">está deixando escapar</em>
            <br />
            esse mês?
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-fg-secondary md:text-xl">
            Em 3 minutos, o diagnóstico aponta os gargalos críticos da sua operação e calcula,
            em reais, quanto eles custam por mês. Sem login, sem pagamento, sem cadastro. Só a
            resposta.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://mdia.cloud/diagnostico" target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-gradient px-8 py-5 text-base font-semibold text-white transition-all hover:scale-[1.02] glow-blue md:text-lg"
            >
              <span className="relative z-10">Começar diagnóstico</span>
              <span className="relative z-10 text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
              <span>3 min</span>
              <span>·</span>
              <span>100% gratuito</span>
              <span>·</span>
              <span>resultado imediato</span>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-6 border-t border-white/5 pt-10 text-left md:gap-12">
            <div>
              <div className="font-display text-lg font-medium text-fg-primary md:text-xl">
                Ecossistema completo
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                9 módulos integrados
              </div>
            </div>
            <div>
              <div className="font-display text-lg font-medium text-fg-primary md:text-xl">
                Implementação assistida
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                time MD.IA no seu CRM
              </div>
            </div>
            <div>
              <div className="font-display text-lg font-medium text-fg-primary md:text-xl">
                Acompanhamento contínuo
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                treinamento + mentoria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
