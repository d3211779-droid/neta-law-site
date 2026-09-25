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

export type ServicePageSection = {
  heading: string;
  paragraphs: string[];
};

export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ServicePageSection[];
  topicsHeading: string;
  topics: string[];
  whenToConsultTitle: string;
  whenToConsult: string;
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
// heroVideo: the file stays on disk but is currently unused — the Hero was
// switched back to the static portrait (see HeroSection.tsx) so the client
// could get sharper, higher-resolution quality than the 1024x576 source
// video allowed. The field is kept so the video can be reintroduced without
// re-uploading anything.
// portrait is used on /about and, as of this pass, the Hero as well.
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
  { label: "יצירת קשר", href: "/contact" },
];

// CONFIRMED — ten practice areas, each with its own dedicated page. Order
// groups related topics together: land/real-estate, family/estate planning,
// disputes, then mediation. Titles match each service page's own H1 exactly,
// so the card, the header nav, and the page itself never disagree.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "nachalot",
    title: "נחלות ומשקים במושבים",
    shortDescription: "זכויות, ירושה, בן ממשיך והעברה בין־דורית בנחלות ובמשקים במושבים.",
    featured: true,
  },
  {
    slug: "real-estate",
    title: 'מקרקעין ועסקאות נדל"ן',
    shortDescription: 'ליווי בעסקאות מכר, רכישה והסכמים במקרקעין ונדל"ן.',
  },
  {
    slug: "israel-land-authority",
    title: "רשות מקרקעי ישראל",
    shortDescription: "ליווי מול רשות מקרקעי ישראל בסוגיות זכויות, הקצאות והסדרת מקרקעין.",
  },
  {
    slug: "planning-and-building",
    title: "תכנון ובנייה",
    shortDescription: "ליווי משפטי בסוגיות תכנון ובנייה וזכויות בנייה במקרקעין.",
  },
  {
    slug: "cooperative-societies",
    title: "אגודות שיתופיות",
    shortDescription: "זכויות חברים, פניות והחלטות מוסדות מול אגודות שיתופיות.",
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
    slug: "financial-disputes",
    title: "סכסוכים כספיים",
    shortDescription: "ייצוג בסכסוכים כספיים ומחלוקות אזרחיות, תוך בחינת האסטרטגיה המתאימה.",
  },
  {
    slug: "national-insurance",
    title: "תביעות מול המוסד לביטוח לאומי",
    shortDescription: "ליווי בתביעות ובהליכים מול המוסד לביטוח לאומי.",
  },
  {
    slug: "mediation",
    title: "גישור ויישוב סכסוכים",
    shortDescription: "יישוב סכסוכים בדרך של דיאלוג, מתוך הקשבה לשני הצדדים.",
  },
];

export function practiceAreaHref(slug: string): string {
  return `/practice-areas/${slug}`;
}

export function practiceAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

// Card-grid display order for the /practice-areas page. All ten areas now
// have a dedicated page, so the grid simply mirrors practiceAreas's order.
export const practiceAreasGridOrder = practiceAreas.map((area) => area.slug);

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (all legal-substance copy is
// general and educational, drafted for the template. It describes what each
// service covers — it does not claim case outcomes, success rates, or a
// specific number of years of experience.)
export const servicePages: Record<string, ServicePageContent> = {
  nachalot: {
    slug: "nachalot",
    title: "נחלות ומשקים במושבים",
    metaTitle: 'עורך דין נחלות ומשקים במושבים | נטע בן חמו',
    metaDescription:
      "ייעוץ וליווי משפטי בנושאי נחלות, משקים במושבים, העברה בין דורית, זכויות בנחלה והסדרת סוגיות משפטיות במרחב הכפרי.",
    intro:
      "נחלות ומשקים במושבים הם נכס משפחתי וכלכלי מורכב, שבו נפגשים דיני הירושה עם תקנון האגודה השיתופית ומדיניות רשות מקרקעי ישראל. ליווי משפטי בתחום דורש היכרות אמיתית עם המרחב הכפרי, לצד דיוק משפטי.",
    sections: [
      {
        heading: "מה כולל הליווי המשפטי בנחלות",
        paragraphs: [
          "התנהלות סביב נחלה נוגעת לרוב בכמה שכבות בו־זמנית: מיהו בן הממשיך, כיצד מוסדרת הזכות מול רשות מקרקעי ישראל והאגודה השיתופית, ומה קורה לזכויות בנחלה כשבעליה נפטר או מבקש להעביר אותה בחייו.",
          "ליווי משפטי בתחום כולל בחינת מעמד הזכויות הקיימות בנחלה, בדיקת ההסכמים וההחלטות מול האגודה השיתופית, וליווי בתהליך ההעברה או ההסדרה — בין שמדובר בהעברה בין־דורית מתוכננת ובין שמדובר במחלוקת שכבר התגלעה בין בני המשפחה.",
        ],
      },
      {
        heading: "העברה בין־דורית והורשת משק",
        paragraphs: [
          'העברת נחלה בין דורות מעלה שאלות שאינן קיימות בהורשת נכס "רגיל": מעמדו של בן הממשיך, זכויות שאר הילדים, ותנאי האגודה השיתופית ורשות מקרקעי ישראל להכרה בהעברה. תכנון מוקדם ומדויק יכול לחסוך חלק ניכר מהמחלוקות שעלולות להתעורר בהמשך.',
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "מעמד בן ממשיך וזכויותיו",
      "העברה בין־דורית של הנחלה",
      "הורשת משק ונחלה בין יורשים",
      "התנהלות מול האגודה השיתופית ורשות מקרקעי ישראל",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות בתחילת תהליך תכנון ההעברה או הירושה, לפני חתימה על מסמכים או הסכמות בין הצדדים.",
    relatedSlugs: ["israel-land-authority", "cooperative-societies", "wills-inheritance"],
  },
  "real-estate": {
    slug: "real-estate",
    title: 'מקרקעין ועסקאות נדל"ן',
    metaTitle: 'עורך דין מקרקעין ונדל"ן | נטע בן חמו',
    metaDescription:
      'ליווי משפטי בעסקאות מקרקעין ונדל"ן, בדיקות משפטיות, הסכמים וטיפול בסוגיות הקשורות לזכויות במקרקעין.',
    intro:
      'ליווי משפטי בעסקאות מכר, רכישה והסכמים במקרקעין ונדל"ן, פרטיים ומסחריים, משלב המשא ומתן ועד לרישום הזכויות.',
    sections: [
      {
        heading: "בדיקות משפטיות לפני עסקה",
        paragraphs: [
          "לפני חתימה על כל עסקה במקרקעין חשוב לבדוק את המצב המשפטי והתכנוני של הנכס: רישום הזכויות, שעבודים קיימים, היתרי בנייה ותאימות לתכנית המתאר החלה. בדיקה מוקדמת יכולה לחסוך בעיות שמתגלות רק בשלב מאוחר יותר.",
          "ליווי משפטי בעסקה כולל ניסוח ובחינה של הסכם המכר או הרכישה, וטיפול מול הרשויות והגורמים הרלוונטיים לרישום הזכויות על שם הרוכש.",
        ],
      },
      {
        heading: "עסקאות בין קרובים ומול צדדים שלישיים",
        paragraphs: [
          "עסקאות במקרקעין בין בני משפחה מעלות לעיתים שיקולים נוספים — מיסוי, ציפיות משפחתיות והסכמות בעל־פה שכדאי להעלות על הכתב. גם בעסקה מול צד שלישי, הסכם מדויק וברור מראש הוא הדרך הטובה ביותר למנוע מחלוקת בהמשך.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "בדיקת מצב משפטי ותכנוני של הנכס",
      "עריכת הסכמי מכר ורכישה",
      "ליווי מול הרשויות והרישום",
      "עסקאות בין קרובים ובין צדדים שלישיים",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult: "מומלץ לפנות לפני חתימה על זיכרון דברים או הסכם, כדי לבחון את הזכויות והתנאים מראש.",
    relatedSlugs: ["israel-land-authority", "planning-and-building", "nachalot"],
  },
  "israel-land-authority": {
    slug: "israel-land-authority",
    title: "רשות מקרקעי ישראל",
    metaTitle: "רשות מקרקעי ישראל – ייעוץ וליווי משפטי | נטע בן חמו",
    metaDescription:
      "ליווי משפטי בהתנהלות מול רשות מקרקעי ישראל ובסוגיות הנוגעות לזכויות, הקצאות והסדרת מקרקעין.",
    intro:
      'חלק ניכר מהזכויות במקרקעין בישראל — ובהן זכויות בנחלות ובמשקי עזר — מוסדר מול רשות מקרקעי ישראל (רמ"י). התנהלות מול הרשות כרוכה בהליכים ובכללי מדיניות ייחודיים, שונים במהותם מעסקה במקרקעין פרטיים.',
    sections: [
      {
        heading: "התנהלות מול רשות מקרקעי ישראל",
        paragraphs: [
          'פנייה לרמ"י יכולה לעסוק בהקצאת זכויות, אישור עסקה, שינוי ייעוד, או בחינת החלטת מועצת מקרקעי ישראל הרלוונטית למקרה הספציפי. לכל הליך כזה נהלים, טפסים ולוחות זמנים משלו.',
          "ליווי משפטי מול הרשות כולל בחינת מעמד הזכויות הקיים, הבנת הדרישות החלות על המקרה, והכנת הפנייה או הערר בהתאם לנהלי הרשות.",
        ],
      },
      {
        heading: "זכויות, הקצאות והסדרות",
        paragraphs: [
          'סוגיות מול רמ"י מתעוררות לעיתים קרובות יחד עם נושאים נוספים — זכויות בנחלה, שינוי ייעוד קרקע לקראת עסקה, או בירור מעמד משפטי לפני מכירה. בחינה משפטית מוקדמת יכולה לחסוך עיכובים ואי־ודאות מול הרשות.',
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      'הקצאות זכויות וחכירה מול רמ"י',
      "שינוי ייעוד והסדרת שימושים בקרקע",
      "ערר או פנייה על החלטות הרשות",
      "בירור מעמד זכויות לפני עסקה במקרקעין",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות לפני הגשת בקשה או פנייה לרשות מקרקעי ישראל, וכן בכל מקרה של אי־בהירות לגבי מעמד הזכויות בקרקע.",
    relatedSlugs: ["nachalot", "real-estate", "planning-and-building"],
  },
  "planning-and-building": {
    slug: "planning-and-building",
    title: "תכנון ובנייה",
    metaTitle: "עורך דין תכנון ובנייה | נטע בן חמו",
    metaDescription:
      "ייעוץ וליווי משפטי בסוגיות תכנון ובנייה, זכויות בנייה, הליכים תכנוניים וסוגיות הקשורות למקרקעין.",
    intro:
      "זכויות הבנייה החלות על מקרקעין וההליכים מול מוסדות התכנון משפיעים באופן ישיר על שוויו ועל אפשרויות הניצול של כל נכס. בירור המצב התכנוני הוא שלב מרכזי בכל תכנון או עסקה הקשורים למקרקעין.",
    sections: [
      {
        heading: "מהן סוגיות תכנון ובנייה",
        paragraphs: [
          "תחום התכנון והבנייה עוסק בזכויות הבנייה החלות על מקרקעין, בתכניות המתאר וההליכים התכנוניים המשפיעים עליהן, ובבחינת ההתאמה בין מצב הנכס בפועל לבין ההיתר והרישוי הקיימים.",
          "ליווי משפטי בתחום כולל בדיקת המצב התכנוני של נכס, ליווי בהליכים מול הוועדות המקומיות והמחוזיות, ובחינת ההשלכות המשפטיות של חריגות בנייה או שימושים שאינם תואמים את ההיתר.",
        ],
      },
      {
        heading: "הקשר לעסקאות מקרקעין",
        paragraphs: [
          "סוגיות תכנון ובנייה נוגעות לעיתים קרובות בעסקאות מקרקעין — למשל כשרכישת נכס תלויה בזכויות בנייה עתידיות, או כשיש צורך להסדיר חריגה לפני מכירה. בירור המצב התכנוני מראש מסייע לצדדים לקבל החלטה מושכלת.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "בדיקת המצב התכנוני של נכס",
      "ליווי מול ועדות תכנון ובנייה",
      "בחינת חריגות בנייה",
      "זכויות בנייה במסגרת עסקת מקרקעין",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות לפני רכישה או מכירה של נכס שקיימת בו אי־בהירות תכנונית, וכן בכל הליך מול ועדות התכנון והבנייה.",
    relatedSlugs: ["real-estate", "israel-land-authority", "nachalot"],
  },
  "cooperative-societies": {
    slug: "cooperative-societies",
    title: "אגודות שיתופיות",
    metaTitle: "אגודות שיתופיות – ייעוץ משפטי | נטע בן חמו",
    metaDescription:
      "ייעוץ וליווי משפטי בנושאי אגודות שיתופיות, זכויות חברים, מחלוקות וסוגיות במרחב הכפרי.",
    intro:
      "אגודות שיתופיות, ובהן מושבים וקיבוצים, מתנהלות לפי דין ייחודי המשלב בין דיני עמותות, תקנון האגודה והחלטות מוסדותיה. זכויות החברים וההתנהלות מול האגודה הן חלק מרכזי מהחיים במרחב הכפרי.",
    sections: [
      {
        heading: "זכויות חברים והתנהלות מול האגודה",
        paragraphs: [
          "חברות באגודה שיתופית כרוכה בזכויות ובחובות הקבועות בתקנון האגודה ובהחלטות מוסדותיה — ועדת קבלה, אסיפה כללית וועד ההנהלה. מחלוקות עשויות להתעורר סביב קבלה לאגודה, הקצאת משאבים, או פרשנות התקנון.",
          "ליווי משפטי בתחום כולל בחינת מעמד הזכויות מול האגודה, ליווי בפניות ובהחלטות מוסדותיה, וטיפול במחלוקות בין חבר לאגודה או בין חברים לבין עצמם.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "זכויות וחובות חברי אגודה",
      "פניות והחלטות מוסדות האגודה",
      "מחלוקות בין חבר לאגודה",
      "סוגיות משיקות לנחלות ולמשקים במסגרת האגודה",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות כשמתעוררת מחלוקת מול האגודה השיתופית, וכן בכל שאלה הנוגעת לפרשנות התקנון או להחלטות מוסדות האגודה.",
    relatedSlugs: ["nachalot", "israel-land-authority", "financial-disputes"],
  },
  "wills-inheritance": {
    slug: "wills-inheritance",
    title: "צוואות וירושות",
    metaTitle: "עורך דין צוואות וירושות | נטע בן חמו",
    metaDescription:
      "עריכת צוואות, טיפול בענייני ירושה וליווי משפטי בהליכים ובמחלוקות בתחום הצוואות והירושות.",
    intro:
      "עריכת צוואות וליווי בהליכי ירושה, מתוך תשומת לב לנסיבות המשפחתיות והרצון להותיר סדר וּודאות.",
    sections: [
      {
        heading: "עריכת צוואה",
        paragraphs: [
          "צוואה ברורה וערוכה כראוי היא הדרך הטובה ביותר להבטיח שהרצון האישי יכובד, ולצמצם מראש מחלוקות אפשריות בין היורשים. עריכת הצוואה כוללת בחינת הנסיבות המשפחתיות והרכושיות, וניסוח מדויק שעומד בדרישות החוק.",
        ],
      },
      {
        heading: "הליכי ירושה וצו קיום צוואה",
        paragraphs: [
          "כשנפטר אדם, יש צורך בהוצאת צו קיום צוואה (אם השאיר צוואה) או צו ירושה (אם לא). ליווי בהליך כולל הגשת הבקשה לרשם לענייני ירושה, טיפול בהתנגדויות אם מוגשות, וסיוע בהסכמות בין היורשים כשמדובר בירושה מורכבת.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: ["עריכת צוואה", "ליווי בהליכי ירושה וצו קיום צוואה", "ירושה על פי דין", "הסכמות בין יורשים"],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult: "מומלץ לפנות הן בשלב עריכת הצוואה מראש, והן בכל שלב בהליך הירושה עצמו.",
    relatedSlugs: ["lasting-power-of-attorney", "nachalot", "mediation"],
  },
  "lasting-power-of-attorney": {
    slug: "lasting-power-of-attorney",
    title: "ייפוי כוח מתמשך",
    metaTitle: 'ייפוי כוח מתמשך | עו"ד נטע בן חמו',
    metaDescription:
      "עריכת ייפוי כוח מתמשך וליווי בתהליך המאפשר לתכנן מראש מי יקבל החלטות בענייניו של אדם בעת הצורך.",
    intro:
      "ליווי בהסדרת ייפוי כוח מתמשך – כלי משפטי המאפשר לקבוע מראש מי ינהל את ענייניכם האישיים, הרכושיים והרפואיים, אם וכאשר יהיה בכך צורך.",
    sections: [
      {
        heading: "מה זה ייפוי כוח מתמשך",
        paragraphs: [
          "ייפוי כוח מתמשך מאפשר לאדם, בעודו צלול ומסוגל לקבל החלטות, לקבוע מראש מי יהיה מיופה הכוח שינהל את ענייניו אם בעתיד לא יוכל לעשות זאת בעצמו — בלי צורך במינוי אפוטרופוס על ידי בית המשפט.",
          "המסמך יכול להתייחס לענייני רכוש, לענייני אישיים (כמו מקום מגורים ואורח חיים) ולענייני בריאות, וניתן להתאים אותו להנחיות ולרצונות האישיים של עורך המסמך.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "עריכת ייפוי כוח מתמשך",
      "מינוי מיופה כוח לענייני רכוש ואישיים",
      "מינוי מיופה כוח לענייני בריאות",
      "עדכון והתאמת המסמך לנסיבות המשפחתיות",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "ניתן וכדאי להסדיר ייפוי כוח מתמשך מתוך בחירה, בעת שאדם צלול ומסוגל לקבל החלטות בעצמו.",
    relatedSlugs: ["wills-inheritance", "mediation", "financial-disputes"],
  },
  "financial-disputes": {
    slug: "financial-disputes",
    title: "סכסוכים כספיים",
    metaTitle: "סכסוכים כספיים וליטיגציה אזרחית | נטע בן חמו",
    metaDescription:
      "ייצוג וליווי משפטי בסכסוכים כספיים ומחלוקות אזרחיות, תוך בחינת האפשרויות המשפטיות והאסטרטגיה המתאימה.",
    intro:
      "לא כל מחלוקת כספית מחייבת הליך משפטי ממושך, אך כשמתעורר סכסוך חשוב לבחון את הזכויות והאפשרויות המשפטיות בצורה מדויקת, ומוקדם ככל האפשר.",
    sections: [
      {
        heading: "ייצוג בסכסוכים כספיים ואזרחיים",
        paragraphs: [
          "סכסוכים כספיים יכולים לנבוע מהסכמים שלא קוימו, חובות בין צדדים, שותפויות שהסתיימו במחלוקת, או מחלוקות אזרחיות אחרות. בכל מקרה כזה יש לבחון את העובדות, ההסכמים הקיימים והזכויות המשפטיות של הצדדים.",
          "ליווי משפטי בתחום כולל בחינת האפשרויות העומדות לצד הנפגע, גיבוש אסטרטגיה מתאימה — משא ומתן, גישור או הליך משפטי — וייצוג לאורך הדרך.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "סכסוכים כספיים בין צדדים פרטיים",
      "מחלוקות בעקבות הסכמים או שותפויות",
      "בחינת האסטרטגיה המשפטית המתאימה",
      "ייצוג בהליכי ליטיגציה אזרחית",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות בשלב מוקדם ככל האפשר של המחלוקת, לפני נקיטת צעדים או הצעת פשרה, כדי לבחון את מלוא האפשרויות העומדות לרשותכם.",
    relatedSlugs: ["mediation", "cooperative-societies", "wills-inheritance"],
  },
  "national-insurance": {
    slug: "national-insurance",
    title: "תביעות מול המוסד לביטוח לאומי",
    metaTitle: "תביעות ביטוח לאומי – ייעוץ וליווי משפטי | נטע בן חמו",
    metaDescription: "ייעוץ וליווי משפטי בתביעות ובהליכים מול המוסד לביטוח לאומי.",
    intro:
      "התנהלות מול המוסד לביטוח לאומי כוללת הליכים ולוחות זמנים ייחודיים, וההחלטות המתקבלות בהם משפיעות באופן ישיר על הזכאות לגמלאות ולתשלומים. ליווי משפטי יכול לסייע בהצגת התביעה בצורה מסודרת ומבוססת.",
    sections: [
      {
        heading: "ליווי בתביעות מול המוסד לביטוח לאומי",
        paragraphs: [
          "תביעות מול המוסד לביטוח לאומי עוסקות בסוגיות מגוונות, ובהן קביעת נכות, גמלאות והכרה בזכאות. לכל סוג תביעה הליך, מסמכים ומועדים משלו, ולעיתים יש צורך גם בהגשת ערר על החלטת המוסד.",
          "ליווי משפטי בתחום כולל בחינת התביעה וההחלטה שהתקבלה, איתור הטעון חיזוק או תיקון, וליווי בהגשת התביעה או הערר מול המוסד.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "תביעות נכות וגמלאות",
      "עררים על החלטות המוסד לביטוח לאומי",
      "בחינת זכאות והכרה בתביעה",
      "ליווי בהליכים מול המוסד",
    ],
    whenToConsultTitle: "מתי כדאי לפנות לייעוץ",
    whenToConsult:
      "מומלץ לפנות מיד עם קבלת החלטת המוסד לביטוח לאומי, שכן להגשת ערר יש לרוב מועד מוגבל, וכן בכל שלב מוקדם יותר של הגשת התביעה.",
    relatedSlugs: ["financial-disputes", "wills-inheritance", "mediation"],
  },
  mediation: {
    slug: "mediation",
    title: "גישור ויישוב סכסוכים",
    metaTitle: "מגשרת מוסמכת – גישור ויישוב סכסוכים | נטע בן חמו",
    metaDescription:
      "גישור ויישוב סכסוכים בדרך מקצועית וממוקדת, תוך בחינת האינטרסים והאפשרויות של הצדדים.",
    intro:
      "לא כל מחלוקת חייבת להסתיים בהתדיינות משפטית ממושכת. ליווי ביישוב סכסוכים מתוך הקשבה לשני הצדדים, תוך שמירה על זכויותיהם וכבודם, ובחתירה לפתרון שניתן לחיות איתו.",
    sections: [
      {
        heading: "גישור כדרך ליישוב סכסוך",
        paragraphs: [
          "גישור הוא הליך מובנה שבו מגשר ניטרלי מסייע לצדדים למחלוקת להגיע להסכמה בעצמם, מבלי לכפות עליהם פתרון. ההליך גמיש, חסוי, ולרוב מהיר וזול משמעותית מהתדיינות בבית המשפט.",
          "ליווי בהליך גישור כולל הכנה לקראת המפגשים, ליווי במהלכם, ובחינת ההצעות וההסכמות המתגבשות מנקודת המבט של הצד המיוצג.",
        ],
      },
    ],
    topicsHeading: "בין הסוגיות בהן ניתן ליווי",
    topics: [
      "גישור בסכסוכי משפחה ומקרקעין",
      "גישור בסכסוכים בין שותפים ובני משפחה",
      "ליווי בתהליך דיאלוג בין הצדדים",
      "בחינת האפשרות ליישוב סכסוך מחוץ לכותלי בית המשפט",
    ],
    whenToConsultTitle: "מתי כדאי לשקול גישור",
    whenToConsult:
      "גישור יכול להתאים כאשר לצדדים יש עניין משותף בהמשך מערכת היחסים, או כאשר מבקשים להגיע לפתרון מהיר, מכבד ופחות עימותי מהליך משפטי רגיל.",
    relatedSlugs: ["financial-disputes", "wills-inheritance", "cooperative-societies"],
  },
};

// CONFIRMED — title and description dictated verbatim by the client for SEO.
export const homeMeta: PageMeta = {
  title: "עו\"ד נטע בן חמו | עורכת דין – מקרקעין, נחלות, ירושות וגישור",
  description:
    "עו\"ד נטע בן חמו מעניקה ייעוץ וליווי משפטי בתחומי המקרקעין, נחלות ומשקים במושבים, צוואות וירושות, ייפוי כוח מתמשך, גישור וסכסוכים אזרחיים.",
};

// The homepage's visible H1 (see HeroSection.tsx). Kept separate from the
// stylized hero headline ("אנשים ואדמה") so the page's single <h1> is her
// name and title exactly, per the client's explicit SEO instruction, while
// the large hero headline stays a styled paragraph beneath it.
export const homeH1 = siteMeta.lawyerFullName;

// TEMPORARY CONTENT — REQUIRES CLIENT APPROVAL (draft marketing copy, per the
// client brief's own note that these texts "should remain easy to change")
export const hero = {
  eyebrow: homeH1,
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
  metaDescription: "סקירת תחומי העיסוק של המשרד: נחלות, מקרקעין, ירושה, ייפוי כוח מתמשך, סכסוכים כספיים וגישור.",
  heading: "תחומי עיסוק",
  intro: "ליווי משפטי בעולם המקרקעין, הנחלות, הירושה וניהול הסכסוכים.",
  itemLinkLabel: "קרא עוד",
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
    "בהמשך סיימה תואר במשפטים (LL.B) בהצטיינות.",
    "מגשרת מוסמכת.",
    "הוסמכה כעורכת דין בשנת 2012.",
    "את דרכה המקצועית החלה בפרקליטות מחוז דרום (אזרחי), ובהמשך עברה לעסוק בתחום במגזר הפרטי.",
    "לאורך השנים צברה ניסיון בליטיגציה אזרחית, מקרקעין, אגודות שיתופיות, סכסוכים כספיים, צוואות וירושות, ייפוי כוח מתמשך ותביעות מול המוסד לביטוח לאומי.",
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
