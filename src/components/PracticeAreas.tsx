import type { ReactElement } from "react";
import Link from "next/link";
import {
  additionalPracticeAreas,
  practiceAreaHref,
  practiceAreas,
  practiceAreasGridOrder,
  practiceAreasHomeTeaser,
  practiceAreasPage,
  type PracticeArea,
} from "@/data/site-content";
import Reveal from "@/components/Reveal";

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

// Placeholder card art — hand-drawn line icons standing in for real
// photography, which hasn't been supplied yet for any of these five topics.
// Each occupies the same fixed-ratio box a real photo would (see
// PracticeAreaVisual below), so dropping in an <Image fill
// className="object-cover" /> later is a one-line swap, not a layout change.
function NachalotArt() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="46" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 44c6-4 10-4 16 0s10 4 16 0 10-4 16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 52c6-4 10-4 16 0s10 4 16 0 10-4 16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 38 30 22h4l8 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26 38V30h12v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function RealEstateArt() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M12 30 32 14l20 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 26v22h28V26" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="29" y="34" width="6" height="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M45 46.5V52M45 52h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MediationArt() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M10 24c0-3.3 2.7-6 6-6h10l6 6h16c3.3 0 6 2.7 6 6v8c0 3.3-2.7 6-6 6H36l-8 7v-7h-6l-6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M22 30h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WillsArt() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M20 12h18l8 8v32a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M38 12v8h8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M24 30h16M24 37h16M24 44h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PowerOfAttorneyArt() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="14" y="14" width="30" height="38" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 24h18M20 31h18M20 38h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M38 46 42 50l10-11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PRACTICE_AREA_ART: Record<string, () => ReactElement> = {
  nachalot: NachalotArt,
  "real-estate": RealEstateArt,
  mediation: MediationArt,
  "wills-inheritance": WillsArt,
  "lasting-power-of-attorney": PowerOfAttorneyArt,
};

function PracticeAreaVisual({ slug }: { slug: string }) {
  const Art = PRACTICE_AREA_ART[slug];
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted/45">
      <div className="absolute inset-0 flex items-center justify-center text-accent">
        {Art ? <Art /> : null}
      </div>
    </div>
  );
}

function PracticeAreaCard({ area, delayMs }: { area: PracticeArea; delayMs: number }) {
  return (
    <Reveal delayMs={delayMs} className="h-full">
      <Link
        href={practiceAreaHref(area.slug)}
        className="group flex h-full flex-col border border-border/30 bg-surface shadow-[0_1px_3px_rgba(30,36,25,0.08)] transition-shadow hover:shadow-[0_6px_18px_rgba(30,36,25,0.1)]"
      >
        <PracticeAreaVisual slug={area.slug} />

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {area.title}
          </h3>
          <p className="line-clamp-3 flex-1 text-base leading-relaxed text-muted-foreground">
            {area.shortDescription}
          </p>
          <span className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-accent-secondary">
            {practiceAreasPage.itemLinkLabel}
            <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function PracticeAreasIndex() {
  const orderedAreas = practiceAreasGridOrder
    .map((slug) => practiceAreas.find((area) => area.slug === slug))
    .filter((area): area is PracticeArea => Boolean(area));

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {orderedAreas.map((area, index) => (
          <PracticeAreaCard key={area.slug} area={area} delayMs={Math.min(index * 70, 280)} />
        ))}
      </div>

      <Reveal delayMs={320}>
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
