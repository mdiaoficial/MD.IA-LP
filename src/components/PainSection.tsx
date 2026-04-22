"use client";

import { motion } from "framer-motion";

const pains = [
  {
    value: "48%",
    unit: "dos leads",
    label: "nunca recebem sequer uma tentativa de retorno.",
    sub: "Seu tráfego pago financiando concorrente.",
    source: "Pesquisa Invesp · replicada em dezenas de estudos globais",
  },
  {
    value: "A conta",
    unit: "invisível",
    label:
      "Quantos pacientes desmarcaram este mês e ninguém remarcou? Multiplique pelo seu ticket. Depois por 12. Essa é a conta que nenhum extrato mostra.",
    sub: "Faça você mesmo. Depois volta aqui.",
    source: "Fórmula · aplique à sua própria operação",
  },
  {
    value: "2h 40min",
    unit: "por dia",
    label:
      "é o tempo que a recepção gastava em tarefas que uma IA bem-configurada resolve em segundos.",
    sub: "Sem contar erro humano, retrabalho e atrito interno.",
    source: "Medição da minha própria clínica, ao longo de 2023",
  },
  {
    value: "Uma secretária",
    unit: "de saída",
    label:
      "leva embora o contexto da sua operação. O tom de cada paciente, os combinados silenciosos, a relação construída. O histórico médico fica no sistema. O resto, se a clínica não registra, vai embora com ela.",
    sub: "Sistema bom é aquele que não mora só na cabeça de uma pessoa.",
    source: "Experiência de quem já perdeu duas vezes",
  },
];

export function PainSection() {
  return (
    <section className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-brand-magenta/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-magenta/5 blur-[140px]" />
      </div>

      <div className="container-page relative">
        <div className="mb-20 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-brand-magenta" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-magenta-bright">
              A conta que ninguém faz
            </span>
          </div>

          <h2
            className="font-display font-normal leading-[0.95] tracking-tight text-fg-primary"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Cada dia sem sistema,
            <br />
            <em className="italic text-brand-magenta-bright">sua clínica paga o preço.</em>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-secondary md:text-xl">
            Não é falta de paciente. É falta de processo. A dor não aparece no extrato. Aparece
            nos pacientes que entraram, não voltaram, e você nem soube.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="relative bg-ink-graphite p-8 md:p-12"
            >
              <div className="relative">
                <div className="mb-8 flex items-baseline gap-3">
                  <span
                    className="font-display font-normal italic text-brand-magenta-bright"
                    style={{
                      fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                      lineHeight: "0.9",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {pain.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
                    {pain.unit}
                  </span>
                </div>

                <p className="text-lg leading-snug text-fg-primary md:text-xl">{pain.label}</p>

                <p className="mt-5 text-sm italic text-fg-secondary">{pain.sub}</p>

                <div className="mt-8 border-t border-white/5 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                  {pain.source}
                </div>
              </div>
            </div>
          ))}
        </div>

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
              Em 3 minutos, o diagnóstico aponta cada gargalo da sua operação e te mostra,
              em reais, quanto ele está custando por mês. Sem login, sem cadastro.
            </p>

            <a
              href="/diagnostico"
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
      </div>
    </section>
  );
}
