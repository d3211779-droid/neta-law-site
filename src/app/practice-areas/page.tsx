import type { Metadata } from "next";
import { practiceAreasPage } from "@/data/site-content";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PracticeAreasIndex } from "@/components/PracticeAreas";

export const metadata: Metadata = {
  title: practiceAreasPage.metaTitle,
  description: practiceAreasPage.metaDescription,
};

export default function PracticeAreasPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
        <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תחומי עיסוק" }]} />

        <h1 className="mt-6 max-w-xl font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
          {practiceAreasPage.heading}
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          {practiceAreasPage.intro}
        </p>

        <div className="mt-12">
          <PracticeAreasIndex />
        </div>
      </div>
    </div>
  );
}
