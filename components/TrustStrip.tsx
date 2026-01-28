import React from "react";
import { ShieldIcon, SparkIcon } from "@/components/Icons";

const items = [
  {
    title: "Confidential and ethical",
    description: "Aligned with NZAC Code of Ethics and clear limits of confidentiality.",
    icon: <ShieldIcon className="h-6 w-6 text-forest" />
  },
  {
    title: "NZ-wide online support",
    description: "Private, secure online sessions across New Zealand time zones.",
    icon: <SparkIcon className="h-6 w-6 text-forest" />
  },
  {
    title: "Inclusive and affirming",
    description: "LGBTQ+ affirming, neurodiversity-affirming, and trauma-informed.",
    icon: <ShieldIcon className="h-6 w-6 text-forest" />
  },
  {
    title: "Supervision and learning",
    description: "Regular professional supervision and ongoing learning.",
    icon: <SparkIcon className="h-6 w-6 text-forest" />
  }
];

export function TrustStrip() {
  return (
    <div className="grid gap-6 rounded-2xl border border-sage/50 bg-white/70 p-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="space-y-3">
          <div className="inline-flex rounded-full bg-mist p-3">{item.icon}</div>
          <h3 className="font-heading text-xl text-forest">{item.title}</h3>
          <p className="text-sm text-forest/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
