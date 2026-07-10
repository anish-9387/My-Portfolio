"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/portfolio-data";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const cards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "anish-mall", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "anish-9387", href: profile.github },
  { icon: Instagram, label: "Instagram", value: "anish_0308", href: profile.instagram },
];

export default function ContactView() {
  return (
    <PageTransition variant="beam">
      <div className="relative">
        <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-32 sm:px-10 overflow-x-clip">
          <Reveal><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// let's talk"}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl lg:text-[10rem] max-w-full">
              Let&apos;s <span className="italic text-gradient">build</span>
              <br /> something.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Open to internships, collaborations, hackathon crews and research conversations. I read every message.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.9 }}
                whileHover={{ y: -6 }}
                className="glass group flex items-center justify-between rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 font-display text-xl">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.a>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {profile.location}
            </div>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}