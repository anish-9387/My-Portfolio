"use client";

import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { education, profile } from "@/lib/portfolio-data";

export default function AboutView() {
  return (
    <PageTransition variant="shards">
      <div className="relative">
        <section className="relative mx-auto max-w-5xl px-6 pt-40 sm:px-10 overflow-x-clip">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{"// about"}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl lg:text-8xl max-w-full">
              An engineer between <span className="italic text-gradient">code</span>, <span className="italic text-gradient">systems</span> and <span className="italic text-gradient">defense</span>.
            </h1>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal delay={0.15}>
              <div className="glass sticky top-32 rounded-3xl p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Identity</div>
                <dl className="mt-6 space-y-4 text-sm">
                  <div><dt className="text-muted-foreground">Name</dt><dd className="mt-0.5">{profile.name}</dd></div>
                  <div><dt className="text-muted-foreground">Focus</dt><dd className="mt-0.5">{profile.role}</dd></div>
                  <div><dt className="text-muted-foreground">Based</dt><dd className="mt-0.5">{profile.location}</dd></div>
                  <div><dt className="text-muted-foreground">Currently</dt><dd className="mt-0.5">B.Tech CSE - Cyber Security, SRMIST</dd></div>
                </dl>
              </div>
            </Reveal>
            <div className="space-y-6">
              {profile.about.map((p, i) => (
                <Reveal key={i} delay={0.2 + i * 0.1}>
                  <p className="text-xl leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-32">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl">Education</h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass group flex flex-col justify-between gap-3 rounded-2xl p-6 md:flex-row md:items-center">
                    <div>
                      <div className="font-display text-2xl">{e.school}</div>
                      <div className="text-sm text-muted-foreground">{e.degree}</div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                      <span className="text-muted-foreground">{e.period}</span>
                      <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">{e.score}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
