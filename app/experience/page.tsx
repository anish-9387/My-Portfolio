import type { Metadata } from "next";
import ExperienceView from "@/app/views/Experience";

export const metadata: Metadata = {
  title: "Experience - Anish Mall",
  description: "Roles, internships and leadership across engineering and community.",
  openGraph: {
    title: "Experience - Anish Mall",
    description: "Timeline of engineering and leadership experience.",
  },
};

export default function Experience() {
  return <ExperienceView />;
}