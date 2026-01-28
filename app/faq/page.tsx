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
          <FaqAccordion items={generalFaqs} />
          <Button href="/book" variant="ghost">
            Book a consult
          </Button>
        </Container>
      </section>
    </>
  );
}
