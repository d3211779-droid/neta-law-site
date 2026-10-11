"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { hero, media } from "@/data/site-content";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  window.addEventListener("a11y-settings-change", onChange);
  return () => {
    query.removeEventListener("change", onChange);
    window.removeEventListener("a11y-settings-change", onChange);
  };
}

function getMotionAllowed() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    document.documentElement.getAttribute("data-a11y-reduce-motion") !== "on";
}

export default function HeroSection() {
  const allowMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionAllowed, () => false);

  return (
    <section id="top" className="bg-dark-section pt-24 text-dark-section-foreground sm:pt-28 lg:pt-32">
      {/* Separate columns/rows: the copy cannot ever overlap the portrait. */}
      <div className="mx-auto grid min-h-[75svh] w-full lg:min-h-[min(83svh,840px)] lg:grid-cols-[42%_58%] lg:items-stretch">
        <div className="order-2 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:order-1 lg:px-10 xl:px-16">
          <div className="w-full max-w-xl">
            <h1 className="hero-fade-up text-4xl font-bold leading-[1.3] sm:text-5xl lg:text-[clamp(2.2rem,3.4vw,4.25rem)]">
              {hero.eyebrow}
            </h1>
            <div className="my-7 h-px w-16 bg-accent-secondary" aria-hidden="true" />
            <p className="hero-fade-up font-[family-name:var(--font-heading)] text-[1.65rem] font-semibold leading-[1.65] sm:text-3xl lg:text-[clamp(1.65rem,2.1vw,2.5rem)]" style={{ animationDelay: "110ms" }}>
              {hero.headline}
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[48svh] overflow-hidden bg-dark-section sm:min-h-[55svh] lg:order-2 lg:min-h-[68svh]">
          <Image
            src="/images/hero-poster.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="hero-video-frame object-cover"
            aria-hidden="true"
          />
          {allowMotion && (
            <video
              className="hero-video-frame absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-poster.webp"
              tabIndex={-1}
              aria-hidden="true"
            >
              <source src={media.heroVideo} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
