export const profile = {
  name: "Anish Mall",
  handle: "@anishmall",
  role: "AI · Cybersecurity · Full Stack Developer",
  tagline: "I build systems that think, defend, and scale.",
  location: "Chennai, India",
  email: "anishmall3879@gmail.com",
  website: "https://itzanish.is-a.dev",
  linkedin: "https://www.linkedin.com/in/anish-mall",
  github: "https://github.com/anish-9387",
  instagram: "https://www.instagram.com/anish_0308",
  about: [
    "I'm a Computer Science undergraduate specializing in Cyber Security at SRM Institute of Science and Technology, driven by a passion for building intelligent AI systems, secure digital infrastructure, and scalable software that solves real-world problems.",
    "I build end-to-end - from AI-powered applications and full-stack platforms to production-ready products. Hackathons are where I experiment, innovate, and transform ambitious ideas into working solutions under pressure.",
    "I believe exceptional engineering is invisible. The interface should feel effortless, while the architecture beneath it remains robust, secure, and thoughtfully engineered."
  ],
};

export const experience = [
  // {
  //   company: "Barclays",
  //   role: "Summer Analyst Intern (Incoming 2027)",
  //   period: "Summer 2027",
  //   location: "India",
  //   highlights: [
  //     "Selected through Hack-O-Hire - Top 48 finalist across national applicant pool.",
  //     "Joining Barclays technology division as an incoming summer analyst.",
  //   ],
  //   tag: "Incoming",
  // },
  {
    company: "Spazorlabs",
    role: "Full Stack Developer",
    period: "Oct 2025 - Feb 2026",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Shipped production-ready full-stack apps with React, Next.js, Node.js, PostgreSQL (Prisma) and MongoDB.",
      "Built responsive interfaces and scalable backends in tight cross-functional cycles.",
      "Delivered client-ready features with strong DX and observability.",
    ],
    tag: "Full-time",
  },
  {
    company: "Codenex Club SRMIST",
    role: "Director of Web Development",
    period: "Aug 2025 - Present",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Building production-ready components for club platforms.",
      "Organizing hackathons, running technical workshops and mentoring the dev community.",
    ],
    tag: "Leadership",
  },
  {
    company: "HackerRank Campus Crew, SRMIST",
    role: "Technical Head",
    period: "Mar 2026 - Present",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Leading technical initiatives, competitive programming drives and campus outreach.",
    ],
    tag: "Leadership",
  },
  {
    company: "FOSS Club SRMIST",
    role: "Technical Team Member",
    period: "Sep 2025 - Present",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Working across the MERN stack while contributing to FOSS workflows and collaborative reviews.",
    ],
    tag: "Community",
  }
];

export const projects = [
  {
    slug: "sentrix",
    name: "Sentrix",
    tagline: "Enterprise-grade RBAC + security monitoring",
    description:
      "A security operations platform with role-based access control, audit logging, authentication monitoring, IP blocking, alert management and real-time admin workflows.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "WebSockets", "JWT"],
    highlights: ["Real-time alerts", "Granular RBAC", "Immutable audit trail"],
    accent: "195",
    github: "https://github.com/anish-9387/Sentrix",
  },
  {
    slug: "zero-trust-ics",
    name: "Zero-Trust ICS Gateway",
    tagline: "Post-quantum secured industrial gateway",
    description:
      "Zero-trust gateway for industrial control systems with Kyber post-quantum authentication, rogue-node detection and real-time access logging.",
    tech: ["FastAPI", "Kyber PQC", "Python", "Docker"],
    highlights: ["PQ-safe auth", "Rogue node detection", "Live telemetry"],
    accent: "165",
    github: "https://github.com/anish-9387/HackSky",
  },
  {
    slug: "mesh-ai",
    name: "AI Mesh Optimizer",
    tagline: "AI-generated 3D → production-ready assets",
    description:
      "Research platform that transforms high-polygon AI-generated meshes from Tripo3D, Meshy and Shap-E into optimized, production-ready 3D models.",
    tech: ["Python", "PyTorch", "Three.js", "FastAPI"],
    highlights: ["Topology-aware decimation", "UV preservation", "Batch pipeline"],
    accent: "285",
    github: "https://github.com/anish-9387/Optimesh",
  },
  {
    slug: "revio",
    name: "Revio",
    tagline: "Event platform beyond Devfolio & Unstop",
    description:
      "Customizable event and hackathon management platform with advanced workflow automation, submission review and organizer tooling.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    highlights: ["Workflow automation", "Submission review", "Organizer dashboards"],
    accent: "310",
    github: "https://github.com/anish-9387/Hackon",
  },
  {
    slug: "clones",
    name: "Production-grade Clones",
    tagline: "Airbnb · Zerodha · Zoom · LinkedIn · Git VCS",
    description:
      "Full-stack recreations exploring auth, real-time comms, matching engines, feeds and version control internals.",
    tech: ["Next.js", "Express", "MongoDB", "WebSockets", "TypeScript"],
    highlights: ["WebRTC video", "JWT auth", "Custom VCS engine"],
    accent: "225",
    github: "https://github.com/anish-9387/Finsaar",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express", "Bun", "FastAPI", "Flask"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"] },
  { group: "AI / ML", items: ["Scikit-Learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"] },
  { group: "Cloud / DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { group: "Security", items: ["Zero-Trust", "PQC / Kyber", "RBAC", "CTF / Red Team"] },
];

export const achievements = [
  { title: "Hack-O-Hire Finalist", detail: "Top 48 finalist - Hack-O-Hire", year: "2026" },
  { title: "Finalist - USAII Global AI Hackathon", detail: "Hackathon conducted by USAII", year: "2026" },
  { title: "3rd Place - Ossome Hacks 3.0", detail: "Hackathon conducted by Github community", year: "2026" },
  { title: "Special Mention - Infinity Ideathon", detail: "Ideathon conducted by ECell", year: "2026" },
  { title: "Top 60 - HackSky '25", detail: "Cybersecurity hackathon", year: "2025" },
  { title: "Rank 274 - TryHackMe ICS CTF", detail: "Industrial Intrusion CTF global rank", year: "2025" },
];

export const certifications = [
  { name: "AWS Certified Developer - Associate", issuer: "Amazon Web Services", tag: "Cloud" },
  { name: "Fortinet Certified Associate (FCA)", issuer: "Fortinet", tag: "Security" },
  { name: "Fortinet Certified Fundamentals (FCF)", issuer: "Fortinet", tag: "Security" },
  { name: "Cryptography & Network Security", issuer: "NPTEL", tag: "Security" },
  { name: "Programming in Java", issuer: "NPTEL", tag: "Language" },
  { name: "Object Oriented Design & Programming", issuer: "NPTEL", tag: "Engineering" },
];

export const education = [
  { school: "SRM Institute of Science & Technology", degree: "B.Tech CSE - Cyber Security", period: "2024 - 2028", score: "9.92 CGPA" },
  { school: "Lions English School (CBSE)", degree: "Class XII - PCM", period: "2023 - 2024", score: "90%" },
  { school: "Lions English School (CBSE)", degree: "Class X", period: "2021 - 2022", score: "95.6%" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;