import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["financial-disputes"];

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  "/practice-areas/financial-disputes"
);

export default function FinancialDisputesPage() {
  return <ServicePageTemplate content={content} />;
}
