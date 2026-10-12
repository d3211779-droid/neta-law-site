import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { articles, getArticleBlocks, getArticleBySlug } from "@/data/articles";
import { siteMeta } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    ...buildMetadata(`${article.title} | עו"ד נטע בן חמו`, article.excerpt, `/articles/${article.slug}`),
    openGraph: {
      ...buildMetadata(article.title, article.excerpt, `/articles/${article.slug}`).openGraph,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    inLanguage: "he-IL",
    mainEntityOfPage: `${siteMeta.siteUrl}/articles/${article.slug}`,
    author: { "@type": "Person", name: siteMeta.lawyerFullName },
    publisher: { "@type": "Organization", name: siteMeta.wordmark },
  };

  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:pt-40">
        <Breadcrumbs items={[
          { label: "ראשי", href: "/" },
          { label: "מאמרים", href: "/articles" },
          { label: article.title },
        ]} />
        <article className="mx-auto mt-8 max-w-[780px]" dir="rtl">
          <header className="border-b border-border/60 pb-9">
            <p className="text-sm font-semibold text-accent">{article.category}</p>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.35] text-foreground sm:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>
            <p className="mt-5 text-base text-muted-foreground">מאת עו״ד נטע בן חמו</p>
          </header>
          <div className="mt-9 space-y-6">
            {getArticleBlocks(article).map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="!mt-12 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={index} className="!mt-9 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                    {block.text}
                  </h3>
                );
              }
              return <p key={index} className="whitespace-pre-line text-base leading-[2] text-foreground sm:text-lg sm:leading-[2]">{block.text}</p>;
            })}
          </div>
          <footer className="mt-12 border-t border-border/60 pt-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              המידע במאמר הוא כללי בלבד ואינו מהווה ייעוץ משפטי. כל מקרה נבחן לפי נסיבותיו.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              <Link href={article.relatedPracticeHref} className="font-semibold text-accent underline underline-offset-4 hover:text-foreground">
                {article.relatedPracticeTitle}
              </Link>
              <Link href="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-foreground">
                ליצירת קשר
              </Link>
              <Link href="/articles" className="font-semibold text-foreground underline underline-offset-4 hover:text-accent">
                חזרה לכל המאמרים
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
