"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      // Check if we're in hero section (no active state)
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const { offsetTop, offsetHeight } = heroElement;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection("");
          return;
        }
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Call on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/90 backdrop-blur-md border-b border-green-500/20"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
            aria-label="Go to Home section"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center overflow-hidden transition-all group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] cursor-pointer">
              <img
                src="/photo.jpg"
                alt="Logo"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </button>

          {/* Desktop Navigation links on the right */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection("")}
                className="font-mono text-sm text-gray-400 hover:text-green-400 transition-colors relative group cursor-pointer"
              >
                <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {"<"}
                </span>
                {activeSection === item.id && (
                  <span className="text-green-400">{item.name}</span>
                )}
                {activeSection !== item.id && <span>{item.name}</span>}
                <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {"/>"}
                </span>
                {(activeSection === item.id || hoveredSection === item.id) && (
                  <motion.span
                    layoutId={hoveredSection === item.id && activeSection !== item.id ? "navbar-hover-indicator" : "navbar-indicator"}
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-green-500"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-green-400 hover:text-green-300 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-green-500/20 pt-4 cursor-pointer"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 font-mono transition-colors ${activeSection === item.id
                  ? "text-green-400"
                  : "text-gray-400 hover:text-green-400"
                  }`}
              >
                {">"} {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}