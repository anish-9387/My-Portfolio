"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            aria-label="Go to Home section"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center overflow-hidden">
              <img
                src="/photo.jpg"
                alt="Logo"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </button>

          {/* Desktop Navigation links on the right */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection("")}
                className="relative px-4 py-2 text-gray-300 transition-colors font-medium cursor-pointer"
              >
                {(activeSection === item.id || hoveredSection === item.id) && (
                  <>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-400"
                    >
                      &lt;{item.name} /&gt;
                    </motion.span>
                    <motion.div
                      layoutId={hoveredSection === item.id ? "navbar-hover-indicator" : "navbar-indicator"}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  </>
                )}
                {activeSection !== item.id && hoveredSection !== item.id && <span>{item.name}</span>}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-green-500 p-2  cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-b border-green-500/20"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-green-500/10 text-green-400"
                    : "text-gray-300 hover:bg-green-500/5 hover:text-green-400"
                }`}
              >
                {activeSection === item.id ? `<${item.name} />` : item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
