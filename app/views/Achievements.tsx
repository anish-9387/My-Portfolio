"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import CertificateModal from "@/components/CertificateModal";
import { achievements } from "@/lib/portfolio-data";
import { Trophy } from "lucide-react";
import { useRef, useState } from "react";

export default function AchievementsView() {
  const [modal, setModal] = useState<{ src: string; title: string } | null>(null);

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

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
            {achievements.map((a, i) => (
              <AchievementCard key={i} achievement={a} index={i} onOpen={setModal} />
            ))}
          </div>
        </section>
      </div>

      <CertificateModal
        isOpen={!!modal}
        onClose={() => setModal(null)}
        src={modal?.src ?? ""}
        title={modal?.title ?? ""}
      />
    </PageTransition>
  );
}

function AchievementCard({
  achievement,
  index,
  onOpen,
}: {
  achievement: (typeof achievements)[number];
  index: number;
  onOpen: (m: { src: string; title: string }) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasCert = !!achievement.certImage;

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
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={hasCert ? onMove : undefined}
      onMouseLeave={hasCert ? onLeave : undefined}
      onClick={() => { if (hasCert && achievement.certImage) onOpen({ src: achievement.certImage, title: achievement.title }); }}
      className="glass group relative overflow-hidden rounded-3xl p-8"
      style={{
        transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(var(--aurora-2) / 0.18), transparent 45%)",
        }}
      />
      <div className="flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-primary/30 to-accent/30 text-primary">
          <Trophy className="h-6 w-6" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{achievement.year}</span>
      </div>
      <h3 className="mt-6 font-display text-2xl leading-tight">{achievement.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{achievement.detail}</p>
      {hasCert && (
        <span className="mt-4 inline-block text-[10px] font-mono uppercase tracking-widest text-primary">
          Click to view certificate →
        </span>
      )}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "conic-gradient(from 0deg, transparent, oklch(var(--aurora-2) / 0.4), transparent, oklch(var(--aurora-1) / 0.4), transparent)",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />
    </motion.div>
  );
}
