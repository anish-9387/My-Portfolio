"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { certifications } from "@/lib/portfolio-data";
import { Award } from "lucide-react";

export default function CertificationsView() {
  return (
    <PageTransition variant="reveal">
      <div className="relative">
        <section className="relative mx-auto max-w-6xl px-6 pt-40 sm:px-10 overflow-x-clip">
          <Reveal><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// credentials"}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl lg:text-8xl max-w-full">
              <span className="italic text-gradient">Certifications</span>.
            </h1>
          </Reveal>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.9 }}
                whileHover={{ y: -4 }}
                className="glass group relative flex items-center gap-5 overflow-hidden rounded-2xl p-6"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:rotate-6">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-xl leading-tight">{c.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">{c.tag}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
