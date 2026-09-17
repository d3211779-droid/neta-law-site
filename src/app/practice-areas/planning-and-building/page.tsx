import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["planning-and-building"];

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  "/practice-areas/planning-and-building"
);

export default function PlanningAndBuildingPage() {
  return <ServicePageTemplate content={content} />;
}
