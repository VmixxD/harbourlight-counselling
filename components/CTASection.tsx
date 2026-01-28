import React from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to take a gentle first step?",
  description = "Book a free 15-minute consult or send an enquiry. We will work at your pace."
}: CTASectionProps) {
  return (
    <section className="bg-mist py-16">
      <Container className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-sage/50 bg-white/80 p-8 md:flex-row md:items-center">
        <div className="space-y-3">
          <h2 className="font-heading text-3xl text-forest">{title}</h2>
          <p className="text-base text-forest/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book">{site.primaryCta}</Button>
          <Button href="/contact" variant="secondary">
            {site.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
