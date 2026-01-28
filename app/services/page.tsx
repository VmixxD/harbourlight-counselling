import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Callout } from "@/components/Callout";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Work with me"
        intro="Choose a service area below or reach out if you are not sure where to start."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: site.secondaryCta, href: "/contact" }}
      />
      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Service areas"
            title="Focused support for common themes."
            description="Each service blends warmth, structure, and practical guidance."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="How I work"
            title="Relational, structured, and affirming."
            description="You can expect a steady pace, clear language, and space to be human."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <li>We begin by understanding your goals and what matters most.</li>
              <li>We build safety first, then explore patterns with care.</li>
              <li>We keep sessions grounded with practical tools and reflection.</li>
              <li>We review progress regularly and adjust together.</li>
            </ul>
            <Callout title="Not sure where to start?" tone="soft">
              <p>
                Book a free consult and we can decide together which service area feels like the
                best fit.
              </p>
            </Callout>
          </div>
        </Container>
      </section>
    </>
  );
}
