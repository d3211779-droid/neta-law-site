import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutExperienceLinks, aboutPage, media } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata(aboutPage.metaTitle, aboutPage.metaDescription, "/about");

// Wraps any of aboutExperienceLinks' exact phrases (matched longest-first so
// a longer phrase is claimed before a shorter one it contains) in a Link to
// its service page — the dictated bio text itself is never altered.
function linkifyPracticeAreas(text: string): ReactNode[] {
  const matches = [...aboutExperienceLinks].sort((a, b) => b.phrase.length - a.phrase.length);
  let remaining: ReactNode[] = [text];

  for (const { phrase, href } of matches) {
    const next: ReactNode[] = [];
    for (const chunk of remaining) {
      if (typeof chunk !== "string") {
        next.push(chunk);
        continue;
      }
      const parts = chunk.split(phrase);
      parts.forEach((part, index) => {
        if (index > 0) {
          next.push(
            <Link
              key={`${phrase}-${index}-${part}`}
              href={href}
              className="underline decoration-border decoration-1 underline-offset-4 hover:decoration-accent"
            >
              {phrase}
            </Link>
          );
        }
        next.push(part);
      });
    }
    remaining = next;
  }

  return remaining;
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:pt-40">
        <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "אודות" }]} />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="portrait-reveal relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={media.portrait.src}
                alt={media.portrait.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[center_10%]"
                quality={90}
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
              {aboutPage.heading}
            </h1>

            <ul className="mt-8 space-y-3">
              {aboutPage.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground sm:text-lg">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                  <span>{linkifyPracticeAreas(item)}</span>
                </li>
              ))}
            </ul>

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
