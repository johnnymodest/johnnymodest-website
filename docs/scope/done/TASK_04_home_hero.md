# TASK 04 — Home page: Hero section

## Goal

Build the Hero section for the home page.

## Dependencies

- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## File

`src/components/sections/HeroSection.tsx`, composed into `src/app/page.tsx`

## Implementation

CSS class: `.hero` / `.hero__grid` / `.hero__title` / `.hero__lead-row` / `.hero__meta`

### Amber highlight

The amber highlight uses `<em>` tag with `font-style: normal`, amber background, `--amber-text` color, `padding: 0 0.18em`. This is defined in the `.hero__title em` CSS rule.

### Headline

```tsx
<h1 className="hero__title">
  Senior product
  <br />
  leadership.
  <br />
  <em>Fix the thing.</em>
  <br />
  High-five.
</h1>
```

### Lead row

Below the headline, in `.hero__lead-row`:

**Left:** subhead paragraph (`.lead` class):
> "I parachute into stuck product orgs, find the things you can't see from the inside, ship the fix, and exit before I become furniture."

**Right:** three `.tag` pills:
- `● BOOKING Q3` — class `tag--amber`, includes `.tag__dot`
- `FROM $80/HR`
- `REMOTE · BUCHAREST`

## Acceptance criteria

- Amber block scales correctly with the h1 font-size clamp
- Pills render in a row, wrap gracefully on mobile
- Section has bottom border (`1px solid --rule`)
