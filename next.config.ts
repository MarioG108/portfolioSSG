import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export para GitHub Pages
  images: {
    unoptimized: true, // Requerido en modo export (sin servidor)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      }
    ],
  },
};

export default nextConfig;
