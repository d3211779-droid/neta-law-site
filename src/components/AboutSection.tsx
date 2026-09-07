import Link from "next/link";
import { aboutTeaser } from "@/data/site-content";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <section className="bg-surface-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="max-w-xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
            {aboutTeaser.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
