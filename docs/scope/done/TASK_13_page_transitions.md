# TASK 13 — Page transitions

## Goal

Add fade-up page transition animations on route change.

## Dependencies

- At least one page task (04–11) complete so pages exist to navigate between
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Implementation

CSS: `.page-enter` / `@keyframes pageIn`

```css
@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Duration:** 360ms, **easing:** `cubic-bezier(.2,.7,.2,1)`.

### Approach

In Next.js App Router, add the animation class to a client wrapper component that re-mounts on route change. Apply `.page-enter` to the page wrapper on mount.

## Acceptance criteria

- Each page fades + slides up on navigation
- Animation does not replay on scroll or browser refresh
