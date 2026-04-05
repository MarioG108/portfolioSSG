import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario G. | Expert Developer",
  description: "Modern dark neon portfolio of Mario G., a professional .NET, Next.js, UI/UX design.",
  metadataBase: new URL("https://www.mariogonz.com"),
  icons: {
    icon: "/m-logo.png",
    apple: "/m-logo.png",
  },
  openGraph: {
    title: "Mario G. | Expert Developer",
    description: "Custom GSAP animations and Tailwind v4 design.",
    type: "website",
    images: ["/m-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario G. | Expert Developer",
    description: "Built with Next.js and GSAP.",
    images: ["/m-logo.png"],
  },
};

import { LanguageProvider } from "@/hooks/useLanguage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-dark-bg selection:bg-neon-cyan/30 selection:text-neon-cyan`}
      >
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
