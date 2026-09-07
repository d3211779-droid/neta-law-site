import Image from "next/image";
import { hero, media } from "@/data/site-content";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] flex-col overflow-hidden bg-dark-section text-dark-section-foreground lg:flex-row"
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-4 pb-16 pt-28 sm:gap-8 sm:px-6 sm:pt-32 lg:w-[55%] lg:flex-none lg:px-12 lg:pb-24 xl:px-20">
        <p
          className="hero-fade-up text-base font-medium tracking-[0.04em] text-dark-section-foreground/70"
          style={{ animationDelay: "0ms" }}
        >
          {hero.eyebrow}
        </p>

        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw+1rem,4.5rem)] lg:leading-[1.08]">
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
          className="hero-fade-up text-base leading-relaxed text-dark-section-foreground/85 sm:text-lg"
          style={{ animationDelay: "340ms" }}
        >
          {hero.subtitle}
        </p>
      </div>

      {/*
        Visual column: the decorative land-graphic SVG sits behind Neta's
        portrait as the section's background. The image itself is inset from
        the top by more than the fixed header's rendered height (~112px
        below lg, ~136px at lg+, from the header's own py-5 + logo size) so
        her head/hair can never sit behind the header or its "לתיאום שיחה"
        button, regardless of the button's horizontal position.
      */}
      <div className="relative min-h-[42vh] flex-1 lg:min-h-0 lg:w-[45%] lg:flex-none">
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g fill="none">
            <polygon points="40,100 320,60 380,320 60,380" fill="var(--accent-secondary)" opacity="0.08" />
            <polygon points="180,420 520,380 560,680 220,720" fill="var(--border)" opacity="0.12" />
          </g>
          <g stroke="var(--border)" strokeWidth="1" opacity="0.3" fill="none">
            <path d="M-40 120 C 140 70, 260 170, 440 110 S 680 60, 780 130" />
            <path d="M-40 210 C 150 160, 270 260, 450 200 S 690 150, 780 220" />
            <path d="M-40 300 C 160 260, 280 340, 460 290 S 700 250, 780 310" />
          </g>
          <g stroke="var(--accent-secondary)" strokeWidth="1" opacity="0.55" fill="none">
            <path d="M60 380 L 60 520 L 210 520 L 210 640 L 380 640" />
            <path d="M210 520 L 340 520 L 340 420" />
          </g>
        </svg>

        <div className="portrait-reveal absolute inset-x-0 bottom-0 top-32 lg:top-36">
          <Image
            src={media.portrait.src}
            alt={media.portrait.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[center_8%]"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
}
