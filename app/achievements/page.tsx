import type { Metadata } from "next";
import AchievementsView from "@/app/views/Achievements";

export const metadata: Metadata = {
  title: "Achievements - Anish Mall",
  description: "Hackathon wins, CTF ranks and academic honors.",
  openGraph: {
    title: "Achievements - Anish Mall",
    description: "Wins, ranks and academic honors.",
  },
};

export default function Achievements() {
  return <AchievementsView />;
}