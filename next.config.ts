import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['localhost', 'zdravazupa.sk'], // Add any external domains you need here
        remotePatterns: [], // Or configure remote patterns if needed
      },
};

export default nextConfig;
