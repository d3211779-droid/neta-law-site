import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 only allows quality 75 unless the values are explicitly
    // allowlisted here. 90 is used for the client's logo and portrait
    // (see quality={90} in SiteHeader.tsx and src/app/about/page.tsx);
    // 75 stays available as next/image's own default for anything else.
    qualities: [75, 90],
  },
};

export default nextConfig;
