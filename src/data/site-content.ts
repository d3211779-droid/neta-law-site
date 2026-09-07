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
};

export type AdditionalPracticeArea = {
  title: string;
  description: string;
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
};

// CONFIRMED real client assets. width/height are the source files' true
// pixel dimensions, passed to next/image to avoid layout shift.
// logo.png (replaces the original logo.jpeg) is a true RGBA PNG with real
// alpha transparency — confirmed by decoding it (all four corners sample at
// alpha 0), not just its extension. No mix-blend-mode is needed for it.
// heroVideo is not wired up to any component beyond the Hero.
// portrait is used exclusively on /about (src/app/about/page.tsx) per the
// client's request — do not add it to the Hero or any other section.
export const media = {
  logo: {
    src: "/images/logo.png",
    alt: 'עו״ד נטע בן חמו',
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

// Address and postal code are CONFIRMED — client-provided. Phone, fax, and
// email are still TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (no real
// values have been provided for those yet).
export const contactDetails: ContactDetails = {
  phone: "050-000-0000",
  phoneDisplay: "050-000-0000",
  fax: "מספר הפקס יתעדכן בקרוב",
  email: "office@example.co.il",
  address: 'מתחם "הנגרייה", קיבוץ גת',
  postalCode: "7956500",
};

export const nav: NavItem[] = [
  { label: "ראשי", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "תחומי עיסוק", href: "/practice-areas" },
  { label: "יצירת קשר", href: "/contact" },
];

// CONFIRMED — the five practice areas and their order are client-provided.
// Descriptions are draft, one line each, and may be refined.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "nachalot",
    title: "נחלות ומשקים חקלאיים",
    shortDescription: "זכויות, ירושה, בן ממשיך והעברה בין־דורית בנחלות ובמשקים חקלאיים.",
    featured: true,
  },
  {
    slug: "wills-inheritance",
    title: "צוואות וירושות",
    shortDescription: "עריכת צוואות וליווי בהליכי ירושה בין בני משפחה.",
  },
  {
    slug: "lasting-power-of-attorney",
    title: "ייפוי כוח מתמשך",
    shortDescription: "הסדרת ייפוי כוח מתמשך לעתיד, מתוך בחירה ומראש.",
  },
  {
    slug: "real-estate",
    title: "עסקאות מקרקעין",
    shortDescription: "ליווי בעסקאות מכר, רכישה והסכמים במקרקעין.",
  },
  {
    slug: "mediation",
    title: "גישור ויישוב סכסוכים",
    shortDescription: "יישוב סכסוכים בדרך של דיאלוג, מתוך הקשבה לשני הצדדים.",
  },
];

// CONFIRMED — mentioned quietly on the practice-areas index only, per the
// client brief. No dedicated pages exist for these yet.
export const additionalPracticeAreas: AdditionalPracticeArea[] = [
  {
    title: "ליטיגציה אזרחית",
    description: "ייצוג וליווי בהליכים אזרחיים.",
  },
  {
    title: "תביעות מול המוסד לביטוח לאומי",
    description: "ליווי בתביעות וערעורים מול המוסד לביטוח לאומי.",
  },
];

export function practiceAreaHref(slug: string): string {
  return `/practice-areas/${slug}`;
}

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (all legal-substance copy is
// general and drafted for the template; the Nachalot topics below fold in
// the client's suggested subtopics rather than becoming separate pages)
export const servicePages: Record<string, ServicePageContent> = {
  nachalot: {
    slug: "nachalot",
    title: "נחלות ומשקים חקלאיים",
    metaTitle: 'נחלות ומשקים חקלאיים | עו"ד נטע בן חמו',
    metaDescription:
      "ליווי משפטי בנחלות ומשקים חקלאיים: בן ממשיך, העברה בין־דורית והורשת משק.",
    intro:
      "ליווי משפטי בסוגיות זכויות, ירושה והעברה בנחלות ובמשקים חקלאיים, מתוך הבנה של המורכבות הייחודית של המרחב הכפרי והחיים החקלאיים.",
    topics: ["נחלות ומשקים חקלאיים", "בן ממשיך", "העברה בין־דורית", "הורשת משק ונחלה"],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות בתחילת תהליך תכנון ההעברה או הירושה, לפני חתימה על מסמכים או הסכמות בין הצדדים.",
  },
  "wills-inheritance": {
    slug: "wills-inheritance",
    title: "צוואות וירושות",
    metaTitle: 'צוואות וירושות | עו"ד נטע בן חמו',
    metaDescription: "עריכת צוואות וליווי משפטי בהליכי ירושה.",
    intro:
      "עריכת צוואות וליווי בהליכי ירושה, מתוך תשומת לב לנסיבות המשפחתיות והרצון להותיר סדר וּודאות.",
    topics: ["עריכת צוואה", "ליווי בהליכי ירושה וצו קיום צוואה", "ירושה על פי דין", "הסכמות בין יורשים"],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult: "מומלץ לפנות הן בשלב עריכת הצוואה מראש, והן בכל שלב בהליך הירושה עצמו.",
  },
  "lasting-power-of-attorney": {
    slug: "lasting-power-of-attorney",
    title: "ייפוי כוח מתמשך",
    metaTitle: 'ייפוי כוח מתמשך | עו"ד נטע בן חמו',
    metaDescription: "הסדרת ייפוי כוח מתמשך לניהול ענייני אדם בעתיד.",
    intro:
      "ליווי בהסדרת ייפוי כוח מתמשך – כלי משפטי המאפשר לקבוע מראש מי ינהל את ענייניכם האישיים, הרכושיים והרפואיים, אם וכאשר יהיה בכך צורך.",
    topics: [
      "עריכת ייפוי כוח מתמשך",
      "מינוי מיופה כוח לענייני רכוש ואישיים",
      "מינוי מיופה כוח לענייני בריאות",
      "עדכון והתאמת המסמך לנסיבות המשפחתיות",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "ניתן וכדאי להסדיר ייפוי כוח מתמשך מתוך בחירה, בעת שאדם צלול ומסוגל לקבל החלטות בעצמו.",
  },
  "real-estate": {
    slug: "real-estate",
    title: "עסקאות מקרקעין",
    metaTitle: 'עסקאות מקרקעין | עו"ד נטע בן חמו',
    metaDescription: "ליווי משפטי בעסקאות מכר, רכישה והסכמים במקרקעין.",
    intro:
      "ליווי משפטי בעסקאות מכר, רכישה והסכמים במקרקעין פרטיים ומסחריים, משלב המשא ומתן ועד לרישום הזכויות.",
    topics: [
      "בדיקת מצב משפטי של הנכס",
      "עריכת הסכמי מכר ורכישה",
      "ליווי מול הרשויות והרישום",
      "עסקאות בין קרובים ובין צדדים שלישיים",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult: "מומלץ לפנות לפני חתימה על זיכרון דברים או הסכם, כדי לבחון את הזכויות והתנאים מראש.",
  },
  mediation: {
    slug: "mediation",
    title: "גישור ויישוב סכסוכים",
    metaTitle: 'גישור ויישוב סכסוכים | עו"ד נטע בן חמו',
    metaDescription: "ליווי ביישוב סכסוכים בדרך של דיאלוג והקשבה, מתוך שמירה על זכויות וכבוד הצדדים.",
    intro:
      "לא כל מחלוקת חייבת להסתיים בהתדיינות משפטית ממושכת. ליווי ביישוב סכסוכים מתוך הקשבה לשני הצדדים, תוך שמירה על זכויותיהם וכבודם, ובחתירה לפתרון שניתן לחיות איתו.",
    topics: [
      "גישור בסכסוכי משפחה ומקרקעין",
      "גישור בסכסוכים בין שותפים ובני משפחה",
      "ליווי בתהליך דיאלוג בין הצדדים",
      "בחינת האפשרות ליישוב סכסוך מחוץ לכותלי בית המשפט",
    ],
    whenToConsultTitle: "מתי כדאי לשקול גישור",
    whenToConsult:
      "גישור יכול להתאים כאשר לצדדים יש עניין משותף בהמשך מערכת היחסים, או כאשר מבקשים להגיע לפתרון מהיר, מכבד ופחות עימותי מהליך משפטי רגיל.",
  },
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const homeMeta: PageMeta = {
  title: 'עו"ד נטע בן חמו | מקרקעין, נחלות וגישור',
  description: "ליווי משפטי מקצועי ואישי בסוגיות מקרקעין, נחלות, ירושה, תכנון משפחתי ויישוב סכסוכים.",
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (draft marketing copy, per the
// client brief's own note that these texts "should remain easy to change")
export const hero = {
  eyebrow: "עו״ד נטע בן חמו | מקרקעין, נחלות וגישור",
  titleLines: ["אנשים ואדמה."],
  subtitle: "ליווי משפטי מקצועי ואישי בסוגיות מקרקעין, נחלות, ירושה, תכנון משפחתי ויישוב סכסוכים.",
  primaryCta: { label: "לתיאום שיחה", href: "/contact" },
  secondaryCta: { label: "לתחומי העיסוק", href: "/practice-areas" },
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const practiceAreasHomeTeaser = {
  heading: "תחומי עיסוק מרכזיים",
  intro: "ליווי משפטי בעולם המקרקעין, הנחלות, הירושה וניהול הסכסוכים.",
  viewAll: { label: "לכל תחומי העיסוק", href: "/practice-areas" },
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const practiceAreasPage = {
  metaTitle: 'תחומי עיסוק | עו"ד נטע בן חמו',
  metaDescription: "סקירת תחומי העיסוק של המשרד: נחלות, ירושה, ייפוי כוח מתמשך, מקרקעין וגישור.",
  heading: "תחומי עיסוק",
  intro: "ליווי משפטי בעולם המקרקעין, הנחלות, הירושה וניהול הסכסוכים.",
  itemLinkLabel: "לעמוד המלא",
  additionalHeading: "תחומים נוספים",
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const aboutTeaser = {
  title: "מהמרחב הכפרי אל עולם המשפט",
  paragraph:
    'עו"ד נטע בן חמו מלווה לקוחות בסוגיות מקרקעין, נחלות, ירושה וגישור, מתוך רקע אישי בעולם הכפרי והקשבה אמיתית לכל תיק.',
  cta: { label: "להיכרות עם נטע", href: "/about" },
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (concise original copy — not
// a verbatim copy of the client's philosophy paragraph)
export const brandStatement = {
  quote: "מאחורי כל הליך משפטי יש אדם, משפחה וסיפור.",
  supporting:
    "ידע וניסיון משפטי הם הבסיס. הקשבה, אמון והבנת המציאות שמאחורי התיק הם חלק בלתי נפרד מהדרך.",
};

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL
export const contactCallout = {
  title: "יש נושא שדורש בחינה משפטית?",
  cta: { label: "ליצירת קשר", href: "/contact" },
};

// CONFIRMED — the client dictated this exact bullet list (not draft prose
// this time). Nothing here invents experience, awards, cases, success
// rates, client names, or memberships beyond what was supplied. Experience
// is stated only as "הוסמכה כעורכת דין בשנת 2012" — not as a number of
// years — per the client's explicit instruction.
export const aboutPage = {
  metaTitle: 'אודות | עו"ד נטע בן חמו',
  metaDescription: 'היכרות עם עו"ד נטע בן חמו — רקע אישי ומקצועי.',
  heading: siteMeta.lawyerFullName,
  highlights: [
    "ילידת מושב תימורים, נשואה +4.",
    "שירתה בחיל מודיעין שדה, הן בשירות סדיר והן בשירות קבע.",
    "בהמשך סיימה תואר במשפטים (LL.B) בהצטיינות.",
    "מגשרת מוסמכת.",
    "הוסמכה כעורכת דין בשנת 2012.",
    "את דרכה המקצועית החלה בפרקליטות מחוז דרום (אזרחי), ובהמשך עברה לעסוק בתחום במגזר הפרטי.",
    "לאורך השנים צברה ניסיון בליטיגציה אזרחית, מקרקעין, אגודות שיתופיות, סכסוכים כספיים, צוואות וירושות, ייפוי כוח מתמשך ותביעות מול המוסד לביטוח לאומי.",
  ],
  cta: { label: "יצירת קשר", href: "/contact" },
};

// CONFIRMED — matches the five main practice areas.
export const contactFieldsOfInterest = [
  "נחלות ומשקים חקלאיים",
  "צוואות וירושות",
  "ייפוי כוח מתמשך",
  "עסקאות מקרקעין",
  "גישור ויישוב סכסוכים",
  "אחר",
];

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (except the privacy note,
// which is dictated verbatim)
export const contactPage = {
  metaTitle: 'יצירת קשר | עו"ד נטע בן חמו',
  metaDescription: "פרטי התקשרות וטופס יצירת קשר להדגמה בלבד.",
  title: "יצירת קשר",
  subtitle: "יש נושא שדורש בחינה משפטית? השאירו פרטים ונחזור אליכם לתיאום שיחת היכרות ראשונית.",
  privacyNote:
    "נא לא למסור בטופס מידע משפטי, אישי או רגיש. השארת פרטים אינה יוצרת יחסי עורך דין–לקוח.",
  demoNote: "טופס זה במצב הדגמה בלבד ואינו שולח מידע לשרת.",
  submitLabel: "שליחה",
  submittedNote: "תודה! זוהי הדגמה בלבד ולא נשלח מידע.",
};

// Only routes that actually exist — no privacy/accessibility links until
// those pages are built.
export const footerLinks: FooterLink[] = [
  { label: "אודות", href: "/about" },
  { label: "תחומי עיסוק", href: "/practice-areas" },
  { label: "יצירת קשר", href: "/contact" },
];

// Dictated verbatim — not a placeholder.
export const legalDisclaimer = "המידע באתר הוא מידע כללי בלבד ואינו מהווה ייעוץ משפטי.";

// Dictated verbatim — not a placeholder. Used on service pages specifically.
export const servicePageDisclaimer =
  "המידע בעמוד הוא מידע כללי בלבד ואינו מהווה ייעוץ משפטי. כל מקרה נבחן בהתאם לנסיבותיו.";
