import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages.nachalot;

export const metadata: Metadata = buildMetadata(content.metaTitle, content.metaDescription, "/practice-areas/nachalot");

export default function NachalotPage() {
  return <ServicePageTemplate content={content} />;
}
