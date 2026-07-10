import type { Metadata } from "next";
import AboutView from "@/app/views/About";

export const metadata: Metadata = {
  title: "About - Anish Mall",
  description: "The story, values and craft behind Anish Mall - a full-stack engineer specializing in AI and cybersecurity.",
  openGraph: {
    title: "About - Anish Mall",
    description: "Engineer between code, systems and defense.",
  },
};

export default function About() {
  return <AboutView />;
}