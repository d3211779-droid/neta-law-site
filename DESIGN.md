---
name: עו"ד נטע בן חמו
description: Boutique rural legal practice — Hebrew, RTL, elegant-not-rustic, warm-not-corporate, professional-not-agricultural.
colors:
  cream: "#F5F1E8"
  surface: "#FAF7F1"
  stone-light: "#E6DDD0"
  olive: "#47542F"
  foreground: "#1E2419"
  muted: "#6B6459"
  bronze: "#A78962"
  stone: "#CBBFA9"
  charcoal-olive: "#172019"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Frank Ruhl Libre, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Frank Ruhl Libre, Georgia, serif"
    fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Heebo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Heebo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "2px"
  md: "6px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.charcoal-olive}"
    textColor: "{colors.cream}"
---

# Design System: עו"ד נטע בן חמו

## Overview

**Creative North Star: "The Land Registrar's Ledger"** — the quiet authority of a cadastral map and a bound legal ledger, elegant rather than rustic, warm rather than corporate, professional rather than agricultural.

The site is a personal, boutique rural-legal practice across nine pages (home, about, a practice-areas index, five dedicated service pages, contact), not a firm brochure: one voice, one large portrait, very little copy per screen, huge editorial type, asymmetric composition with generous breathing room. Land enters only as abstract graphic memory — aerial parcel shapes, thin cadastral/plot-boundary linework, topographic-style lines — never as literal crop, soil, or nature photography, and never as farmland branding. Confirmed rejections: hammer/scales/courthouse-column/marble legal clichés, generic law-stock imagery, tractors/hay/leaves-everywhere/excessive green, a heavy-shadow crowded-card layout, sequential numbering (01/02/03...) anywhere in the practice-area presentation.

**Key Characteristics:**
- Asymmetric, editorial composition with large serif display type and long negative space.
- Land/parcel motifs rendered as thin-line abstract graphics (contour + cadastral linework), never photography, never numbered.
- Flat surfaces — depth comes from color fields, hairlines, and scale, not shadows.
- The lawyer is the subject; a reserved portrait slot swaps in a real photo of her with zero layout change and no broken-image reference in the meantime.
- Every color is consumed through a semantic token layer — no component references a raw palette value directly.

## Colors

Warm, low-saturation, ledger-like: an ivory/cream ground family (background/surface/surface-muted), a deep-olive accent that reads as authority rather than "excessive green," a muted bronze/earth secondary reserved for the land motif, near-black-olive text.

Raw palette values live only as CSS custom-property primitives in `globals.css`; they are **not** registered as Tailwind theme colors, so no `bg-olive`/`text-bronze`-style utility exists. Components consume the semantic layer only:

| Semantic token | Value | Role |
|---|---|---|
| `background` | warm ivory #F5F1E8 | default page background |
| `surface` | slightly lighter warm neutral #FAF7F1 | header-on-scroll, dropdown panel — chrome a touch crisper than the page |
| `surface-muted` | light stone #E6DDD0 | warm textured panels (image placeholders, hover wash) |
| `foreground` | near-black olive #1E2419 | default text and headings on light grounds |
| `muted-foreground` | warm grey #6B6459 | secondary/de-emphasized text on light grounds (~5.2:1 on cream) |
| `accent` | deep olive #47542F | the primary interactive color — buttons, links, focus rings. Passes ~7.3:1 on cream, so unlike a pure accent it is also safe as body/link text |
| `accent-foreground` | cream #F5F1E8 | text/icons on top of `accent`-colored surfaces |
| `accent-secondary` | muted bronze/earth #A78962 | the land motif — cadastral/parcel linework, dividers on dark grounds, Nachalot's featured mark. Not safe as text on light grounds (~2.9:1) |
| `accent-secondary-foreground` | charcoal-olive #172019 | text on top of rare `accent-secondary`-colored surfaces |
| `border` | subtle warm stone #CBBFA9 | plain UI hairlines/dividers (used at low opacity) — distinct from the earth-toned land linework |
| `dark-section` | deep forest/charcoal olive #172019 | background for dark bands (Hero, Contact, homepage close) |
| `dark-section-foreground` | cream #F5F1E8 | text/icons on `dark-section` backgrounds |

### Named Rules
**The Two-Accent Rule.** `accent` (olive) carries interaction; `accent-secondary` (bronze/earth) carries the land motif and rare dark-ground decoration. Neither substitutes for the other, and nothing else in the system is saturated.

**The Accent-Secondary-on-Dark Rule.** Bronze/earth only passes 4.5:1 text contrast against `dark-section` (~5.4:1 measured). Against `background`/`surface-muted` it measures ~2.9:1 and fails even the 3:1 large-text floor — it stays a background, a decorative underline/divider, or a non-text graphic accent on light grounds; `accent` or `foreground` carries text there instead.

**The No-Numbers Rule.** Practice areas never carry a sequence number (no 01/02/03..., no bullet ordinals). The signature mark is a small quiet line-glyph (`PlotMark`) or nothing at all — order is document order only.

## Typography

**Display Font:** Frank Ruhl Libre (with Georgia, serif fallback)
**Body Font:** Heebo (with Arial, sans-serif fallback)

**Character:** A serif with quiet, bookish authority for anything the visitor should feel, paired with a humanist grotesque for anything they need to read quickly and comfortably in Hebrew.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 5vw + 1rem, 4.5rem)`, 1.08 line-height): the Hero headline only.
- **Headline** (600, `clamp(1.75rem, 2.5vw + 1rem, 2.75rem)`, 1.15): page/section H1s and H2s.
- **Title** (600, 1.25rem–1.5rem): sub-section titles (professional path, rural connection, approach, mediation, "when to consult").
- **Body** (400, 1rem/16px floor, 1.7 line-height, 60–72ch measure, never centered for long paragraphs): body copy.
- **Label** (500, 1rem, 0.04em tracking): the Hero eyebrow and form field labels. Not repeated as a kicker over every section.

### Named Rules
**The Single-Eyebrow Rule.** The tracked label/eyebrow treatment appears once, in the Hero.

**The 16px Floor Rule.** Nothing in the rendered page body — including footer fine print — goes below `text-base` (16px).

## Layout

Container max-width 72rem (`max-w-6xl`), with asymmetric internal splits (Hero ~55/45, About ~5/7) rather than centered 50/50 grids. Breakpoints: 375 (mobile baseline, single column, image follows text), 768, 1024 (desktop two-column layouts activate), 1440 (max content width holds, extra space becomes margin). Spacing rhythm uses the `sm/md/lg/xl` scale (16/32/64/112px), tuned per breakpoint rather than uniformly stacked — mobile spacing compresses intentionally, it doesn't just inherit desktop gaps. No horizontal scroll at any breakpoint. The header is `fixed`; every non-home page reserves `pt-28`/`pt-32` at its top — only the Hero sits flush at `y=0` under the transparent header.

## Elevation & Depth

Flat by design — no drop shadows anywhere. Depth comes from color-field changes (`dark-section` vs. `background` vs. `surface-muted`), 1px hairlines, and whitespace.

### Named Rules
**The Flat Ledger Rule.** A component reaching for a shadow to separate itself from the page is using the wrong tool; use a hairline or a color-field change instead.

## Shapes

Sharp-to-barely-rounded, matching the brief's explicit rejection of excessive rounding: `rounded.none` (0px) is default for buttons, images, and dividers; `rounded.sm`/`rounded.md` exist only for form inputs where a hard corner reads as an error. Borders are 1px hairlines in `border` (stone) for plain UI structure, or `accent-secondary` (bronze/earth) specifically for land-motif linework.

## Components

### Buttons
- **Primary:** `bg-accent`/`text-accent-foreground`, 14px/32px padding, no shadow, 0px radius.
- **Hover/Focus:** inverts to `bg-dark-section`/`text-dark-section-foreground` (or the cream/charcoal equivalent on an already-dark surface); focus-visible gets a 2px `accent`-colored outline, guaranteed globally via an unlayered `:focus-visible` rule.
- **Secondary/Ghost:** transparent background, 1px `foreground`-colored hairline border, inverts to `bg-foreground`/`text-background` on hover.

### Cards / Containers
No card component — practice areas are editorial rows/lists, per the brief's explicit rejection of crowded cards.

### Inputs / Fields
Transparent background, bottom-hairline only; focus hairline switches to `accent` plus the global `:focus-visible` ring.

### Navigation
- **Header:** `fixed`, transparent over the Hero on the home page only, switches to a `surface` background with `foreground` text and a 1px `border` hairline once scrolled — always opaque on every non-home page.
- **Practice-areas dropdown:** a disclosure pattern (`button[aria-expanded][aria-controls]` + a plain link list) — opens on click (not hover-only), closes on Escape/outside-click/focus-leave, always renders on an opaque `surface` panel. Mobile folds the same five links directly into the main mobile panel.

### Signature Component: Practice-Area Row (index) / Teaser (home)
No numerals. The home teaser is a quiet block: heading + one-line intro + a plain wrapped list of the five area names (Nachalot rendered one step larger/bolder with a bronze underline as its "slightly stronger" emphasis, per the brief) + one "view all" link. The `/practice-areas` index is a full-width row per area: a small `PlotMark` glyph (bronze for Nachalot, stone for the rest), title, one-line description, and a "לעמוד המלא" link — followed by a visually quiet "תחומים נוספים" text-only list (civil litigation, National Insurance claims) with no page, no link, no visual weight competing with the five main areas.

## Do's and Don'ts

### Do:
- **Do** keep land/parcel motifs as thin-line abstract graphics (aerial parcel shapes, cadastral/plot-boundary linework, topographic-style lines) in `accent-secondary`.
- **Do** reserve the Hero portrait as an exact-size slot so a real photo drops in without touching layout or ever rendering a broken image reference.
- **Do** give Nachalot a touch more visual weight (size/underline color) without making the other four areas look unimportant.
- **Do** route every color through the semantic token layer.
- **Do** keep experience stated as "עורכת דין משנת 2012" — never as a number of years — until the client confirms otherwise.

### Don't:
- **Don't** use a hammer, scales, courthouse columns, marble texture, generic law-stock imagery, tractors, hay, or leaves-everywhere.
- **Don't** number practice areas anywhere on the site.
- **Don't** build practice areas as a same-size icon+heading+text card grid.
- **Don't** make the site read as a farm/agriculture business — land stays abstract and supporting, never the literal subject.
- **Don't** invent years of experience, awards, cases, success rates, client names, professional memberships, or biographical details beyond what the client supplied.
- **Don't** make WhatsApp a homepage or contact-page CTA — the client's confirmed priority order is website form, then telephone.
- **Don't** artificially stuff the firm's geographic focus areas (באר טוביה, יואב, מטה יהודה, לכיש, חוף אשקלון, גזר) into the homepage — reserved for later, approved SEO content.
- **Don't** link the footer to a page that doesn't exist yet — privacy/accessibility links are omitted entirely, not shown disabled.
