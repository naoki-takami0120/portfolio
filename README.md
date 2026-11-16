# Naoki Takami — Portfolio

Personal portfolio site for a backend engineer (PHP / Laravel) based in Vancouver, BC.

**Live site: https://naoki-takami.vercel.app/**

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel
- **Content:** all text lives in [`src/data/profile.ts`](src/data/profile.ts)
- **AI-assisted development:** built in four measured steps (no skills → public Claude Code Skills →
  a design-review skill I wrote → a manual font fix). See [How I used AI](#how-i-used-ai).

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Project structure

```
src/
  app/        layout.tsx, page.tsx, globals.css
  data/       profile.ts  ← edit content here
docs/
  BUILD_LOG.md     v0 → v4 comparison, review reports, measurements
  SKILL_PROMPT.md  how each skills pass was run
  skills/          my custom design-review skill
```

## How I used AI

| Step | What changed | Measured |
|---|---|---|
| v0: Claude, no skills | Working site in ~3 min, generic look, horizontal scroll on mobile | Accessibility 95 |
| v1: + 4 public Claude Code Skills | Distinct design, fully accessible, but 3 preloaded web fonts | Accessibility **100** · fonts ~340 KB |
| v2: + my own `design-review` skill | Fixed 8 rendered-page issues the public skills missed | 12 issues → 0 Must / Should |
| v3: manual fix, verified by `design-review` | One web font + Georgia | fonts ~90 KB · first-visit layout shift **0.216 → 0** |

Lighthouse Performance is 100 for every step on a local production build, so I tracked font downloads and real-network layout shift instead.

- **Public skills are fast but narrow.** They polished design and accessibility in ~8 minutes. None of them looked at what the page downloads.
- **I wrote a skill for what they couldn't see.** [`design-review`](docs/skills/design-review/SKILL.md) opens the page in a real browser
  (Playwright MCP) at 3 widths and reports issues with evidence. It caught broken line breaks, a tablet-only layout bug, and a
  skip link that an earlier AI fix had broken. I added a copy check for unnatural English, since English is my second language.
- **I improved the skill from its own output.** After the first run it reported its own weak spots (screenshots taken before
  fonts loaded, full-page shots too small to inspect), so I updated it (v2.1).
- **I stayed in charge of the trade-offs.** Lighthouse alone couldn't show the font-swap layout shift. design-review measured it
  (CLS 0.216) on a throttled first visit. I fixed it by hand after reading the Next.js docs, choosing what a first-time recruiter actually sees over keeping a second web font.

Full log with prompts, review reports and screenshots: [`docs/BUILD_LOG.md`](docs/BUILD_LOG.md).
