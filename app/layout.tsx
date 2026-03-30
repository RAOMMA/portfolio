import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Mubashir Ali — Senior ML Engineer",
  description:
    "AI/ML Engineer specializing in LLMs, RAG pipelines, and computer vision. Building production AI systems serving 10K+ users. Based in Lahore, Pakistan.",
  keywords: [
    "ML Engineer",
    "AI Engineer",
    "LangChain",
    "RAG",
    "Computer Vision",
    "FastAPI",
    "Python",
    "LLM",
    "Pakistan",
    "Freelance AI Engineer",
  ],
  authors: [{ name: "Muhammad Mubashir Ali" }],
  openGraph: {
    title: "Muhammad Mubashir Ali — Senior ML Engineer",
    description: "Building production AI systems that scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${mono.variable}`}>
      <body className="antialiased bg-[#0a0a12] text-slate-100">
        {children}
      </body>
    </html>
  );
}
