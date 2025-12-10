"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Code } from "lucide-react";

const stats = [
  { icon: Shield, label: "Security Expert", value: "5+ Years" },
  { icon: Lock, label: "Systems Secured", value: "200+" },
  { icon: Eye, label: "Vulnerabilities Found", value: "500+" },
  { icon: Code, label: "Security Tools Built", value: "15+" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">
            // About Me
          </h2>
          <div className="h-1 w-24 bg-green-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6"
          >
            <div className="font-mono text-sm space-y-2">
              <p className="text-green-400">
                <span className="text-gray-500">const</span> aboutMe ={" "}
                <span className="text-gray-500">{"{"}</span>
              </p>
              <p className="pl-6 text-cyan-400">
                name: <span className="text-yellow-400">"John Doe"</span>,
              </p>
              <p className="pl-6 text-cyan-400">
                role: <span className="text-yellow-400">"Security Analyst"</span>,
              </p>
              <p className="pl-6 text-cyan-400">
                location:{" "}
                <span className="text-yellow-400">"San Francisco, CA"</span>,
              </p>
              <p className="text-green-400">
                <span className="text-gray-500">{"}"}</span>
              </p>
            </div>

            <div className="mt-8 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                I'm a passionate cybersecurity professional with expertise in penetration
                testing, vulnerability assessment, and security architecture. My mission
                is to protect organizations from evolving cyber threats through proactive
                security measures and innovative solutions.
              </p>
              <p className="leading-relaxed">
                With a background in ethical hacking and security research, I've helped
                numerous organizations strengthen their security posture. I believe in
                continuous learning and staying ahead of the threat landscape.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-green-500/40 transition-colors"
              >
                <stat.icon className="w-10 h-10 text-green-500 mb-3" />
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
