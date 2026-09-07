import Link from "next/link";
import type { ServicePageContent } from "@/data/site-content";
import { servicePageDisclaimer } from "@/data/site-content";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  return (
    <article className="bg-background">
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <Breadcrumbs
          items={[
            { label: "ראשי", href: "/" },
            { label: "תחומי עיסוק", href: "/practice-areas" },
            { label: content.title },
          ]}
        />

        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
          {content.title}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.intro}
        </p>

        <ul className="mt-10 space-y-3 border-t border-border/15 pt-8">
          {content.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-3 text-base leading-relaxed text-foreground sm:text-lg">
              <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
              {topic}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-border/15 pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {content.whenToConsultTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.whenToConsult}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-border/15 pt-8">
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
