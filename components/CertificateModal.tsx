/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type CertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
};

export default function CertificateModal({ isOpen, onClose, src, title }: CertificateModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-8"
          style={{ backdropFilter: "blur(32px) saturate(140%)", WebkitBackdropFilter: "blur(32px) saturate(140%)", backgroundColor: "color-mix(in oklab, var(--background) 75%, transparent)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-3xl border border-border bg-card shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-lg transition-all hover:scale-110 hover:border-primary/50 hover:text-primary"
            >
              <X className="h-5 w-5 cursor-pointer" />
            </button>

            <div className="flex items-center justify-center p-2">
              <img
                src={src}
                alt={title}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
