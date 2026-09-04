import Link from "next/link";
import { hero } from "@/data/site-content";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] flex-col overflow-hidden bg-dark-section text-dark-section-foreground lg:flex-row"
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-8 px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:w-[55%] lg:flex-none lg:px-12 lg:pb-24 xl:px-20">
        <p
          className="hero-fade-up text-base font-medium tracking-[0.04em] text-dark-section-foreground/70"
          style={{ animationDelay: "0ms" }}
        >
          {hero.eyebrow}
        </p>

        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-semibold leading-[1.08]">
          {hero.titleLines.map((line, index) => (
            <span
              key={line}
              className="hero-fade-up block"
              style={{ animationDelay: `${120 + index * 110}ms` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          className="hero-fade-up max-w-md text-base leading-relaxed text-dark-section-foreground/85 sm:text-lg"
          style={{ animationDelay: "340ms" }}
        >
          {hero.subtitle}
        </p>

        <div
          className="hero-fade-up flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
          style={{ animationDelay: "440ms" }}
        >
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section-foreground"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center text-base font-medium text-dark-section-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="relative min-h-[42vh] flex-1 lg:min-h-0 lg:w-[45%] lg:flex-none">
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g stroke="var(--border)" strokeWidth="1" opacity="0.3" fill="none">
            <path d="M-40 120 C 140 70, 260 170, 440 110 S 680 60, 780 130" />
            <path d="M-40 210 C 150 160, 270 260, 450 200 S 690 150, 780 220" />
            <path d="M-40 300 C 160 260, 280 340, 460 290 S 700 250, 780 310" />
          </g>
          <g stroke="var(--border)" strokeWidth="1" opacity="0.55" fill="none">
            <path d="M60 380 L 60 520 L 210 520 L 210 640 L 380 640" />
            <path d="M210 520 L 340 520 L 340 420" />
          </g>
        </svg>

        <div className="portrait-reveal absolute inset-x-6 bottom-0 top-[18%] flex items-end justify-center sm:inset-x-12 lg:inset-x-8 xl:inset-x-14">
          {/*
            PORTRAIT SWAP POINT: once a real cutout photo of the lawyer exists,
            replace this placeholder <div> with:
            <Image src="/images/neta-portrait.png" alt="נטע, עורכת דין" fill
              className="object-contain object-bottom" priority />
            No other markup in HeroSection needs to change.
          */}
          <div
            className="flex h-full w-full max-w-sm items-end justify-center border border-dark-section-foreground/20 bg-dark-section-foreground/5 pb-8"
            role="img"
            aria-label="מקום שמור לתמונה מקצועית של עורכת הדין"
          >
            <span className="px-6 text-center text-base font-medium text-dark-section-foreground/70">
              {hero.portraitPlaceholder}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
