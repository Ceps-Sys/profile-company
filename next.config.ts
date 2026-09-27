import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.9.95",
    "localhost:3000",
    "192.168.*.*" 
  ],
};

export default nextConfig;