# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective private clients in Israel dealing with real-estate and land-rights matters: individuals and families handling inheritance/ben-mamshich questions on an agricultural nachala, moshav/kibbutz members and cooperative associations, and buyers/sellers in private real-estate transactions who need Israel Land Authority (רמ"י) or planning-and-building matters handled correctly. They arrive from referrals or search, usually mid-decision and looking to judge trustworthiness quickly before calling.

## Product Purpose

A homepage that lets a solo boutique real-estate/land-law practitioner ("נטע", surname TBD) present her practice with the personal authority of a boutique advisor rather than a generic firm, and convert a visit into a scheduled call. Success is a visitor understanding in seconds what she handles and feeling enough trust to reach out.

## Positioning

Not a generic real-estate or "law firm" template: a personal, boutique practice centered specifically on land, agricultural holdings (nachalot), and the rural space — a niche most general-practice or corporate real-estate firms do not specialize in. The lawyer herself is the brand; land/soil imagery is supporting texture, never the subject.

## Operating Context

Marketing/portfolio site only at this stage — no CRM, backend, blog, client area, or login. The contact form is an explicit front-end demo (`preventDefault`, no network call, no server action/API route/DB/email provider) until a real intake flow is chosen. All legal-substance copy (practice descriptions, service-page content, bio claims) is placeholder pending the lawyer's review and sign-off before launch. Site is multi-page: home, about, a practice-areas index, four dedicated service pages (nachalot, real-estate, israel-land-authority, planning-and-building), and contact. No blog/articles/login/client-area pages exist or are planned at this stage.

## Capabilities and Constraints

- Next.js 16 (App Router, Turbopack) + React 19 + Tailwind v4 + TypeScript, no additional npm packages.
- Hebrew-only, full RTL (`lang="he" dir="rtl"`).
- Fonts via `next/font/google` only (no self-hosted font files).
- No portrait or site photography assets exist yet; all imagery is placeholder or hand-authored SVG.
- No privacy-policy or accessibility-statement pages exist yet — footer must not link to routes that don't exist; render those as plain text until built.

## Brand Commitments

- Firm name (temporary): "נטע | משרד עורכי דין".
- Palette is pinned: deep-green #172019, cream #F5F1E8, stone #D8CDBD, earth #80684E, bronze #A78962, text #1B1B1B, white #FFFFFF — consumed only through a semantic CSS-variable layer (background/surface/foreground/muted-foreground/accent/accent-foreground/border/dark-section), never as raw utility classes in components.
- Explicit rejections: hammer, scales, courthouse columns, marble textures, or other stock legal clichés; a generic heavy-shadow card grid; sequential numbering (01/02/03/04) anywhere in the practice-area presentation; a farmland/agriculture-brand look (land motifs stay abstract/graphic — thin contour lines, parcel-boundary linework — never literal crop/nature photography).
- Visual reference: rachelglam-law.co.il for composition, rhythm, and personal/editorial register (studied for structure only; no code, copy, or imagery reused from it or from the secondary reference shtilman.co.il, which informed only the practice-area research/structure, not visuals).
- Never fabricate years of experience, degrees, titles, credentials, results, or testimonials.

## Evidence on Hand

- No lawyer portrait exists yet. The hero must reserve an exact slot so a real transparent (cutout) photo can be dropped in later with zero layout changes.
- No case studies, testimonials, or press exist — none may be invented.

## Product Principles

1. The practitioner is the visual and narrative center; land/place is supporting texture, not the subject.
2. Boutique restraint over template density — asymmetric composition, generous whitespace, thin lines over cards and shadows.
3. Precision over hype in copy: short, plain, confident sentences; no invented claims.
4. Every piece of placeholder content is marked and traceable until the lawyer confirms it.
5. Accessibility, keyboard operability, and correct RTL behavior are non-negotiable floors, not polish.

## Accessibility & Inclusion

Full keyboard operability, visible focus states, ≥4.5:1 text contrast, `prefers-reduced-motion` respected throughout, no content reliant on hover alone.
