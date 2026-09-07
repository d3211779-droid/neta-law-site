import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutPage, media } from "@/data/site-content";
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

            <div className="mt-10 border-t border-border/40 pt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {aboutPage.pathTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutPage.path}
              </p>
            </div>

            <div className="mt-10 border-t border-border/40 pt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {aboutPage.ruralTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutPage.rural}
              </p>
            </div>

            <div className="mt-10 border-t border-border/40 pt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {aboutPage.approachTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutPage.approach}
              </p>
            </div>

            <div className="mt-10 border-t border-border/40 pt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {aboutPage.mediationTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutPage.mediation}
              </p>
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
