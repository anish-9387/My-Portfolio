"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Offensive Security",
    skills: [
      { name: "Penetration Testing", level: 95 },
      { name: "Vulnerability Assessment", level: 90 },
      { name: "Red Team Operations", level: 85 },
      { name: "Social Engineering", level: 80 },
    ],
  },
  {
    title: "Defensive Security",
    skills: [
      { name: "Incident Response", level: 90 },
      { name: "SIEM Management", level: 85 },
      { name: "Threat Hunting", level: 88 },
      { name: "Malware Analysis", level: 75 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Burp Suite / OWASP ZAP", level: 95 },
      { name: "Metasploit / Cobalt Strike", level: 85 },
      { name: "Wireshark / tcpdump", level: 90 },
      { name: "Nmap / Nessus", level: 92 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Bash / PowerShell", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "Go / Rust", level: 70 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-green-400 text-sm font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-green-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">
            // Technical Skills
          </h2>
          <div className="h-1 w-24 bg-green-500"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <span className="text-green-500">&gt;</span> {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
