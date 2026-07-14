"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import CertificateModal from "@/components/CertificateModal";
import { certifications } from "@/lib/portfolio-data";
import { Award } from "lucide-react";
import { useRef, useState } from "react";

export default function CertificationsView() {
  const [modal, setModal] = useState<{ src: string; title: string } | null>(null);

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

          <div className="mt-20 grid gap-5 md:grid-cols-2 cursor-pointer">
            {certifications.map((c, i) => (
              <CertCard key={c.name} certification={c} index={i} onOpen={setModal} />
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

function CertCard({
  certification,
  index,
  onOpen,
}: {
  certification: (typeof certifications)[number];
  index: number;
  onOpen: (m: { src: string; title: string }) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasCert = !!certification.certImage;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * -4}deg`);
    el.style.setProperty("--ry", `${px * 6}deg`);
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06, duration: 0.9 }}
      onMouseMove={hasCert ? onMove : undefined}
      onMouseLeave={hasCert ? onLeave : undefined}
      onClick={() => { if (hasCert && certification.certImage) onOpen({ src: certification.certImage, title: certification.name }); }}
      className="glass group relative flex items-center gap-5 overflow-hidden rounded-2xl p-6"
      style={{
        transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(var(--aurora-2) / 0.12), transparent 45%)",
        }}
      />
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:rotate-6">
        <Award className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <div className="font-display text-xl leading-tight">{certification.name}</div>
        <div className="mt-1 text-sm text-muted-foreground">{certification.issuer}</div>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">{certification.tag}</span>
        {hasCert && (
          <span className="hidden text-[10px] font-mono uppercase tracking-widest text-primary transition-opacity group-hover:block sm:block">
            View →
          </span>
        )}
      </div>
    </motion.div>
  );
}
