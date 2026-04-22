"use client";

import { motion } from "framer-motion";

const messages = [
  { from: "patient", text: "Oi, vi um anúncio de vocês sobre reposição hormonal, como funciona?", time: "14:02" },
  { from: "ai", text: "Oi Juliana! Tudo bem? Que bom que você chegou até aqui. 😊\n\nA reposição hormonal é um dos tratamentos mais procurados na Clínica. Posso te explicar rapidamente antes de te conectar com a Dra.?", time: "14:02" },
  { from: "patient", text: "Pode sim. Mas qual o valor?", time: "14:03" },
  { from: "ai", text: "Antes de te falar de valor, deixa eu te mostrar por que 87% das nossas pacientes renovam o tratamento depois de 3 meses 👇\n\n[ depoimento de Camila, 42 anos ]", time: "14:03" },
];

const insights = [
  { label: "Perfil", value: "Lead novo", tone: "blue" },
  { label: "Interesse", value: "Reposição hormonal", tone: "magenta" },
  { label: "Objeção", value: "Preço (antecipada)", tone: "gold" },
  { label: "Próxima ação", value: "Enviar prova social", tone: "blue" },
];

const toneClass = {
  blue: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue-bright",
  magenta: "border-brand-magenta/30 bg-brand-magenta/10 text-brand-magenta-bright",
  gold: "border-brand-gold/30 bg-brand-gold/10 text-brand-gold-bright",
} as const;

export function SecretarIAMockup() {
  return (
    <div style={{ perspective: "1400px" }} className="relative">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="pointer-events-none absolute -inset-12 rounded-[32px] bg-brand-blue/25 blur-[80px]" />

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-graphite shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 border-b border-white/5 bg-ink-carbon px-4 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto w-fit rounded-md border border-white/5 bg-ink-graphite px-3 py-1 font-mono text-[10px] text-fg-muted">
                app.mdia.com.br / secretaria
              </div>
            </div>
            <div className="h-5 w-10" />
          </div>

          <div className="grid grid-cols-5 bg-ink-carbon">
            <div className="col-span-3 border-r border-white/5">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-magenta font-display text-sm font-bold text-white">
                    J
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-fg-primary">Juliana Teixeira</div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-fg-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      online · conversando com Secretar.IA
                    </div>
                  </div>
                </div>
                <div className="rounded-full border border-brand-magenta/30 bg-brand-magenta/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-brand-magenta-bright">
                  IA ativa
                </div>
              </div>

              <div className="max-h-[420px] space-y-3 overflow-hidden p-4">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className={`flex ${m.from === "ai" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                        m.from === "ai"
                          ? "rounded-br-sm bg-gradient-to-br from-brand-blue/90 to-brand-blue-deep text-white"
                          : "rounded-bl-sm bg-white/5 text-fg-primary"
                      }`}
                    >
                      {m.text}
                      <div className={`mt-1 text-[9px] ${m.from === "ai" ? "text-white/60" : "text-fg-muted"}`}>
                        {m.time}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-end"
                >
                  <div className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-2">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-fg-muted"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="col-span-2 bg-ink-graphite">
              <div className="border-b border-white/5 px-4 py-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                  Análise em tempo real
                </div>
                <div className="mt-1 font-display text-sm font-bold text-fg-primary">
                  Secretar.IA decidiu
                </div>
              </div>

              <div className="space-y-3 p-4">
                {insights.map((ins, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-fg-muted">
                      {ins.label}
                    </div>
                    <div
                      className={`mt-1 inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${toneClass[ins.tone as keyof typeof toneClass]}`}
                    >
                      {ins.value}
                    </div>
                  </motion.div>
                ))}

                <div className="mt-6 rounded-lg border border-white/10 bg-ink-black/50 p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-deep" />
                    <div>
                      <div className="text-[11px] font-medium text-fg-primary">Relatório pro Dr.</div>
                      <div className="font-mono text-[9px] text-fg-muted">enviado às 18:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
