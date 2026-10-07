"use client";

import { useSyncExternalStore } from "react";
import { hero, media } from "@/data/site-content";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  // Dispatched by AccessibilityWidget whenever its "הפחתת אנימציות" toggle
  // changes, so the video reacts to the user's in-site choice too, not just
  // the OS-level media query.
  window.addEventListener("a11y-settings-change", onChange);
  return () => {
    query.removeEventListener("change", onChange);
    window.removeEventListener("a11y-settings-change", onChange);
  };
}

function getMotionAllowed() {
  const systemReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const userReducedMotion = document.documentElement.getAttribute("data-a11y-reduce-motion") === "on";
  return !systemReducedMotion && !userReducedMotion;
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
      <div className="hero-content relative z-10 flex w-full justify-start px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28 xl:px-20">
        <div className="flex max-w-sm flex-col gap-6 sm:max-w-sm sm:gap-6 md:max-w-md lg:max-w-xl">
          {/* Name — prominent identification, not the <h1> (the brand
              headline below is). Mobile size/weight eased back a notch
              (was text-3xl/bold) so it no longer competes with the
              headline right below it; sm:+ untouched. */}
          <p
            className="hero-fade-up text-[1.75rem] font-semibold text-dark-section-foreground sm:text-4xl sm:font-bold"
            style={{ animationDelay: "0ms" }}
          >
            {hero.eyebrow}
          </p>

          {/* The Hero's single large headline and <h1> — carries the old
              "אנשים ואדמה" display treatment's role (same heading font),
              sized for a full sentence rather than two words. Mobile size
              trimmed and the container widened (max-w-xs -> max-w-sm) so
              the sentence wraps to ~3-4 natural lines instead of 5-6
              cramped ones; sm:+ untouched. */}
          <h1
            className="hero-fade-up font-[family-name:var(--font-heading)] text-[2rem] font-bold leading-[1.3] text-dark-section-foreground sm:text-5xl sm:leading-snug lg:text-6xl"
            style={{ animationDelay: "140ms" }}
          >
            {hero.headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
