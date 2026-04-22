"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pains = [
  "Agência de marketing que só dava desculpa",
  "Secretária que não atendia o WhatsApp, e que eu não podia demitir",
  "Pacientes me dizendo que se sentiam abandonados",
  "Zero controle. Tudo caos.",
];

const stats = [
  { value: "70%", label: "margem operacional" },
  { value: "6 dígitos", label: "faturamento mensal" },
  { value: "2024", label: "ano da virada" },
];

export function FounderSection() {
  return (
    <section id="founder" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-brand-magenta/10 blur-[140px]" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-3"
        >
          <div className="h-px w-10 bg-brand-blue" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue-bright">
            Quem está por trás
          </span>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-brand-blue/20 blur-[80px]" />
              <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-brand-magenta/10 blur-[60px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
                <Image
                  src="/dr-dan.jpg"
                  alt="Dr. Daniel Dorta, médico e fundador da MD.IA, durante apresentação"
                  width={1200}
                  height={800}
                  className="block h-auto w-full"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-black via-ink-black/70 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-ink-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-brand-gold" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold-bright">
                      Fundador · MD.IA
                    </span>
                  </div>
                  <div className="mt-2 font-display text-2xl font-medium text-fg-primary md:text-3xl">
                    Dr. Daniel Dorta
                  </div>
                  <div className="mt-1 text-sm text-fg-secondary">
                    Médico · Dono de clínica · Construtor
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <h2
              className="font-display font-normal tracking-tight text-fg-primary"
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                lineHeight: "1",
                letterSpacing: "-0.02em",
              }}
            >
              Eu não construí a MD.IA
              <br />
              pra vender.
              <br />
              <em className="italic text-brand-blue-bright">Construí pra sobreviver</em>
              <br />
              à minha própria clínica.
            </h2>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-fg-secondary md:text-lg">
              <p>
                Antes de ser fundador de ecossistema de IA, fui só mais um médico tentando
                tocar uma clínica que parecia escorrer pelos dedos. Você provavelmente
                conhece a lista:
              </p>

              <ul className="space-y-3 border-l border-brand-magenta/30 pl-6">
                {pains.map((pain, i) => (
                  <li key={i} className="flex items-start gap-3 text-fg-primary">
                    <span className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-magenta" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-2">
                Em <span className="font-semibold text-fg-primary">2024</span>, parei de tentar
                resolver por fora (agência nova, funcionário novo, planilha nova) e comecei a
                construir por dentro. Nasceu a MD.IA.
              </p>

              <p className="text-lg text-fg-primary md:text-xl">
                Hoje, minha clínica opera com{" "}
                <span className="font-bold text-brand-gold-bright">70% de margem</span> faturando{" "}
                <span className="font-bold text-brand-gold-bright">6 dígitos por mês</span>. É
                exatamente esse sistema que hoje roda em dezenas de clínicas.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-10">
              {stats.map((s, i) => (
                <div key={i} className="relative">
                  {i > 0 && (
                    <div className="pointer-events-none absolute -left-2 top-1 h-full w-px bg-white/5" />
                  )}
                  <div
                    className="font-display font-semibold tracking-tight text-brand-gold-bright"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: "1" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-32 md:mt-40"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand-gold/20 bg-ink-black px-4 py-1.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-gold-bright">
                Manifesto
              </span>
            </div>

            <blockquote
              className="font-display font-normal text-fg-primary"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              O médico <span className="text-fg-muted">não</span> será substituído pela IA.
              <br />
              <em className="italic text-brand-gold-bright">Será substituído</em> por outro médico
              <br />
              que usa IA.
            </blockquote>

            <div className="mt-10 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-fg-muted" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                Dr. Daniel Dorta
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
