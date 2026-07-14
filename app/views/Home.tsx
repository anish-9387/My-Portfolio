"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, FileText, Handshake } from "lucide-react";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { profile } from "@/lib/portfolio-data";

export default function HomeView() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <PageTransition variant="ink">
      <section ref={ref} className="relative flex min-h-screen flex-col justify-center px-6 pt-32 sm:px-10">
        <motion.div style={{ y: y2, willChange: "transform" }} className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <Handshake className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">Available for Collaborations &middot; Feel free to contact</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="md:hidden mb-8 w-full max-w-xs mx-auto"
            >
              <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden border border-border/40">
                <Image
                  src="/photo.jpg"
                  alt="Anish Mall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 0"
                  priority
                />
              </div>
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h1
                className="font-display text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] tracking-tight max-w-full overflow-x-clip"
              >
                {profile.name.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mr-4 inline-block"
                  >
                    {i === 1 ? <span className="text-gradient italic">{word}</span> : word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9 }}
                className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
              >
                {profile.tagline} I build across <span className="text-foreground">AI</span>,{" "}
                <span className="text-foreground">cybersecurity</span> and{" "}
                <span className="text-foreground">full-stack systems</span> - from scratch to production-ready SaaS.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.9 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_var(--glow)]"
                >
                  View selected work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover-lift"
                >
                  Get in touch
                </Link>
                <a
                  href="/Anish%20Mall.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover-lift"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <div className="ml-2 flex items-center gap-2">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass grid h-10 w-10 place-items-center rounded-full transition-transform hover:scale-110">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-10 w-10 place-items-center rounded-full transition-transform hover:scale-110">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${profile.email}`} aria-label="Email" className="glass grid h-10 w-10 place-items-center rounded-full transition-transform hover:scale-110">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block relative shrink-0 w-44 lg:w-52 rounded-2xl overflow-hidden border border-border/40"
            >
              <Image
                src="/photo.jpg"
                alt="Anish Mall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 11rem, 13rem"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div style={{ y: y1, willChange: "transform" }} className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:flex">
          <span>lat 13.0827</span>
          <span>lon 80.2707</span>
          <span>chennai &middot; in</span>
        </motion.div>
      </section>

      <section className="border-y border-border/60 py-6">
        <div className="flex gap-12 overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-12 font-display text-3xl italic"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {["AI Engineering", "Cybersecurity", "Full Stack", "Hackathons", "Research", "AI Engineering", "Cybersecurity", "Full Stack", "Hackathons", "Research"].map((w, i) => (
              <span key={i} className="flex items-center gap-12 text-muted-foreground">
                {w}
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}