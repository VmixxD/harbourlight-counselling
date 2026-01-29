import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/Button";
import { generalFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata = {
  title: "FAQ"
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        intro="Clear answers to common questions about counselling, scope, and process."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: site.secondaryCta, href: "/contact" }}
      />
      <section className="section-space">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title="If you are unsure, start here."
            description="You are welcome to ask anything in a consult as well."
          />
          <div className="overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift">
            <img
              src="/images/hlc-faq-water-ripples.png"
              alt="Gentle ripples on still water"
              className="h-56 w-full object-cover sm:h-64"
              loading="lazy"
            />
          </div>
          <FaqAccordion items={generalFaqs} />
          <Button href="/book" variant="ghost">
            {site.primaryCta}
          </Button>
        </Container>
      </section>
    </>
  );
}
