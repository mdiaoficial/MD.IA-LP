"use client";

import { motion } from "framer-motion";
import { diagnosticoUrl } from "@/lib/utils";

const standalone = [
  "Acesso completo à plataforma MD.IA",
  "IA de atendimento pré-configurada",
  "Sequências de follow-up prontas",
  "Funil Kanban + etiquetagem automática",
  "Treinamento em vídeo da equipe",
  "Suporte por WhatsApp",
];

const assisted = [
  "Tudo da plataforma MD.IA",
  "Diagnóstico completo da sua operação",
  "IA treinada no tom e nos protocolos da sua clínica",
  "Automações montadas e testadas com você",
  "Sprints de implementação com o time MD.IA",
  "Treinamento semanal da equipe em IA, conversão e uso da ferramenta",
  "Mentoria do médico e do empresário para usar IA no dia a dia e criar suas próprias ferramentas",
  "Revisão mensal de métricas e ajuste fino",
  "Acesso direto ao Dr. Daniel nos momentos críticos",
  "Garantia de resultado em 90 dias",
];

export function HowItWorksSection() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-[500px] w-[700px] rounded-full bg-brand-blue/10 blur-[160px]" />
        <div className="absolute left-1/4 bottom-0 h-[400px] w-[600px] rounded-full bg-brand-gold/10 blur-[160px]" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-brand-blue" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue-bright">
              Dois caminhos · um destino
            </span>
          </div>

          <h2
            className="font-display font-extrabold tracking-tight text-fg-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              lineHeight: "1",
              letterSpacing: "-0.03em",
            }}
          >
            A plataforma funciona sozinha.
            <br />
            <span className="text-gradient-gold">Com o time MD.IA, ela transforma.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-secondary md:text-xl">
            Algumas clínicas só precisam da infraestrutura. Implantam e seguem. Outras querem
            entregar todo o processo e ter certeza de que vai rodar. Ambas cabem aqui.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl border border-white/5 bg-ink-graphite p-8 md:p-10"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                Caminho 1
              </span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <h3 className="font-display text-2xl font-bold text-fg-primary md:text-3xl">
              Plataforma MD.IA
            </h3>
            <p className="mt-2 text-sm text-fg-secondary">Self-serve · você implementa</p>

            <p className="mt-8 text-sm leading-relaxed text-fg-secondary md:text-base">
              Acesso completo ao ecossistema. Você e seu time implementam, configuram e operam.
              Ideal pra quem já tem processo rodando e só precisa da infraestrutura.
            </p>

            <div className="mt-8 h-px w-full bg-white/5" />

            <ul className="mt-8 space-y-3">
              {standalone.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-fg-secondary md:text-base"
                >
                  <span className="mt-[0.4em] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-white/20">
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/5 pt-6">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-fg-primary"
              >
                Conhecer a plataforma
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl p-8 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-ink-graphite via-ink-graphite to-ink-carbon" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-magenta/10" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent [background:linear-gradient(135deg,rgba(30,123,255,0.6),rgba(184,69,232,0.4),rgba(212,169,68,0.5))_border-box] [-webkit-mask:linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] [padding:1px]" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold-bright">
                  Caminho 2 · Recomendado
                </span>
                <div className="h-px flex-1 bg-brand-gold/30" />
                <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold-bright">
                  Premium
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-fg-primary md:text-3xl">
                <span className="text-gradient-gold">Implementação assistida</span>
              </h3>
              <p className="mt-2 text-sm text-fg-secondary">
                Consultoria · o time MD.IA constrói com você
              </p>

              <p className="mt-8 text-sm leading-relaxed text-fg-secondary md:text-base">
                A mesma plataforma, implementada mão-a-mão pelo meu time. A gente entra na
                operação, treina a IA com seu tom, monta as automações com seus protocolos e
                acompanha até o resultado aparecer no extrato. É o caminho que construí pra
                clínicas que querem virar o jogo em 90 dias, não em 9 meses.
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-gold/30 via-brand-blue/20 to-transparent" />

              <ul className="mt-8 space-y-3">
                {assisted.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-fg-primary md:text-base"
                  >
                    <span className="mt-[0.25em] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-deep">
                      <svg className="h-3 w-3 text-ink-black" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5 L5 9 L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/5 pt-6">
                <a
                  href={diagnosticoUrl("how-it-works")} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-ink-black transition-all hover:scale-[1.02]"
                >
                  Verificar se sua clínica se qualifica
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-graphite via-ink-carbon to-ink-graphite p-8 text-center md:p-12"
        >
          <div className="pointer-events-none absolute -left-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand-magenta/10 blur-[100px]" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-brand-blue" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-blue-bright">
                Não sei qual é o meu caso
              </span>
              <div className="h-px w-8 bg-brand-blue" />
            </div>

            <h3
              className="font-display font-normal text-fg-primary"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              O diagnóstico aponta em{" "}
              <em className="italic text-brand-gold-bright">3 minutos.</em>
            </h3>

            <p className="max-w-xl text-sm leading-relaxed text-fg-secondary md:text-base">
              8 perguntas, cálculo em reais do que sua operação deixa escapar, e recomendação
              clara de qual caminho faz sentido pra sua clínica.
            </p>

            <a
              href={diagnosticoUrl("how-it-works")} target="_blank" rel="noopener noreferrer"
              className="group relative mt-2 inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-gradient px-7 py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] glow-blue"
            >
              <span>Começar diagnóstico gratuito</span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
