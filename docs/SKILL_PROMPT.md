# Running the "with skills" pass in Claude Code Desktop

## 1. Install the skills (once, in Terminal)

Commands as given in the Qiita article
(https://qiita.com/kamome_susume/items/41300417840aa107472e):

```bash
# Anthropic frontend-design (user-level skill)
git clone https://github.com/anthropics/skills.git /tmp/anthropic-skills
mkdir -p ~/.claude/skills
cp -r /tmp/anthropic-skills/skills/frontend-design ~/.claude/skills/

# UI Skills (run inside this project folder)
npx ui-skills add baseline-ui
npx ui-skills add fixing-accessibility
```

Restart Claude Code, then run `/skills` (or ask "which skills are available?") to confirm they load.

## 2. Branch + start the timer

```bash
git checkout -b with-skills
date   # note the start time in docs/BUILD_LOG.md
```

## 3. Paste this prompt into Claude Code

```
This is my job-search portfolio (Next.js 16 + TS + Tailwind v4). All content lives in
src/data/profile.ts — keep that file as the single source of truth and don't invent facts.

Redesign and polish the site in three passes, and tell me which skill you used in each pass:
1. frontend-design: decide a clear aesthetic direction for a backend engineer applying to
   Vancouver tech companies (reference for structure only: https://www.seanw.org/). Then rebuild the UI.
2. baseline-ui: fix spacing, typography, and interaction states.
3. fixing-accessibility: keyboard navigation, focus states, semantics, contrast.
   Also make sure nothing scrolls horizontally on a 390px-wide screen.

Keep all six sections: Hero, Projects, What I Can Do, Testimonials, Languages & Technologies, History (+ Contact).
Run `npm run build` and `npm run lint` at the end; both must pass.
Finally, append a "v1 — With skills" summary to docs/BUILD_LOG.md: skills used, what each changed, files changed.
```

## 4. After it finishes

```bash
date   # end time → BUILD_LOG.md
npm run build && npx next start
```

Compare in Chrome DevTools → Lighthouse (mobile) on both `v0-baseline` and `with-skills`,
save screenshots to `docs/screenshots/`, then fill in the table in `docs/BUILD_LOG.md`.
