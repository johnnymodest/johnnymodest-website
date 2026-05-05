# TASK 12 — Cursor-tracking amber underline

## Goal

Implement the cursor-tracking amber underline effect on all nav links and body copy links.

## Dependencies

- [TASK_03](./TASK_03_layout_shell.md) complete (Nav exists with links)
- Recommended: at least one page task (04–11) complete so body links exist to test against
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## File

`src/components/CursorUnderline.tsx`

## Implementation

CSS: `.amber-link` / `.amber-link::before`

### Mechanism

The `--ux` CSS variable sets `transform-origin` so the underline expands from the cursor position:

```css
.amber-link::before {
  transform-origin: var(--ux, 0%) 50%;
}
```

### Event handler

On `mousemove` over an `.amber-link` element:

```ts
const rect = el.getBoundingClientRect();
const ux = ((e.clientX - rect.left) / rect.width) * 100;
el.style.setProperty("--ux", `${ux}%`);
```

### Application

Apply the `.amber-link` class to all nav links and body copy links via a global event listener or a wrapper component. Do **not** apply to buttons or CTAs (`.btn` elements).

## Acceptance criteria

- Underline expands from cursor position, not always from left
- Effect does not apply to `.btn` elements
- Degrades cleanly when JS is disabled (underline still renders, just without cursor tracking)
