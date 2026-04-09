"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative border-t border-green-500/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-3 mb-4 sm:mb-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-green-500 flex items-center gap-2">
            <span className="text-green-500">&gt;</span> Quick Links
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, '#skills')}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={(e) => handleSmoothScroll(e, '#resume')}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-3 sm:pt-4 border-t border-green-500/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <p className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-center">
              <span>© {currentYear} Anish Mall.</span>
            </p>
            <p className="font-mono text-green-500 text-xs sm:text-sm">
              &lt;/&gt; with passion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}