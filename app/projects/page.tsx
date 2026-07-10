import type { Metadata } from "next";
import ProjectsView from "@/app/views/Projects";

export const metadata: Metadata = {
  title: "Projects - Anish Mall",
  description: "Selected engineering projects.",
  openGraph: {
    title: "Projects - Anish Mall",
    description: "Things I've built - from security infrastructure to AI systems.",
  },
};

export default function Projects() {
  return <ProjectsView />;
}