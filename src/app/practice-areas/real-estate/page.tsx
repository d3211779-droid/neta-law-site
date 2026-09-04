import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["real-estate"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function RealEstatePage() {
  return <ServicePageTemplate content={content} />;
}
