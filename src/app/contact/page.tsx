import type { Metadata } from "next";
import { contactPage } from "@/data/site-content";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
};

export default function ContactPage() {
  return <ContactSection />;
}
