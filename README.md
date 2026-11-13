# Naoki Takami — Portfolio

Personal portfolio site for a backend engineer (PHP / Laravel) based in Vancouver, BC.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel
- **Content:** all text lives in [`src/data/profile.ts`](src/data/profile.ts)
- **AI-assisted development:** built three times — no skills, public Claude Code Skills,
  and public skills + a design-review skill I wrote — and measured. See [`docs/BUILD_LOG.md`](docs/BUILD_LOG.md).

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
  BUILD_LOG.md     v0 / v1 / v2 comparison
  SKILL_PROMPT.md  how each skills pass was run
  skills/          my custom design-review skill
```

<!-- TODO: after the skills pass, add a short "How I used AI" section here (3–5 bullets, results first). -->
