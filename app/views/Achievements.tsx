"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/portfolio-data";
import { Trophy } from "lucide-react";

export default function AchievementsView() {
  return (
    <PageTransition variant="aurora">
      <div className="relative">
        <section className="relative mx-auto max-w-6xl px-6 pt-40 sm:px-10 overflow-x-clip">
          <Reveal><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// wins"}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl lg:text-8xl max-w-full">
              <span className="italic text-gradient">Achievements</span>.
            </h1>
          </Reveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, rotate: 1, scale: 1.02 }}
                className="glass group relative overflow-hidden rounded-3xl p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-primary/30 to-accent/30 text-primary">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{a.year}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, oklch(var(--aurora-2) / 0.4), transparent, oklch(var(--aurora-1) / 0.4), transparent)",
                    filter: "blur(20px)",
                    zIndex: -1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
