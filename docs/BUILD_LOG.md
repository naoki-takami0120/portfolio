# Build Log — With vs. Without Claude Code Skills

This portfolio was built three times from the same resume and the same section spec,
to measure what Claude Code **Skills** add to AI-assisted frontend work.

| | v0 — Baseline | v1 — Public skills | v2 — + Custom skill |
|---|---|---|---|
| Git ref | tag `v0-baseline` | branch `v1-public-skills` | branch `v2-custom-skill` |
| Tool | Claude (cloud agent) | Claude Code Desktop | Claude Code Desktop |
| Skills used | none | frontend-design, baseline-ui, fixing-accessibility, web-design-guidelines | v1 + `design-review` (my own, with Playwright MCP) |
| Prompt | below | `docs/SKILL_PROMPT.md` | `docs/SKILL_PROMPT.md` |
| Wall-clock time | **~3 min** (161 s, scaffold → passing build) | **~8 min** (17:55:48 → 18:03:22, 4 passes + build/lint) | **~9 min** (13:00:23 → 13:09, review → fix → re-review + build/lint) |
| Human interventions | 0 | 0 | 0 |
| Files changed | 4 | 4 in `src/` (+ this log, 2 screenshots) | 2 in `src/` (+ this log, 2 screenshots, review shots + reports) |
| Guideline findings (web-design-guidelines) | — | **17** found / **14** fixed | — |
| Design-review issues (before → after) | — | — | **12** (1 Must / 7 Should / 4 Nice) → **4** (0 / 0 / 4 Nice) |
| Lighthouse mobile (Perf / A11y / BP / SEO) | 82 / 95 / 100 / 100 | **71** / **100** / 100 / 100 | _not measured yet_ (run by hand, same setup as v0/v1) |
| Horizontal scroll at 390px | yes | no | no (measured: `scrollWidth` 390 = `innerWidth` 390) |

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
- **Lighthouse (mobile, production build, incognito):** v0 82/95/100/100 → v1 71/100/100/100.
  Accessibility +5, but Performance −11. Likely cause: the two web fonts chosen by frontend-design
  (variable Archivo with a `wdth` axis + Source Serif 4 with `opsz` and italics). Three font files,
  ~340 KB in total, are preloaded and delay the LCP headline on Lighthouse's throttled mobile profile.
  v0 used system fonts. None of the four skills checked load performance.
- The 390px screenshot artifact (cut-off left edge, magenta area) comes from the iframe workaround.
  Checked by hand in Chrome DevTools (iPhone size): no horizontal scroll.
- Still TODO by hand: real testimonials, and project 3 + screenshots in `profile.ts`.
- Screenshots: `docs/screenshots/v1-desktop.png`, `docs/screenshots/v1-mobile.png`

## v2 — Custom `design-review` skill

- **Start/end time:** 2026-11-13 13:00:23 → 13:09 (~9 min, one prompt, no human input).
- **What I changed in the draft skill and why:** added one check to step 2: *"Copy check: flag English that sounds unnatural or non-native, and suggest a more natural phrasing."* None of the public skills read the copy for naturalness. They check casing, quotes and person, not whether a sentence reads like native English.
- **Files changed:** `src/app/page.tsx` (TODO filter, `keepCompounds()` helper, rail breakpoint `md` → `lg`, skip-link classes, CTA copy) and `src/data/profile.ts` (History order, one sentence reworded). No changes to `layout.tsx` or `globals.css`.
- `npm run build` ✅ and `npm run lint` ✅ (both exit 0).

### Fixes applied (1 Must + 7 Should)

| # | Issue | Fix |
|---|---|---|
| M1 | "(TODO)" placeholders visible (project 3, 3 testimonials) | `isDraft()` filter in `page.tsx`: entries that still contain "TODO" stay in `profile.ts` but are not rendered. Testimonials section is hidden until it has a real entry. |
| S1 | Headline breaks "high- / traffic" at 1440 | `keepCompounds()` wraps hyphenated words in `whitespace-nowrap` spans (headline, summary, History points) |
| S2 | "20- / engineer" split at 1440 (hero) and 390 (History) | same helper |
| S3 | Tablet: rail headings in a 146px column ("Languages / & / Technologies") | `Section` grid `md:grid-cols-4` → `lg:grid-cols-4`, so tablet stacks heading over full-width content |
| S4 | Skip link had `padding: 0` when focused (`not-sr-only` reset `px-4 py-3`) | inverted: base styles always on, `not-focus-visible:sr-only` hides it |
| S5 | History out of order (2020–2022 diploma below 2014–2017) | reordered `history` newest-first by start year |
| S6 | CTA "Email Naoki" switches to third person | "Email Me" |
| S7 | "Operated a game backend with 2M users; team leader and code reviewer." | "Ran a game backend for 2M users as team lead and code reviewer." |

### Review report before fixes

Screenshots: `docs/screenshots/review/before-*.png`

```markdown
## Design review — http://localhost:3000 — 2026-11-13 (before fixes)
### Must fix
- [all] Placeholder content visible to visitors — 7 leaf elements contain "TODO": `#projects article:nth-child(3)` ("Project Title (TODO)", "Short descriptor (TODO)", "Key metric (TODO)", description) and all 3 `#testimonials figure` ("Testimonial text goes here. (TODO)", "Colleague Name", "Role, Company") — `before-desktop-1440.png`, `before-tablet-768.png` — don't render entries that still contain "(TODO)"; hide the Testimonials section until it has real quotes.
### Should fix
- [desktop 1440] Headline breaks inside the compound "high-traffic" ("…reliable, high- / traffic backend") — `h1#hero-title`, `before-desktop-1440-fold.png` — keep hyphenated compounds on one line (`white-space: nowrap` span).
- [desktop 1440, mobile 390] "20-engineer" splits across lines ("a 20- / engineer offshore team") in the hero summary (`#hero-title + div p`, `before-desktop-1440-fold.png`) and in History (`#history li:first-child`, 390px) — same fix as above.
- [tablet 768] Rail section headings squeezed into a 146px column: "Languages & Technologies" wraps to 3 lines with "&" alone on the middle line, "What I Can Do" wraps to "What I / Can Do" — `section > h2` (width 146px, `md:grid-cols-4`), `before-tablet-768-skills.png` — use the side rail only from `lg` (≥1024px) and stack heading above content on tablet.
- [all] Skip link renders with no padding when focused: text touches the focus ring (computed `padding: 0px`, 113×24px) because `focus-visible:not-sr-only` resets the `px-4 py-3` — `a[href="#content"]`, `before-focus-1-skiplink.png` — apply padding only in the focused state (`focus-visible:px-4 focus-visible:py-3`).
- [all] History is out of chronological order: periods read 2023 → 2021 → 2017 → 2014 → **2020** → 2010 (the 2020–2022 diploma sits below 2014–2017) — `#history ol > li:nth-child(5)`, `before-desktop-1440.png` — sort entries newest-first by start year.
- [all] Copy: CTA "Email Naoki" switches to third person on a page written in first person ("I build…", "I’ve led…", "I’m looking…") — `#content a[href^="mailto:"]` — "Email Me".
- [all] Copy: "Operated a game backend with 2M users; team leader and code reviewer." mixes a sentence with a noun fragment and reads non-native — `#history li:nth-child(4) p` — "Ran a game backend for 2M users as team lead and code reviewer."
### Nice to have
- [all] Nav labels don't match section headings: "Services" → "What I Can Do", "Stack" → "Languages & Technologies" — `nav[aria-label=Sections] a` — align the wording.
- [all] "Contact" is the only nav item in harbour blue + underline, so it can read as the current-page indicator — `nav a[href="#contact"]` — fine as a CTA, but consider a button-like style to make the intent explicit.
- [all] Highlight panel "Improved maintainability" isn't a measurable result like its neighbours ("40% faster page load") — `#projects article:nth-child(2) ul` — replace with a metric or drop it.
- [all] Copy: "DDD refactoring, jQuery → Vue.js migration (40% faster load), Ansible automation." is a list of fragments — `#history li:nth-child(3) p` — e.g. "Refactored apps with DDD, migrated jQuery to Vue.js (40% faster load) and automated provisioning with Ansible."
### Passed
- No horizontal overflow: `scrollWidth === innerWidth` at 390 (390), 768 (768), 1440 (1440).
- First screen: name (header), headline, role/location/work status and CTA all visible above the fold at every width (`before-*-fold.png`).
- Keyboard: Skip link → name → 5 nav links → Email CTA → See Projects all show a 2px harbour outline with 3px offset (`:focus-visible` matched for each).
- Body text ≥16px everywhere, paragraphs capped by `max-w-prose`; contrast pairs from v1 (slate/fog 5.84, harbour/fog 6.13) unchanged.
- Spacing: every section uses the same `py-16 md:py-24` and top rule.
- Console: no app errors or warnings. One `WebSocket … /_next/hmr` ERR_CONNECTION_REFUSED came from the dev server's HMR socket during a reload (dev-only).
- Reduced motion: with `prefers-reduced-motion: reduce`, `scroll-behavior` is `auto`, 0 running animations, 0 transitions.
- Not counted: the round "N" badge bottom-left (overlapping "Vancouver, BC" at 390px) is the Next.js dev-tools indicator, not in production builds.
```

### Review report after fixes

Screenshots: `docs/screenshots/review/after-*.png`

```markdown
## Design review — http://localhost:3000 — 2026-11-13 (after fixes)
### Must fix
- none
### Should fix
- none
### Nice to have
- [all] Nav labels don't match section headings: "Services" → "What I Can Do", "Stack" → "Languages & Technologies" — `nav[aria-label=Sections] a` — align the wording.
- [all] "Contact" is the only nav item in harbour blue + underline, so it can read as the current-page indicator — `nav a[href="#contact"]` — consider a button-like style.
- [all] Highlight panel "Improved maintainability" isn't a measurable result — `#projects article:nth-child(2) ul` — replace with a metric or drop it.
- [all] Copy: "DDD refactoring, jQuery → Vue.js migration (40% faster load), Ansible automation." is a list of fragments — `#history li:nth-child(4) p` — e.g. "Refactored apps with DDD, migrated jQuery to Vue.js (40% faster load) and automated provisioning with Ansible."
### Passed
- No horizontal overflow: `scrollWidth === innerWidth` at 390, 768, 1440.
- No "TODO" text in the rendered page (0 leaf elements). Project 3 and the Testimonials section are hidden until real content replaces the "(TODO)" placeholders in `profile.ts`.
- Headline reads "I build reliable, / high-traffic backend / …" at 1440. Every `span.whitespace-nowrap` ("high-traffic", 2× "20-engineer") renders as 1 line box (`after-desktop-1440-fold.png`).
- Tablet 768: all section `h2`s are full width (704px) and fit on 1 line. At 1024 (rail starts) they are 210px wide: "Languages & Technologies" wraps to 2 lines, the rest to 1.
- Skip link when focused: padding 12px 16px, 145×48px, 2px ring clear of the text (`after-focus-1-skiplink.png`). When unfocused it collapses to 1×1 (sr-only).
- History order: 2023 → 2021 → 2020 → 2017 → 2014 → 2010.
- Copy: CTA is "Email Me". History reads "Ran a game backend for 2M users as team lead and code reviewer."
- Keyboard: skip link → name → 5 nav links → Email Me → See Projects → contact email all match `:focus-visible` with a solid 2px outline.
- Console: 0 errors, 0 warnings.
- Reduced motion: `scroll-behavior: auto`, 0 animations.
```

### Issues the public skills missed but design-review caught
- **Rendered line breaks:** "high- / traffic" in the headline and "20- / engineer" (twice). None of the public skills render the page, so they can't see where lines break.
- **Tablet-only layout bug:** the 4-column rail at 768px squeezed headings to 146px. v1 only checked 390 and desktop.
- **A broken fix from v1:** fixing-accessibility added the skip link, but `focus-visible:not-sr-only` zeroed its padding. The class list looked right in the code; only a focused screenshot showed the problem.
- **Content order:** History mixed in education out of chronological order. That's a data problem, invisible to code-level rules.
- **Voice and copy:** "Email Naoki" on a first-person page, and one non-native-sounding sentence. web-design-guidelines flagged first person as a problem (#15) instead.
- **Overlap with v1:** visible TODOs were also flagged by web-design-guidelines (#16) but left unfixed. design-review rated them Must-fix, so they're hidden now, not invented.

### Notes on the skill itself
- **Race on first capture:** the very first 390px screenshot came out unstyled (system fonts, no CTA fill), while computed styles were correct. It was taken before CSS and fonts applied. Waiting on `document.fonts.ready` fixed it. Worth adding to step 1: "wait for `document.fonts.ready` before each screenshot".
- **Full-page shots at 390px are ~6,300px tall** and get downscaled too far to inspect. Viewport and element screenshots (`-fold`, `-projects`, `-skills`) did the real work. Worth adding: "also take viewport shots of the fold and any section you flag".
- **Real 390px:** Playwright's viewport goes down to 390px, so v1's iframe workaround (headless Chrome's 500px minimum) wasn't needed. Overflow is now a measured `scrollWidth`, not a visual guess.
- **Dev-tools badge:** the round "N" badge (Next.js dev indicator) overlaps content at 390px in dev. It isn't in production, so it isn't counted.
- **Dev server:** one was already running on :3000, so the review used it. The second `npm run dev` refused to start, as Next 16 allows one dev server per project.
- Screenshots: `docs/screenshots/v2-desktop.png`, `docs/screenshots/v2-mobile.png`

## Takeaways

_TODO — 3 bullets max. e.g. "Public skills cost +N min and fixed X a11y issues; my own review skill caught Y layout bugs they missed."_
