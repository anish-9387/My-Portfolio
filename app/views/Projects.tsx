"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/portfolio-data";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef } from "react";

export default function ProjectsView() {
  return (
    <PageTransition variant="scanline">
      <div className="relative">
        <section className="relative mx-auto max-w-6xl px-6 pt-40 sm:px-10 overflow-x-clip">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// selected work"}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl lg:text-8xl max-w-full">
              Things I&apos;ve <span className="italic text-gradient">built</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A cross-section of what I ship - from security infrastructure to AI systems to production SaaS.
            </p>
          </Reveal>

          <div className="mt-20 space-y-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * -6}deg`);
    el.style.setProperty("--ry", `${px * 8}deg`);
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="view"
      className="glass group relative overflow-hidden rounded-3xl p-8 sm:p-12"
      style={{
        transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.82 0.15 ${project.accent} / 0.18), transparent 45%)`,
        }}
      />
      <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
        <div className="font-mono text-xs text-muted-foreground">0{index + 1}</div>
        <div>
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="font-display text-4xl sm:text-5xl">{project.name}</h3>
            <span className="text-sm text-muted-foreground">- {project.tagline}</span>
          </div>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full" style={{ background: `oklch(0.82 0.15 ${project.accent})` }} />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-14 w-14 place-items-center rounded-full border border-border transition-all hover:scale-110 hover:border-primary/50"
            style={{ boxShadow: `0 0 40px -10px oklch(0.82 0.15 ${project.accent} / 0.6)` }}
          >
            <Github className="h-5 w-5 transition-transform hover:-translate-y-0.5" />
          </a>
          <div className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
