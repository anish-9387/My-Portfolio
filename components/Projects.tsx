/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Globe, MessageSquare, Shield, Plane } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "HackSky - Zero-Trust ICS Gateway",
    description:
      "Zero-Trust ICS Gateway Simulator with Post-Quantum Authentication using Kyber cryptography. Real-time access logging and detection of rogue nodes with Flask-based gateway.",
    tags: ["Python", "Flask", "Kyber", "SQLite", "Socket"],
    github: "https://github.com/anish-9387/HackSky",
    demo: "/no-demo",
  },
  {
    icon: MessageSquare,
    title: "SeQura - Real-Time Chat App",
    description:
      "Secure real-time chat application with WebSocket integration, phone-based OTP authentication, online status indicators, and message scheduling features.",
    tags: ["Next.js", "React", "WebSocket", "STOMP", "JWT"],
    github: "https://github.com/anish-9387/SeQura-frontend",
    demo: "/no-demo",
  },
  {
    icon: Plane,
    title: "Wanderlust - Airbnb Clone",
    description:
      "Full-stack Airbnb clone with property listings, user authentication, reviews system, and interactive map integration for property locations.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
    github: "https://github.com/anish-9387/Wanderlust",
    demo: "https://wanderlust-mdwb.onrender.com/",
  },
  {
    icon: Globe,
    title: "English Learning Platform",
    description:
      "Interactive educational website with PDF and PPT content viewer, responsive design, and comprehensive learning resources for English language students.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/anish-9387/English-Website-PBL",
    demo: "https://pbl-for-english.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">
            // Featured Projects
          </h2>
          <div className="h-1 w-24 bg-green-500"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <project.icon className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-green-500/10 text-green-400 rounded-full border border-green-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}