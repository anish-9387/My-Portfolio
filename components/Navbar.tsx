"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Go to About Me section"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center overflow-hidden">
              {/* Replace with your actual logo image */}
              <Image
                src="/photo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
          </button>

          {/* Navigation links on the right */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-green-400 hover:text-green-300 transition-colors font-medium px-4 py-2 border border-green-500 rounded-md hover:bg-green-500/10 transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}