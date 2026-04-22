"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { DashboardMockup } from "./DashboardMockup";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0">
      <HeroBackground />

      <div className="container-page relative z-10 pb-20 pt-8 md:pt-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
            className="lg:col-span-6"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-magenta opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-magenta" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-secondary">
                Consultoria médica × Inteligência artificial
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold tracking-tight text-fg-primary"
              style={{
                fontSize: "clamp(2.5rem, 4.2vw, 4.5rem)",
                lineHeight: "1.02",
                letterSpacing: "-0.03em",
              }}
            >
              Construí a <span className="text-gradient-blue">MD.IA</span> para ser{" "}
              <span className="italic text-fg-primary/95">o motor</span> da minha própria clínica.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-2xl text-lg leading-relaxed text-fg-secondary md:text-xl"
            >
              Hoje, são <span className="font-semibold text-fg-primary">dezenas de clínicas</span>{" "}
              usando pra trazer mais leads qualificados, agendar mais consultas, entregar a experiência
              que o paciente merece e{" "}
              <span className="text-gradient-gold font-semibold">
                devolver ao médico o controle da sua própria clínica.
              </span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-10 max-w-xl"
            >
              <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-brand-gold/15 blur-[40px]" />

              <div className="relative overflow-hidden rounded-xl border border-brand-gold/40 bg-ink-black/80 backdrop-blur-sm shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6),0_0_30px_-10px_rgba(212,169,68,0.3)]">
                <div className="flex items-center justify-between border-b border-brand-gold/20 bg-brand-gold/5 px-4 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold-bright">
                      Diagnóstico MD.IA
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-fg-muted">
                    LIVE
                  </span>
                </div>

                <div className="relative h-10 overflow-hidden border-b border-brand-gold/10 bg-ink-black/50">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 400 40"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="hero-card-ecg" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4A944" stopOpacity="0" />
                        <stop offset="15%" stopColor="#D4A944" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#E8C467" stopOpacity="1" />
                        <stop offset="85%" stopColor="#D4A944" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#D4A944" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 20 L70 20 L80 20 L85 13 L90 27 L95 6 L100 34 L105 20 L170 20 L180 20 L185 13 L190 27 L195 6 L200 34 L205 20 L270 20 L280 20 L285 13 L290 27 L295 6 L300 34 L305 20 L400 20"
                      stroke="url(#hero-card-ecg)"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <motion.path
                      d="M0 20 L70 20 L80 20 L85 13 L90 27 L95 6 L100 34 L105 20 L170 20 L180 20 L185 13 L190 27 L195 6 L200 34 L205 20 L270 20 L280 20 L285 13 L290 27 L295 6 L300 34 L305 20 L400 20"
                      stroke="url(#hero-card-ecg)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0.2, pathOffset: 0 }}
                      animate={{ pathOffset: [0, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>

                <div className="p-5 md:p-6">
                  <p className="text-sm leading-relaxed text-fg-secondary md:text-base">
                    Criei uma ferramenta que lê a situação atual da sua clínica em 3 minutos e te
                    mostra,{" "}
                    <span className="font-semibold text-fg-primary">em reais</span>, quanto ela
                    faturaria com IA e automação implementadas do jeito certo.
                  </p>

                  <a
                    href="/diagnostico"
                    className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(30,123,255,0.7)] transition-all hover:scale-[1.02] hover:shadow-[0_14px_40px_-8px_rgba(30,123,255,0.9)] md:text-base"
                  >
                    <span className="relative z-10">Descobrir quanto estou perdendo</span>
                    <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-blue-bright via-brand-blue to-brand-blue-deep opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <a
                href="#ferramenta"
                className="group inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-fg-primary"
              >
                Ver a plataforma em ação
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted"
            >
              <div className="flex items-center gap-2">
                <div className="h-px w-6 bg-brand-gold" />
                <span className="text-fg-secondary">Dr. Daniel Dorta</span>
              </div>
              <span>Médico · Dono de clínica · Fundador MD.IA</span>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6">
            <DashboardMockup />
          </div>
        </div>
      </div>

    </section>
  );
}
