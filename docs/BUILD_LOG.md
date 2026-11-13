# Build Log — With vs. Without Claude Code Skills

This portfolio was built twice from the same resume and the same section spec,
to measure what Claude Code **Skills** add to AI-assisted frontend work.

| | v0 — Baseline (no skills) | v1 — With skills |
|---|---|---|
| Git ref | tag `v0-baseline` | branch `with-skills` |
| Tool | Claude (cloud agent) | Claude Code Desktop |
| Skills used | none | frontend-design → baseline-ui → fixing-accessibility (+ optional) |
| Prompt | see below | see `docs/SKILL_PROMPT.md` |
| Wall-clock time | **~3 min** (161 s, scaffold → passing build) | _TODO_ |
| Human interventions | 0 | _TODO_ |
| Files changed | 4 (`page.tsx`, `layout.tsx`, `globals.css`, `data/profile.ts`) | _TODO_ |
| Lighthouse Performance / A11y / Best Practices / SEO | _TODO_ | _TODO_ |
| Known issues | see below | _TODO_ |

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

## v1 — With skills

_Fill in after running `docs/SKILL_PROMPT.md` in Claude Code._

- Start/end time:
- Skills actually triggered (check Claude Code's transcript):
- What each skill changed:
- Screenshots: `docs/screenshots/v1-desktop.png`, `docs/screenshots/v1-mobile.png`

## Takeaways

_TODO — 3 bullets max. e.g. "Skills cost +N min but fixed X a11y issues and gave the site a distinct identity."_
