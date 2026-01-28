import React from "react";
import { cn } from "@/lib/utils";

type CalloutProps = {
  title: string;
  children: React.ReactNode;
  tone?: "neutral" | "soft";
};

export function Callout({ title, children, tone = "neutral" }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-sage/50 p-6 text-sm text-forest/80",
        tone === "soft" ? "bg-mist" : "bg-white/80"
      )}
    >
      <p className="font-semibold text-forest">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
