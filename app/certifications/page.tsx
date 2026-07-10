import type { Metadata } from "next";
import CertificationsView from "@/app/views/Certifications";

export const metadata: Metadata = {
  title: "Certifications - Anish Mall",
  description: "Cloud, security and engineering certifications.",
  openGraph: {
    title: "Certifications - Anish Mall",
    description: "Credentials in cloud, security and engineering.",
  },
};

export default function Certifications() {
  return <CertificationsView />;
}