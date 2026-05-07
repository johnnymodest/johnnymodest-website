"use client";

import { useEffect, useState } from "react";

const WORDS = ["Build", "Fix", "Ship"];
const TYPE_MS = 90;
const DELETE_MS = 60;
const PAUSE_TYPED = 1800;
const PAUSE_DELETED = 350;

type Phase = "typing" | "pausing-typed" | "deleting" | "pausing-deleted";

export default function TypewriterText() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [blink, setBlink] = useState(true);

  const currentWord = WORDS[wordIdx];

  useEffect(() => {
    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const t = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          TYPE_MS,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing-typed"), TYPE_MS);
      return () => clearTimeout(t);
    }

    if (phase === "pausing-typed") {
      const t = setTimeout(() => setPhase("deleting"), PAUSE_TYPED);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing-deleted"), DELETE_MS);
      return () => clearTimeout(t);
    }

    if (phase === "pausing-deleted") {
      const t = setTimeout(() => {
        setWordIdx((wordIdx + 1) % WORDS.length);
        setPhase("typing");
      }, PAUSE_DELETED);
      return () => clearTimeout(t);
    }
  }, [text, phase, wordIdx, currentWord]);

  useEffect(() => {
    const show = phase === "typing" || phase === "deleting";
    if (!show) {
      setBlink(false);
      return;
    }
    setBlink(true);
    const interval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(interval);
  }, [phase]);

  const showCursor = phase === "typing" || phase === "deleting";

  return (
    <>
      {text}
      <span
        aria-hidden
        className="typewriter-cursor"
        style={{ opacity: showCursor && blink ? 1 : 0 }}
      >
        |
      </span>
      it.
    </>
  );
}
