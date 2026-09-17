import type { Metadata } from "next";
import { media, siteMeta } from "@/data/site-content";

/**
 * Shared per-page metadata: unique canonical + matching Open Graph tags.
 * `pathname` must be the real, final route ("/", "/about",
 * "/practice-areas/nachalot", …) — never a vercel.app URL. Canonical is
 * passed relative and resolved against the root layout's metadataBase.
 */
export function buildMetadata(title: string, description: string, pathname: string): Metadata {
  const url = `${siteMeta.siteUrl}${pathname}`;

  return {
    title,
    description,
    alternates: {
      // Passed as an absolute URL (not the bare pathname) because Next
      // drops the trailing slash when resolving "/" against metadataBase,
      // and the homepage canonical must be exactly ".../netta-bh.co.il/".
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMeta.wordmark,
      locale: "he_IL",
      type: "website",
      images: [
        {
          url: media.logo.src,
          width: media.logo.width,
          height: media.logo.height,
          alt: media.logo.alt,
        },
      ],
    },
  };
}
