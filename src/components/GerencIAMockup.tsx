"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "Novo Lead",
    value: "R$ 28.400",
    count: 12,
    tone: "blue",
    cards: [
      { name: "Juliana T.", tags: ["INSTAGRAM", "HORMONAL"], just: true },
      { name: "Fernanda R.", tags: ["META ADS"], just: false },
      { name: "Patrícia M.", tags: ["ORGÂNICO", "EMAGRECER"], just: false },
    ],
  },
  {
    title: "Em qualificação",
    value: "R$ 41.200",
    count: 18,
    tone: "magenta",
    cards: [
      { name: "Camila S.", tags: ["HOT", "HORMONAL"], just: false },
      { name: "Bruna L.", tags: ["REMARKETING"], just: true },
      { name: "Aline V.", tags: ["CONVÊNIO"], just: false },
    ],
  },
  {
    title: "Qualificado",
    value: "R$ 62.800",
    count: 9,
    tone: "gold",
    cards: [
      { name: "Renata K.", tags: ["AGENDAR"], just: true },
      { name: "Mariana D.", tags: ["AGENDAR"], just: false },
      { name: "Luciana A.", tags: ["ENC. AGENDA"], just: false },
    ],
  },
  {
    title: "Agendado",
    value: "R$ 38.600",
    count: 6,
    tone: "gold",
    cards: [
      { name: "Cláudia F.", tags: ["CONFIRMADO"], just: false },
      { name: "Vanessa P.", tags: ["CONFIRMADO"], just: false },
    ],
  },
];

const toneStyles = {
  blue: {
    bar: "bg-brand-blue",
    badge: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue-bright",
    text: "text-brand-blue-bright",
  },
  magenta: {
    bar: "bg-brand-magenta",
    badge: "border-brand-magenta/30 bg-brand-magenta/10 text-brand-magenta-bright",
    text: "text-brand-magenta-bright",
  },
  gold: {
    bar: "bg-brand-gold",
    badge: "border-brand-gold/30 bg-brand-gold/10 text-brand-gold-bright",
    text: "text-brand-gold-bright",
  },
} as const;

export function GerencIAMockup() {
  return (
    <div style={{ perspective: "1400px" }} className="relative">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="pointer-events-none absolute -inset-12 rounded-[32px] bg-brand-magenta/20 blur-[80px]" />

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-graphite shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 border-b border-white/5 bg-ink-carbon px-4 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto w-fit rounded-md border border-white/5 bg-ink-graphite px-3 py-1 font-mono text-[10px] text-fg-muted">
                app.mdia.com.br / crm
              </div>
            </div>
            <div className="h-5 w-10" />
          </div>

          <div className="bg-ink-carbon p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                  CRM · Jornada de pacientes
                </div>
                <div className="mt-1 font-display text-base font-bold text-fg-primary">
                  45 pacientes no funil
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-magenta opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-magenta" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-magenta-bright">
                  Gerenc.IA organizando
                </span>
              </div>
            </div>

            <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-x-visible md:px-0 md:pb-0">
              <div className="grid min-w-[520px] grid-cols-4 gap-3 md:min-w-0">
                {columns.map((col, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: ci * 0.08 }}
                  className="relative"
                >
                  <div className={`absolute -top-0.5 left-0 right-0 h-0.5 rounded-full ${toneStyles[col.tone as keyof typeof toneStyles].bar}`} />

                  <div className="rounded-lg bg-ink-graphite p-3">
                    <div className="mb-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[10px] font-medium uppercase tracking-wide text-fg-primary">
                          {col.title}
                        </span>
                        <span className="font-mono text-[9px] text-fg-muted">
                          {col.count}
                        </span>
                      </div>
                      <div
                        className={`mt-2 font-mono text-[11px] font-semibold ${toneStyles[col.tone as keyof typeof toneStyles].text}`}
                      >
                        {col.value}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {col.cards.map((card, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + ci * 0.08 + i * 0.05 }}
                          className={`relative rounded-md border p-2 text-[10px] ${
                            card.just
                              ? "border-brand-magenta/40 bg-brand-magenta/5"
                              : "border-white/5 bg-ink-carbon"
                          }`}
                        >
                          {card.just && (
                            <div className="absolute -right-1 -top-1 rounded-full bg-brand-magenta px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-wider text-white">
                              IA
                            </div>
                          )}
                          <div className="font-medium text-fg-primary">{card.name}</div>
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {card.tags.map((t, ti) => (
                              <span
                                key={ti}
                                className={`rounded-sm border px-1 py-0.5 font-mono text-[7px] tracking-wider ${toneStyles[col.tone as keyof typeof toneStyles].badge}`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-lg border border-white/5 bg-ink-graphite px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                  Últimas ações da IA
                </div>
                <div className="text-[11px] text-fg-secondary">
                  <span className="text-fg-primary">Juliana T.</span> movida de Novo Lead →
                  Em qualificação
                </div>
              </div>
              <div className="font-mono text-[9px] text-fg-muted">agora</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
