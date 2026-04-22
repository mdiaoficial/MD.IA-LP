"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Seu sistema agenda pacientes automaticamente?",
    a: "Não. Essa é uma decisão consciente. Depois de muito tempo de experiência e dezenas de clínicas implementadas, percebi um padrão: sempre que colocamos uma IA pra agendar, a conversão de leads cai. Isso é verdade no mercado inteiro. Meu compromisso é com a excelência do seu resultado, não com parecer mais moderno. A IA prepara o lead até o momento do agendamento, e sua secretária humana fecha, ali onde conversão humana ainda ganha da máquina.",
  },
  {
    q: "Vocês clonam a voz do médico pra enviar mensagens ao paciente?",
    a: "Não. A tecnologia avança e a clonagem de voz está cada vez melhor, mas ainda não é perfeita. E confiança é alvo que demora a conquistar e cai rápido. Imagine se o paciente perceber que era uma IA imitando você, e não você? É uma porta que eu não me permito abrir. O que a gente faz: você grava o áudio uma vez, a IA distribui no momento certo, pro paciente certo. É você de verdade, na hora que importa.",
  },
  {
    q: "Pra quem é a MD.IA?",
    a: "A MD.IA é pro médico e empresário que quer ser pioneiro na sua área. Pro empreendedor que entende a importância de passar na frente e quer usar tecnologia com resultado real, não pra brincar com ela. Quem já sabe que operação clínica não se resolve com improviso, e está pronto pra operar num nível que a maioria dos concorrentes ainda não alcançou.",
  },
  {
    q: "Pra quem a MD.IA NÃO é?",
    a: "A MD.IA não é pra médico ou empresário que quer largar toda a operação comercial na mão de uma empresa, de uma agência de marketing, ou de uma secretária de IA genérica comprada em prateleira. Aqui a gente treina e potencializa equipes comerciais pra chegarem no próximo nível. Não substitui a equipe pelo piloto automático. Se você procura terceirização de responsabilidade, existem opções piores e mais baratas.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[500px] rounded-full bg-brand-blue/8 blur-[140px]" />
      </div>

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-brand-magenta" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-magenta-bright">
                Dúvidas honestas
              </span>
            </div>

            <h2
              className="font-display font-extrabold tracking-tight text-fg-primary"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 3rem)",
                lineHeight: "1.02",
                letterSpacing: "-0.03em",
              }}
            >
              As perguntas
              <br />
              que todo médico
              <br />
              me faz antes
              <br />
              de entrar.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-fg-secondary">
              Aqui as respostas honestas, inclusive as que outras empresas prefeririam esconder.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/5 border-y border-white/5">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  index={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors"
      >
        <div className="flex flex-1 items-start gap-4">
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-base font-semibold text-fg-primary transition-colors group-hover:text-brand-blue-bright md:text-lg">
            {question}
          </span>
        </div>
        <span
          className={`mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-fg-secondary transition-transform ${
            isOpen ? "rotate-45 border-brand-blue/50 text-brand-blue-bright" : ""
          }`}
        >
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1 V 11 M 1 6 H 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 pr-10 text-sm leading-relaxed text-fg-secondary md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
