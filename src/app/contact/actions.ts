"use server";

const RECIPIENT_EMAIL = "nettabhlaw@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Resend's shared sandbox sender — works immediately, with no domain
// verification, and can deliver to any recipient. Once a custom domain is
// verified in the Resend dashboard, swap this for an address on that domain
// (e.g. "אתר נטע בן חמו <no-reply@netabenhamo.co.il>") for better
// deliverability and inbox branding.
const FROM_ADDRESS = "אתר נטע בן חמו <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormState = {
  status: "idle" | "success" | "error";
};

function textValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: invisible to sighted users and screen readers alike (see the
  // field's markup in ContactSection.tsx). A bot that fills it out gets a
  // normal-looking success response, so it learns nothing about being caught.
  if (textValue(formData, "company") !== "") {
    return { status: "success" };
  }

  const name = textValue(formData, "name");
  const phone = textValue(formData, "phone");
  const email = textValue(formData, "email");
  const subject = textValue(formData, "subject");
  const message = textValue(formData, "message");

  if (!name || !phone || !message) {
    return { status: "error" };
  }

  if (email !== "" && !EMAIL_PATTERN.test(email)) {
    return { status: "error" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return { status: "error" };
  }

  const emailBody = [
    "פנייה חדשה התקבלה באתר",
    "",
    `שם: ${name}`,
    `טלפון: ${phone}`,
    `דוא"ל: ${email || "לא צויין"}`,
    `נושא: ${subject || "לא צויין"}`,
    "",
    "הודעה:",
    message,
  ].join("\n");

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT_EMAIL],
        subject: `פנייה חדשה מאתר נטע בן חמו – ${name}`,
        text: emailBody,
        ...(email !== "" ? { reply_to: email } : {}),
      }),
    });

    if (!response.ok) {
      console.error("Resend API error:", response.status, await response.text());
      return { status: "error" };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return { status: "error" };
  }
}
