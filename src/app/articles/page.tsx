import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  'מאמרים ותובנות משפטיות | עו"ד נטע בן חמו',
  "מאמרים מקצועיים מאת עו״ד נטע בן חמו בנושאי ייפוי כוח מתמשך, צוואות, ירושות ותחומי משפט נוספים.",
  "/articles"
);

export default function ArticlesPage() {
  return (
    <div className="bg-surface-tint">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:pt-40">
        <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "מאמרים" }]} />
        <header className="mt-7">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
            מאמרים ותובנות משפטיות
          </h1>
        </header>
        <div className={`mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 ${articles.length >= 3 ? "xl:grid-cols-3" : ""}`}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} headingLevel={2} />
          ))}
        </div>
      </div>
    </div>
  );
}
