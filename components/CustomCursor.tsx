"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [variant, setVariant] = useState<"default" | "link" | "text" | "view">("default");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      if (!t) return setVariant("default");
      if (t.closest("[data-cursor='view']")) setVariant("view");
      else if (t.closest("a, button, [role='button']")) setVariant("link");
      else if (t.closest("input, textarea, [contenteditable='true']")) setVariant("text");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const dotSize = variant === "view" ? 88 : variant === "link" ? 44 : variant === "text" ? 4 : 12;
  const ringSize = variant === "view" ? 88 : variant === "link" ? 60 : 36;
  const dotHeight = variant === "text" ? 22 : dotSize;

  return (
    <div className="custom-cursor-wrapper">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-9999 rounded-full mix-blend-difference"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: dotSize, height: dotHeight,
          background: "white",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-9999 rounded-full border border-primary/60"
        style={{
          x, y, translateX: "-50%", translateY: "-50%",
          width: ringSize, height: ringSize,
        }}
        animate={{ scale: variant === "view" ? 1 : 1, opacity: variant === "view" ? 0.9 : 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {variant === "view" && (
          <span className="flex h-full w-full items-center justify-center text-[10px] font-medium uppercase tracking-widest text-primary">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
}