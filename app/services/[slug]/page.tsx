import React from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Callout } from "@/components/Callout";
import { Button } from "@/components/Button";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: { slug: string };
};

const serviceImages: Record<
  string,
  { src: string; alt: string; wrapperClassName?: string; className?: string }
> = {
  "identity-shame": {
    src: "/images/hlc-service-identity-fern.png",
    alt: "Fern frond unfurling in soft light"
  },
  relationships: {
    src: "/images/hlc-service-relationships-stones.png",
    alt: "Two stones balanced on a tidal rock with gentle ripples"
  },
  burnout: {
    src: "/images/hlc-service-burnout-clearing.png",
    alt: "Quiet forest clearing with soft golden light"
  }
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return { title: service.title, description: service.shortDescription };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        intro={service.hero}
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: site.secondaryCta, href: "/contact" }}
        image={serviceImages[service.slug]}
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Common signs"
            title="This often shows up as..."
            description={service.outcome}
          />
          <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
            {service.signs.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-forest" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Focus areas"
            title="What we will focus on"
            description="A blend of practical tools, reflection, and steady support."
          />
          <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
            {service.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="How I work"
            title="Relational, grounded, and clear."
            description="We choose a pace and structure that supports you."
          />
          <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
            {service.howIWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="First sessions"
            title="What you can expect"
            description="We build safety and clarity before moving deeper."
          />
          <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
            {service.expect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Callout title="This is a good fit if" tone="soft">
            <ul className="mt-3 space-y-2">
              {service.fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Callout>
          <Callout title="Not the right fit if" tone="soft">
            <ul className="mt-3 space-y-2">
              {service.notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Callout>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title={`Questions about ${service.title.toLowerCase()}`}
            description="Short answers to common questions about this focus area."
          />
          <FaqAccordion items={service.faq} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book">{site.primaryCta}</Button>
            <Button href="/contact" variant="secondary">
              {site.secondaryCta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
