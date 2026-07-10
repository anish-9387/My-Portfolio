"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { skills } from "@/lib/portfolio-data";

export default function SkillsView() {
  return (
    <PageTransition variant="portal">
      <div className="relative">
        <section className="relative mx-auto max-w-6xl px-6 pt-40 sm:px-10 overflow-x-clip">
          <Reveal><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// the stack"}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl lg:text-8xl max-w-full">
              Tools I <span className="italic text-gradient">work with</span>.
            </h1>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-3xl p-8"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">/{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 font-display text-3xl">{s.group}</div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <motion.span
                      key={it}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {it}
                    </motion.span>
                  ))}
                </div>
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
