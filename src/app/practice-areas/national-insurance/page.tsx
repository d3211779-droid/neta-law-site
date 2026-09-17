import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["national-insurance"];

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  "/practice-areas/national-insurance"
);

export default function NationalInsurancePage() {
  return <ServicePageTemplate content={content} />;
}
