"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { contactDetails, contactFieldsOfInterest, contactPage } from "@/data/site-content";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const fieldClasses =
  "w-full border-0 border-b border-dark-section-foreground/30 bg-transparent px-0 py-2.5 text-dark-section-foreground placeholder:text-dark-section-foreground/40 focus:border-accent focus:outline-none focus:ring-0";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="mt-6 w-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-dark-section-foreground hover:text-dark-section disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? contactPage.submittingLabel : contactPage.submitLabel}
    </button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

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
          <form action={formAction} aria-label="טופס יצירת קשר" className="max-w-lg">
            {/* Honeypot — invisible to sighted users and to screen readers
                (aria-hidden + removed from tab order), so only an automated
                filler will ever populate it. A human never encounters it. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="company">אל תמלאו שדה זה</label>
              <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

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
                <input id="email" name="email" type="email" autoComplete="email" className={`${fieldClasses} mt-1.5`} />
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

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-base font-medium text-dark-section-foreground/70">
                  תוכן ההודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`${fieldClasses} mt-1.5 resize-y`}
                />
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-dark-section-foreground/70">
              {contactPage.privacyNote}
            </p>

            <SubmitButton />

            <p role="status" aria-live="polite" className="mt-3 text-base font-medium text-accent-secondary">
              {state.status === "success"
                ? contactPage.submittedNote
                : state.status === "error"
                  ? contactPage.errorNote
                  : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
