"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const experience = [
  {
    title: "Senior Security Analyst",
    company: "CyberShield Corp",
    period: "2022 - Present",
    description:
      "Lead penetration testing engagements and security assessments for Fortune 500 clients. Developed automated vulnerability detection tools.",
  },
  {
    title: "Security Consultant",
    company: "SecureNet Solutions",
    period: "2020 - 2022",
    description:
      "Conducted red team operations and security audits. Implemented security frameworks and provided remediation guidance.",
  },
  {
    title: "Junior Penetration Tester",
    company: "TechDefense Inc",
    period: "2018 - 2020",
    description:
      "Performed vulnerability assessments and penetration testing. Assisted in security research and tool development.",
  },
];

const education = [
  {
    degree: "M.S. Cybersecurity",
    school: "Stanford University",
    period: "2016 - 2018",
    description:
      "Specialized in network security and cryptography. Thesis on AI-powered threat detection.",
  },
  {
    degree: "B.S. Computer Science",
    school: "MIT",
    period: "2012 - 2016",
    description:
      "Focus on systems programming and security. Dean's List all semesters.",
  },
];

const awards = [
  "Bug Bounty Hall of Fame - Microsoft",
  "DEF CON CTF Top 10 Finalist",
  "OSCP, OSCE, OSWE Certifications",
  "Published Security Researcher",
];

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">
              // My Resume
            </h2>
            <div className="h-1 w-24 bg-green-500"></div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-all w-full sm:w-auto justify-center">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Briefcase className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </motion.div>

            <div className="relative border-l-2 border-green-500/30 pl-8 space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-green-500 border-4 border-black"></div>
                  <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-white">{job.title}</h4>
                      <span className="text-sm text-green-400 font-mono">{job.period}</span>
                    </div>
                    <p className="text-cyan-400 font-semibold mb-3">{job.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Awards */}
          <div>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </motion.div>

            <div className="relative border-l-2 border-green-500/30 pl-8 space-y-8 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-green-500 border-4 border-black"></div>
                  <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-sm text-green-400 font-mono">{edu.period}</span>
                    </div>
                    <p className="text-cyan-400 font-semibold mb-3">{edu.school}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Award className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6"
            >
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-500 mt-1">&gt;</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
