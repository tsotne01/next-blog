import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/signin", // Serves /signin content when / is accessed
      },
    ];
  },
};

export default nextConfig;
