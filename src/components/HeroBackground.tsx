"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.75) 80%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.75) 80%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 60%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <Image
          src="/dr-dan.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[75%_center]"
          style={{
            opacity: 0.14,
            filter: "grayscale(0.4) contrast(1.05) brightness(0.9)",
            mixBlendMode: "luminosity",
          }}
        />
      </div>

      <div className="absolute inset-0 grid-lines opacity-40" />

      <div className="absolute -left-32 top-1/4 h-[700px] w-[700px] rounded-full bg-brand-blue/25 blur-[140px]" />
      <div className="absolute -right-20 top-1/2 h-[500px] w-[500px] rounded-full bg-brand-magenta/20 blur-[130px]" />
      <div className="absolute left-1/2 -top-32 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-blue-bright/15 blur-[120px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        {[...Array(15)].map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          const duration = 3 + (i % 4);
          const delay = (i * 0.2) % 3;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-0.5 w-0.5 rounded-full bg-white"
              style={{ left: `${left}%`, top: `${top}%` }}
            />
          );
        })}
      </div>

      <svg
        className="absolute bottom-20 left-0 right-0 h-48 w-full"
        viewBox="0 0 1400 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A944" stopOpacity="0" />
            <stop offset="15%" stopColor="#D4A944" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E8C467" stopOpacity="1" />
            <stop offset="85%" stopColor="#D4A944" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4A944" stopOpacity="0" />
          </linearGradient>
          <filter id="ecg-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ecg-glow-strong">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M0 80 L250 80 L280 80 L295 55 L310 105 L325 30 L340 125 L355 80 L600 80 L630 80 L645 55 L660 105 L675 30 L690 125 L705 80 L950 80 L980 80 L995 55 L1010 105 L1025 30 L1040 125 L1055 80 L1400 80"
          stroke="url(#ecg-gradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />

        <motion.path
          d="M0 80 L250 80 L280 80 L295 55 L310 105 L325 30 L340 125 L355 80 L600 80 L630 80 L645 55 L660 105 L675 30 L690 125 L705 80 L950 80 L980 80 L995 55 L1010 105 L1025 30 L1040 125 L1055 80 L1400 80"
          stroke="url(#ecg-gradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#ecg-glow-strong)"
          initial={{ pathLength: 0.18, pathOffset: 0 }}
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-black" />
    </div>
  );
}
