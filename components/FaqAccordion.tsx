import React from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-sage/50 bg-white/70 p-6 shadow-soft"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-forest">
            <span>{item.question}</span>
            <span className="text-xl text-forest/60 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-forest/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
