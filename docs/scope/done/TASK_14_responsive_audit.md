# TASK 14 — Responsive audit

## Goal

Audit every page at key breakpoints. Fix any layout issues.

## Dependencies

- All page tasks (04–11) complete
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Breakpoints to test

Check every page at: **375px**, **768px**, **1280px**.

### Known breakpoints from CSS

| Breakpoint | What collapses/changes                                              |
| ---------- | ------------------------------------------------------------------- |
| ≤760px     | Service grid, cs-row grid, cs-body layout, about-grid, foot grid, rate grid |
| ≤880px     | Contact grid collapses                                              |
| ≤600px     | Field row collapses, sticky bar hides copy text (only dot visible)  |

### Checklist per page

- `/` — Hero, slider, services, rate, selected work
- `/zero-nonsense` — Hero, principles, footnote
- `/case-studies` — Hero, index list
- `/case-studies/[slug]` — Hero, sidebar + content, metrics
- `/about` — Hero, body grid, domains grid, CTA
- `/contact` — Hero, contact grid, form

## Acceptance criteria

- No horizontal scroll at any breakpoint
- All interactive elements ≥44px touch target
- Before/after slider works on touch
- Sticky bar readable on mobile
