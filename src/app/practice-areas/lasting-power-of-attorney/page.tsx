import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["lasting-power-of-attorney"];

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  "/practice-areas/lasting-power-of-attorney"
);

export default function LastingPowerOfAttorneyPage() {
  return <ServicePageTemplate content={content} />;
}
