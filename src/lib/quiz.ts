export type QuestionType = "select" | "number" | "slider";

export type Question = {
  id: string;
  label: string;
  helper?: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
};

export const questions: Question[] = [
  {
    id: "specialty",
    label: "Qual a especialidade principal da sua clínica?",
    helper: "A dor muda de especialidade pra especialidade, os princípios não.",
    type: "select",
    options: [
      "Estética / Dermatologia",
      "Ginecologia",
      "Ortopedia",
      "Cardiologia",
      "Endocrinologia / Nutrição",
      "Medicina Integrativa",
      "Odontologia",
      "Outra",
    ],
  },
  {
    id: "ticket",
    label: "Qual o valor médio de uma consulta na sua clínica?",
    helper: "O preço que o paciente paga pela consulta em si, sem contar procedimentos.",
    type: "number",
    prefix: "R$",
    placeholder: "Ex: 600",
    min: 0,
  },
  {
    id: "patientLTV",
    label: "E o ticket médio por paciente?",
    helper:
      "O valor que um paciente típico gasta na sua clínica. Aqui na minha, por exemplo, vendo planos de acompanhamento que incluem consultas, injetáveis, procedimentos e tecnologias ao longo do ano. O valor desse plano é o meu ticket médio. Se a sua clínica vende procedimento a procedimento, some quanto um paciente médio gasta do primeiro contato até deixar de vir. Estime de cabeça se precisar. É o número que mais muda o resultado.",
    type: "number",
    prefix: "R$",
    placeholder: "Ex: 3500",
    min: 0,
  },
  {
    id: "newPatients",
    label: "Quantos pacientes novos chegam por mês em média?",
    helper: "Pacientes que consultaram pela primeira vez. Não conta retorno.",
    type: "number",
    placeholder: "Ex: 45",
    min: 0,
  },
  {
    id: "adSpend",
    label: "Quanto a clínica investe por mês em tráfego pago?",
    helper: "Meta Ads + Google Ads + qualquer outra plataforma.",
    type: "number",
    prefix: "R$",
    placeholder: "Ex: 12000",
    min: 0,
  },
  {
    id: "conversion",
    label: "De cada 10 leads que entram em contato, quantos agendam consulta?",
    helper: "Estimativa sincera. Essa conta muda tudo.",
    type: "slider",
    min: 0,
    max: 10,
    step: 1,
    suffix: "de 10",
  },
  {
    id: "team",
    label: "Quantas pessoas fazem recepção, atendimento ou agendamento?",
    helper: "Inclui secretárias, recepcionistas e quem responde WhatsApp.",
    type: "select",
    options: ["Nenhuma, sou eu mesmo", "1 pessoa", "2 pessoas", "3 pessoas", "4 ou mais"],
  },
  {
    id: "control",
    label: "Em uma nota de 1 a 10, quanto você sente que está no controle da operação?",
    helper: "1 = tudo depende dos outros. 10 = eu vejo tudo em tempo real.",
    type: "slider",
    min: 1,
    max: 10,
    step: 1,
    suffix: "/ 10",
  },
];

export type QuizAnswers = {
  specialty: string;
  ticket: number;
  patientLTV: number;
  newPatients: number;
  adSpend: number;
  conversion: number;
  team: string;
  control: number;
};

export type SectorScore = {
  name: string;
  score: number;
  label: "Crítico" | "Em risco" | "Estável" | "Forte";
  diagnosis: string;
  solution: "Ferramenta resolve" | "Exige consultoria";
};

export type QuizResult = {
  score: number;
  monthlyLoss: number;
  annualLoss: number;
  cacSavings: number;
  sectors: SectorScore[];
  headline: string;
};

export function calculateResult(answers: QuizAnswers): QuizResult {
  const {
    ticket,
    patientLTV,
    newPatients,
    adSpend,
    conversion,
    team,
    control,
  } = answers;

  const effectiveLTV = patientLTV > 0 ? patientLTV : ticket;

  const currentConversionRate = conversion / 10;
  const targetConversionRate = 0.4;

  const estimatedTotalLeads =
    currentConversionRate > 0 ? newPatients / currentConversionRate : newPatients * 5;

  const potentialPatientsAtTarget = estimatedTotalLeads * targetConversionRate;
  const additionalPatients = Math.max(0, potentialPatientsAtTarget - newPatients);
  const revenueLoss = additionalPatients * effectiveLTV;

  const cacSavings = adSpend * 0.3;

  const monthlyLoss = revenueLoss + cacSavings;
  const annualLoss = monthlyLoss * 12;

  const captacaoScore = Math.min(
    100,
    Math.round(
      (adSpend > 0 ? 30 : 0) + (newPatients >= 30 ? 40 : newPatients * 1.3) + conversion * 3,
    ),
  );

  const atendimentoScore = Math.round(conversion * 10);

  const retencaoScore = Math.round(
    (team === "Nenhuma, sou eu mesmo" ? 20 : team === "1 pessoa" ? 35 : 50) +
      control * 3,
  );

  const gestaoScore = Math.round(control * 10);

  const sectors: SectorScore[] = [
    {
      name: "Captação",
      score: captacaoScore,
      label: toLabel(captacaoScore),
      diagnosis:
        adSpend === 0
          ? "Você não investe em tráfego pago. Paciente chega só por indicação e organicidade."
          : conversion < 4
            ? "Tráfego entra mas não converte. Tracking e atendimento não conversam."
            : "Entrada ativa. Pode escalar com IA de qualificação.",
      solution: adSpend > 0 ? "Exige consultoria" : "Ferramenta resolve",
    },
    {
      name: "Atendimento",
      score: atendimentoScore,
      label: toLabel(atendimentoScore),
      diagnosis:
        conversion < 3
          ? "Conversão muito baixa. A Secretar.IA e o Copilot entregam 3 a 5x desse número."
          : conversion < 6
            ? "Conversão média. Potencial claro de dobrar com atendimento automatizado."
            : "Conversão acima da média. O foco vira volume, não eficiência.",
      solution: conversion < 4 ? "Ferramenta resolve" : "Exige consultoria",
    },
    {
      name: "Retenção",
      score: retencaoScore,
      label: toLabel(retencaoScore),
      diagnosis:
        team === "Nenhuma, sou eu mesmo"
          ? "Toda retenção depende de você lembrar. A Experienc.IA e a Recorrenc.IA automatizam isso."
          : "Retenção depende de alguém lembrar. Sistema precisa assumir esse papel.",
      solution: "Ferramenta resolve",
    },
    {
      name: "Gestão",
      score: gestaoScore,
      label: toLabel(gestaoScore),
      diagnosis:
        control <= 4
          ? "Você opera no escuro. Isso é o que mais limita crescimento, não é mais paciente, é mais dado."
          : control <= 7
            ? "Você tem noção, mas falta sistema. Gerenc.IA e Dashboard fecham essa lacuna."
            : "Controle alto. A automação libera seu tempo pra decisão, não pra operação.",
      solution: control <= 6 ? "Exige consultoria" : "Ferramenta resolve",
    },
  ];

  const score = Math.round(
    (captacaoScore * 0.3 + atendimentoScore * 0.3 + retencaoScore * 0.2 + gestaoScore * 0.2),
  );

  const headline =
    score < 40
      ? "Sua clínica opera no modo sobrevivência."
      : score < 60
        ? "Sua clínica funciona, mas deixa muito dinheiro na mesa."
        : score < 80
          ? "Sua clínica é sólida. Ainda tem destravas claras."
          : "Sua clínica opera acima da média. Falta escalar.";

  return {
    score,
    monthlyLoss: Math.round(monthlyLoss),
    annualLoss: Math.round(annualLoss),
    cacSavings: Math.round(cacSavings),
    sectors,
    headline,
  };
}

function toLabel(score: number): SectorScore["label"] {
  if (score < 40) return "Crítico";
  if (score < 60) return "Em risco";
  if (score < 80) return "Estável";
  return "Forte";
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
