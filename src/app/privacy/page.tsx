import type { Metadata } from "next";
import { contactDetails, privacyPage } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata(privacyPage.metaTitle, privacyPage.metaDescription, "/privacy");

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:pt-40">
        <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "מדיניות פרטיות" }]} />

        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
          {privacyPage.heading}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground sm:text-lg">{privacyPage.intro}</p>

        {privacyPage.sections.map((section) => (
          <div key={section.heading} className="mt-10 border-t border-border/40 pt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
              {section.heading}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {section.paragraph}
            </p>
          </div>
        ))}

        <div className="mt-10 border-t border-border/40 pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {privacyPage.contactTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {privacyPage.contactText}
          </p>
          <div className="mt-4 space-y-1.5 text-base text-foreground sm:text-lg">
            <p>
              דוא&quot;ל:{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-accent underline decoration-1 underline-offset-2 hover:text-foreground"
              >
                {contactDetails.email}
              </a>
            </p>
            <p>
              טלפון:{" "}
              <a
                href={`tel:${contactDetails.phone}`}
                className="text-accent underline decoration-1 underline-offset-2 hover:text-foreground"
              >
                {contactDetails.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <p className="mt-10 text-base text-muted-foreground">{privacyPage.lastUpdated}</p>
      </div>
    </div>
  );
}
