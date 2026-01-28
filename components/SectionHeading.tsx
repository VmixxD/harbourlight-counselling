import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-forest/60">{eyebrow}</p>}
      <h2 className="font-heading text-3xl text-forest md:text-4xl">{title}</h2>
      {description && <p className="text-base text-forest/75">{description}</p>}
    </div>
  );
}
