"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { AgentsHubMockup } from "./AgentsHubMockup";
import { SecretarIAMockup } from "./SecretarIAMockup";
import { GerencIAMockup } from "./GerencIAMockup";
import { WavoipMockup } from "./WavoipMockup";

type HeroFeature = {
  eyebrow: string;
  name: string;
  title: ReactNode;
  body: string;
  quote: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  blur?: boolean;
  customMockup?: "agents-hub" | "secretar-ia" | "gerenc-ia" | "wavoip";
  accent: "blue" | "magenta" | "gold";
};

const heroFeatures: HeroFeature[] = [
  {
    eyebrow: "Atendimento inteligente",
    name: "Secretar.IA",
    title: (
      <>
        A secretária que <em className="italic font-normal text-brand-blue-bright">nunca deixa cair</em> uma conversa.
      </>
    ),
    body:
      "Uma IA criada e personalizada pra sua clínica. Ela não trata paciente como lead nem lead como paciente. Distingue e reage diferente. Se é lead, parte pra conversão: envia provas sociais, contorna objeções, qualifica, prepara pro agendamento e manda relatório comercial diário apontando oportunidades que seu time humano não viu. Se é paciente e sua secretária humana está ocupada, a Experienc.IA acolhe, anota, cria tarefas e avisa sua equipe de tudo.",
    quote: "A melhor secretária que você já teve. Sem folga, sem dia ruim, sem pedido de demissão.",
    customMockup: "secretar-ia",
    accent: "blue",
  },
  {
    eyebrow: "CRM automatizado",
    name: "Gerenc.IA",
    title: (
      <>
        O <em className="italic font-normal text-brand-magenta-bright">cérebro silencioso</em> que mantém sua operação em ordem.
      </>
    ),
    body:
      "Cada contato novo é lido, classificado, etiquetado e posicionado na etapa certa do funil, sem ninguém tocar. Sua secretária humana deixa de perder meia hora por dia arrumando CRM. Sua operação deixa de depender da disciplina de uma pessoa e passa a rodar no automático.",
    quote: "Pare de depender da sua secretária pra ter um comercial organizado. Deixa isso com a Gerenc.IA.",
    customMockup: "gerenc-ia",
    accent: "magenta",
  },
  {
    eyebrow: "Meta Business Partner · Google Partner",
    name: "Tracking Inteligente",
    title: (
      <>
        A IA avisa a <em className="italic font-normal text-brand-gold-bright">Meta e o Google</em> quem é lead, quem é paciente, quem desistiu.
      </>
    ),
    body:
      "Cada evento do funil volta pra plataforma de anúncios em tempo real. A Meta para de otimizar por clique barato e passa a otimizar por agendamento. O Google para de vender tráfego frio. CAC despenca. Só chega clínica que tem dinheiro pra consulta. Uma das clínicas que atendemos saiu de quase falir pra ter volume consistente de leads qualificados, só com tracking bem feito.",
    quote: "Como Meta Business Partner e Google Partner, enxergamos o que outras agências nem sabem que existe.",
    image: "/screenshots/traqueamento_de_anuncios.png",
    imageAlt: "Tela de tracking e segmentação com UTM, origem, categorização de leads qualificados por campanha",
    imageWidth: 900,
    imageHeight: 1100,
    accent: "gold",
  },
  {
    eyebrow: "Biblioteca de IAs prontas",
    name: "Hub de Agentes",
    title: (
      <>
        Mais de <em className="italic font-normal text-brand-gold-bright">40 agentes</em> construídos especificamente pro contexto de clínicas médicas.
      </>
    ),
    body:
      "Uma biblioteca viva de IAs específicas pra operação clínica: anamnese, pré-consulta, resgate, follow-up, análise de funil, treinamento de equipe, pós-procedimento, objeção de convênio e muito mais. Você não precisa treinar uma IA do zero. Abre o Hub, escolhe o agente que resolve sua dor, pluga e usa.",
    quote: "A curadoria que a sua clínica não teria tempo de fazer sozinha.",
    customMockup: "agents-hub",
    accent: "gold",
  },
  {
    eyebrow: "Ligação inteligente",
    name: "Wavoip",
    title: (
      <>
        Ligue para o paciente, pelo <em className="italic font-normal text-brand-magenta-bright">WhatsApp da Clínica,</em> direto do CRM.
      </>
    ),
    body:
      "A verdade é que ninguém mais atende ligação de número desconhecido. Por isso criamos um jeito de ligar do CRM direto pro WhatsApp do contato, usando o número da própria clínica. E tudo fica gravado, salvo, transcrito e resumido. Sua equipe deixa de trabalhar no achismo: você ouve como ela conduziu e treina baseado em conversa real.",
    quote: "Conversa real vira currículo de treinamento. E todo lead entra numa ligação que ele de fato atende.",
    customMockup: "wavoip",
    accent: "magenta",
  },
  {
    eyebrow: "Relacionamento automático",
    name: "Experienc.IA",
    title: (
      <>
        O paciente se sente <em className="italic font-normal text-brand-blue-bright">cuidado</em>, mesmo quando ninguém está olhando.
      </>
    ),
    body:
      "Sequências automáticas de acolhimento, acompanhamento e pós-consulta. Incluindo áudios que você grava uma única vez e a IA dispara no momento certo, pro paciente certo. Nada de voz clonada. É você de verdade, na hora em que o paciente mais precisa. Ninguém da equipe precisa lembrar de nada.",
    quote: "A relação que fideliza, sem depender de humano lembrar.",
    image: "/screenshots/contato_automatico_com_paciente.png",
    imageAlt: "Sequência de mensagens automáticas da Experienc.IA para acompanhamento pós-procedimento",
    imageWidth: 1200,
    imageHeight: 1100,
    accent: "blue",
  },
];

type SecondaryFeature = {
  name: string;
  tagline: string;
  body: string;
  big?: string;
  bigLabel?: string;
  accent: "blue" | "magenta" | "gold";
  icon: ReactNode;
};

const secondaryFeatures: SecondaryFeature[] = [
  {
    name: "Copilot",
    tagline: "IA especialista em vendas ao lado da sua secretária",
    body:
      "Senta do lado da sua secretária humana, 24/7. Entende o contexto da conversa e sugere como contornar cada objeção em tempo real. Sua equipe para de vender no feeling e passa a vender com método.",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2L3 7v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V7l-9-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Recorrenc.IA",
    tagline: "Resgate de paciente com áudio real seu",
    body:
      "Áudio que você grava uma vez, a IA dispara no momento certo pra paciente que parou de aparecer. Sem voz clonada, sem áudio genérico. É você de verdade. Aqui na minha clínica, já são mais de 600 pacientes reativados que não passavam há meses.",
    big: "600+",
    bigLabel: "pacientes reativados",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2a10 10 0 0110 10M12 22A10 10 0 012 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M22 2v6h-6M2 22v-6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Dashboard",
    tagline: "Sua operação inteira em tempo real",
    body:
      "Visualização consolidada da sua clínica. Ranking de equipe, horário com maior conversão, relatório de cada conversa. Complementa o Tracking Inteligente com a camada de análise interna.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Formulários Inteligentes",
    tagline: "Com uma IA que cria o formulário pra você",
    body:
      "Pré-consulta que chega com o paciente já conhecido. Check-in de acompanhamento pra medir resultado. Checklist de equipe pra operação não falhar. E uma IA que monta o formulário sozinha a partir do que você precisa medir, sem você gastar tempo desenhando campo. Respostas em tempo real no seu celular.",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const accentGlow: Record<HeroFeature["accent"], string> = {
  blue: "bg-brand-blue/25",
  magenta: "bg-brand-magenta/20",
  gold: "bg-brand-gold/15",
};

const accentText: Record<HeroFeature["accent"], string> = {
  blue: "text-brand-blue-bright",
  magenta: "text-brand-magenta-bright",
  gold: "text-brand-gold-bright",
};

export function ToolSection() {
  return (
    <section id="ferramenta" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[160px]" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-brand-blue" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue-bright">
              A plataforma em ação
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
            Não é mais um CRM.
            <br />
            <span className="text-gradient-blue">É o motor da sua clínica.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-secondary md:text-xl">
            Cada módulo nasceu dentro da minha própria clínica, resolvendo um problema que eu
            vivi antes de qualquer cliente viver.
          </p>
        </motion.div>

        <div className="space-y-28 md:space-y-36">
          {heroFeatures.map((feature, i) => (
            <HeroFeatureRow key={i} feature={feature} reverse={i % 2 === 1} index={i} />
          ))}
        </div>

        <div className="mt-32 md:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-14 flex items-end justify-between gap-8"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-brand-gold" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold-bright">
                  Módulos complementares
                </span>
              </div>
              <h3
                className="font-display font-bold text-fg-primary"
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.02em",
                }}
              >
                E mais 4 ferramentas que{" "}
                <em className="italic font-normal text-brand-gold-bright">completam o ecossistema.</em>
              </h3>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {secondaryFeatures.map((f, i) => (
              <SecondaryFeatureCard key={i} feature={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFeatureRow({
  feature,
  reverse,
  index,
}: {
  feature: HeroFeature;
  reverse: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="lg:col-span-7">
        <BrowserFrame feature={feature} />
      </div>

      <div className="lg:col-span-5">
        <div className="mb-3 flex items-center gap-3">
          <span className={`font-mono text-[10px] uppercase tracking-[0.25em] ${accentText[feature.accent]}`}>
            / {String(index + 1).padStart(2, "0")} · {feature.eyebrow}
          </span>
        </div>

        <div
          className={`font-display font-semibold italic leading-none tracking-tight ${accentText[feature.accent]}`}
          style={{
            fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {feature.name}
        </div>

        <h3
          className="mt-6 font-display font-normal text-fg-primary"
          style={{
            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
          }}
        >
          {feature.title}
        </h3>

        <p className="mt-6 text-base leading-relaxed text-fg-secondary md:text-lg">{feature.body}</p>

        <div className="mt-6 border-l-2 border-brand-blue/40 pl-4">
          <p className="font-display text-base font-medium italic text-fg-primary md:text-lg">
            “{feature.quote}”
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function BrowserFrame({ feature }: { feature: HeroFeature }) {
  if (feature.customMockup === "agents-hub") return <AgentsHubMockup />;
  if (feature.customMockup === "secretar-ia") return <SecretarIAMockup />;
  if (feature.customMockup === "gerenc-ia") return <GerencIAMockup />;
  if (feature.customMockup === "wavoip") return <WavoipMockup />;

  return (
    <div style={{ perspective: "1400px" }} className="relative">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          className={`pointer-events-none absolute -inset-10 rounded-[32px] ${accentGlow[feature.accent]} blur-[70px]`}
        />

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-graphite shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 border-b border-white/5 bg-ink-carbon px-4 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto w-fit rounded-md border border-white/5 bg-ink-graphite px-3 py-1 font-mono text-[10px] text-fg-muted">
                app.mdia.com.br / {feature.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}
              </div>
            </div>
            <div className="h-5 w-10" />
          </div>

          <div className="relative overflow-hidden bg-ink-carbon">
            {feature.image && (
              <Image
                src={feature.image}
                alt={feature.imageAlt ?? ""}
                width={feature.imageWidth ?? 1200}
                height={feature.imageHeight ?? 700}
                className="block h-auto w-full"
                style={{ filter: feature.blur ? "blur(2.5px) saturate(1.05)" : undefined }}
              />
            )}

            {feature.blur && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-carbon/30 via-transparent to-transparent" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SecondaryFeatureCard({
  feature,
  index,
}: {
  feature: SecondaryFeature;
  index: number;
}) {
  const accent = feature.accent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-graphite p-8 transition-colors hover:bg-ink-carbon md:p-10"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
          accent === "blue" ? "via-brand-blue/50" : accent === "magenta" ? "via-brand-magenta/50" : "via-brand-gold/50"
        } to-transparent`}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
            accent === "blue"
              ? "border-brand-blue/30 bg-brand-blue/10 text-brand-blue-bright"
              : accent === "magenta"
                ? "border-brand-magenta/30 bg-brand-magenta/10 text-brand-magenta-bright"
                : "border-brand-gold/30 bg-brand-gold/10 text-brand-gold-bright"
          }`}
        >
          {feature.icon}
        </div>

        {feature.big && (
          <div className="text-right">
            <div className="text-gradient-gold font-display text-3xl font-extrabold leading-none tracking-tight md:text-4xl">
              {feature.big}
            </div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
              {feature.bigLabel}
            </div>
          </div>
        )}
      </div>

      <h4 className="mt-6 font-display text-xl font-bold text-fg-primary md:text-2xl">
        {feature.name}
      </h4>
      <p className="mt-1 text-sm text-fg-secondary">{feature.tagline}</p>

      <p className="mt-5 text-sm leading-relaxed text-fg-secondary md:text-base">{feature.body}</p>
    </motion.div>
  );
}
