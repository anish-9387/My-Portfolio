"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full text-center">
        {/* Terminal Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/30 bg-green-500/5 mb-8"
        >
          <ChevronRight className="w-4 h-4 text-green-500" />
          <span className="text-green-400 font-mono text-sm">~/portfolio</span>
          <span className="text-green-500 font-mono text-sm">$ whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-green-200">Hello, I&apos;m </span>
          <span className="text-green-500">Anish Mall</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <ChevronRight className="w-6 h-6 text-green-500" />
          <h2 className="text-xl sm:text-2xl md:text-3xl text-green-100 font-mono">
            Full Stack Web Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transforming ideas into reality through code. Passionate about building
          innovative web solutions with a keen enthusiasm for cybersecurity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-all flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
          >
            &lt; View Projects /&gt;
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-green-500 text-green-400 font-semibold rounded-md hover:bg-green-500/10 transition-all w-full sm:w-auto cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}