// File: next.config.mjs

/** @type {import('next').NextConfig} */
const config = {
  // --- ADD THIS 'images' BLOCK ---
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default config;
