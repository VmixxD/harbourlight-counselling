"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sage/40 bg-cream/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Harbourlight Counselling home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-forest/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-forest",
                pathname === item.href && "text-forest"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Button href="/book" size="sm">
            {site.primaryCta}
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Button href="/book" size="sm">
            {site.primaryCta}
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-forest/20 px-4 py-2 text-sm text-forest"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>
      {open && (
        <div id="mobile-nav" className="border-t border-sage/40 bg-cream">
          <Container className="flex flex-col gap-4 py-6 text-base text-forest">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("transition-colors hover:text-forest", pathname === item.href && "text-forest")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/book" className="w-full justify-center">
              {site.primaryCta}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
