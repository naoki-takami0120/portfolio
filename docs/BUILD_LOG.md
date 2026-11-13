# Build Log — With vs. Without Claude Code Skills

This portfolio was built three times from the same resume and the same section spec,
to measure what Claude Code **Skills** add to AI-assisted frontend work.

| | v0 — Baseline | v1 — Public skills | v2 — + Custom skill |
|---|---|---|---|
| Git ref | tag `v0-baseline` | branch `v1-public-skills` | branch `v2-custom-skill` |
| Tool | Claude (cloud agent) | Claude Code Desktop | Claude Code Desktop |
| Skills used | none | frontend-design, baseline-ui, fixing-accessibility, web-design-guidelines | v1 + `design-review` (my own, with Playwright MCP) |
| Prompt | below | `docs/SKILL_PROMPT.md` | `docs/SKILL_PROMPT.md` |
| Wall-clock time | **~3 min** (161 s, scaffold → passing build) | **~8 min** (17:55:48 → 18:03:22, 4 passes + build/lint) | _TODO_ |
| Human interventions | 0 | 0 | _TODO_ |
| Files changed | 4 | 4 in `src/` (+ this log, 2 screenshots) | _TODO_ |
| Guideline findings (web-design-guidelines) | — | **17** found / **14** fixed | — |
| Design-review issues (before → after) | — | — | _TODO_ → _TODO_ |
| Lighthouse mobile (Perf / A11y / BP / SEO) | _TODO_ | _TODO_ | _TODO_ |
| Horizontal scroll at 390px | yes | no | _TODO_ |

## v0 — Baseline

**Spec given:** single-page site inspired by seanw.org; sections Hero, Projects,
What I Can Do, Testimonials, Languages & Technologies, History; content from resume;
projects and testimonials may be placeholders. Stack: Next.js 16 + TypeScript + Tailwind v4.

**What happened**
1. `create-next-app` scaffold.
2. All content extracted into `src/data/profile.ts` (single source of truth).
3. One `page.tsx` with a generic `Section` wrapper; neutral gray palette, system fonts.
4. First build failed twice — Next.js 16 forbids `new Date()` during prerender, and ESLint flagged an unescaped `'`. Fixed, then build + lint passed.

**Known issues left on purpose (for the skills pass to catch)**
- Mobile: the nav doesn't wrap, so the page scrolls horizontally at 390px.
- No visual identity — generic gray "template" look, no typographic hierarchy beyond size/bold.
- No focus-visible styles, no skip link, no `prefers-reduced-motion` handling.
- Screenshot boxes are empty grey placeholders with no aspect for real content.

Screenshots: `docs/screenshots/v0-desktop.png`, `docs/screenshots/v0-mobile.png`

## v1 — Public skills

- **Start/end time:** 2026-11-12 17:55:48 → 18:03:22 (~8 min, one prompt, no human input).
- **Skills triggered** (in order, each announced in the transcript): `frontend-design` → `baseline-ui` → `fixing-accessibility` → `web-design-guidelines`.
- **Files changed:** `src/app/page.tsx` (rebuilt), `src/app/layout.tsx`, `src/app/globals.css`, `src/data/profile.ts` (one apostrophe → `’`, no content change). Plus this log and `docs/screenshots/v1-*.png`.
- `npm run build` ✅ and `npm run lint` ✅ (both exit 0).

### What each skill changed

**1. frontend-design: aesthetic direction + rebuild**
- Direction "Burrard fog": cool fog/cedar/harbour-blue palette (`#E6EBEA` page, `#F4F6F5` mist, `#142A2C` cedar ink, `#4A5C5E` slate, `#0B5A8A` harbour accent), defined as Tailwind v4 `@theme` tokens.
- Type: **Archivo Expanded** (wdth 125) for headings only, **Source Serif 4** for body copy, both via `next/font`.
- The one bold element is the headline, set huge in expanded heavy type. Next to the summary sits a recruiter-facing fact list (Role / Based in / Work status), so PR status is visible without scrolling.
- Layout: left-aligned rail grid (section title on the left, content on the right, stacked on mobile). The nav wraps, which fixes v0's horizontal scroll at 390px.
- Projects without a screenshot show their real highlights in display type instead of an empty grey box. Services became ruled columns instead of cards. Tech stack is comma-set serif text instead of chips. History is a vertical timeline (it really is a sequence).
- Plan revisions the skill forced: giant-name hero → headline + facts. Card/chip "SaaS kit" → rules and plain text. `org · place` meta strings → `org, place`.

**2. baseline-ui: spacing, typography, interaction states**
- Removed custom letter-spacing (`tracking-[-0.01em]`) and replaced arbitrary values (`text-[clamp()]`, `grid-cols-[13rem_1fr]`, `-left-[7px]`, `aspect-[16/7]`…) with Tailwind defaults.
- Added `text-balance` to headings and `text-pretty` to body text.
- Bigger nav hit areas (`px-2 py-2`). Hover on the name link, hover + active on the CTA, thicker underline on link hover.
- Removed conditional class logic (split the image/no-image branches), so no `cn` dependency was needed. Contact links deduplicated into a data array.

**3. fixing-accessibility: keyboard, focus, semantics, contrast**
- Global `:focus-visible` ring (2px harbour, 3px offset).
- "Skip to content" link. `#top` now points at the header, and `main` is `#content`.
- `scroll-smooth` → `motion-safe:scroll-smooth` (respects reduced motion).
- Project markup: heading first in the DOM, highlight frame moved visually with `order-first`, so screen readers hear the title before the metrics. `article` gets `aria-labelledby`, and the highlight list gets an `aria-label`.
- Contrast verified for every text pair: slate/fog 5.84, harbour/fog 6.13, mist/harbour 6.80, cedar/fog 12.48 (all ≥ AA).

**4. web-design-guidelines: audit of `src/app/`: 17 findings, 14 fixed, 3 not fixed**

Line numbers refer to the file as audited (before the pass-4 fixes).

| # | Location | Finding | Status |
|---|---|---|---|
| 1 | `src/app/page.tsx:21` | Section anchors lack `scroll-margin-top` | fixed (`scroll-mt-6`) |
| 2 | `src/app/page.tsx:39` | Skip link revealed with `:focus` instead of `:focus-visible` | fixed |
| 3 | `src/app/page.tsx:41` | "Skip to content" not Title Case | fixed |
| 4 | `src/app/page.tsx:45` | Brand name (header and footer) lacks `translate="no"` | fixed |
| 5 | `src/app/page.tsx:79` | Summary renders straight apostrophe "I've" (source `src/data/profile.ts:10`) | fixed (`’`) |
| 6 | `src/app/page.tsx:88` | Button "See projects" not Title Case | fixed |
| 7 | `src/app/page.tsx:109` | Data-driven sections (also `:150 :162 :184 :196`) render an empty heading if the array is empty | fixed (`isEmpty` guard) |
| 8 | `src/app/page.tsx:124` | Tech tokens (also `:189`) lack `translate="no"` | fixed |
| 9 | `src/app/page.tsx:150` | Headings "What I can do" / "Languages & technologies" not Title Case | fixed |
| 10 | `src/app/page.tsx:202` | Flex child missing `min-w-0` | fixed |
| 11 | `src/app/page.tsx:221` | `I&apos;m` renders a straight quote | fixed (`’`) |
| 12 | `src/app/layout.tsx:17` | Missing `<meta name="theme-color">` | fixed (`viewport.themeColor`) |
| 13 | `src/app/globals.css:20` | No `touch-action: manipulation` | fixed |
| 14 | `src/app/globals.css:20` | `-webkit-tap-highlight-color` not set intentionally | fixed |
| 15 | `src/app/page.tsx:221` | First-person copy (also `:74` headline); guideline prefers second person | **not fixed**: a personal portfolio speaks in first person, and the headline lives in `profile.ts` |
| 16 | `src/app/page.tsx:167` | Placeholder "(TODO)" content visible (3 testimonials, project 3) | **not fixed**: needs real content; inventing it is out of bounds |
| 17 | `src/app/globals.css:20` | No `overscroll-behavior: none` under `(pointer: fine)` | **not fixed**, on purpose: it would disable trackpad swipe-back on a single long page |

### Notes
- Skill tension: frontend-design asked for sentence-case headings, and web-design-guidelines then flagged them (Title Case rule). The later pass won, which matches the section names in the brief.
- Mobile check: headless Chrome can't go below 500px wide, so the 390px screenshot was rendered through a 390px iframe. No horizontal scroll was visible. That is a visual check, not a measured `scrollWidth`.
- Still TODO by hand: Lighthouse (mobile), real testimonials, and project 3 + screenshots in `profile.ts`.
- Screenshots: `docs/screenshots/v1-desktop.png`, `docs/screenshots/v1-mobile.png`

## v2 — Custom `design-review` skill

_Fill in after the v2 pass._

- Start/end time:
- What I changed in the draft skill and why:
- Review report before fixes:
- Review report after fixes:
- Issues the public skills missed but design-review caught:
- Screenshots: `docs/screenshots/v2-desktop.png`, `docs/screenshots/v2-mobile.png`

## Takeaways

_TODO — 3 bullets max. e.g. "Public skills cost +N min and fixed X a11y issues; my own review skill caught Y layout bugs they missed."_
