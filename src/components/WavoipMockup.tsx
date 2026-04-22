"use client";

import { motion } from "framer-motion";

const transcript = [
  { from: "clinic", text: "Oi Renata, aqui é a Laura da clínica, tudo bem? Vi que você agendou pra quinta-feira.", time: "00:04" },
  { from: "patient", text: "Oi Laura! Tudo bem sim, obrigada por ligar.", time: "00:09" },
  { from: "clinic", text: "Queria te enviar um formulário de pré-consulta pra Dra. já chegar te conhecendo melhor. Tudo bem?", time: "00:14" },
  { from: "patient", text: "Ah, claro. Pode mandar.", time: "00:19" },
];

const insights = [
  { label: "Duração", value: "01:42" },
  { label: "Sentimento", value: "Positivo" },
  { label: "Objeção", value: "Nenhuma" },
  { label: "Próximo passo", value: "Enviar formulário" },
];

export function WavoipMockup() {
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
                app.mdia.com.br / wavoip
              </div>
            </div>
            <div className="h-5 w-10" />
          </div>

          <div className="grid grid-cols-5 bg-ink-carbon">
            <div className="col-span-3 border-r border-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-magenta font-display text-base font-bold text-white">
                      R
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-ink-carbon bg-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-fg-primary">Renata K.</div>
                    <div className="font-mono text-[10px] text-fg-muted">(11) 9****-****</div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-red-400">
                      Gravando
                    </span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-fg-muted">
                    saindo do nº da clínica
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="flex h-24 items-end gap-1">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const base = 6 + ((i * 17) % 70);
                    return (
                      <motion.div
                        key={i}
                        animate={{ height: [`${base * 0.35}%`, `${base}%`, `${base * 0.5}%`] }}
                        transition={{
                          duration: 0.8 + ((i * 13) % 100) / 200,
                          repeat: Infinity,
                          delay: (i * 0.05) % 1.5,
                          ease: "easeInOut",
                        }}
                        className="w-1 rounded-full bg-gradient-to-t from-brand-blue via-brand-blue-bright to-brand-magenta"
                        style={{ minHeight: "10%" }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-fg-secondary">
                    <path
                      d="M12 1v22M17 4h-5.5a3.5 3.5 0 000 7h1a3.5 3.5 0 110 7H6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(135 12 12)"
                    />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-fg-secondary">
                    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="col-span-2 flex flex-col bg-ink-graphite">
              <div className="border-b border-white/5 px-4 py-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                  Gravação em tempo real
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-blue-bright">
                    Gravando
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2 overflow-hidden p-3">
                {transcript.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    className="rounded-md border border-white/5 bg-ink-carbon p-2"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[9px] uppercase tracking-[0.18em] ${
                          t.from === "clinic" ? "text-brand-blue-bright" : "text-brand-magenta-bright"
                        }`}
                      >
                        {t.from === "clinic" ? "Clínica" : "Renata"}
                      </span>
                      <span className="font-mono text-[9px] text-fg-muted">{t.time}</span>
                    </div>
                    <div className="mt-1 text-[11px] leading-relaxed text-fg-primary">{t.text}</div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/5 p-3">
                <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                  Resumo automático
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {insights.map((ins, i) => (
                    <div key={i} className="rounded-md border border-white/5 bg-ink-carbon p-2">
                      <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-fg-muted">
                        {ins.label}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-fg-primary">{ins.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
