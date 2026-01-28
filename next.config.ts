import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.PAGES_BASE_PATH || '', // Support GitHub Pages subpath
  trailingSlash: true, // Better for GitHub Pages
};

export default nextConfig;
