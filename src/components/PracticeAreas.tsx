import Link from "next/link";
import {
  additionalPracticeAreas,
  practiceAreaHref,
  practiceAreas,
  practiceAreasHomeTeaser,
  practiceAreasPage,
} from "@/data/site-content";
import Reveal from "@/components/Reveal";

function PlotMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M1 1V9M1 1H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M21 21V13M21 21H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PracticeAreasHomeTeaser() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
            {practiceAreasHomeTeaser.heading}
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            {practiceAreasHomeTeaser.intro}
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <ul className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-border/40 pt-8">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={practiceAreaHref(area.slug)}
                  className={
                    area.featured
                      ? "text-xl font-semibold text-foreground underline decoration-accent-secondary decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
                      : "text-lg font-medium text-foreground underline decoration-border decoration-1 underline-offset-8 transition-colors hover:decoration-accent"
                  }
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={practiceAreasHomeTeaser.viewAll.href}
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-foreground"
          >
            {practiceAreasHomeTeaser.viewAll.label}
            <span aria-hidden="true">←</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function PracticeAreasIndex() {
  return (
    <div>
      <div className="border-t border-border/40">
        {practiceAreas.map((area, index) => (
          <Reveal key={area.slug} delayMs={Math.min(index * 80, 240)}>
            <Link
              href={practiceAreaHref(area.slug)}
              className="group grid grid-cols-1 items-center gap-4 border-b border-border/40 py-10 transition-colors hover:bg-surface-muted/25 sm:grid-cols-12 sm:gap-6 sm:py-12"
            >
              <div className="sm:col-span-1">
                <PlotMark className={area.featured ? "text-accent-secondary" : "text-border"} />
              </div>

              <h3
                className={`font-[family-name:var(--font-heading)] font-semibold text-foreground sm:col-span-4 ${
                  area.featured ? "text-3xl" : "text-2xl"
                }`}
              >
                {area.title}
              </h3>

              <div className="flex flex-col gap-4 sm:col-span-7">
                <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {area.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-base font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4">
                  {practiceAreasPage.itemLinkLabel}
                  <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">
                    ←
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={280}>
        <div className="mt-16 border-t border-border/40 pt-8">
          <h2 className="text-lg font-semibold text-muted-foreground">{practiceAreasPage.additionalHeading}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-2">
            {additionalPracticeAreas.map((area) => (
              <li key={area.title} className="text-base text-muted-foreground">
                {area.title}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
