/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { FolderGit2, Code2, Trophy, Calendar } from "lucide-react";

const stats = [
  { icon: FolderGit2, label: "Projects Completed", value: "10+" },
  { icon: Code2, label: "Technologies Learned", value: "15+" },
  { icon: Trophy, label: "Hackathons Participated", value: "5+" },
  { icon: Calendar, label: "Years of Experience", value: "1.5+" },
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
            className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:border-green-500/40 transition-all duration-300"
          >
            <div className="font-mono text-sm space-y-2">
              <p className="text-green-400">
                <span className="text-gray-500">const</span> aboutMe ={" "}
                <span className="text-gray-500">{"{"}</span>
              </p>
              <p className="pl-6 text-cyan-400">
                name: <span className="text-yellow-400">&quot;Anish Mall&quot;</span>,
              </p>
              <p className="pl-6 text-cyan-400">
                role: <span className="text-yellow-400">&quot;Full Stack Web Developer&quot;</span>,
              </p>
              <p className="pl-6 text-cyan-400">
                location:{" "}
                <span className="text-yellow-400">&quot;Chennai, India&quot;</span>,
              </p>
              <p className="text-green-400">
                <span className="text-gray-500">{"}"}</span>
              </p>
            </div>

            <div className="mt-8 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                I&apos;m a passionate Full Stack Web Developer with expertise in turning
                ideas into real-world projects that solve practical problems. Currently
                pursuing B.Tech in CSE from SRMIST, Kattankulathur, I have strong experience
                in DSA problem-solving and am actively exploring the cybersecurity domain.
              </p>
              <p className="leading-relaxed">
                I actively participate in hackathons and team projects, building impactful
                solutions through collaboration. Always eager to learn new technologies,
                share knowledge, and contribute to meaningful projects that make a difference.
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
                className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
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