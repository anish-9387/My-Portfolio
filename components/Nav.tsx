"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/lib/portfolio-data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6"
    >
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          <span>{profile.handle}</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className="relative rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className={active ? "text-primary" : ""}>{l.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <button
            className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 lg:hidden"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm hover:bg-primary/10"
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-border/40 pt-2 mt-2">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-xs text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}