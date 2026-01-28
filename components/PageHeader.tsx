import React from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type PageHeaderProps = {
  title: string;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHeader({ title, intro, primaryCta, secondaryCta }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-soft-linear py-16">
      <div className="absolute inset-0 bg-soft-radial opacity-80" />
      <Container className="relative space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-forest/60">Harbourlight Counselling</p>
          <h1 className="font-heading text-4xl text-forest md:text-5xl">{title}</h1>
          <p className="text-lg text-forest/80">{intro}</p>
        </div>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
