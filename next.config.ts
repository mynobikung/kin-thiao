import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/mapraimairu",
  assetPrefix: "/mapraimairu",
  allowedDevOrigins: ["192.168.50.33", "192.168.50.29", "192.168.1.100", "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
