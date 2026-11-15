## Design review — http://localhost:3000 (dev) — 2026-11-13
Scope: v4b — 3-column project cards, testimonials (initials avatars, italic emphasis, linked name). Report only, no code changes.
Dev mode shows "(TODO)" drafts on purpose (project 3 + 3 testimonials); the TODO text itself is not reported.

### Must fix
- None.

### Should fix
- [all] The empty grey image box from v4 is still there, now on all 3 cards. `div.relative.aspect-16/10` is always rendered with `bg-line/50`, even when `p.image` is unset.
  It is 217px tall (mobile), 211px (tablet) and 156px (desktop), about a third to half of each card. At 1.28:1 against the card it reads as "image failed to load".
  Evidence: `#projects article > div.relative`, `v4b-desktop-1440-projects.png`, `v4b-tablet-768-projects.png`.
  Fix: add screenshots, or render the 16:10 area only when `p.image` is set.
- [tablet 768] With 3 projects in the 2-column grid, the third card sits alone on row 2 and leaves the right half empty (card 3 at x=32, y+482; no card at x=396).
  Evidence: `v4b-tablet-768-projects.png`.
  Fix: make the third card span 2 columns at `md` only (`md:last:odd:col-span-2 lg:col-span-1`), or go straight from 1 column to 3 columns (`lg:grid-cols-3` only).

### Nice to have
- [desktop 1440] The cards are 253px wide inside the 3/4 content column, so titles and subtitles wrap unevenly. "Job Search Platform Refactor" takes 2 lines and the other titles take 1, which puts card 2's subtitle and description about 25px lower than its neighbours.
  "High-traffic social / game backend" also breaks after "social".
  Evidence: card widths 253/253/253, titleLines 1/2/1, `v4b-desktop-1440-projects.png`.
  Fix: let `#projects` span the full width (heading above the grid) so cards are about 345px, or align rows with `grid-rows-subgrid`.
- [all] Linked vs. unlinked names look like two different styles. The first name is harbour-blue and underlined (`#testimonials figcaption a`); the others are cedar bold.
  This is intended (it signals a link), but there is no hint that it goes to LinkedIn.
  Evidence: `v4b-desktop-1440-testimonials.png`.
  Fix: optionally add a small LinkedIn icon after the name (`aria-hidden`), or add the text "on LinkedIn" to the link's accessible name.
- [all] The testimonial name link is 19px tall. It passes WCAG 2.5.8 through the spacing exception, because there is no other target nearby.
  Evidence: `#testimonials figcaption a` height 19px.
  Fix: `inline-block py-1`, as suggested for the contact links in v4.
- [all] The opening “ sits in the text column, so the quote's first line starts one glyph to the right of the lines below.
  Evidence: `v4b-mobile-390-testimonials.png`.
  Fix: optional hanging punctuation, e.g. `-indent-[0.45em]` on the `<p>`, or `hanging-punctuation: first` (Safari only).
- [all] Font change (uncommitted, in `globals.css`): `--font-display` and `--font-serif` now both resolve to `system-ui`.
  The expanded headline (`font-stretch-expanded`) relies on SF Pro's width axis, so on Windows/Android (Segoe UI/Roboto) it will render at normal width and the hero will look noticeably different.
  The variable name `--font-serif` is now misleading.
  Evidence: computed `font-family: system-ui` on `blockquote` and `em`; `v4b-desktop-1440-fold.png`.
  Fix: accept it as a performance trade-off, or rename the token to `--font-body` and check the hero on Windows.
- [all] The nav has no "Testimonials" link, and its labels differ from the section titles ("Services" vs. "What I Can Do", "Stack" vs. "Languages & Technologies").
  Evidence: `header nav a`.
  Fix: optional. This is fine while testimonials are drafts; revisit once real ones are published.

### Passed
- No horizontal overflow: scrollWidth equals innerWidth at 390 / 768 / 1440.
- Project grid: 1 column at 390 (w 350), 2 at 768 (w 340), 3 at 1440 (w 253 ×3, x 458/735/1011). All cards in a row have equal height, and the skill tags line up at the bottom (`mt-auto`), including the shorter draft card.
- Initials avatars: 48×48 circles showing "CN", 14px bold, mist on cedar at 13.85:1. They are `aria-hidden="true"`, so the name isn't read twice. They stay aligned with the 2-line caption at every width.
- Italic emphasis: `*key phrase in italics*` becomes `<em>` with a real italic (`font-style: italic`). It wraps across lines cleanly at 390 and 1440.
- Linked name: `href` points to LinkedIn, harbour on fog at 6.02:1, underlined, and it opens in the same tab (no `target`). It is reachable by keyboard right after "See Projects" and shows a 2px #0b5a8a outline with a 3px offset. Evidence: `v4b-desktop-1440-focus-testimonial.png`.
- Testimonial rhythm: 48px between figures and 16px from quote to caption. The groups are clearly separated on mobile. Quote text is 20px / 24px and the column is `max-w-prose` (655px).
- Keyboard: skip link → name → 5 nav links → Email Me → See Projects → testimonial link. Every stop shows a 2px #0b5a8a outline. Evidence: `v4b-desktop-1440-focus-cta.png`.
- Fold: name, role, headline and both CTAs are visible within the first screen at 1440. At 390, the headline and CTAs fit above the fold.
- Console: 0 errors and 0 warnings (only React DevTools info and HMR log).
- Motion: 0 animations. `scroll-behavior` is `smooth`, and it changes to `auto` under `prefers-reduced-motion: reduce`.
- Not counted: the Next.js dev "N" badge overlaps content at 390/768 in dev only.

Screenshots: `docs/screenshots/review/v4b-{mobile-390,tablet-768,desktop-1440}{,-fold,-projects,-testimonials,-contact}.png`, `v4b-desktop-1440-focus-{cta,testimonial}.png`
