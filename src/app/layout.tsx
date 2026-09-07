import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { homeMeta } from "@/data/site-content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import "./globals.css";

// Runs before hydration so a returning visitor's saved accessibility
// settings apply immediately, with no flash of unstyled text size/contrast.
// The storage key and step table must stay in sync with AccessibilityWidget.tsx.
const ACCESSIBILITY_BOOTSTRAP_SCRIPT = `
(function () {
  try {
    var raw = localStorage.getItem("neta-a11y-settings-v1");
    if (!raw) return;
    var s = JSON.parse(raw);
    var steps = [90, 100, 110, 120, 130, 140, 150];
    var root = document.documentElement;
    var idx = typeof s.textScaleIndex === "number" ? s.textScaleIndex : 1;
    root.style.fontSize = (steps[idx] || 100) + "%";
    if (s.highContrast) root.setAttribute("data-a11y-contrast", "high");
    if (s.underlineLinks) root.setAttribute("data-a11y-underline-links", "on");
    if (s.readableFont) root.setAttribute("data-a11y-readable-font", "on");
    if (s.reduceMotion) root.setAttribute("data-a11y-reduce-motion", "on");
  } catch (e) {}
})();
`;

const heading = Frank_Ruhl_Libre({
  variable: "--font-heading",
  subsets: ["hebrew"],
  weight: ["500", "600", "700"],
});

const body = Heebo({
  variable: "--font-body",
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: ACCESSIBILITY_BOOTSTRAP_SCRIPT }} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
