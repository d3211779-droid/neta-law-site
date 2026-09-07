"use client";

import { useState, type FormEvent } from "react";
import { contactDetails, contactFieldsOfInterest, contactPage } from "@/data/site-content";
import { MailIcon, PhoneIcon } from "@/components/icons";

const fieldClasses =
  "w-full border-0 border-b border-dark-section-foreground/30 bg-transparent px-0 py-2.5 text-dark-section-foreground placeholder:text-dark-section-foreground/40 focus:border-accent focus:outline-none focus:ring-0";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-dark-section text-dark-section-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:flex-row lg:gap-16 lg:pt-40">
        <div className="lg:w-5/12">
          <h1 className="max-w-sm font-[family-name:var(--font-heading)] text-3xl font-semibold sm:text-4xl">
            {contactPage.title}
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-dark-section-foreground/75 sm:text-lg">
            {contactPage.subtitle}
          </p>

          <ul className="mt-10 space-y-4 text-base">
            <li>
              <a href={`tel:${contactDetails.phone}`} className="inline-flex items-center gap-3 text-dark-section-foreground/90 hover:text-accent-secondary">
                <PhoneIcon />
                {contactDetails.phoneDisplay}
              </a>
            </li>
            <li className="text-dark-section-foreground/75">פקס: {contactDetails.fax}</li>
            <li>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center gap-3 text-dark-section-foreground/90 hover:text-accent-secondary">
                <MailIcon />
                {contactDetails.email}
              </a>
            </li>
            <li className="text-dark-section-foreground/75">
              {contactDetails.address}, מיקוד {contactDetails.postalCode}
            </li>
          </ul>
        </div>

        <div className="lg:w-7/12">
          <form onSubmit={handleSubmit} aria-label="טופס יצירת קשר להדגמה בלבד" className="max-w-lg">
            <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-dark-section-foreground/70">
                  שם מלא
                </label>
                <input id="name" name="name" type="text" autoComplete="name" required className={`${fieldClasses} mt-1.5`} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-dark-section-foreground/70">
                  טלפון
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required className={`${fieldClasses} mt-1.5`} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-base font-medium text-dark-section-foreground/70">
                  דוא&quot;ל
                </label>
                <input id="email" name="email" type="email" autoComplete="email" required className={`${fieldClasses} mt-1.5`} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-base font-medium text-dark-section-foreground/70">
                  נושא הפנייה
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className={`${fieldClasses} mt-1.5 [&>option]:text-foreground`}
                >
                  <option value="" disabled>
                    בחרו נושא פנייה
                  </option>
                  {contactFieldsOfInterest.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-dark-section-foreground/70">
              {contactPage.privacyNote}
            </p>

            <button
              type="submit"
              className="mt-6 w-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section-foreground hover:text-dark-section sm:w-auto"
            >
              {contactPage.submitLabel}
            </button>

            <p className="mt-3 text-base text-dark-section-foreground/70">{contactPage.demoNote}</p>

            <p role="status" aria-live="polite" className="mt-3 text-base font-medium text-accent-secondary">
              {submitted ? contactPage.submittedNote : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
