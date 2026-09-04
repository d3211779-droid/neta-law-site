import type { Metadata } from "next";
import { servicePages } from "@/data/site-content";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const content = servicePages["planning-and-building"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function PlanningAndBuildingPage() {
  return <ServicePageTemplate content={content} />;
}
