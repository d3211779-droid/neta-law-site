import Link from "next/link";
import { contactDetails, footerLinks, legalDisclaimer, siteMeta } from "@/data/site-content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/15 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            {siteMeta.wordmark}
          </p>

          <nav aria-label="קישורי תחתית העמוד">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-6 text-base text-muted-foreground">{contactDetails.phoneDisplay} · {contactDetails.email}</p>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{legalDisclaimer}</p>

        <p className="mt-2 text-base text-muted-foreground">
          © {new Date().getFullYear()} {siteMeta.wordmark}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
