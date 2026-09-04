import { brandStatement } from "@/data/site-content";
import Reveal from "@/components/Reveal";

export default function BrandStatement() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-center font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            {brandStatement.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
