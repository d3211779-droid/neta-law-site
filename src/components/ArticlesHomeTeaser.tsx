import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlesHomeTeaser() {
  return (
    <section className="bg-surface-tint py-18 sm:py-24" aria-labelledby="home-articles-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2
            id="home-articles-title"
            className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl"
          >
            מאמרים ותובנות משפטיות
          </h2>
          <Link href="/articles" className="border-b border-accent pb-1 text-base font-semibold text-accent hover:text-foreground">
            לכל המאמרים <span aria-hidden="true">←</span>
          </Link>
        </div>
        <div className={`mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 ${articles.length >= 3 ? "xl:grid-cols-3" : ""}`}>
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
