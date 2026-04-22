"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  questions,
  calculateResult,
  formatBRL,
  type QuizAnswers,
  type QuizResult,
} from "@/lib/quiz";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "5511932169211";
const WHATSAPP_MESSAGE =
  "Estava no seu site e quero implementar a MD.IA na minha clínica.";

type Step = "intro" | number | "result";

export function Quiz() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  function handleStart() {
    setStep(0);
  }

  function handleAnswer(id: string, value: string | number) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (typeof step === "number") {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        const result = calculateResult(answers as QuizAnswers);
        setResult(result);
        setStep("result");
      }
    }
  }

  function handleBack() {
    if (typeof step === "number" && step > 0) {
      setStep(step - 1);
    } else if (typeof step === "number" && step === 0) {
      setStep("intro");
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[500px] rounded-full bg-brand-magenta/10 blur-[140px]" />
      </div>

      <header className="relative z-10">
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-mono text-xs text-fg-muted transition-colors hover:text-fg-secondary">
              ←
            </span>
            <Logo />
          </Link>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-muted">
            Diagnóstico MD.IA
          </div>
        </div>
      </header>

      <main className="container-page relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-10">
        <div className="w-full">
          <AnimatePresence mode="wait">
            {step === "intro" && <Intro key="intro" onStart={handleStart} />}

            {typeof step === "number" && (
              <QuestionStep
                key={`q-${step}`}
                stepIndex={step}
                total={questions.length}
                answer={answers[questions[step].id as keyof QuizAnswers]}
                onAnswer={(value) => handleAnswer(questions[step].id, value)}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {step === "result" && result && <Result key="result" result={result} answers={answers as QuizAnswers} />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mb-8 inline-flex items-center gap-3">
        <div className="h-px w-10 bg-brand-blue" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-blue-bright">
          8 perguntas · 3 minutos
        </span>
        <div className="h-px w-10 bg-brand-blue" />
      </div>

      <h1
        className="font-display font-normal tracking-tight text-fg-primary"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
          lineHeight: "1",
          letterSpacing: "-0.02em",
        }}
      >
        Vamos descobrir, em reais,
        <br />
        <em className="italic text-brand-gold-bright">quanto sua clínica está deixando escapar</em>
        <br />
        esse mês.
      </h1>

      <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-fg-secondary md:text-lg">
        Sem login. Sem cadastro. Sem vender nada em cima do resultado. Você responde, a ferramenta
        calcula e te mostra onde está o dinheiro parado.
      </p>

      <button
        onClick={onStart}
        className="group mt-12 inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-gradient px-8 py-5 text-base font-semibold text-white transition-all hover:scale-[1.02] glow-blue md:text-lg"
      >
        <span>Começar diagnóstico</span>
        <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
      </button>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
        <span>Gratuito</span>
        <span>·</span>
        <span>Anônimo</span>
        <span>·</span>
        <span>Resposta imediata</span>
      </div>
    </motion.div>
  );
}

function QuestionStep({
  stepIndex,
  total,
  answer,
  onAnswer,
  onNext,
  onBack,
}: {
  stepIndex: number;
  total: number;
  answer: string | number | undefined;
  onAnswer: (value: string | number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const q = questions[stepIndex];
  const progress = ((stepIndex + 1) / total) * 100;

  const canAdvance = answer !== undefined && answer !== "";

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl"
    >
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
          <span>
            Pergunta {String(stepIndex + 1).padStart(2, "0")} de {String(total).padStart(2, "0")}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-brand-blue via-brand-blue-bright to-brand-magenta"
          />
        </div>
      </div>

      <h2
        className="font-display font-normal tracking-tight text-fg-primary"
        style={{
          fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
        }}
      >
        {q.label}
      </h2>

      {q.helper && (
        <p className="mt-4 text-sm italic text-fg-secondary md:text-base">{q.helper}</p>
      )}

      <div className="mt-10">
        {q.type === "select" && q.options && (
          <SelectInput options={q.options} value={answer as string | undefined} onChange={onAnswer} />
        )}
        {q.type === "number" && (
          <NumberInput
            prefix={q.prefix}
            placeholder={q.placeholder}
            value={answer as number | undefined}
            onChange={onAnswer}
            onEnter={() => canAdvance && onNext()}
          />
        )}
        {q.type === "slider" && (
          <SliderInput
            min={q.min ?? 0}
            max={q.max ?? 10}
            step={q.step ?? 1}
            suffix={q.suffix}
            value={(answer as number | undefined) ?? Math.round(((q.min ?? 0) + (q.max ?? 10)) / 2)}
            onChange={onAnswer}
          />
        )}
      </div>

      <div className="mt-12 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-fg-primary"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Voltar
        </button>

        <button
          onClick={onNext}
          disabled={!canAdvance}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-gradient px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 md:text-base"
        >
          {stepIndex === total - 1 ? "Ver meu diagnóstico" : "Próxima"}
          <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </motion.div>
  );
}

function SelectInput({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string | undefined;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`group relative overflow-hidden rounded-xl border px-5 py-4 text-left text-sm transition-all md:text-base ${
            value === opt
              ? "border-brand-blue/60 bg-brand-blue/10 text-fg-primary"
              : "border-white/10 bg-white/[0.02] text-fg-secondary hover:border-white/20 hover:bg-white/[0.04] hover:text-fg-primary"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                value === opt ? "border-brand-blue bg-brand-blue" : "border-white/20"
              }`}
            >
              {value === opt && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
            </span>
            {opt}
          </div>
        </button>
      ))}
    </div>
  );
}

function NumberInput({
  prefix,
  placeholder,
  value,
  onChange,
  onEnter,
}: {
  prefix?: string;
  placeholder?: string;
  value: number | undefined;
  onChange: (v: number) => void;
  onEnter: () => void;
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors focus-within:border-brand-blue/60 focus-within:bg-brand-blue/5">
        {prefix && (
          <span className="font-display text-2xl text-fg-muted md:text-3xl">{prefix}</span>
        )}
        <input
          type="number"
          inputMode="numeric"
          value={value ?? ""}
          onChange={(e) => {
            const n = e.target.value === "" ? NaN : Number(e.target.value);
            onChange(Number.isFinite(n) ? n : 0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onEnter();
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent font-display text-2xl text-fg-primary outline-none placeholder:text-fg-muted/50 md:text-3xl"
        />
      </div>
    </div>
  );
}

function SliderInput({
  min,
  max,
  step,
  suffix,
  value,
  onChange,
}: {
  min: number;
  max: number;
  step: number;
  suffix?: string;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-8 flex items-baseline gap-3">
        <span className="font-display text-6xl font-normal text-brand-gold-bright md:text-7xl">
          {value}
        </span>
        {suffix && (
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-fg-muted">
            {suffix}
          </span>
        )}
      </div>

      <div className="relative">
        <div className="h-1 rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-blue-bright to-brand-magenta transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-brand-blue/40 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white"
        />
      </div>

      <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function Result({ result, answers }: { result: QuizResult; answers: QuizAnswers }) {
  const scoreColor =
    result.score < 40
      ? "text-brand-magenta-bright"
      : result.score < 60
        ? "text-brand-gold-bright"
        : result.score < 80
          ? "text-brand-blue-bright"
          : "text-brand-gold-bright";

  const whatsappMessage = encodeURIComponent(WHATSAPP_MESSAGE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-5xl py-10"
    >
      <div className="mb-10 inline-flex items-center gap-3">
        <div className="h-px w-10 bg-brand-gold" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold-bright">
          Diagnóstico concluído
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2
            className="font-display font-normal tracking-tight text-fg-primary"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
          >
            <em className="italic">{result.headline}</em>
          </h2>

          <div className="mt-10 rounded-2xl border border-white/10 bg-ink-graphite p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
              Nota da sua clínica
            </div>
            <div className="mt-2 flex items-baseline gap-3">
              <span
                className={`font-display font-semibold tracking-tight ${scoreColor}`}
                style={{ fontSize: "clamp(5rem, 9vw, 8rem)", lineHeight: "0.9" }}
              >
                {result.score}
              </span>
              <span className="font-mono text-sm text-fg-muted">/ 100</span>
            </div>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className={`h-full rounded-full ${
                  result.score < 40
                    ? "bg-brand-magenta"
                    : result.score < 60
                      ? "bg-brand-gold"
                      : "bg-brand-blue"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-ink-graphite to-ink-carbon p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-gold-bright">
              Perda estimada por mês
            </div>
            <div
              className="mt-2 font-display font-semibold tracking-tight text-brand-gold-bright"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              {formatBRL(result.monthlyLoss)}
            </div>
            <div className="mt-2 text-sm text-fg-secondary">
              {formatBRL(result.annualLoss)} por ano
            </div>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="text-fg-secondary">
                  Receita perdida em conversão baixa
                </span>
                <span className="font-mono text-fg-primary">
                  {formatBRL(result.monthlyLoss - result.cacSavings)}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-fg-secondary">
                  CAC desperdiçado em tráfego mal rastreado
                </span>
                <span className="font-mono text-fg-primary">
                  {formatBRL(result.cacSavings)}
                </span>
              </div>
            </div>
            <div className="mt-6 text-xs italic text-fg-muted">
              Cálculo conservador. Baseia-se em ticket médio de {formatBRL(answers.patientLTV || answers.ticket)} por paciente,{" "}
              {answers.newPatients} pacientes novos/mês e conversão informada de {answers.conversion}/10.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-px w-10 bg-brand-blue" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue-bright">
            Ranking dos 4 setores
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {result.sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="relative overflow-hidden rounded-xl border border-white/5 bg-ink-graphite p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
                    {sector.name}
                  </div>
                  <div
                    className={`mt-1 font-display text-2xl font-normal italic ${labelColor(sector.label)}`}
                  >
                    {sector.label}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="font-display font-semibold text-fg-primary"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: "1" }}
                  >
                    {sector.score}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                    / 100
                  </div>
                </div>
              </div>

              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${sector.score}%` }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                  className={`h-full rounded-full ${labelBarColor(sector.label)}`}
                />
              </div>

              <p className="mt-6 text-sm leading-relaxed text-fg-secondary md:text-base">
                {sector.diagnosis}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    sector.solution === "Ferramenta resolve" ? "bg-brand-blue" : "bg-brand-gold"
                  }`}
                />
                <span className="text-fg-secondary">{sector.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative mt-20 overflow-hidden rounded-2xl border border-brand-blue/30 bg-gradient-to-br from-ink-graphite via-ink-carbon to-ink-graphite p-10 md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-brand-blue/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-magenta/15 blur-[100px]" />

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold-bright">
              Próximo passo
            </span>
          </div>

          <h3
            className="font-display font-normal tracking-tight text-fg-primary"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
          >
            Seu resultado mostra{" "}
            {result.sectors.filter((s) => s.solution === "Ferramenta resolve").length} gargalos que
            a plataforma resolve.{" "}
            <em className="italic text-brand-gold-bright">
              Os outros {result.sectors.filter((s) => s.solution === "Exige consultoria").length}{" "}
              exigem implementação assistida.
            </em>
          </h3>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-secondary md:text-lg">
            Vamos conversar pra eu entender seu caso e te dizer, com honestidade, qual caminho faz
            sentido pra sua clínica. Se não fizer sentido entrar na MD.IA agora, eu também te digo.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-8 py-5 text-base font-semibold text-white transition-all hover:scale-[1.02] md:text-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Quero Implementar
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted transition-colors hover:text-fg-secondary"
        >
          ← Voltar para MD.IA
        </Link>
      </div>
    </motion.div>
  );
}

function labelColor(label: string) {
  if (label === "Crítico") return "text-brand-magenta-bright";
  if (label === "Em risco") return "text-brand-gold-bright";
  if (label === "Estável") return "text-brand-blue-bright";
  return "text-brand-gold-bright";
}

function labelBarColor(label: string) {
  if (label === "Crítico") return "bg-brand-magenta";
  if (label === "Em risco") return "bg-brand-gold";
  if (label === "Estável") return "bg-brand-blue";
  return "bg-brand-gold";
}
