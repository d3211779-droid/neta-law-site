import type { Metadata } from "next";
import { accessibilityPage, contactDetails } from "@/data/site-content";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: accessibilityPage.metaTitle,
  description: accessibilityPage.metaDescription,
};

export default function AccessibilityPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:pt-40">
        <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "הצהרת נגישות" }]} />

        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
          {accessibilityPage.heading}
        </h1>

        <div className="mt-8 space-y-4">
          {accessibilityPage.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <p className="max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
            {accessibilityPage.accommodationsIntro}
          </p>
          <ul className="mt-4 space-y-2.5">
            {accessibilityPage.accommodations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground sm:text-lg">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {accessibilityPage.limitationsNote}
        </p>

        <div className="mt-10 border-t border-border/40 pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {accessibilityPage.feedbackTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {accessibilityPage.feedbackText}
          </p>

          <div className="mt-6 space-y-1.5 text-base text-foreground sm:text-lg">
            <p className="font-medium">{accessibilityPage.contactTitle}</p>
            <p>{accessibilityPage.contactName}</p>
            <p>
              טלפון:{" "}
              <a href={`tel:${contactDetails.phone}`} className="text-accent underline decoration-1 underline-offset-2 hover:text-foreground">
                {contactDetails.phoneDisplay}
              </a>
            </p>
            <p>
              דוא&quot;ל:{" "}
              <a href={`mailto:${contactDetails.email}`} className="text-accent underline decoration-1 underline-offset-2 hover:text-foreground">
                {contactDetails.email}
              </a>
            </p>
          </div>

          <div className="mt-6 space-y-1.5 text-base text-foreground sm:text-lg">
            <p className="font-medium">{accessibilityPage.addressTitle}</p>
            <p>{contactDetails.address}</p>
            <p>מיקוד {contactDetails.postalCode}</p>
          </div>
        </div>

        <p className="mt-10 text-base text-muted-foreground">{accessibilityPage.lastUpdated}</p>
      </div>
    </div>
  );
}
