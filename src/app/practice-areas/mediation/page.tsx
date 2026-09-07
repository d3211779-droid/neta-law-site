import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages.mediation;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function MediationPage() {
  return <ServicePageTemplate content={content} />;
}
