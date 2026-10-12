import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article, headingLevel = 3 }: { article: Article; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="group flex h-full flex-col border-t-2 border-accent bg-surface px-6 py-7 transition-colors hover:bg-background sm:px-8 sm:py-9">
      <p className="text-sm font-medium text-accent">{article.category}</p>
      <Heading className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-foreground sm:text-[1.7rem]">
        <Link
          href={`/articles/${article.slug}`}
          className="underline-offset-4 hover:underline focus-visible:underline"
        >
          {article.title}
        </Link>
      </Heading>
      <p className="mt-4 flex-1 text-base leading-[1.9] text-muted-foreground">
        {article.excerpt}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-7 inline-flex w-fit items-center gap-2 border-b border-accent pb-1 text-base font-semibold text-accent transition-colors hover:text-foreground"
        aria-label={`לקריאת המאמר: ${article.title}`}
      >
        לקריאת המאמר <span aria-hidden="true">←</span>
      </Link>
    </article>
  );
}
