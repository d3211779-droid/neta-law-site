import Link from "next/link";
import {
  practiceAreaBySlug,
  practiceAreaHref,
  servicePageDisclaimer,
  siteMeta,
  type ServicePageContent,
} from "@/data/site-content";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const breadcrumbItems = [
    { label: "ראשי", href: "/" },
    { label: "תחומי עיסוק", href: "/practice-areas" },
    { label: content.title },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteMeta.siteUrl}${item.href ?? practiceAreaHref(content.slug)}`,
    })),
  };

  const relatedAreas = content.relatedSlugs
    .map((slug) => practiceAreaBySlug(slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  return (
    <article className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:pt-40">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
          {content.title}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.intro}
        </p>

        {content.sections.map((section) => (
          <div key={section.heading} className="mt-10 border-t border-border/15 pt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
              {section.heading}
            </h2>
            <div className="mt-3 max-w-xl space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 border-t border-border/15 pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {content.topicsHeading}
          </h2>
          <ul className="mt-6 space-y-3">
            {content.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-base leading-relaxed text-foreground sm:text-lg">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-border/15 pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {content.whenToConsultTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.whenToConsult}
          </p>
        </div>

        {relatedAreas.length > 0 && (
          <div className="mt-10 border-t border-border/15 pt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
              תחומים קשורים
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {relatedAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={practiceAreaHref(area.slug)}
                    className="text-base font-medium text-accent-secondary underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-6 border-t border-border/15 pt-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            יש נושא הקשור ל{content.title} שדורש בחינה משפטית?{" "}
            <Link href="/contact" className="font-semibold text-foreground underline underline-offset-4">
              ניתן ליצור קשר
            </Link>{" "}
            לתיאום שיחת היכרות ראשונית.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center justify-center bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section hover:text-dark-section-foreground"
          >
            לתיאום שיחה
          </Link>
          <p className="text-base leading-relaxed text-muted-foreground">{servicePageDisclaimer}</p>
        </div>
      </div>
    </article>
  );
}
