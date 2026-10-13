"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const DISMISSED_KEY = "neta-contact-popup-dismissed";

/**
 * Appears once per browser tab/session when a visitor reaches the home page.
 * The existing /contact form remains the only form, avoiding duplicate logic.
 */
export default function EntryContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    try {
      window.sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Continue normally if storage is disabled.
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISSED_KEY) === "1") return;
    } catch {
      // A visitor who blocks sessionStorage can still dismiss the dialog.
    }

    // A brief delay lets the hero render before the dialog appears.
    const timeout = window.setTimeout(() => setIsOpen(true), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeys);
      previousFocus?.focus();
    };
  }, [dismiss, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c160e]/70 px-4 py-6 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="entry-contact-title"
        aria-describedby="entry-contact-description"
        dir="rtl"
        className="relative w-full max-w-md border border-border bg-surface px-7 pb-8 pt-12 text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.24)] sm:px-10 sm:pb-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          aria-label="סגירת חלונית יצירת קשר"
          className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:bg-surface-muted"
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mb-5 h-[2px] w-12 bg-accent-secondary" aria-hidden="true" />
        <p className="mb-2 text-sm font-medium text-muted-foreground">עו״ד נטע בן חמו</p>
        <h2
          id="entry-contact-title"
          className="font-[family-name:var(--font-heading)] text-3xl font-semibold leading-snug sm:text-4xl"
        >
          זקוקים לליווי משפטי?
        </h2>
        <p id="entry-contact-description" className="mt-5 text-base leading-8 text-muted-foreground">
          מומחיות משפטית לצד ליווי אישי, אנושיות והקשבה. מוזמנים לפנות אליי דרך טופס יצירת הקשר.
        </p>

        <Link
          href="/contact"
          onClick={dismiss}
          className="mt-7 flex min-h-12 w-full items-center justify-center bg-accent px-5 py-3 text-center text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section hover:text-dark-section-foreground"
        >
          ליצירת קשר
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="mt-3 min-h-11 w-full text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          אולי בהמשך
        </button>
      </div>
    </div>
  );
}
