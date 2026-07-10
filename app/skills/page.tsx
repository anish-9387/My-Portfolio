import type { Metadata } from "next";
import SkillsView from "@/app/views/Skills";

export const metadata: Metadata = {
  title: "Skills - Anish Mall",
  description: "The stack - languages, frameworks, cloud, AI and security tooling.",
  openGraph: {
    title: "Skills - Anish Mall",
    description: "Tools I work with - from languages to cloud infrastructure.",
  },
};

export default function Skills() {
  return <SkillsView />;
}