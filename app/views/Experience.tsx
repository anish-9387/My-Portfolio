"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/portfolio-data";
import { useRef } from "react";

export default function ExperienceView() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition variant="particles">
      <div className="relative">
        <section className="relative mx-auto max-w-5xl px-6 pt-40 sm:px-10 overflow-x-clip">
          <Reveal><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// timeline"}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl lg:text-8xl max-w-full">
              <span className="italic text-gradient">Experience</span>.
            </h1>
          </Reveal>

          <div ref={ref} className="relative mt-24 pl-6 sm:pl-10">
            <div className="absolute left-1 top-0 h-full w-px bg-border sm:left-2" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-1 top-0 w-px bg-linear-to-b from-primary via-accent to-transparent sm:left-2"
            />

            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                className="relative mb-12"
              >
                <div className="absolute -left-6 top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_5px_oklch(0.82_0.15_195/0.4)] sm:-left-[38px]" />
                <div className="glass rounded-2xl p-6 sm:p-8 hover-lift">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="font-display text-2xl sm:text-3xl">{e.role}</div>
                      <div className="mt-1 text-sm text-primary">{e.company}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">{e.tag}</span>
                      <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
