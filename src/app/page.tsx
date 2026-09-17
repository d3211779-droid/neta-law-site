/**
 * THESIS: Boutique rural-legal counsel — עו"ד נטע בן חמו — not a law-firm
 * brochure; refuses the generic icon-card practice grid, sequential
 * numbering, and every hammer/scales/marble cliché.
 * OWN-WORLD: Cream/olive/stone/bronze ledger palette expressed as semantic
 * tokens (background/surface/foreground/accent/accent-secondary/dark-section);
 * flat surfaces (hairlines, not shadows); land appears only as thin
 * cadastral/contour linework, never as photography.
 * STORY: A visitor reads one precise headline about law, people, and land,
 * sees her name and a reserved portrait slot, then either books a call or
 * scrolls to a quiet five-area teaser (Nachalot lightly emphasized), a short
 * about note, one brand line, and a close.
 * FIRST VIEWPORT: 90svh Hero on a dark-section ground, RTL split — headline +
 * CTAs on the right (~55%), portrait slot + faint contour/parcel linework on
 * the left (~45%); header transparent above it, opaque once scrolled.
 * FORM: Brief-pinned direction (rachelglam-law.co.il / bgal.co.il content
 * clarity, shtilman.co.il-adjacent rural visual register) — built directly
 * from real client-discovery content, no concept-seed roll.
 */
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { PracticeAreasHomeTeaser } from "@/components/PracticeAreas";
import AboutSection from "@/components/AboutSection";
import BrandStatement from "@/components/BrandStatement";
import ContactCallout from "@/components/ContactCallout";
import { contactDetails, homeMeta, siteMeta } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(homeMeta.title, homeMeta.description, "/");

// Real business information only — no invented ratings, reviews, or claims.
const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteMeta.wordmark,
  url: `${siteMeta.siteUrl}/`,
  telephone: "+972-50-7239180",
  email: contactDetails.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactDetails.address,
    postalCode: contactDetails.postalCode,
    addressCountry: "IL",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <HeroSection />
      <PracticeAreasHomeTeaser />
      <AboutSection />
      <BrandStatement />
      <ContactCallout />
    </>
  );
}
