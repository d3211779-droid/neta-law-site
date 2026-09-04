import Link from "next/link";
import { aboutTeaser } from "@/data/site-content";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <section className="bg-surface-muted/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row-reverse lg:items-center lg:gap-16">
        <Reveal className="lg:w-5/12">
          <div
            className="aspect-[4/5] w-full border border-border/15 bg-surface-muted/40"
            role="img"
            aria-label="מקום שמור לתמונה נוספת"
          >
            <div className="flex h-full w-full items-center justify-center">
              <span className="px-6 text-center text-base font-medium text-muted-foreground">
                {aboutTeaser.imagePlaceholder}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="lg:w-7/12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
            {aboutTeaser.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {aboutTeaser.paragraph}
          </p>
          <Link
            href={aboutTeaser.cta.href}
            className="mt-8 inline-flex items-center justify-center border border-foreground px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {aboutTeaser.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
