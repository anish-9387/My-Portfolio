import type { Metadata } from "next";
import ContactView from "@/app/views/Contact";

export const metadata: Metadata = {
  title: "Contact - Anish Mall",
  description: "Let's build something.",
  openGraph: {
    title: "Contact - Anish Mall",
    description: "Let's build something - reach out for collaborations, internships or research.",
  },
};

export default function Contact() {
  return <ContactView />;
}