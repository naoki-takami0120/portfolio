---
name: design-review
description: Visually review a running web page in a real browser with Playwright MCP — screenshots at mobile/tablet/desktop widths, layout, overflow, keyboard focus, and console errors. Use when asked to "design review", "visually check the site", or "review the UI in the browser".
---

# Design Review

Review what the user actually sees, not just the code. Requires the Playwright MCP server.

## Inputs
- URL to review (default: http://localhost:3000). If the dev server is not running, start it with `npm run dev`.

## Procedure
1. For each viewport — 390x844 (mobile), 768x1024 (tablet), 1440x900 (desktop):
   - Resize the browser and open the URL.
   - Wait for `document.fonts.ready` before taking any screenshot, so fonts and styles are fully applied.
   - Take a full-page screenshot.
   - Also take a viewport screenshot of the first screen (above the fold), and a close-up screenshot of every section you flag.
   - Check `document.documentElement.scrollWidth > window.innerWidth` (horizontal overflow).
     If true, find the widest offending element and report its selector.
2. Look at every screenshot and check:
   - Visual hierarchy: is the name, role and value proposition clear within the first screen?
   - Spacing and alignment are consistent between sections.
   - Text is readable (size, line length, contrast against the background).
   - Nothing overlaps, is cut off, or looks unfinished (empty boxes, "TODO" visible to visitors).
   - Copy check: flag English that sounds unnatural or non-native, and suggest a more natural phrasing.
3. Keyboard: press Tab from the top of the page through the nav and the first CTA.
   Every focused element must have a visible focus indicator. Note the first one that doesn't.
4. Read the browser console. Report errors and warnings.
5. If `prefers-reduced-motion` matters (the page animates), emulate it and confirm motion stops.

## Output
A report in this exact format:

```
## Design review — <URL> — <date>
### Must fix
- [viewport] issue — evidence (selector / screenshot) — suggested fix
### Should fix
- ...
### Nice to have
- ...
### Passed
- short list of what was checked and is fine
```

Rules:
- Every item must cite evidence (a selector, a measurement, or a screenshot name). No vague opinions.
- Do not edit code while reviewing. Fixing is a separate step.
- Save screenshots to `docs/screenshots/review/` with names like `mobile-390.png`.
