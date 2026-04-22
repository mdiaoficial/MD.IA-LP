import { Logo } from "./Logo";
import { diagnosticoUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
      </div>

      <div className="container-page relative py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-secondary">
              O ecossistema que devolve ao médico o controle da própria clínica.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
              Plataforma
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#ferramenta" className="text-fg-secondary transition-colors hover:text-fg-primary">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-fg-secondary transition-colors hover:text-fg-primary">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#prova" className="text-fg-secondary transition-colors hover:text-fg-primary">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-fg-secondary transition-colors hover:text-fg-primary">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contato@mdia.com.br"
                  className="text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  contato@mdia.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511932169211?text=Estava%20no%20seu%20site%20e%20quero%20implementar%20a%20MD.IA%20na%20minha%20cl%C3%ADnica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={diagnosticoUrl("footer")} target="_blank" rel="noopener noreferrer" className="text-brand-blue-bright transition-colors hover:text-fg-primary">
                  Fazer diagnóstico →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
              Legal
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="/privacidade" className="text-fg-secondary transition-colors hover:text-fg-primary">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="text-fg-secondary transition-colors hover:text-fg-primary">
                  Termos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
            © 2026 MD.IA · Dr. Daniel Dorta · Todos os direitos reservados
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
            Feito em São Paulo · Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}
