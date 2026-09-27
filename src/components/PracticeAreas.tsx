import Image from "next/image";
import Link from "next/link";
import {
  practiceAreaHref,
  practiceAreas,
  practiceAreasGridOrder,
  practiceAreasHomeTeaser,
  practiceAreasPage,
  type PracticeArea,
  type PracticeAreaImage,
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

// Same photo, same 4:3 ratio used here and at the top of the area's own
// page (see ServicePageTemplate) — object-cover crops it consistently at
// every breakpoint, including mobile, without ever upscaling past its
// natural size.
function PracticeAreaVisual({ image }: { image: PracticeAreaImage }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted/45">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
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
        <PracticeAreaVisual image={area.image} />

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            {area.title}
          </h3>
          <p className="line-clamp-3 flex-1 text-base leading-relaxed text-muted-foreground">
            {area.shortDescription}
          </p>
          {/* text-accent (not accent-secondary/bronze) — bronze-on-cream fails
              WCAG AA for text at 2.9:1; accent (olive) passes at 7.2:1. */}
          <span className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-accent">
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
    </div>
  );
}
