"use client";

import { motion } from "framer-motion";

const agents = [
  { name: "Gestor de Tráfego", cat: "Marketing", tone: "blue" },
  { name: "Especialista em Meta Ads", cat: "Marketing", tone: "blue" },
  { name: "Especialista em Google Ads", cat: "Marketing", tone: "blue" },
  { name: "Criador de Reels Virais", cat: "Criação", tone: "magenta" },
  { name: "Criador de Ganchos Inesquecíveis", cat: "Criação", tone: "magenta" },
  { name: "Criador de Logotipos Infinitos", cat: "Criação", tone: "magenta" },
  { name: "Coach de Vendas", cat: "Vendas", tone: "gold" },
  { name: "Nutri.IA", cat: "Clínico", tone: "gold" },
  { name: "Analista de Exames", cat: "Clínico", tone: "gold" },
  { name: "Analista de Tricoscopia Digital", cat: "Clínico", tone: "gold" },
  { name: "Copy de Anúncio Médico", cat: "Criação", tone: "magenta" },
  { name: "Roteirista de Vídeo", cat: "Criação", tone: "magenta" },
];

const toneStyles = {
  blue: "border-brand-blue/30 bg-brand-blue/5 text-brand-blue-bright",
  gold: "border-brand-gold/30 bg-brand-gold/5 text-brand-gold-bright",
  magenta: "border-brand-magenta/30 bg-brand-magenta/5 text-brand-magenta-bright",
} as const;

export function AgentsHubMockup() {
  return (
    <div style={{ perspective: "1400px" }} className="relative">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="pointer-events-none absolute -inset-12 rounded-[32px] bg-brand-gold/20 blur-[80px]" />

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-graphite shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 border-b border-white/5 bg-ink-carbon px-4 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto w-fit rounded-md border border-white/5 bg-ink-graphite px-3 py-1 font-mono text-[10px] text-fg-muted">
                app.mdia.com.br / hub-de-agentes
              </div>
            </div>
            <div className="h-5 w-10" />
          </div>

          <div className="relative bg-ink-carbon p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                  Biblioteca
                </div>
                <div className="mt-1 font-display text-lg font-bold text-fg-primary">
                  Agentes de IA para clínicas
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1">
                <span className="text-gradient-gold font-display text-base font-bold">40+</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-gold-bright">
                  ativos
                </span>
              </div>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {["Todos", "Marketing", "Criação", "Vendas", "Clínico", "Gestão", "Experiência"].map(
                (c, i) => (
                  <span
                    key={c}
                    className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
                      i === 0
                        ? "border-brand-blue/40 bg-brand-blue/10 text-brand-blue-bright"
                        : "border-white/10 bg-white/[0.02] text-fg-muted"
                    }`}
                  >
                    {c}
                  </span>
                ),
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {agents.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-lg border border-white/5 bg-ink-graphite p-3 transition-colors hover:border-white/10 hover:bg-ink-steel"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded border ${toneStyles[a.tone as keyof typeof toneStyles]}`}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <span
                      className={`rounded-sm px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] ${toneStyles[a.tone as keyof typeof toneStyles]}`}
                    >
                      {a.cat}
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] font-medium leading-tight text-fg-primary">
                    {a.name}
                  </div>
                  <div className="mt-1 flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.15em] text-fg-muted">
                    <span className="h-1 w-1 rounded-full bg-green-400" />
                    Pronto pra uso
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-dashed border-white/10 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
              + 28 agentes não exibidos
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
