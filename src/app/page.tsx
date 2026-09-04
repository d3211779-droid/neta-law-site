/**
 * THESIS: A boutique land-rights counsel's homepage, not a law-firm brochure —
 * refuses the generic icon-card practice grid, sequential numbering, and every
 * hammer/scales/marble cliché.
 * OWN-WORLD: Deep-green/cream/stone/earth/bronze ledger palette expressed as
 * semantic tokens (background/surface/foreground/accent/dark-section); flat
 * surfaces (hairlines, not shadows); land appears only as thin cadastral/
 * contour linework, never as photography.
 * STORY: A visitor reads one precise headline about land rights, sees her
 * name and a reserved portrait slot, then either books a call or scrolls to
 * a quiet four-area teaser, a short about note, one brand line, and a close.
 * FIRST VIEWPORT: 90svh Hero on a dark-section ground, RTL split — headline +
 * CTAs on the right (~55%), portrait slot + faint contour/parcel linework on
 * the left (~45%); header transparent above it, opaque once scrolled.
 * FORM: Brief-pinned direction (rachelglam-law.co.il composition, explicit
 * palette, copy, and structure) — built directly, no concept-seed roll.
 */
import HeroSection from "@/components/HeroSection";
import { PracticeAreasHomeTeaser } from "@/components/PracticeAreas";
import AboutSection from "@/components/AboutSection";
import BrandStatement from "@/components/BrandStatement";
import ContactCallout from "@/components/ContactCallout";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreasHomeTeaser />
      <AboutSection />
      <BrandStatement />
      <ContactCallout />
    </>
  );
}
