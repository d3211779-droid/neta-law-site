"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { practiceAreaHref, practiceAreas } from "@/data/site-content";

export default function PracticeAreasNav({ label }: { label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  function close(returnFocus: boolean) {
    setIsOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") close(true);
    }

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  function onButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      requestAnimationFrame(() => firstLinkRef.current?.focus());
    }
  }

  function onContainerBlur(event: FocusEvent<HTMLDivElement>) {
    const nextFocus = event.relatedTarget as Node | null;
    if (!nextFocus || !containerRef.current?.contains(nextFocus)) {
      setIsOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative" onBlur={onContainerBlur}>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex items-center gap-1.5 text-base font-medium opacity-90 transition-opacity hover:opacity-100"
        aria-expanded={isOpen}
        aria-controls="practice-areas-menu"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={onButtonKeyDown}
      >
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="practice-areas-menu"
          className="absolute end-0 top-full mt-3 w-64 border border-border/15 bg-surface py-2 text-foreground shadow-none"
        >
          {practiceAreas.map((area, index) => (
            <Link
              key={area.slug}
              ref={index === 0 ? firstLinkRef : undefined}
              href={practiceAreaHref(area.slug)}
              className="block px-4 py-2.5 text-base hover:bg-surface-muted/25"
              onClick={() => setIsOpen(false)}
            >
              {area.title}
            </Link>
          ))}
          <Link
            href="/practice-areas"
            className="mt-1 block border-t border-border/15 px-4 pt-2.5 pb-1 text-base font-semibold text-foreground hover:bg-surface-muted/25"
            onClick={() => setIsOpen(false)}
          >
            כל תחומי העיסוק
          </Link>
        </div>
      )}
    </div>
  );
}
