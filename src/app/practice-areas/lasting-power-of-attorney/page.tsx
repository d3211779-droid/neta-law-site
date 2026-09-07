import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["lasting-power-of-attorney"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function LastingPowerOfAttorneyPage() {
  return <ServicePageTemplate content={content} />;
}
