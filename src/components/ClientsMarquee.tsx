"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Client = {
  src: string;
  alt: string;
  invert: boolean;
};

const clients: Client[] = [
  { src: "/cases/CONEX.png", alt: "Conex", invert: true },
  { src: "/cases/MMI.png", alt: "MMI Clinic", invert: true },
  { src: "/cases/Mizu.jpeg", alt: "Mizu Centro de Cuidado Humano", invert: true },
  { src: "/cases/Volup-clean.png", alt: "Instituto Volup", invert: false },
  { src: "/cases/WN-clean.png", alt: "Dr. Waldemar Neto Medicina Esportiva", invert: false },
  { src: "/cases/bis_farmacutica_logo.jpeg", alt: "Bios Farmacêutica", invert: false },
  { src: "/cases/clinica-baumgarten.webp", alt: "Clínica Baumgarten", invert: true },
  { src: "/cases/plenitud.png", alt: "Plenitud Instituto de Medicina Integrativa", invert: true },
  { src: "/cases/acelerador.webp", alt: "Acelerador Médico", invert: true },
  { src: "/cases/dra-saene.jpeg", alt: "Dra. Saene Spinelli · Medicina e Saúde", invert: true },
];

export function ClientsMarquee() {
  const duplicated = [...clients, ...clients, ...clients];

  return (
    <section
      id="clientes"
      aria-label="Clínicas que confiam na MD.IA"
      className="relative overflow-hidden border-y border-white/5 bg-ink-black py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-page relative mb-12"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-brand-gold" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold-bright">
            Certificações oficiais
          </span>
          <div className="h-px w-8 bg-brand-gold" />
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          <SealCard
            subtitle="Parceria oficial"
            title="Meta Business Partner"
            accent="blue"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  fill="#1877F2"
                />
              </svg>
            }
          />
          <SealCard
            subtitle="Parceria oficial"
            title="Google Partner"
            accent="multi"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            }
          />
          <SealCard
            subtitle="Conformidade"
            title="LGPD"
            accent="gold"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                  d="M12 2L3 7v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V7l-9-5z"
                  stroke="#E8C467"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="rgba(232, 196, 103, 0.1)"
                />
                <path
                  d="M8 12l3 3 5-6"
                  stroke="#E8C467"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="container-page relative mb-16 flex items-center justify-center gap-4"
      >
        <div className="h-px w-14 bg-brand-gold/60" />
        <span className="font-mono text-sm uppercase tracking-[0.28em] text-fg-secondary md:text-base">
          Empresas que confiam na MD.IA
        </span>
        <div className="h-px w-14 bg-brand-gold/60" />
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-black to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-black to-transparent md:w-48" />

        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-24 md:gap-32"
        >
          {duplicated.map((c, i) => (
            <ClientLogo key={i} {...c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SealCard({
  subtitle,
  title,
  icon,
  accent,
}: {
  subtitle: string;
  title: string;
  icon: React.ReactNode;
  accent: "blue" | "multi" | "gold";
}) {
  const iconBg =
    accent === "blue"
      ? "bg-[#1877F2]/10 ring-[#1877F2]/20"
      : accent === "multi"
        ? "bg-white/5 ring-white/10"
        : "bg-brand-gold/10 ring-brand-gold/30";

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-ink-graphite to-ink-carbon p-4 transition-transform hover:-translate-y-0.5 md:p-5">
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(212, 169, 68, 0.45), rgba(184, 69, 232, 0.15), rgba(30, 123, 255, 0.2))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl bg-brand-gold/10 blur-[40px]" />
      </div>

      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ring-1 ${iconBg}`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand-gold-bright">
            {subtitle}
          </div>
          <div className="mt-0.5 font-display text-base font-medium leading-tight text-fg-primary md:text-lg">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientLogo({ src, alt, invert }: Client) {
  return (
    <div className="group/logo flex h-36 shrink-0 items-center justify-center md:h-44">
      <Image
        src={src}
        alt={alt}
        width={560}
        height={240}
        className="h-full w-auto object-contain transition-opacity duration-500"
        style={{
          maxWidth: "340px",
          filter: invert ? "invert(1) hue-rotate(180deg)" : undefined,
          opacity: 0.92,
        }}
      />
    </div>
  );
}
