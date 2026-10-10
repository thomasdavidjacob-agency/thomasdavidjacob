"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through words in place ("Google" → "ChatGPT" → ...).
 * The first word renders on the server, so search engines and no-JS
 * visitors still get a complete headline.
 */
export default function HeroRotator({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block">
      <span key={i} aria-hidden="true" className="inline-block text-gradient-gold animate-fade-up">
        {words[i]}
      </span>
      {/* Screen readers get the whole list once instead of a moving target */}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
