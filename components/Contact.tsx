/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoLink = `mailto:anishmall3879@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-4">
            // Get In Touch
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Available for freelance opportunities and collaborations. Let&apos;s connect and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <span className="text-green-500">&gt;</span> Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:anishmall3879@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      anishmall3879@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+919510779387"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      +91 9510779387
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-cyan-400">Chennai, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <span className="text-green-500">&gt;</span> Connect
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/anish-9387"
                  className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-green-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anish-mall/"
                  className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-green-400" />
                </a>
                <a
                  href="https://www.instagram.com/anish_0308/"
                  className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-green-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span className="text-green-500">&gt;</span> Send Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-green-500/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email id"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-green-500/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-green-500/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter message"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-green-500/40 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}