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
  title: "Mario G. | Next.js Expert & UI Designer",
  description: "Modern dark neon portfolio of Mario G., a professional Next.js developer and UI/UX enthusiast.",
  metadataBase: new URL("https://mario-g-portfolio.vercel.app"),
  openGraph: {
    title: "Mario G. | Dark Neon Portfolio",
    description: "Custom GSAP animations and Tailwind v4 design.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario G. | Dark Neon Portfolio",
    description: "Built with Next.js and GSAP.",
    images: ["/og-image.png"],
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
