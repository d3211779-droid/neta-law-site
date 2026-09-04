// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
// Every business fact, name, number, and description in this file is a
// placeholder for the initial template build. Nothing here is legal advice,
// a confirmed fact, or an approved credential — all of it must be reviewed
// and replaced by the lawyer before launch. Two verbatim strings are the
// exception: the contact-form privacy note and the general-information
// disclaimer, both dictated exactly as given and not placeholders.

export type NavItem = {
  label: string;
  href: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
};

export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  topics: string[];
  whenToConsultTitle: string;
  whenToConsult: string;
};

export type ContactDetails = {
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  /** Only rendered when set — no placeholder office address is invented. */
  address?: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

export type FooterLink = {
  label: string;
  /** null = page doesn't exist yet; rendered as plain non-navigational text. */
  href: string | null;
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const siteMeta = {
  firmName: "נטע | משרד עורכי דין",
  lawyerName: "נטע [שם משפחה]",
  lawyerRole: "עורכת דין למקרקעין, נחלות והמרחב הכפרי",
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const contactDetails: ContactDetails = {
  phone: "050-0000000",
  phoneDisplay: "050-0000000",
  whatsappNumber: "972500000000",
  email: "info@example.co.il",
  // address intentionally omitted — none provided yet.
};

export const nav: NavItem[] = [
  { label: "ראשי", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "תחומי עיסוק", href: "/practice-areas" },
  { label: "יצירת קשר", href: "/contact" },
];

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const practiceAreas: PracticeArea[] = [
  {
    slug: "nachalot",
    title: "נחלות ומשקים חקלאיים",
    shortDescription: "זכויות, ירושה ובן ממשיך בנחלות ובמשקים חקלאיים.",
  },
  {
    slug: "real-estate",
    title: "עסקאות מקרקעין",
    shortDescription: "ליווי בעסקאות מכר, רכישה והסכמים במקרקעין.",
  },
  {
    slug: "israel-land-authority",
    title: "רשות מקרקעי ישראל",
    shortDescription: "החכרות, היוונים ובקשות מול רשות מקרקעי ישראל.",
  },
  {
    slug: "planning-and-building",
    title: "תכנון ובנייה",
    shortDescription: "ליווי מול ועדות תכנון ובנייה בהיבטים משפטיים.",
  },
];

export function practiceAreaHref(slug: string): string {
  return `/practice-areas/${slug}`;
}

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const servicePages: Record<string, ServicePageContent> = {
  nachalot: {
    slug: "nachalot",
    title: "נחלות ומשקים חקלאיים",
    metaTitle: "נחלות ומשקים חקלאיים | נטע, משרד עורכי דין",
    metaDescription:
      "ליווי משפטי בסוגיות זכויות, ירושה ובן ממשיך בנחלות ובמשקים חקלאיים.",
    intro:
      "ליווי משפטי בסוגיות זכויות, ירושה ובן ממשיך בנחלות ובמשקים חקלאיים, מתוך הבנה של המורכבות הייחודית של המרחב הכפרי.",
    topics: [
      "רישום זכויות בנחלה",
      "העברת נחלה ובן ממשיך",
      "ירושה במשק חקלאי",
      "הסכמים בין יורשים ובני משפחה",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות בתחילת תהליך תכנון ההעברה או הירושה, לפני חתימה על מסמכים או הסכמות בין הצדדים.",
  },
  "real-estate": {
    slug: "real-estate",
    title: "עסקאות מקרקעין",
    metaTitle: "עסקאות מקרקעין | נטע, משרד עורכי דין",
    metaDescription:
      "ליווי משפטי בעסקאות מכר, רכישה והסכמים במקרקעין פרטיים ומסחריים.",
    intro:
      "ליווי משפטי בעסקאות מכר, רכישה והסכמים במקרקעין פרטיים ומסחריים, משלב המשא ומתן ועד לרישום הזכויות.",
    topics: [
      "בדיקת מצב משפטי של הנכס",
      "עריכת הסכמי מכר ורכישה",
      "ליווי מול הרשויות והרישום",
      "עסקאות בין קרובים ובין צדדים שלישיים",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות לפני חתימה על זיכרון דברים או הסכם, כדי לבחון את הזכויות והתנאים מראש.",
  },
  "israel-land-authority": {
    slug: "israel-land-authority",
    title: "רשות מקרקעי ישראל",
    metaTitle: "רשות מקרקעי ישראל | נטע, משרד עורכי דין",
    metaDescription:
      "טיפול מול רשות מקרקעי ישראל בהחכרות, היוונים ובקשות הקשורות לזכויות במקרקעי ישראל.",
    intro:
      "טיפול מול רשות מקרקעי ישראל בהחכרות, היוונים ובקשות הקשורות לזכויות במקרקעי ישראל.",
    topics: [
      "בקשות להיוון זכויות חכירה",
      "חידוש והארכת חוזי חכירה",
      "טיפול בפניות ובעררים מול הרשות",
      "בירור זכויות רישום מול הרשות",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות בכל שלב שבו מתקבלת פנייה מהרשות, או כאשר עולה צורך להסדיר זכויות מולה.",
  },
  "planning-and-building": {
    slug: "planning-and-building",
    title: "תכנון ובנייה",
    metaTitle: "תכנון ובנייה | נטע, משרד עורכי דין",
    metaDescription:
      "ליווי משפטי מול ועדות תכנון ובנייה בהיבטים הקשורים להיתרים, תכניות ושימושים במקרקעין.",
    intro:
      "ליווי משפטי מול ועדות תכנון ובנייה בהיבטים הקשורים להיתרים, תכניות ושימושים במקרקעין.",
    topics: [
      "ליווי בהליכי היתר בנייה",
      "התנגדויות ופניות לוועדות תכנון",
      "בחינת היבטים משפטיים של תכניות מתאר",
      "שימושים חורגים והסדרתם",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות בשלב מוקדם של תכנון הבנייה או השימוש בנכס, לפני הגשת בקשות לוועדות.",
  },
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const homeMeta: PageMeta = {
  title: "נטע | משרד עורכי דין - מקרקעין, נחלות והמרחב הכפרי",
  description:
    "ליווי משפטי אישי בתחומי מקרקעין, נחלות, רשות מקרקעי ישראל ותכנון ובנייה.",
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const hero = {
  eyebrow: "משרד עורכי דין למקרקעין, נחלות והמרחב הכפרי",
  titleLines: ["הקרקע היא נכס.", "הזכויות עליה דורשות דיוק."],
  subtitle:
    "ליווי משפטי אישי ומקצועי בסוגיות מקרקעין, נחלות, משקים חקלאיים והסדרת זכויות.",
  primaryCta: { label: "לתיאום שיחה", href: "/contact" },
  secondaryCta: { label: "לתחומי העיסוק", href: "/practice-areas" },
  portraitPlaceholder: "תמונה מקצועית תתווסף",
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const practiceAreasHomeTeaser = {
  heading: "תחומי עיסוק מרכזיים",
  intro: "ליווי משפטי מרוכז בעולם המקרקעין, הנחלות והמרחב הכפרי.",
  viewAll: { label: "לכל תחומי העיסוק", href: "/practice-areas" },
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const practiceAreasPage = {
  metaTitle: "תחומי עיסוק | נטע, משרד עורכי דין",
  metaDescription:
    "סקירת תחומי העיסוק המרכזיים של המשרד: נחלות, מקרקעין, רשות מקרקעי ישראל ותכנון ובנייה.",
  heading: "תחומי עיסוק",
  intro: "ליווי משפטי מרוכז בעולם המקרקעין, הנחלות והמרחב הכפרי.",
  itemLinkLabel: "לעמוד המלא",
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const aboutTeaser = {
  title: "ליווי משפטי שמתחיל בהקשבה",
  paragraph:
    "כל תיק מתחיל בשיחה של ממש: הבנת הרקע, הצרכים והנסיבות, לפני שלב אחד של עבודה משפטית.",
  cta: { label: "להיכרות עם המשרד", href: "/about" },
  imagePlaceholder: "תמונה תתווסף",
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const brandStatement = {
  quote: "בקרקע, בנכס ובמשפחה — לכל החלטה יש משמעות לטווח ארוך.",
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const contactCallout = {
  title: "בואו נבחן יחד את הדרך הנכונה להתקדם",
  cta: { label: "לעמוד יצירת הקשר", href: "/contact" },
};

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY
export const aboutPage = {
  metaTitle: "אודות | נטע, משרד עורכי דין",
  metaDescription: "היכרות עם המשרד, גישת העבודה והערכים המרכזיים.",
  heading: siteMeta.lawyerName,
  role: siteMeta.lawyerRole,
  intro: [
    "כל תיק מתחיל בשיחה של ממש: הבנת הרקע, הצרכים והנסיבות, לפני שלב אחד של עבודה משפטית.",
    "מכאן ואילך הליווי נשאר אישי וברור — הסבר מלא של האפשרויות וההשלכות, בכל שלב בתהליך.",
  ],
  approachTitle: "גישת העבודה",
  approach:
    "כל תיק נבחן לעומק לפני שממליצים על דרך פעולה, מתוך הקשבה לנסיבות הספציפיות של כל לקוח ולקוחה.",
  valuesTitle: "ערכים מרכזיים",
  values: [
    { title: "מקצועיות", description: "עבודה יסודית ומדויקת, המבוססת על הכרת התחום לעומק." },
    { title: "שקיפות", description: "הסבר ברור של התהליך, האפשרויות וההשלכות בכל שלב." },
    { title: "ליווי אישי", description: "זמינות ותשומת לב אישית לכל לקוח ולנסיבות הייחודיות שלו." },
  ],
  imagePlaceholder: "תמונה מקצועית תתווסף",
  cta: { label: "יצירת קשר", href: "/contact" },
};

export const contactFieldsOfInterest = [
  "נחלות ומשקים חקלאיים",
  "עסקאות מקרקעין",
  "רשות מקרקעי ישראל",
  "תכנון ובנייה",
  "אחר",
];

// TEMPORARY CONTENT — REPLACE AFTER CLIENT DISCOVERY (except the two
// verbatim notes below, which are dictated copy, not placeholders).
export const contactPage = {
  metaTitle: "יצירת קשר | נטע, משרד עורכי דין",
  metaDescription: "פרטי התקשרות וטופס יצירת קשר להדגמה בלבד.",
  title: "בואו נבחן יחד את הדרך הנכונה להתקדם",
  subtitle: "השאירו פרטים ונחזור אליכם לתיאום שיחת היכרות ראשונית.",
  privacyNote:
    "נא לא למסור בטופס מידע משפטי, אישי או רגיש. השארת פרטים אינה יוצרת יחסי עורך דין–לקוח.",
  demoNote: "טופס זה במצב הדגמה בלבד ואינו שולח מידע לשרת.",
  submitLabel: "שליחה",
  submittedNote: "תודה! זוהי הדגמה בלבד ולא נשלח מידע.",
};

export const footerLinks: FooterLink[] = [
  { label: "מדיניות פרטיות", href: null },
  { label: "הצהרת נגישות", href: null },
  { label: "יצירת קשר", href: "/contact" },
];

// Dictated verbatim — not a placeholder.
export const legalDisclaimer =
  "המידע באתר הוא מידע כללי בלבד ואינו מהווה ייעוץ משפטי.";
