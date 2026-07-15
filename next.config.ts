import type { NextConfig } from "next";

// const isProjectPage = true; // set to false if using username.github.io root
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
  
};

export default nextConfig;
