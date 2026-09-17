import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages.mediation;

export const metadata: Metadata = buildMetadata(content.metaTitle, content.metaDescription, "/practice-areas/mediation");

export default function MediationPage() {
  return <ServicePageTemplate content={content} />;
}
