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
