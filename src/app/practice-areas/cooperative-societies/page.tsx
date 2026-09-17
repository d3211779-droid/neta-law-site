import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["cooperative-societies"];

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  "/practice-areas/cooperative-societies"
);

export default function CooperativeSocietiesPage() {
  return <ServicePageTemplate content={content} />;
}
