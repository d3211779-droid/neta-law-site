import type { Metadata } from "next";
import { contactPage } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = buildMetadata(contactPage.metaTitle, contactPage.metaDescription, "/contact");

export default function ContactPage() {
  return <ContactSection />;
}
