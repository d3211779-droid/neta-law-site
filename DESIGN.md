---
name: נטע | משרד עורכי דין
description: Boutique real-estate and land-law practice site — Hebrew, RTL, editorial and personal, not a generic law-firm template.
colors:
  deep-green: "#172019"
  cream: "#F5F1E8"
  stone: "#D8CDBD"
  earth: "#80684E"
  bronze: "#A78962"
  text: "#1B1B1B"
  white: "#FFFFFF"
  muted: "#5B5248"
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
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.deep-green}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.deep-green}"
    textColor: "{colors.cream}"
---

# Design System: נטע | משרד עורכי דין

## Overview

**Creative North Star: "The Land Registrar's Ledger"** — the quiet authority of a cadastral map and a bound legal ledger, not a real-estate brochure.

The site reads as a personal, boutique practice across eight pages (home, about, a practice-areas index, four dedicated service pages, contact), not a firm brochure: one voice, one large portrait, very little copy per screen, huge editorial type, asymmetric composition with generous breathing room. Land enters only as abstract graphic memory — thin contour and parcel-boundary linework — never as literal crop, soil, or nature photography, and never as farmland branding. Confirmed rejections: hammer/scales/courthouse-column/marble legal clichés, a generic heavy-shadow card grid, sequential numbering (01/02/03/04) anywhere in the practice-area presentation, and a farmland-agriculture register.

**Key Characteristics:**
- Asymmetric, editorial composition with large serif display type and long negative space.
- Land/parcel motifs rendered as thin-line abstract graphics, never photography, never numbered.
- Flat surfaces — depth comes from color fields, hairlines, and scale, not shadows.
- The lawyer is the subject; a reserved portrait slot swaps in a real cutout photo with zero layout change.
- Every color is consumed through a semantic token layer — no component references a raw palette value directly.

## Colors

Warm, low-saturation, ledger-like: deep green and near-black text for authority, cream and stone for paper-like grounds, earth for structural hairlines/land linework, one bronze accent reserved for interaction.

Raw palette values live only as CSS custom-property primitives in `globals.css`; they are **not** registered as Tailwind theme colors, so no `bg-deep-green`/`text-bronze`-style utility exists. Components consume the semantic layer only:

| Semantic token | Value | Role |
|---|---|---|
| `background` | cream #F5F1E8 | default page background |
| `surface` | white #FFFFFF | header-on-scroll, dropdown panel — chrome that should feel a touch crisper than the page |
| `surface-muted` | stone #D8CDBD | warm textured panels (image placeholders, hover wash) |
| `foreground` | text #1B1B1B | default text and headings on light grounds |
| `muted-foreground` | muted #5B5248 | secondary/de-emphasized text on light grounds (~7:1 on cream) |
| `accent` | bronze #A78962 | the one interactive color — buttons, focus rings, link underlines |
| `accent-foreground` | deep-green #172019 | text/icons placed on top of accent-colored surfaces |
| `border` | earth #80684E | hairlines, dividers, and all land/parcel decorative linework (used at low opacity) |
| `dark-section` | deep-green #172019 | background for dark bands (Hero, Contact, footer-adjacent CTA) |
| `dark-section-foreground` | cream #F5F1E8 | text/icons on dark-section backgrounds |

### Named Rules
**The One-Accent Rule.** Bronze (`accent`) is the only saturated, interactive color in the system. Earth (`border`) carries the land/structural motif instead of doubling as a second accent — if a new element wants a second accent hue, it is wrong, not the rule.

**The Bronze-on-Dark Rule.** Bronze only passes 4.5:1 text contrast against `dark-section` (deep green, ~5.4:1 measured). Against `background`/`surface-muted` (cream/stone) it measures ~2.9:1 and fails even the 3:1 large-text floor. On light grounds, `accent` stays a background (buttons), a decorative underline/divider color, or a non-text graphic accent — never body or link text; `foreground` carries that text color instead.

**The No-Numbers Rule.** Practice areas never carry a sequence number (no 01/02/03/04, no bullet ordinals). Where last iteration used a numeral as the signature mark, this iteration uses a small quiet line-glyph (`PlotMark`) or nothing at all — order is implied by document order only.

## Typography

**Display Font:** Frank Ruhl Libre (with Georgia, serif fallback)
**Body Font:** Heebo (with Arial, sans-serif fallback)

**Character:** A serif with quiet, bookish authority for anything the visitor should feel, paired with a humanist grotesque for anything they need to read quickly and comfortably in Hebrew.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 5vw + 1rem, 4.5rem)`, 1.08 line-height): the Hero headline only.
- **Headline** (600, `clamp(1.75rem, 2.5vw + 1rem, 2.75rem)`, 1.15): page/section H1s and H2s.
- **Title** (600, 1.25rem–1.5rem): sub-section titles (approach, values, "when to consult").
- **Body** (400, 1rem/16px floor, 1.7 line-height, 60–72ch measure): paragraphs. 16px is the site-wide floor — no in-body text renders smaller, including labels, nav, and footer copy.
- **Label** (500, 1rem, 0.04em tracking): the Hero eyebrow and form field labels. Not repeated as a kicker over every section.

### Named Rules
**The Single-Eyebrow Rule.** The tracked label/eyebrow treatment appears once, in the Hero. Repeating it above every section turns a voice into a template.

**The 16px Floor Rule.** Nothing in the rendered page body — including footer fine print — goes below `text-base` (16px). Legibility outranks visual quietness for small print.

## Layout

Container max-width 72rem (`max-w-6xl`), with asymmetric internal splits (e.g. Hero ~55/45, About ~5/7) rather than centered 50/50 grids. Breakpoints: 375 (mobile baseline, single column, image follows text), 768 (tablet), 1024 (desktop two-column layouts activate), 1440 (max content width holds, extra space becomes margin). Spacing rhythm uses the `sm/md/lg/xl` scale (16/32/64/112px); more space above a heading than below it. No horizontal scroll at any breakpoint. The header is `fixed`; every non-home page reserves `pt-28`/`pt-32` (mobile/desktop) at its top so content clears it — only the Hero is allowed to sit flush at `y=0` under the transparent header.

## Elevation & Depth

Flat by design — no drop shadows anywhere. Depth and separation come from color-field changes (`dark-section` vs. `background` vs. `surface-muted` bands), 1px hairline rules, and generous whitespace, never from `box-shadow`.

### Named Rules
**The Flat Ledger Rule.** If a component reaches for a shadow to separate itself from the page, it is using the wrong tool; use a hairline or a color-field change instead.

## Shapes

Sharp-to-barely-rounded: `rounded.none` (0px) is the default for buttons, images, and section dividers; `rounded.sm` (2px) only where a hard corner would look like an error; `rounded.md` (6px) is the ceiling, reserved for form inputs. Borders are 1px hairlines in `border` (earth) at low opacity; no colored `border-left`/`border-right` accents thicker than 1px.

## Components

### Buttons
- **Shape:** 0px radius, 1px hairline only on the ghost/secondary variant.
- **Primary:** `bg-accent`/`text-accent-foreground`, 14px/32px padding, no shadow.
- **Hover/Focus:** primary inverts to `bg-dark-section`/`text-dark-section-foreground` (or the cream equivalent on a dark surface); focus-visible gets a 2px `accent`-colored outline with offset, guaranteed globally via an unlayered `:focus-visible` rule.
- **Secondary/Ghost:** transparent background, 1px `foreground`-colored hairline border, inverts to `bg-foreground`/`text-background` on hover.

### Cards / Containers
This system deliberately has no card component — practice areas are editorial rows/lists, not cards, per the brief's own rejection of a card grid.

### Inputs / Fields
- **Style:** transparent background, bottom-hairline only (no boxed border), theme-appropriate foreground text color.
- **Focus:** hairline switches to solid `accent`, plus the global `:focus-visible` ring.
- **Error/Disabled:** not yet applicable (demo form has no server validation).

### Navigation
- **Header:** `fixed`, transparent over the Hero on the home page only (cream wordmark/links on the dark Hero), switches to a `surface` background with `foreground` text and a 1px `border` hairline once scrolled — and is always in that opaque state on every non-home page (they have no dark hero to sit over). Active/hover underlines in `accent`.
- **Practice-areas dropdown:** a disclosure pattern (`button[aria-expanded][aria-controls]` + a plain link list, not `role=menu`) — opens on click, closes on Escape/outside-click/focus-leave, always renders on an opaque `surface` panel regardless of header state. Mobile folds the same four links directly into the main mobile panel instead of nesting a second dropdown.

### Signature Component: Practice-Area Row (index) / Teaser (home)
No numerals anywhere. The home teaser is a single quiet block: heading + one-line intro + a plain wrapped list of the four area names (each a text link) + one "view all" link. The `/practice-areas` index is a full-width row per area (not a card): a small `PlotMark` line-glyph, title, one-line description, and a "לעמוד המלא" link, separated from the next row by a single 1px hairline. No background fill, no border box, no shadow, no ordinal.

## Do's and Don'ts

### Do:
- **Do** keep land/parcel motifs as thin-line abstract graphics (contour lines, parcel-boundary linework) in `border` color.
- **Do** reserve the Hero portrait as an exact-size slot so a real transparent photo drops in without touching layout.
- **Do** keep bronze (`accent`) as the only saturated, interactive color across the whole site.
- **Do** keep sections flat — hairlines and color fields carry separation, never shadows.
- **Do** route every color through the semantic token layer (`background`/`surface`/`foreground`/`accent`/`border`/`dark-section`, etc.) — never a raw hex or a raw-palette utility class.

### Don't:
- **Don't** use a hammer, scales, courthouse columns, marble texture, or any stock legal-photo cliché.
- **Don't** number practice areas (no 01/02/03/04) anywhere on the site.
- **Don't** build practice areas as a same-size icon+heading+text card grid.
- **Don't** render land as literal crop/soil/nature photography or lean the site toward an agriculture/farm brand.
- **Don't** invent years of experience, degrees, credentials, case results, or testimonials.
- **Don't** repeat the Hero's tracked eyebrow label above every subsequent section.
- **Don't** link the footer to a page that doesn't exist yet — privacy/accessibility render as plain non-navigational text until those pages are built.
