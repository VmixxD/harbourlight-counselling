import React from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <div className={cn("font-heading text-xl tracking-tight text-forest", className)}>
      Harbourlight
      {!compact && <span className="font-body text-base text-forest/70"> Counselling</span>}
    </div>
  );
}
