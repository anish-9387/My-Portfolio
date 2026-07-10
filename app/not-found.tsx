import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Page Not Found</span>
      <h1 className="mt-4 font-display text-[clamp(3rem,10vw,10rem)] leading-none tracking-tight">
        <span className="text-gradient italic">Lost</span> in space.
      </h1>
      <p className="mt-6 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist - or maybe it was never built.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_var(--glow)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
        Back home
      </Link>
    </div>
  );
}