import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import { footerLinks, navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-sage/40 bg-mist">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-forest/70">{site.tagline}</p>
          <p className="text-xs text-forest/60">NZAC-aligned, trauma-informed, LGBTQ+ affirming.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-forest">Explore</p>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-forest/70 hover:text-forest">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-forest">Contact</p>
            <p className="text-forest/70">Email: {site.email}</p>
            <p className="text-forest/70">Location: {site.location}</p>
            <p className="text-xs text-forest/60">[Add professional status]</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-forest">Policies</p>
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block text-forest/70 hover:text-forest">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-forest/60">{site.crisisLine}</p>
        </div>
      </Container>
      <div className="border-t border-sage/40 py-4 text-center text-xs text-forest/60">
        Copyright {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
