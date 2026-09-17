import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { homeMeta, media, siteMeta } from "@/data/site-content";
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
  metadataBase: new URL(siteMeta.siteUrl),
  title: homeMeta.title,
  description: homeMeta.description,
  // Explicit rel="icon" declarations at fixed, query-free URLs. favicon.ico,
  // icon0/1/2.png and apple-icon.png are still generated and served by
  // Next's app-icon file convention (see those files under src/app/) — this
  // just makes their <head> tags explicit with permanently stable URLs,
  // instead of relying only on Next's auto-detected (content-hashed) <link>
  // tags. favicon.ico itself is omitted from `icon` here because Next always
  // auto-injects it as the first icon regardless of this config — listing it
  // again would just duplicate that tag.
  icons: {
    icon: [
      { url: "/icon0.png", sizes: "48x48", type: "image/png" },
      { url: "/icon1.png", sizes: "96x96", type: "image/png" },
      { url: "/icon2.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: homeMeta.title,
    description: homeMeta.description,
    siteName: siteMeta.wordmark,
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: media.logo.src,
        width: media.logo.width,
        height: media.logo.height,
        alt: media.logo.alt,
      },
    ],
  },
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
