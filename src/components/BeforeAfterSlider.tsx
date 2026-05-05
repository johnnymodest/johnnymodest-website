"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { Pair } from "../../content/before-after";

interface BeforeAfterSliderProps {
  pairs: Pair[];
}

export default function BeforeAfterSlider({ pairs }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [split, setSplit] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const pulseRaf = useRef<number | null>(null);
  const pulseDir = useRef(1);
  const pulseActive = useRef(true);
  const hasInteracted = useRef(false);

  const pair = pairs[currentIndex];
  const total = pairs.length;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < total - 1;

  // Update --split CSS custom property whenever split changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--split", `${split}%`);
    }
  }, [split]);

  // Reset split to 50% when pair index changes
  useEffect(() => {
    setSplit(50);
  }, [currentIndex]);

  // Auto-pulse animation
  useEffect(() => {
    if (!pulseActive.current) return;

    const animate = () => {
      if (!pulseActive.current) return;

      setSplit((prev) => {
        const newVal = prev + pulseDir.current * 0.15;

        if (newVal >= 53) {
          pulseDir.current = -1;
          return 53;
        }
        if (newVal <= 47) {
          pulseDir.current = 1;
          return 47;
        }
        return newVal;
      });

      pulseRaf.current = requestAnimationFrame(animate);
    };

    pulseRaf.current = requestAnimationFrame(animate);

    return () => {
      if (pulseRaf.current) {
        cancelAnimationFrame(pulseRaf.current);
      }
    };
  }, []);

  const stopPulse = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      pulseActive.current = false;
      if (pulseRaf.current) {
        cancelAnimationFrame(pulseRaf.current);
        pulseRaf.current = null;
      }
    }
  }, []);

  // Drag handlers
  const handleDragStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      stopPulse();
      isDragging.current = true;
      document.body.style.cursor = "ew-resize";
    },
    [stopPulse],
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || !sliderRef.current) return;
      e.preventDefault();

      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSplit(pct);
    };

    const handleEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  const goPrev = () => {
    if (canGoPrev) setCurrentIndex((i) => i - 1);
  };

  const goNext = () => {
    if (canGoNext) setCurrentIndex((i) => i + 1);
  };

  return (
    <div>
      <div ref={sliderRef} className="ba">
        {/* Before panel */}
        <div className="ba__panel ba__panel--before">
          <span className="ba__label">BEFORE</span>
          <span className="eyebrow">{pair.context}</span>
          <p className="ba__text">{pair.before}</p>
        </div>

        {/* After panel */}
        <div className="ba__panel ba__panel--after">
          <span className="ba__label">AFTER</span>
          <span className="eyebrow">{pair.context}</span>
          <p className="ba__text">{pair.after}</p>
        </div>

        {/* Handle */}
        <div
          className="ba__handle"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <div className="ba__grip">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="8,5 3,12 8,19" />
              <polyline points="16,5 21,12 16,19" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="ba__nav">
        <div className="ba__counter">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")} &middot; Drag to translate
        </div>
        <div className="ba__arrows">
          <button
            className="ba__arrow"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous pair"
          >
            &larr;
          </button>
          <button
            className="ba__arrow"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next pair"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
