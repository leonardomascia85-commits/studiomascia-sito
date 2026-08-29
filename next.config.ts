import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "25mb",
    },
  },
  async redirects() {
    return [
      {
        source: "/debiti-fiscali",
        destination: "/contenzioso-tributario",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
