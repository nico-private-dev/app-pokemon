import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'], // Allow images from PokeAPI
  },
};

export default nextConfig;