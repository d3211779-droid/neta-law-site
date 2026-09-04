import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { homeMeta } from "@/data/site-content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
