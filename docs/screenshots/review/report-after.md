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
