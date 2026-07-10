import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Anish Mall - AI, Cybersecurity & Full Stack Engineer",
  description: "Portfolio of Anish Mall - building secure, intelligent, production-grade systems at the intersection of AI, cybersecurity and full-stack engineering.",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LenisProvider>
          <AmbientBackground />
          <CustomCursor />
          <Nav />
          <main className="relative">
            {children}
          </main>
          <footer className="relative mt-32 border-t border-border/60 py-10 text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Anish Mall</p>
          </footer>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}