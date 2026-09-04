import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["israel-land-authority"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function IsraelLandAuthorityPage() {
  return <ServicePageTemplate content={content} />;
}
