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
  {
    q: "Minha clínica é pequena. A MD.IA também é pra mim?",
    a: "Depende do seu gargalo, não do seu porte. Se o problema é volume (pouco lead chegando), a MD.IA resolve só parcialmente, porque ela não inventa paciente. Mas se o problema é processo (perder lead no WhatsApp, não remarcar quem desmarca, não saber de onde veio cada agendamento), a plataforma já muda sua operação no primeiro mês, independente do tamanho. Clínica solo com 30 consultas por mês se beneficia. Consultório com 10 consultas por mês provavelmente ainda não é a hora. O diagnóstico te aponta em qual dos cenários sua clínica está.",
  },
  {
    q: "Minha equipe não entende de IA. Isso é um problema?",
    a: "Ninguém entende de IA na primeira semana. Parte do que a Implementação Assistida entrega é exatamente formar o seu time: treinamento semanal da recepção, mentoria pro médico e pro empresário, e um Copilot que orienta sua secretária humana em tempo real durante cada conversa. Em 60 dias sua equipe está usando IA melhor do que a maioria das agências de marketing usa hoje. O medo de IA é medo de não ser treinado. Isso a gente resolve.",
  },
  {
    q: "Preciso trocar meu sistema de prontuário ou agenda atual?",
    a: "Não. A MD.IA opera como camada de inteligência e automação sobre o que você já usa pra prontuário e agendamento. Integramos com os principais sistemas do mercado. Algumas clínicas optam por consolidar tudo na MD.IA com o tempo, mas isso nunca é pré-requisito. Você mantém seu prontuário, a gente resolve o que acontece antes e depois dele: captação, atendimento, follow-up, retenção, análise.",
  },
  {
    q: "Funciona com WhatsApp pessoal ou só com WhatsApp Business?",
    a: "Só com WhatsApp Business (API oficial). E isso é uma decisão consciente. Clínicas que ainda operam no WhatsApp pessoal estão, tecnicamente, violando os termos de uso do próprio WhatsApp, correm risco de bloqueio da conta e não conseguem integrar com nenhuma ferramenta profissional. A migração pra Business é o primeiro passo que a gente conduz na implementação, e é mais simples do que parece.",
  },
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Na plataforma standalone, clínicas que seguem o playbook costumam ver impacto em leads respondidos e agendamentos em 30 dias. Na Implementação Assistida, trabalhamos com meta de 90 dias pra mudança visível no seu extrato financeiro. É a garantia que ofereço: se em 90 dias você não viu resultado mensurável, a gente continua trabalhando sem cobrar até aparecer.",
  },
  {
    q: "E a LGPD? Como ficam os dados dos meus pacientes?",
    a: "Dados hospedados no Brasil, criptografia em trânsito e em repouso, acesso restrito por função, consentimento explícito do paciente em todos os canais de contato, logs de auditoria de quem acessou o quê e quando. O selo LGPD no topo da página não é decoração, é compromisso técnico documentado. Sua clínica fica mais compliant depois de entrar, não menos.",
  },
  {
    q: "Quanto custa?",
    a: "O investimento varia pelo porte da clínica e pelo caminho escolhido (plataforma standalone vs Implementação Assistida). Eu não publico valores porque cada caso tem uma configuração diferente, e porque quero conversar só com quem o diagnóstico já mostrou ter ROI claro. Se o diagnóstico indicar que sua clínica deixa R$ 30 mil escapar por mês, o investimento na MD.IA se paga em semanas. Se indicar bem menos, talvez não seja sua hora ainda. E eu te digo com honestidade.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Plataforma standalone: mensalidade, cancela a qualquer momento. Implementação Assistida: compromisso de 6 meses, porque é o tempo mínimo pra transformação real acontecer. Seria desonesto prometer resultado sem esse prazo de construção conjunta. Passado esse período, sem fidelidade rígida. Se você está entrando já pensando em cancelar, honestamente, provavelmente não é cliente da MD.IA.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
