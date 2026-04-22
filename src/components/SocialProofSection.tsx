const cases = [
  {
    metric: "2% → 14%",
    metricSub: "conversão em consulta",
    headline: "Quintuplicamos a taxa de conversão da clínica.",
    detail:
      "Antes: o lead entrava em contato e virava desculpa pra não agendar. Hoje: a Secretar.IA prepara, contorna objeção e entrega pronto pra secretária humana fechar.",
    author: "Clínica · identidade reservada por ética",
    accent: "blue",
  },
  {
    metric: "+40%",
    metricSub: "de agendamento mensal",
    headline: "Mais agenda preenchida. Mesma equipe.",
    detail:
      "Não contratou ninguém. A mesma recepção operando, só que sem perder paciente nenhum no caminho entre o primeiro contato e a consulta marcada.",
    author: "Clínica · identidade reservada por ética",
    accent: "magenta",
  },
  {
    metric: "De quase fechar",
    metricSub: "pra operação consistente",
    headline: "O tracking devolveu a previsibilidade de lead qualificado.",
    detail:
      "A IA avisa a Meta e o Google quem virou contato, quem tem interesse, quem desistiu e quem agendou. As plataformas pararam de otimizar por clique barato e passaram a mirar o lead que converte.",
    author: "Clínica · identidade reservada por ética",
    accent: "gold",
  },
] as const;

const accentText = {
  gold: "text-brand-gold-bright",
  blue: "text-brand-blue-bright",
  magenta: "text-brand-magenta-bright",
} as const;

const accentBorder = {
  gold: "from-brand-gold/40",
  blue: "from-brand-blue/40",
  magenta: "from-brand-magenta/40",
} as const;

export function SocialProofSection() {
  return (
    <section id="prova" className="relative overflow-hidden bg-ink-black py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[400px] w-[500px] rounded-full bg-brand-gold/8 blur-[140px]" />
        <div className="absolute right-0 bottom-1/3 h-[400px] w-[500px] rounded-full bg-brand-blue/10 blur-[140px]" />
      </div>

      <div className="container-page relative">
        <div className="mb-20 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-brand-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold-bright">
              Resultados reais · clientes MD.IA
            </span>
          </div>

          <h2
            className="font-display font-normal tracking-tight text-fg-primary"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
          >
            O que acontece
            <br />
            <em className="italic">quando a operação trava</em>
            <br />
            no lugar certo.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-secondary md:text-xl">
            Três clínicas. Três gargalos diferentes. Três resultados mensuráveis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-graphite p-8 md:p-10"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accentBorder[c.accent]} to-transparent`}
              />

              <div className="mb-2 flex items-baseline gap-2">
                <span
                  className={`font-display font-semibold tracking-tight ${accentText[c.accent]}`}
                  style={{
                    fontSize: "clamp(2rem, 3vw, 2.75rem)",
                    lineHeight: "1",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.metric}
                </span>
              </div>
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                {c.metricSub}
              </div>

              <p className="font-display text-xl font-normal italic leading-tight text-fg-primary md:text-2xl">
                “{c.headline}”
              </p>

              <p className="mt-6 text-sm leading-relaxed text-fg-secondary">{c.detail}</p>

              <div className="mt-6 border-t border-white/5 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                {c.author}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="max-w-xl text-base text-fg-secondary md:text-lg">
            Cada número saiu de uma clínica real. Por ética médica, nenhuma é nomeada sem autorização escrita.
          </p>
        </div>
      </div>
    </section>
  );
}
