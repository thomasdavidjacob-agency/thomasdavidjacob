"use client";

import { useEffect, useState } from "react";

// Illustrative scenes only: a customer question, and an AI answer that names
// "Your Business". No real client, rating, or result is implied.
const SCENES = [
  {
    platform: "ChatGPT",
    query: "Who's the best roofer near Lake Oswego?",
    service: "Roofing · Lake Oswego",
  },
  {
    platform: "Google AI Overview",
    query: "wedding planner in Portland, Oregon",
    service: "Wedding planning · Portland",
  },
  {
    platform: "Perplexity",
    query: "best family dentist in Oregon City",
    service: "Family dentistry · Oregon City",
  },
  {
    platform: "Gemini",
    query: "who does kitchen remodels in West Linn?",
    service: "Kitchen remodeling · West Linn",
  },
];

const TYPE_MS = 38;
const HOLD_MS = 3600;

export default function AIAnswerCard() {
  const [scene, setScene] = useState(0);
  const [typed, setTyped] = useState(SCENES[0].query.length);
  const [showAnswer, setShowAnswer] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    const run = (s: number) => {
      const q = SCENES[s].query;
      setScene(s);
      setShowAnswer(false);
      setTyped(0);
      let n = 0;
      const type = () => {
        n += 1;
        setTyped(n);
        if (n < q.length) {
          timer = setTimeout(type, TYPE_MS);
        } else {
          timer = setTimeout(() => {
            setShowAnswer(true);
            timer = setTimeout(() => run((s + 1) % SCENES.length), HOLD_MS);
          }, 450);
        }
      };
      timer = setTimeout(type, 300);
    };
    // Let the first (server-rendered, complete) scene sit before animating.
    timer = setTimeout(() => run(1), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  const s = SCENES[scene];

  return (
    <div className="relative w-full max-w-md">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="relative rounded-2xl border border-white/10 bg-[#0e0e16]/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
        {/* window bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400/90">
            {s.platform}
          </span>
        </div>

        <div className="p-5 sm:p-6 space-y-5 min-h-[300px]">
          {/* question */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white/[0.06] border border-white/10 px-4 py-2.5 text-sm text-zinc-200">
              {s.query.slice(0, typed)}
              {typed < s.query.length && (
                <span className="inline-block w-[2px] h-4 align-middle bg-amber-400 ml-0.5 animate-pulse" />
              )}
            </div>
          </div>

          {/* answer */}
          <div
            className={`space-y-3 transition-all duration-500 ${
              showAnswer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="text-xs text-zinc-500">Here are the top options people recommend:</p>

            <div className="relative rounded-xl border border-amber-400/50 bg-amber-400/[0.07] px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-white">1. Your Business</span>
                <span className="text-[10px] font-black tracking-[0.15em] uppercase bg-amber-400 text-black rounded-full px-2 py-0.5">
                  Top pick
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">{s.service}</p>
              <p className="text-[11px] text-amber-400/80 mt-2">Source: yourbusiness.com</p>
            </div>

            {[2, 3].map((n) => (
              <div key={n} className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <span className="text-sm text-zinc-500">{n}. Another business</span>
                <div className="mt-2 h-1.5 w-2/3 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="relative mt-3 text-center text-[11px] text-zinc-600">
        Illustration: where we work to put your business.
      </p>
    </div>
  );
}
