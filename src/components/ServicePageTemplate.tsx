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
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:pt-40">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-10 border-b border-border/50 pb-9">
          <div className="mb-6 h-1 w-16 bg-accent" aria-hidden="true" />
          <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-snug text-foreground sm:text-4xl lg:text-[2.7rem]">
            {content.title}
          </h1>
        </header>

        <div className="mt-9 space-y-5">
          {content.intro.map((paragraph) => (
            <p key={paragraph} className="text-[1.075rem] leading-[1.95] text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {content.sections.map((section) => (
          <section key={section.heading} className="mt-12 border-t border-border/35 pt-8 sm:mt-14 sm:pt-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold leading-relaxed text-foreground sm:text-[1.7rem]">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[1.075rem] leading-[1.95] text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {relatedAreas.length > 0 && (
          <nav aria-label="תחומים קשורים" className="mt-14 border-t border-border/35 pt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
              תחומים קשורים
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {relatedAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={practiceAreaHref(area.slug)} className="font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:decoration-accent">
                    {area.homeTitle ?? area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-12 flex flex-col items-start gap-5 border-t border-border/35 pt-8">
          <Link href="/contact" className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section">
            ליצירת קשר
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">{servicePageDisclaimer}</p>
        </div>
      </div>
    </article>
  );
}
