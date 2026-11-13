# Running the skills passes in Claude Code Desktop

Three versions are compared:

| Version | Git ref | Skills |
|---|---|---|
| v0 | tag `v0-baseline` | none |
| v1 | branch `v1-public-skills` | frontend-design → baseline-ui → fixing-accessibility → web-design-guidelines |
| v2 | branch `v2-custom-skill` | v1 + my own `design-review` skill (Playwright MCP) |

Record start/end time (`date`) for each pass in `docs/BUILD_LOG.md`.

---

## v1 — Public skills

### 1. Install (in Terminal, inside this project folder)

```bash
# Anthropic frontend-design (user-level)
git clone https://github.com/anthropics/skills.git /tmp/anthropic-skills
mkdir -p ~/.claude/skills
cp -r /tmp/anthropic-skills/skills/frontend-design ~/.claude/skills/

# UI Skills
npx ui-skills add baseline-ui
npx ui-skills add fixing-accessibility

# Vercel web-design-guidelines (installs into .claude/skills of this project)
npx -y skills add vercel-labs/agent-skills --skill web-design-guidelines --agent claude-code
```

Restart Claude Code and run `/skills` to confirm all four load.

### 2. Branch + timer

```bash
git checkout main
git checkout -b v1-public-skills
date
```

### 3. Prompt

```
This is my job-search portfolio (Next.js 16 + TS + Tailwind v4). All content lives in
src/data/profile.ts — keep that file as the single source of truth and don't invent facts.

Improve the site in four passes. At the start of each pass, say which skill you are using.
1. frontend-design: decide a clear aesthetic direction for a backend engineer applying to
   Vancouver tech companies (reference for structure only: https://www.seanw.org/). Then rebuild the UI.
2. baseline-ui: fix spacing, typography, and interaction states.
3. fixing-accessibility: keyboard navigation, focus states, semantics, contrast.
4. web-design-guidelines: audit src/app/ and fix every finding you can. List the findings
   (file:line) and mark each as fixed / not fixed.

Keep all sections: Hero, Projects, What I Can Do, Testimonials, Languages & Technologies, History, Contact.
Run `npm run build` and `npm run lint` at the end; both must pass.
Finally, fill in the v1 column and the "v1" section of docs/BUILD_LOG.md
(skills used, what each changed, files changed, number of guideline findings).
```

### 4. Wrap up

```bash
date
git add -A && git commit -m "v1: public skills pass"
```

Take screenshots (`docs/screenshots/v1-desktop.png`, `v1-mobile.png`) and run Lighthouse (mobile).

---

## v2 — Add my own `design-review` skill

### 1. Playwright MCP (lets Claude open the site in a real browser)

```bash
claude mcp add playwright -- npx @playwright/mcp@latest
```

Check with `/mcp` inside Claude Code that `playwright` is connected.

### 2. Install the skill

A draft lives in `docs/skills/design-review/SKILL.md`.
**Read it and adjust it to your own review criteria first** — this is the part you can
say you designed yourself. Then:

```bash
git checkout v1-public-skills
git checkout -b v2-custom-skill
mkdir -p .claude/skills
cp -r docs/skills/design-review .claude/skills/
date
```

(It is kept under `docs/` until now so it can't influence the v1 pass.)

### 3. Prompt

```
Start the site with `npm run dev`, then run the design-review skill on http://localhost:3000.
Fix every Must-fix and Should-fix item, then run design-review again to confirm.
Run `npm run build` and `npm run lint`; both must pass.
Fill in the v2 column and the "v2" section of docs/BUILD_LOG.md, including the review
report before and after the fixes.
```

### 4. Wrap up

```bash
date
git add -A && git commit -m "v2: custom design-review skill"
```

Screenshots → `docs/screenshots/v2-*.png`, Lighthouse (mobile), then write the Takeaways.
