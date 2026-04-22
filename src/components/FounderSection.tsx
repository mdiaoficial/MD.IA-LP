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
          <div className="lg:col-span-6">
            <div className="relative">
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -inset-12 rounded-[40px] bg-brand-blue/30 blur-[90px]"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -inset-8 rounded-[40px] bg-brand-magenta/20 blur-[70px]"
              />
              <div className="pointer-events-none absolute -inset-1 rounded-[24px] bg-gradient-to-br from-brand-gold/50 via-brand-blue/35 to-brand-magenta/50 opacity-70 blur-sm" />

              <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95),0_0_60px_-20px_rgba(30,123,255,0.4)]">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.06 }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="relative"
                >
                  <Image
                    src="/dr-dan.jpg"
                    alt="Dr. Daniel Dorta, médico e fundador da MD.IA, durante apresentação"
                    width={1600}
                    height={1067}
                    className="block h-auto w-full"
                    priority
                  />
                </motion.div>

                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </div>

              <div className="mt-6 flex items-center gap-4 border-l-2 border-brand-gold/50 pl-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-gold-bright">
                    Fundador · MD.IA
                  </span>
                  <div
                    className="mt-1 font-display font-medium tracking-tight text-fg-primary"
                    style={{
                      fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)",
                      lineHeight: "1",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Dr. Daniel Dorta
                  </div>
                  <div className="mt-2 text-sm text-fg-secondary">
                    Médico · Dono de clínica · Arquiteto de IA
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-4">
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
