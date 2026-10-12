// Two kinds of comment mark content in this file:
// - "CONFIRMED" — a fact the client gave directly (name, bio, practice areas).
//   Exact copy/wording built from a confirmed fact may still read as a draft.
// - "TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL" — draft marketing wording,
//   invented descriptive copy, or a still-unknown business detail (phone,
//   email, address). Nothing here is legal advice.
// The privacy note and the two disclaimer sentences are dictated verbatim
// and are not placeholders.

export type NavItem = {
  label: string;
  href: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  /** Nachalot gets a touch more visual weight — the firm's central focus. */
  featured?: boolean;
  /** Short display text used only on the homepage. */
  homeTitle?: string;
};

export type ServicePageSection = {
  heading: string;
  paragraphs: string[];
};

export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ServicePageSection[];
  /** 2–3 related practice-area slugs, for internal linking between service pages. */
  relatedSlugs: string[];
};

export type ContactDetails = {
  phone: string;
  phoneDisplay: string;
  fax: string;
  email: string;
  address: string;
  postalCode: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

// CONFIRMED — client name and title. Exact wordmark styling is presentational
// and can be adjusted freely.
export const siteMeta = {
  lawyerFullName: 'עו"ד נטע בן חמו',
  lawyerName: "נטע בן חמו",
  wordmark: "נטע בן חמו | עורכת דין",
  siteUrl: "https://www.netta-bh.co.il",
};

// CONFIRMED real client assets. width/height are the source files' true
// pixel dimensions, passed to next/image to avoid layout shift.
// logo.png (replaces the original logo.jpeg) is a true RGBA PNG with real
// alpha transparency — confirmed by decoding it (all four corners sample at
// alpha 0), not just its extension. No mix-blend-mode is needed for it.
// heroVideo is the client's existing HEVC source, displayed in a separate
// visual panel on the homepage (not underneath the text). A poster extracted
// from this source is visible when the codec or motion playback is unavailable.
// portrait is used on /about.
export const media = {
  logo: {
    src: "/images/logo.png",
    alt: "נטע בן חמו - עורכת דין",
    width: 1325,
    height: 1187,
  },
  portrait: {
    src: "/images/neta-portrait.jpeg",
    alt: 'עו״ד נטע בן חמו',
    width: 1232,
    height: 1600,
  },
  heroVideo: "/videos/hero.mp4",
};

// CONFIRMED — real client-provided contact details.
export const contactDetails: ContactDetails = {
  phone: "050-7239180",
  phoneDisplay: "050-7239180",
  fax: "077-4449625",
  email: "nettabhlaw@gmail.com",
  address: 'מתחם "הנגרייה", קיבוץ גת',
  postalCode: "7956500",
};

export const nav: NavItem[] = [
  { label: "ראשי", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "תחומי עיסוק", href: "/practice-areas" },
  { label: "מאמרים", href: "/articles" },
  { label: "יצירת קשר", href: "/contact" },
];

// Client-approved service index; no stock photography is used anywhere here.
// The discontinued planning-and-building service was removed from the menus,
// sitemap and routes. Home titles follow the client's requested shorter list.
export const practiceAreas: PracticeArea[] = [
  { slug: "nachalot", title: "נחלות ומשקים במושבים", homeTitle: "נחלות", shortDescription: "ליווי משפטי לבעלי נחלות ומשקים חקלאיים, בהסדרת זכויות ובהעברה בין־דורית.", featured: true },
  { slug: "cooperative-societies", title: "אגודות שיתופיות", shortDescription: "זכויות חברים, התנהלות מול מוסדות האגודה ומחלוקות במושבים ובקיבוצים." },
  { slug: "real-estate", title: "מקרקעין ועסקאות נדל״ן", homeTitle: "מקרקעין ועסקאות מכר", shortDescription: "ליווי משפטי בעסקאות רכישה ומכירה, בדיקות מקדימות ועריכת הסכמים." },
  { slug: "israel-land-authority", title: "רשות מקרקעי ישראל", shortDescription: "הסדרת זכויות, העברות ובירור דרישות מול רשות מקרקעי ישראל." },
  { slug: "wills-inheritance", title: "צוואות וירושות", shortDescription: "עריכת צוואות, הליכי ירושה והסכמות בין יורשים." },
  { slug: "lasting-power-of-attorney", title: "ייפוי כוח מתמשך", shortDescription: "תכנון העתיד ובחירה מראש של מי שיטפל בענייניכם." },
  { slug: "financial-disputes", title: "סכסוכים כספיים וליטיגציה אזרחית", homeTitle: "סכסוכים כספיים", shortDescription: "ייעוץ וייצוג משפטי במחלוקות כספיות ובסכסוכים אזרחיים." },
  { slug: "national-insurance", title: "תביעות מול המוסד לביטוח לאומי", shortDescription: "בחינת זכאות, ליווי בתביעות ובדיקת אפשרויות להשגה ולערעור." },
  { slug: "mediation", title: "גישור ויישוב סכסוכים", shortDescription: "סיוע לצדדים להגיע להסכמות ולבחון פתרונות מחוץ לבית המשפט." },
];

export function practiceAreaHref(slug: string): string {
  return `/practice-areas/${slug}`;
}

export function practiceAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

export const practiceAreasGridOrder = practiceAreas.map((area) => area.slug);

// The complete approved content lives in a separate file for maintainability.
export { servicePages } from "./practice-content";

// CONFIRMED — title and description dictated verbatim by the client for SEO.
export const homeMeta: PageMeta = {
  title: "עו\"ד נטע בן חמו | עורכת דין – מקרקעין, נחלות, ירושות וגישור",
  description:
    "עו\"ד נטע בן חמו מעניקה ייעוץ וליווי משפטי בתחומי המקרקעין, נחלות ומשקים במושבים, צוואות וירושות, ייפוי כוח מתמשך, גישור וסכסוכים אזרחיים.",
};

// The homepage's visible H1 (see HeroSection.tsx) is her name and title.
// Her requested signature statement is a separate paragraph below it.
export const homeH1 = siteMeta.lawyerFullName;

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (draft marketing copy, per the
// client brief's own note that these texts "should remain easy to change")
export const hero = {
  eyebrow: homeH1,
  headline: "מומחיות משפטית לצד ליווי אישי, אנושיות והקשבה",
};

export const practiceAreasHomeTeaser = {
  heading: "תחומי עיסוק מרכזיים",
  viewAll: { label: "לכל תחומי העיסוק", href: "/practice-areas" },
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const practiceAreasPage = {
  metaTitle: 'תחומי עיסוק | עו"ד נטע בן חמו',
  metaDescription: "סקירת תחומי העיסוק של המשרד: נחלות, מקרקעין, ירושה, ייפוי כוח מתמשך, סכסוכים כספיים וגישור.",
  heading: "תחומי עיסוק",
  intro: "",
  itemLinkLabel: "קרא עוד",
};

// Brand line remains on the homepage; only the illustrated "מהמרחב הכפרי" block was removed.
export const brandStatement = {
  quote: "מאחורי כל הליך משפטי יש אדם, משפחה וסיפור.",
  supporting: "ידע וניסיון משפטי הם הבסיס. הקשבה, אמון והבנת המציאות שמאחורי התיק הם חלק בלתי נפרד מהדרך.",
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const contactCallout = {
  title: "ליצירת קשר",
  cta: { label: "ליצירת קשר", href: "/contact" },
};

// CONFIRMED — the client dictated this exact bullet list (not draft prose
// this time). Nothing here invents experience, awards, cases, success
// rates, client names, or memberships beyond what was supplied. Experience
// is stated only as "הוסמכה כעורכת דין בשנת 2012" — not as a number of
// years — per the client's explicit instruction. `experienceLinks` maps
// exact substrings of the last highlight to their service pages, so the
// bio can link naturally to /practice-areas pages without altering the
// dictated wording itself (see AboutPage, which renders highlights through
// linkifyPracticeAreas()).
export const aboutPage = {
  metaTitle: 'אודות | עו"ד נטע בן חמו',
  metaDescription: 'היכרות עם עו"ד נטע בן חמו — רקע אישי ומקצועי.',
  heading: siteMeta.lawyerFullName,
  highlights: [
    "ילידת מושב תימורים, נשואה +4.",
    "שירתה בחיל מודיעין שדה, הן בשירות סדיר והן בשירות קבע.",
    "סיימה תואר במשפטים (LL.B) בהצטיינות.",
    "הוסמכה כעורכת דין בשנת 2012.",
    "מגשרת מוסמכת.",
    "את דרכה המקצועית החלה בפרקליטות מחוז דרום (אזרחי), ובהמשך במגזר הפרטי.",
    "לאורך השנים צברה ניסיון רב בתחומים משפטיים שונים ובין היתר בתחומים הבאים: ליטיגציה אזרחית, מקרקעין, אגודות שיתופיות, סכסוכים כספיים, צוואות וירושות, ייפוי כוח מתמשך ותביעות מול המוסד לביטוח לאומי.",
  ],
  cta: { label: "יצירת קשר", href: "/contact" },
};

// Substrings of aboutPage.highlights linked to their service pages. Matched
// exactly against the (unaltered) highlight text — see linkifyPracticeAreas
// in AboutPage. Ordered longest-first so a longer phrase is matched before a
// shorter one it contains.
export const aboutExperienceLinks: { phrase: string; href: string }[] = [
  { phrase: "תביעות מול המוסד לביטוח לאומי", href: practiceAreaHref("national-insurance") },
  { phrase: "אגודות שיתופיות", href: practiceAreaHref("cooperative-societies") },
  { phrase: "סכסוכים כספיים", href: practiceAreaHref("financial-disputes") },
  { phrase: "צוואות וירושות", href: practiceAreaHref("wills-inheritance") },
  { phrase: "ייפוי כוח מתמשך", href: practiceAreaHref("lasting-power-of-attorney") },
  { phrase: "מקרקעין", href: practiceAreaHref("real-estate") },
];

// Relevant areas for contact form selection.
export const contactFieldsOfInterest = [
  "נחלות ומשקים חקלאיים",
  "צוואות וירושות",
  "ייפוי כוח מתמשך",
  "עסקאות מקרקעין",
  "גישור ויישוב סכסוכים",
  "אחר",
];

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (except the privacy note,
// submittedNote and errorNote, which are dictated verbatim)
export const contactPage = {
  metaTitle: 'יצירת קשר | עו"ד נטע בן חמו',
  metaDescription: "פרטי התקשרות וטופס יצירת קשר עם משרד עורכת הדין נטע בן חמו.",
  title: "יצירת קשר",
  subtitle: "יש נושא שדורש בחינה משפטית? השאירו פרטים ונחזור אליכם לתיאום שיחת היכרות ראשונית.",
  privacyNote:
    "נא לא למסור בטופס מידע משפטי, אישי או רגיש. השארת פרטים אינה יוצרת יחסי עורך דין–לקוח.",
  submitLabel: "שליחה",
  submittingLabel: "שולח...",
  submittedNote: "תודה, פנייתך התקבלה ונחזור אליך בהקדם.",
  errorNote: "אירעה שגיאה בשליחת הפנייה. ניתן לפנות אלינו גם בטלפון או במייל.",
};

// Only routes that actually exist.
export const footerLinks: FooterLink[] = [
  { label: "אודות", href: "/about" },
  { label: "תחומי עיסוק", href: "/practice-areas" },
  { label: "מאמרים", href: "/articles" },
  { label: "יצירת קשר", href: "/contact" },
  { label: "הצהרת נגישות", href: "/accessibility" },
  { label: "מדיניות פרטיות", href: "/privacy" },
];

// Dictated verbatim — not a placeholder.
export const legalDisclaimer = "המידע באתר הוא מידע כללי בלבד ואינו מהווה ייעוץ משפטי.";

// Dictated verbatim — not a placeholder. Used on service pages specifically.
export const servicePageDisclaimer =
  "המידע בעמוד הוא מידע כללי בלבד ואינו מהווה ייעוץ משפטי. כל מקרה נבחן בהתאם לנסיבותיו.";

// CONFIRMED — dictated verbatim by the client, not draft copy. Do not add
// language claiming full/legal standards compliance beyond what's written
// here (the client was explicit about this).
export const accessibilityPage = {
  metaTitle: 'הצהרת נגישות | עו"ד נטע בן חמו',
  metaDescription: "הצהרת הנגישות של אתר משרד עורכת הדין נטע בן חמו.",
  heading: "הצהרת נגישות",
  paragraphs: [
    "משרד עורכת הדין נטע בן חמו רואה חשיבות רבה במתן שירות שוויוני ונגיש לכלל הציבור, לרבות אנשים עם מוגבלויות.",
    "אנו פועלים על מנת לאפשר חוויית גלישה נוחה ונגישה ככל האפשר באתר, ומשקיעים מאמצים בהתאמת האתר לשימוש באמצעות טכנולוגיות מסייעות.",
  ],
  accommodationsIntro: "באתר בוצעו, בין היתר, התאמות הכוללות:",
  accommodations: [
    "אפשרות לשינוי גודל הטקסט.",
    "התאמות ניגודיות.",
    "הדגשת קישורים.",
    "אפשרות להפחתת אנימציות.",
    "ניווט באמצעות מקלדת.",
    "טקסטים חלופיים לתמונות.",
    "מבנה תוכן וכותרות המסייע להתמצאות באתר.",
  ],
  limitationsNote:
    "ייתכן שלמרות המאמצים להנגיש את כלל חלקי האתר, יתגלו חלקים שטרם הונגשו באופן מלא. אנו ממשיכים לפעול לשיפור נגישות האתר.",
  feedbackTitle: "נתקלתם בבעיית נגישות?",
  feedbackText: "נשמח שתעדכנו אותנו ונפעל לבחינת הפנייה ולתיקונה ככל שניתן.",
  contactTitle: "פרטי יצירת קשר בנושא נגישות:",
  contactName: "נטע בן חמו, עורכת דין",
  addressTitle: "כתובת המשרד:",
  lastUpdated: "תאריך עדכון אחרון של הצהרת הנגישות: ספטמבר 2026",
};

// Describes the contact form and its real processors (Vercel + Resend)
// factually — no legal claims beyond what the site actually does. Nothing
// here should be presented as legal advice.
export const privacyPage = {
  metaTitle: 'מדיניות פרטיות | עו"ד נטע בן חמו',
  metaDescription:
    "מדיניות הפרטיות של אתר משרד עורכת הדין נטע בן חמו — אילו פרטים נאספים בטופס יצירת הקשר וכיצד נעשה בהם שימוש.",
  heading: "מדיניות פרטיות",
  intro:
    'משרד עורכת הדין נטע בן חמו מכבד את פרטיות המשתמשים באתר. מדיניות זו מסבירה אילו פרטים נאספים בעת שימוש בטופס יצירת הקשר, לשם מה הם משמשים, ועם מי הם עשויים להיות משותפים.',
  sections: [
    {
      heading: "אילו פרטים נאספים",
      paragraph:
        'בטופס יצירת הקשר באתר ניתן למסור את הפרטים הבאים: שם מלא, מספר טלפון, כתובת דוא"ל, נושא הפנייה ותוכן ההודעה. מסירת הפרטים נעשית מרצונו החופשי של המשתמש, לצורך יצירת קשר וטיפול בפנייתו בלבד.',
    },
    {
      heading: "כיצד נעשה שימוש בפרטים",
      paragraph:
        "הפרטים שנמסרים בטופס משמשים אך ורק לצורך מענה לפנייה וניהול קשר עם הפונה. האתר אינו מוכר את פרטי המשתמשים לצדדים שלישיים, ואינו עושה בהם שימוש למטרות שיווקיות.",
    },
    {
      heading: "העברת מידע לספקי תשתית ושירות",
      paragraph:
        'לצורך תפעול האתר ושליחת פניות מטופס יצירת הקשר, המידע עשוי לעבור דרך ספקי תשתית ושירות חיצוניים, ובהם Vercel (אחסון והפעלת האתר) ו-Resend (שליחת הודעות דוא"ל). ספקים אלה מעבדים את המידע לצורך מתן השירות בלבד.',
    },
    {
      heading: "שמירת המידע",
      paragraph:
        "המידע הנמסר בטופס אינו נשמר כרגע במסד נתונים ייעודי של האתר, אלא מועבר ישירות לצורך שליחת הפנייה למשרד.",
    },
  ],
  contactTitle: "פנייה בנושא פרטיות",
  contactText: "בכל שאלה או בקשה בנושא פרטיות ניתן לפנות למשרד:",
  lastUpdated: "תאריך עדכון אחרון של מדיניות הפרטיות: ספטמבר 2026",
};

// The exact consent checkbox copy for the contact form (see ContactSection).
export const privacyConsent = {
  label: 'קראתי את מדיניות הפרטיות ואני מסכים/ה למסירת הפרטים לצורך טיפול בפנייתי.',
  linkText: "מדיניות הפרטיות",
  href: "/privacy",
};
