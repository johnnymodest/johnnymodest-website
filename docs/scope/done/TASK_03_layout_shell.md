# TASK 03 — Layout shell: Nav, Footer, StickyBar

## Goal

Build the persistent layout components that appear on every page: Nav, Footer, StickyBar.

## Dependencies

- [TASK_01](./TASK_01_project_scaffold.md) complete (globals.css with all CSS classes available)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Files

`src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/components/StickyBar.tsx`, `src/app/layout.tsx`

---

## Nav

CSS classes: `.nav` / `.nav__inner` / `.nav__logo` / `.nav__monogram` / `.nav__wordmark`

**Container:** Sticky top, height 72px, white background, 1px bottom border (`--rule`).

**Logo (left):** The J/M monogram is a 36×36px outlined square (`1.5px solid --ink`) with a diagonal slash (CSS `::after` gradient, 135°). "J" sits top-left, "M" bottom-right. Wordmark: "JOHNNY MODEST", 14px, weight 500, letter-spacing 0.16em, uppercase.

**Nav links (right):** "Case studies" | "Zero nonsense" | "About" | "Contact" — 14px, weight 500. Active link: color `--amber-dark`, 2px amber underline via `::after`. Use Next.js `usePathname()` to set `aria-current="page"`.

**CTA button:** "Start a conversation →" — CSS `.nav__cta`, 1.5px solid ink border, 10px 18px padding, hover inverts. Links to `/contact`.

**Mobile (≤760px):** hamburger menu, full-width dropdown.

## Footer

CSS classes: `.foot` / `.foot__grid` / `.foot__brand` / `.foot__col` / `.foot__base`

**Grid:** Four-column (`2fr 1fr 1fr 1fr`), collapses to two-column at ≤760px.

- **Col 1 — brand:** Logo mark + wordmark, then tagline paragraph in `--muted`.
- **Col 2 — SITE:** Home, Zero nonsense, Case studies, About (links)
- **Col 3 — DIRECT:** hello@johnnymodest.com | Brief form | LinkedIn ↗
- **Col 4 — ENGAGEMENT:** "Rates from $80/hr" | "2 week minimum" | "Currently booking Q3"

**Bottom bar:** "© 2026 Johnny Modest Consultancy" (left) | "No packages. No theater. No buzzwords." (right). Font-mono, 11px, `--muted`.

## StickyBar

CSS classes: `.sticky-bar` / `.sticky-bar__inner` / `.sticky-bar__copy` / `.sticky-bar__cta`

**Behavior:** Fixed bottom bar. Slides in via `translateY(110%)` → `translateY(0)` after 400px scroll. `2px solid --amber` top border. Black background.

**Dismiss:** Store dismissed state in `sessionStorage`. Re-appears on new session. Hidden on `/contact` route.

**Left:** Pulsing amber dot + copy text (varies by page). **Right:** "Hire Johnny →" amber button → `/contact`. Dismiss ×.

**Copy by route** (use `usePathname()` to determine):

| Route           | Copy                                                |
| --------------- | --------------------------------------------------- |
| Home `/`         | "Like the cut of this jib? Tell me what's stuck."   |
| `/zero-nonsense` | "Sound like your kind of operator? Let's talk."     |
| `/case-studies`  | "Want results like these? Let's talk."              |
| `/about`         | "Convinced? Let's find out if we're a fit."         |
| `/contact`       | Hidden entirely                                     |

## Acceptance criteria

- Nav renders and sticks on all pages
- Active state updates on navigation without page reload
- Footer renders below all content
- Sticky bar slides in after 400px, dismisses on ×, hidden on /contact
- All responsive breakpoints work
