import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variants = {
  primary: "bg-forest text-cream hover:bg-forest/90 shadow-soft",
  secondary: "bg-sage text-forest hover:bg-mist border border-sage/70",
  ghost: "text-forest hover:bg-mist border border-forest/20"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base"
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
