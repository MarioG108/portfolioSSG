import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export para GitHub Pages
  images: {
    unoptimized: true, // Requerido en modo export (sin servidor)

    qualities: [25, 50, 75, 100],

  },

};

export default nextConfig;
