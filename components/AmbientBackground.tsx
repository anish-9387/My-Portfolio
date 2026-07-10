"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    const move = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="animate-aurora absolute -left-40 top-[-20%] h-[70vh] w-[70vw] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(var(--aurora-1) / 0.5), transparent 70%)",
          transform: "translate(var(--mx, 0px), var(--my, 0px))",
          willChange: "transform",
        }}
      />
      <div
        className="animate-aurora absolute right-[-15%] bottom-[-25%] h-[80vh] w-[80vw] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(var(--aurora-2) / 0.4), transparent 70%)",
          animationDelay: "-8s",
          transform: "translate(calc(var(--mx, 0px) * -1), calc(var(--my, 0px) * -1))",
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}