"use client";

import { useEffect } from "react";

/**
 * Delegated mousemove listener that sets a CSS variable --ux on .amber-link
 * elements so the underline ::before pseudo-element can expand from the
 * cursor position.
 *
 * Degrades cleanly when JS is disabled — the underline still renders on
 * hover via :hover::before, just without cursor tracking.
 */
export default function CursorUnderline() {
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest(".amber-link") as HTMLElement | null;
      if (!link) {
        // When leaving an .amber-link, reset the variable on any tracked
        // element that is no longer hovered.
        return;
      }

      const rect = link.getBoundingClientRect();
      const ux = ((e.clientX - rect.left) / rect.width) * 100;
      link.style.setProperty("--ux", `${ux}%`);
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
