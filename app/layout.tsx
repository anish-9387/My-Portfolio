import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anish Mall",
  description: "Portfolio of Anish Mall - Full Stack Web Developer specializing in MERN stack, Next.js, and modern web technologies. Explore my projects, skills, and experience.",
  openGraph: {
    title: "Anish Mall",
    description: "Portfolio of Anish Mall - Full Stack Web Developer specializing in MERN stack, Next.js, and modern web technologies.",
    url: "https://anish9387.vercel.app",
    siteName: "Anish Mall Portfolio",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}