import type { Metadata } from "next";
import Link from "next/link";
import { aboutPage } from "@/data/site-content";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
        <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "אודות" }]} />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div
              className="aspect-[4/5] w-full border border-border/15 bg-surface-muted/40"
              role="img"
              aria-label="מקום שמור לתמונה מקצועית גדולה של עורכת הדין"
            >
              <div className="flex h-full w-full items-center justify-center">
                <span className="px-6 text-center text-base font-medium text-muted-foreground">
                  {aboutPage.imagePlaceholder}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
              {aboutPage.heading}
            </h1>
            <p className="mt-2 text-base font-medium text-muted-foreground sm:text-lg">
              {aboutPage.role}
            </p>

            <div className="mt-8 space-y-4">
              {aboutPage.intro.map((paragraph) => (
                <p key={paragraph} className="max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-border/15 pt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {aboutPage.approachTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutPage.approach}
              </p>
            </div>

            <div className="mt-10 border-t border-border/15 pt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {aboutPage.valuesTitle}
              </h2>
              <dl className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {aboutPage.values.map((value) => (
                  <div key={value.title}>
                    <dt className="text-base font-semibold text-foreground">{value.title}</dt>
                    <dd className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                      {value.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href={aboutPage.cta.href}
              className="mt-10 inline-flex items-center justify-center bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section hover:text-dark-section-foreground"
            >
              {aboutPage.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
