import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
       protocol: "https",
       hostname: "ichef.bbci.co.uk" 
      }
    ]
  }
};

export default nextConfig;


  // imageUrl: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/ea26/live/707ff0b0-bf39-11f1-88b2-23b6d574e863.jpg.webp'