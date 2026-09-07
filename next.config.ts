import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 only allows quality 75 unless the values are explicitly
    // allowlisted here. 90 is used for the logo and the About-page portrait
    // crop; 100 is used for the Hero's portrait (quality={100} in
    // HeroSection.tsx, per an explicit client request for maximum sharpness
    // on large screens); 75 stays available as next/image's own default.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
