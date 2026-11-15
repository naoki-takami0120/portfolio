## Design review — http://localhost:3000 — 2026-11-13
Scope: v4 personal adjustments (Projects card grid, service icons, Contact icons). Report only, no code changes.

### Must fix
- None.

### Should fix
- [all] Both visible project cards show an empty grey image box, because no project has `image` set yet.
  The boxes are 348×218 (mobile), 338×211 (tablet) and 251×157 (desktop), and they take up about 45% of each card.
  The placeholder (`bg-line/50` ≈ #d5dcdb) against the card (#f4f6f5) is only 1.28:1, so it reads as "image failed to load" rather than as a design choice.
  Evidence: `#projects article > div.relative`, `v4-mobile-390-projects.png`, `v4-desktop-1440-projects.png`.
  Fix: add screenshots to `/public/projects/` and set `image`, or render the 16:10 area only when `p.image` is set until then.

### Nice to have
- [desktop 1440] Only 2 projects are published (the third is still a TODO draft), so the 3-column grid leaves the right third empty.
  Inside the 3/4-width content column, each card is only 253px wide, and "Job Search Platform Refactor" wraps to 2 lines.
  Evidence: card x = 458 / 735, w = 253; `v4-desktop-1440-projects.png`.
  Fix: this resolves itself once the third project is published. Otherwise, let `#projects` span the full width (heading above the grid) so the cards are about 345px.
- [all] Contact icons differ in visual weight: Mail is a lucide outline icon, while LinkedIn and GitHub are solid Simple Icons marks (the LinkedIn mark is a filled square).
  Evidence: `#contact li svg`, `v4-mobile-390-contact.png`.
  Fix: accept it (brand marks are solid by design), or render the brand marks one step smaller (`size-4`) to balance them.
- [all] Contact links are now 19px tall (text-base), below the 24px target size.
  They pass WCAG 2.5.8 only through the spacing exception (24px gap between items).
  Evidence: `#contact a` height 19px at all widths.
  Fix: `inline-block py-1` on the link gives a larger tap target without changing the text size.
- [all] Skill tags use 12px text (`text-xs`). Contrast is 5.84:1 (slate on fog), which passes AA, but this is the smallest text on the page.
  Evidence: `#projects li li` font-size 12px.
  Fix: optional `text-sm`.

### Passed
- No horizontal overflow: scrollWidth equals innerWidth at 390 / 768 / 1440.
- Grid columns as specified: 1 column at 390 (w 350), 2 at 768 (w 340 ×2), 3 tracks at 1440. The image area is 16:10 at every width.
- Draft filter still works: the TODO project is hidden, and the string "TODO" does not appear on the page.
- Service icons: 6/6 render at 28px with `aria-hidden="true"`, and their style is consistent (lucide, stroke 1.5). Evidence: `v4-desktop-1440-services.png`.
- Contact: 3/3 icons are `aria-hidden="true"`, visible labels (Email / LinkedIn / GitHub) are kept, and link text is 16px.
- Keyboard: Tab order skip link → name → 5 nav links → Email Me → See Projects. Every stop shows a 2px #0b5a8a outline.
  The 3 contact links are `:focus-visible` with the same outline. Evidence: `v4-desktop-1440-focus-cta.png`, `v4-desktop-1440-focus-contact.png`.
- Contrast: subtitle (slate on mist) 6.48:1, tags 5.84:1, links (harbour on fog) 6.13:1.
- Console: 0 errors and 0 warnings.
- Motion: `document.getAnimations()` returns 0, so the reduced-motion check is not applicable.
- Copy: the new card copy comes from `profile.ts` unchanged, and no unnatural phrasing was found.
- Not counted: the Next.js dev "N" badge overlaps card text at 390/768 in dev only, as in earlier runs.

Screenshots: `docs/screenshots/review/v4-{mobile-390,tablet-768,desktop-1440}{,-fold,-projects,-services,-contact}.png`
