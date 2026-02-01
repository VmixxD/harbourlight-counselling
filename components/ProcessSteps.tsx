import React from "react";

const steps = [
  {
    title: "Start with a consult",
    description: "A free 15-minute consult to ask questions and check fit."
  },
  {
    title: "Set a steady plan",
    description: "We agree on your goals, pace, and what support looks like."
  },
  {
    title: "Work with clarity",
    description: "Sessions balance reflection with practical options when they would help."
  }
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-2xl border border-sage/50 bg-white/70 p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.22em] text-forest/60">Step {index + 1}</p>
          <h3 className="mt-3 font-heading text-2xl text-forest">{step.title}</h3>
          <p className="mt-2 text-sm text-forest/70">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
