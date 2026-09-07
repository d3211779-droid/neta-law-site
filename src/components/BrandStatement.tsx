import { brandStatement } from "@/data/site-content";
import Reveal from "@/components/Reveal";

export default function BrandStatement() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            {brandStatement.quote}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {brandStatement.supporting}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
