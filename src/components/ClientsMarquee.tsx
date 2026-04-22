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
];

export function ClientsMarquee() {
  const duplicated = [...clients, ...clients, ...clients];

  return (
    <section
      aria-label="Clínicas que confiam na MD.IA"
      className="relative overflow-hidden border-y border-white/5 bg-ink-black py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-page relative mb-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1877F2]/30 bg-[#1877F2]/5 px-4 py-1.5">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
              fill="#1877F2"
            />
          </svg>
          <span className="font-sans text-xs font-medium text-fg-primary md:text-sm">
            Meta Business Partner
          </span>
        </div>

        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#EA4335]/30 bg-white/[0.03] px-4 py-1.5">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
              fill="#EA4335"
            />
          </svg>
          <span className="font-sans text-xs font-medium text-fg-primary md:text-sm">
            Google Partner
          </span>
        </div>

        <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted md:inline">
          Certificação oficial
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
