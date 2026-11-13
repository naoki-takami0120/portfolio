# Build Log — With vs. Without Claude Code Skills

This portfolio was built three times from the same resume and the same section spec,
to measure what Claude Code **Skills** add to AI-assisted frontend work.

| | v0 — Baseline | v1 — Public skills | v2 — + Custom skill |
|---|---|---|---|
| Git ref | tag `v0-baseline` | branch `v1-public-skills` | branch `v2-custom-skill` |
| Tool | Claude (cloud agent) | Claude Code Desktop | Claude Code Desktop |
| Skills used | none | frontend-design, baseline-ui, fixing-accessibility, web-design-guidelines | v1 + `design-review` (my own, with Playwright MCP) |
| Prompt | below | `docs/SKILL_PROMPT.md` | `docs/SKILL_PROMPT.md` |
| Wall-clock time | **~3 min** (161 s, scaffold → passing build) | _TODO_ | _TODO_ |
| Human interventions | 0 | _TODO_ | _TODO_ |
| Files changed | 4 | _TODO_ | _TODO_ |
| Guideline findings (web-design-guidelines) | — | _TODO_ found / _TODO_ fixed | — |
| Design-review issues (before → after) | — | — | _TODO_ → _TODO_ |
| Lighthouse mobile (Perf / A11y / BP / SEO) | _TODO_ | _TODO_ | _TODO_ |
| Horizontal scroll at 390px | yes | _TODO_ | _TODO_ |

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

_Fill in after the v1 pass in `docs/SKILL_PROMPT.md`._

- Start/end time:
- Skills actually triggered (check Claude Code's transcript):
- What each skill changed:
- web-design-guidelines findings (fixed / not fixed):
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
