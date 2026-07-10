"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type Variant =
  | "ink"
  | "shards"
  | "scanline"
  | "particles"
  | "portal"
  | "aurora"
  | "reveal"
  | "beam";

const PARTICLE_COUNT = typeof window !== "undefined" && window.innerWidth < 768 ? 12 : 30;
const SHARD_COUNT = typeof window !== "undefined" && window.innerWidth < 768 ? 4 : 8;

const overlays: Record<Variant, ReactNode> = {
  ink: (
    <motion.div
      key="ink"
      className="pointer-events-none fixed inset-0 z-100"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      animate={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
      style={{
        background: "radial-gradient(circle at 50% 50%, oklch(var(--aurora-2)), oklch(var(--aurora-1) / 0.5))",
      }}
    />
  ),
  shards: (
    <div key="shards" className="pointer-events-none fixed inset-0 z-100 flex">
      {Array.from({ length: SHARD_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          className="h-full flex-1"
          initial={{ scaleY: 1, opacity: 1 }}
          animate={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.9, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
          style={{
            transformOrigin: i % 2 === 0 ? "top" : "bottom",
            background: "linear-gradient(180deg, var(--card), var(--background))",
            borderRight: "1px solid oklch(var(--aurora-2) / 0.2)",
          }}
        />
      ))}
    </div>
  ),
  scanline: (
    <motion.div
      key="scan"
      className="pointer-events-none fixed inset-0 z-100 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
    >
      <motion.div
        className="absolute inset-x-0 h-24 bg-linear-to-b from-transparent via-primary/60 to-transparent"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{ boxShadow: "0 0 80px 20px oklch(var(--aurora-2) / 0.5)" }}
      />
    </motion.div>
  ),
  particles: (
    <motion.div
      key="parts"
      className="pointer-events-none fixed inset-0 z-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0,
          }}
          animate={{
            x: "50vw",
            y: "50vh",
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1, delay: Math.random() * 0.3 }}
        />
      ))}
    </motion.div>
  ),
  portal: (
    <motion.div
      key="portal"
      className="pointer-events-none fixed inset-0 z-100 grid place-items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
    >
      <motion.div
        className="h-4 w-4 rounded-full"
        initial={{ scale: 0, rotate: 0, boxShadow: "0 0 0 0 oklch(var(--aurora-2))" }}
        animate={{ scale: 200, rotate: 360, boxShadow: "0 0 200px 20px oklch(var(--aurora-2) / 0.6)" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        style={{ background: "oklch(var(--aurora-2))" }}
      />
    </motion.div>
  ),
  aurora: (
    <motion.div
      key="aurora"
      className="pointer-events-none fixed inset-0 z-100"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      style={{
        background: "linear-gradient(90deg, transparent, oklch(var(--aurora-1) / 0.9), oklch(var(--aurora-2) / 0.9), transparent)",
      }}
    />
  ),
  reveal: (
    <div key="reveal" className="pointer-events-none fixed inset-0 z-100">
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        style={{ background: "var(--background)" }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        style={{ background: "var(--background)" }}
      />
    </div>
  ),
  beam: (
    <motion.div
      key="beam"
      className="pointer-events-none fixed inset-0 z-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2"
        initial={{ scaleY: 0, opacity: 1 }}
        animate={{ scaleY: 1, opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          background: "linear-gradient(180deg, transparent, oklch(var(--aurora-2)), transparent)",
          boxShadow: "0 0 60px 10px oklch(var(--aurora-2) / 0.6)",
          transformOrigin: "top",
        }}
      />
    </motion.div>
  ),
};

export default function PageTransition({ variant, children }: { variant: Variant; children: ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowOverlay(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showOverlay && overlays[variant]}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}