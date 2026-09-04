import Link from "next/link";
import { contactCallout, contactDetails } from "@/data/site-content";
import { PhoneIcon, WhatsappIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function ContactCallout() {
  return (
    <section className="bg-dark-section text-dark-section-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold sm:text-3xl">
            {contactCallout.title}
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section-foreground"
            >
              <PhoneIcon />
              {contactDetails.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-dark-section-foreground/30 px-6 py-3 text-base font-semibold text-dark-section-foreground transition-colors hover:bg-dark-section-foreground/10"
            >
              <WhatsappIcon />
              וואטסאפ
            </a>
          </div>

          <Link
            href={contactCallout.cta.href}
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-dark-section-foreground/80 underline decoration-accent decoration-2 underline-offset-4 hover:text-dark-section-foreground"
          >
            {contactCallout.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
