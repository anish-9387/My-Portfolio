import type { Metadata } from "next";
import HomeView from "@/app/views/Home";

export const metadata: Metadata = {
  title: "Anish Mall",
  description: "Portfolio of Anish Mall - building secure, intelligent, production-grade systems at the intersection of AI, cybersecurity and full-stack engineering.",
  openGraph: {
    title: "Anish Mall",
    description: "Elite engineer building AI, security, and full-stack systems.",
    type: "website",
  },
};

export default function Home() {
  return <HomeView />;
}