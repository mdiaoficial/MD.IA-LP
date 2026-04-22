"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Clínicas ativas", value: "47+" },
  { label: "Leads gerenciados/mês", value: "112.000" },
  { label: "Receita adicional gerada", value: "R$ 18M" },
  { label: "Redução média de CAC", value: "32%" },
  { label: "Aumento no agendamento", value: "+218%" },
  { label: "Horas salvas/mês por clínica", value: "240h" },
];

export function MetricsTicker() {
  const duplicated = [...metrics, ...metrics];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-ink-black/50 py-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-black to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap"
      >
        {duplicated.map((m, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
              {m.label}
            </span>
            <span className="font-display text-lg font-bold text-fg-primary">{m.value}</span>
            <span className="text-fg-muted">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
