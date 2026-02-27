import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

// const isProjectPage = true; // set to false if using username.github.io root
const repo = "NASIT2026";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // assetPrefix:`/${repo}/`,
  // basePath: `/${repo}`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
  env: {
    NEXT_PUBLIC_BASE_PATH: "", //`/${repo}`,
  },
  
};

const NEXT_PUBLIC_BASE_PATH = "";

export { NEXT_PUBLIC_BASE_PATH };

export default nextConfig;
