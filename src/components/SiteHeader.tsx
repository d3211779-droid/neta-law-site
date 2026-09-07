"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactDetails, media, nav, practiceAreaHref, practiceAreas } from "@/data/site-content";
import PracticeAreasNav from "@/components/PracticeAreasNav";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  // Reset during render (not an effect) when the route changes — the
  // React-docs pattern for syncing state to a changing value without a
  // cascading-render effect.
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = isScrolled || isMenuOpen || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isLight
          ? "border-b border-border/15 bg-surface text-foreground"
          : "border-b border-transparent bg-transparent text-dark-section-foreground"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-3 py-5 sm:px-4">
        <Link href="/" className="shrink-0">
          <Image
            src={media.logo.src}
            alt={media.logo.alt}
            width={107}
            height={96}
            className="h-[72px] w-auto lg:h-24"
            quality={90}
            priority
          />
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.label === "תחומי עיסוק" ? (
              <PracticeAreasNav key={item.href} label={item.label} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium opacity-90 transition-opacity hover:opacity-100 hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-8"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden bg-accent px-5 py-2.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section hover:text-dark-section-foreground lg:inline-flex"
          >
            לתיאום שיחה
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-current/25 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "סגירת תפריט ניווט" : "פתיחת תפריט ניווט"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {isMenuOpen ? (
                <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 5H16M2 9H16M2 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="ניווט ראשי במובייל"
          className="border-t border-border/15 bg-surface px-4 pb-6 text-foreground lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-border/15 pt-2">
            <li>
              <Link href="/" className="block py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                ראשי
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                אודות
              </Link>
            </li>
            <li className="py-3">
              <Link
                href="/practice-areas"
                className="block text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                תחומי עיסוק
              </Link>
              <ul className="mt-2 flex flex-col gap-2 ps-4">
                {practiceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={practiceAreaHref(area.slug)}
                      className="block text-base text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/contact" className="block py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                יצירת קשר
              </Link>
            </li>
          </ul>
          <a href={`tel:${contactDetails.phone}`} className="mt-4 block text-base font-medium tracking-wide">
            {contactDetails.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="mt-4 block bg-accent px-5 py-3 text-center text-base font-semibold text-accent-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            לתיאום שיחה
          </Link>
        </nav>
      )}
    </header>
  );
}
