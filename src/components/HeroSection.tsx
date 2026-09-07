"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { hero, media } from "@/data/site-content";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMotionAllowed() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMotionAllowedServerSnapshot() {
  // No video during SSR/first paint — avoids a hydration mismatch and
  // matches the safest default until the real preference is known.
  return false;
}

export default function HeroSection() {
  const allowMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionAllowed,
    getMotionAllowedServerSnapshot
  );

  return (
    <section
      id="top"
      className="relative flex min-h-[75svh] items-center overflow-hidden bg-dark-section text-dark-section-foreground md:min-h-[80svh] lg:min-h-[90svh]"
    >
      {/*
        Layer 1 — decorative land graphic. Always rendered: it's the instant
        first paint (no flash of empty background before the video buffers),
        and it doubles as the prefers-reduced-motion static fallback — the
        <video> below is simply not mounted in that case, on any breakpoint.
      */}
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

      {/*
        Layer 2 — the real cinematic background, visible and looping on every
        breakpoint including mobile. Decorative only: no controls, not
        focusable, hidden from assistive tech, muted so autoplay is allowed.
        Rendered at native quality — no blur/opacity/filter/scale beyond the
        object-fit crop below. Object-position is isolated in globals.css
        (.hero-video + --hero-video-position-desktop/mobile) so desktop and
        mobile framing can each be retuned independently, without touching
        this component.
      */}
      {allowMotion && (
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          aria-hidden="true"
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>
      )}

      {/*
        Layer 3 — subtle right-anchored gradient, purely for text legibility.
        Transparent over most of the frame; only tints the right edge where
        the content sits, on every breakpoint. See .hero-video-overlay.
      */}
      <div className="hero-video-overlay absolute inset-0" aria-hidden="true" />

      {/* Layer 4 — content: right-aligned (RTL default), vertically centered via the section's own flex layout. */}
      {/*
        Top padding is sized to clear the fixed header, not just to look
        good — the header's logo grew (h-16 / lg:h-20) after the previous
        pass, so its rendered height did too (~104px below lg, ~120px at
        lg+, including the header's own py-5). pt-28/lg:pt-32 keep the Hero
        eyebrow from sitting behind it; pb-* is unchanged from before.
      */}
      <div className="hero-content relative z-10 flex w-full justify-start px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-12 lg:pb-28 lg:pt-32 xl:px-20">
        <div className="flex max-w-xs flex-col gap-6 sm:max-w-sm sm:gap-8 md:max-w-md lg:max-w-xl">
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

          <div
            className="hero-fade-up flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
            style={{ animationDelay: "440ms" }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section-foreground hover:text-dark-section"
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
      </div>
    </section>
  );
}
