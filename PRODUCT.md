# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective private clients in Israel dealing with land and family-legal matters: individuals and families handling inheritance, wills, or lasting-power-of-attorney planning; moshav/kibbutz members and families with a nachala (agricultural holding) facing ben-mamshich or inter-generational transfer questions; buyers/sellers in private real-estate transactions; and parties who prefer resolving a dispute through mediation over litigation. Reach is nationwide with a preferred geographic focus around Be'er Tuvia, Yoav, Mateh Yehuda, Lachish, Hof Ashkelon, Gezer and surrounding areas (not yet surfaced in on-page copy — reserved for approved SEO content later). Visitors typically arrive via referral or search, mid-decision, judging trustworthiness before calling.

## Product Purpose

A site that lets עו"ד נטע בן חמו present her boutique rural-legal practice with personal authority — someone clients feel comfortable with, trust, and open up to — and convert a visit into a form submission or phone call (her confirmed priority order). Success is a visitor understanding within seconds that this is a law firm with a genuine land/rural connection, and that Neta is the person behind it.

## Positioning

A boutique practice deeply connected to land, agricultural estates, rural communities, real estate, families, inheritance, and dispute resolution — elegant rather than rustic, warm rather than corporate, professional rather than agricultural. Not a generic law-firm template and not a farm/agriculture brand. She communicates at eye level, combining legal experience with personal attention; copy avoids exaggerated marketing language and never promises legal outcomes.

## Operating Context

Marketing/portfolio site — no CRM, backend, blog, client area, or login. The contact form is an explicit front-end demo (`preventDefault`, no network call, no server action/API route/DB/email provider). All legal-substance copy (practice descriptions, service-page content, about-page narrative) is drafted and requires the client's approval before launch, even where it's built from her confirmed biography. Nine pages: home, about, a practice-areas index, five dedicated service pages (nachalot, wills-inheritance, lasting-power-of-attorney, real-estate, mediation), and contact. Two additional practice areas (civil litigation, National Insurance claims) are mentioned quietly on the practice-areas index only — no dedicated pages yet. No privacy-policy or accessibility-statement pages exist yet — the footer omits those links entirely rather than pointing at dead routes.

## Capabilities and Constraints

- Next.js 16 (App Router, Turbopack) + React 19 + Tailwind v4 + TypeScript, no additional npm packages.
- Hebrew-only, full RTL (`lang="he" dir="rtl"`).
- Fonts via `next/font/google` only.
- No portrait or site photography assets exist yet; all imagery is an elegant placeholder or hand-authored SVG — never a broken/missing-image reference.

## Brand Commitments

- Confirmed name and title: עו"ד נטע בן חמו.
- Palette is pinned (see DESIGN.md): warm ivory/cream ground, deep-olive accent, muted bronze/earth secondary accent for the land motif, near-black-olive text — consumed only through a semantic CSS-variable layer, never as raw utility classes in components.
- Explicit rejections: hammer, scales, courthouse columns, marble, generic law-stock imagery, tractors, hay, leaves-everywhere, excessive green, sequential numbering (01/02/03...) anywhere in the practice-area presentation, crowded/heavy-shadow card grids, excessive rounded corners.
- Visual references: rachelglam-law.co.il and bgal.co.il for clarity/content structure; shtilman.co.il-adjacent register for the rural visual language — studied for structure and spirit only, no code/copy/imagery reused from any of them.
- Never fabricate years of experience (state only "עורכת דין משנת 2012," never a number of years, until the client confirms), awards, cases, success rates, client names, professional memberships, or biographical detail beyond what she supplied. Marital/family status is deliberately not featured.

## Evidence on Hand

- Confirmed biography: born on Moshav Timorim; served in the Field Intelligence Corps (regular and career service); LLB with honors; lawyer since 2012; began at the Southern District Attorney's Office (civil division), later moved to the private sector; experience spans civil litigation, real estate, cooperative associations, wills and inheritance, lasting power of attorney, and National Insurance Institute claims; practices mediation and dispute resolution.
- No lawyer portrait exists yet. The Hero and About page each reserve an exact slot so a real photo can be dropped in later with zero layout change.
- No case studies, testimonials, press, or professional memberships exist — none may be invented.
- No real phone, email, or office address exists yet — all three are shown as clearly marked placeholders (not omitted) per the client's instruction.

## Product Principles

1. The practitioner is the visual and narrative center; land/place is supporting texture and personal-history context, never the subject.
2. Boutique restraint over template density — asymmetric composition, generous whitespace, thin lines over cards and shadows, no numbered service tiles.
3. Precision over hype in copy: short, plain, confident sentences; no invented claims, no promised outcomes.
4. Mediation is a professional philosophy (listening, dialogue, preserving rights and dignity), not just another technical service listing.
5. Every piece of placeholder or draft content is marked and traceable until the client confirms it; confirmed facts are marked as such.
6. Accessibility, keyboard operability, and correct RTL behavior are non-negotiable floors, not polish.

## Accessibility & Inclusion

Full keyboard operability, visible focus states, accessible contrast, `prefers-reduced-motion` respected throughout, no content reliant on hover alone, no horizontal overflow at 375/768/1024/1440px.
