'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function AccordionFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-zinc-800">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors pr-8">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'border-amber-400 bg-amber-400/10 rotate-180'
                    : 'group-hover:border-amber-400/50'
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-colors ${isOpen ? 'text-amber-400' : 'text-zinc-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
