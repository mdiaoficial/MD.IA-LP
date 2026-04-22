"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export function DashboardMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, -4]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, 4]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const sideCardX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const sideCardY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const goldCardX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const goldCardY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const statusX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1600px" }}
      className="relative"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
          }}
          className="relative will-change-transform"
        >
          <div className="pointer-events-none absolute -inset-24 rounded-[48px] bg-brand-blue/25 blur-[100px]" />
          <div className="pointer-events-none absolute -inset-16 rounded-[48px] bg-brand-magenta/20 blur-[80px]" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_60px_-15px_rgba(30,123,255,0.4)]">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl border border-white/5" />

            <Image
              src="/screenshots/funil.png"
              alt="Funil de vendas da MD.IA mostrando etapas de lead, follow-up, interessado, agendado e conversão"
              width={1400}
              height={720}
              priority
              className="block h-auto w-full"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.02]" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: sideCardX, y: sideCardY, translateZ: 60 }}
            className="absolute -right-6 -top-8 z-20 hidden md:block lg:-right-14 lg:-top-10"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-brand-magenta/25 blur-[40px]" />
              <div className="relative w-[260px] overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(184,69,232,0.3)]">
                <Image
                  src="/screenshots/traqueamento_de_anuncios.png"
                  alt="Tela de segmentação e tracking de anúncios com categorias, origem e UTM"
                  width={520}
                  height={740}
                  className="block h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.02]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: goldCardX, y: goldCardY, translateZ: 80 }}
            className="absolute -bottom-6 -left-6 z-20 hidden sm:block md:-bottom-8 md:-left-10"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-graphite/95 p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-brand-gold/15 blur-[30px]" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/15 ring-1 ring-brand-gold/30">
                  <span className="text-gradient-gold text-lg font-bold">↑</span>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted">
                    Perda recuperada · mês
                  </div>
                  <div className="text-gradient-gold font-display text-xl font-extrabold leading-none">
                    R$ 47.200
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}
