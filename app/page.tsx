import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TrustStrip } from "@/components/TrustStrip";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { Callout } from "@/components/Callout";
import { SchemaOrg } from "@/components/Schema";
import { homeFaqs } from "@/lib/faqs";
import { services } from "@/lib/services";
import { supportAreas } from "@/lib/supportAreas";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <section className="relative overflow-hidden bg-soft-linear py-20">
        <div className="absolute inset-0 bg-soft-radial opacity-80" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 motion-safe:animate-fade-up lg:max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-forest/60">Harbourlight Counselling</p>
            <h1 className="font-heading text-4xl text-forest md:text-5xl">
              Counselling for identity, relationships, and burnout.
            </h1>
            <p className="text-lg text-forest/80">{site.tagline}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/book">{site.primaryCta}</Button>
              <Button href="/contact" variant="secondary">
                {site.secondaryCta}
              </Button>
            </div>
            <div className="space-y-1 text-sm text-forest/70">
              <p>{site.serviceArea}</p>
              <p>
                LGBTQ+ affirming, trauma-informed, Te Tiriti values: manaakitanga, relational safety,
                respect, and choice.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-sage/50 shadow-lift">
              <img
                src="/images/hlc-home-hero-harbour-dawn.png"
                alt="Soft harbour at dawn with mist and warm light"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-sage/50 bg-white/90 p-4 text-sm text-forest shadow-soft lg:w-max lg:whitespace-nowrap">
              Calm, grounded support with clear next steps.
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="order-2 space-y-4 text-sm text-forest/75 lg:order-1">
            <SectionHeading
              eyebrow="Meet Vince"
              title="A steady, human approach to counselling."
              description="I support adults across Aotearoa New Zealand with counselling that is calm, practical, and grounded."
            />
            <p>
              My approach is warm, plain-language, and collaborative. We slow things down, make
              sense of what is happening, and build steps that feel realistic and supportive.
            </p>
            <p>
              With a corporate background, I understand the realities of burnout and work stress. I
              also bring a steady focus on identity, shame, and belonging.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-4/5 overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift">
              <img
                src="/images/vince-batters.png"
                alt="Portrait of Vince Batters"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="This might be for you if"
              title="You are looking for support that feels steady, practical, and human."
              description="Counselling can help you make sense of what is happening, lower self-criticism, and feel more connected to who you are."
            />
            <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
              {[
                "You feel stuck in shame, self-criticism, or not good enough",
                "Work stress or burnout is impacting your wellbeing and relationships",
                "You want healthier boundaries or clearer communication",
                "You are navigating identity, belonging, or big life transitions",
                "You want counselling that is affirming, inclusive, and calm"
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-forest" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift">
            <img
              src="/images/hlc-home-hero-bush-trail.png"
              alt="Quiet native bush trail after light rain"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Services"
            title="Support that meets you where you are."
            description="Explore the three focus areas below, each designed to be warm, structured, and grounded."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Additional support"
            title="Other areas I can help with."
            description="If you are not sure what fits best, you can still reach out and we will decide together."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {supportAreas.map((area) => (
              <div key={area.title} className="card-surface">
                <h3 className="font-heading text-2xl text-forest">{area.title}</h3>
                <p className="mt-3 text-sm text-forest/75">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="How it works"
            title="A clear, supportive process."
            description="We move at your pace, with steady guidance and practical options when they would serve you."
          />
          <ProcessSteps />
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <SectionHeading
            eyebrow="Not the right fit if"
            title="Clear boundaries keep the work safe."
            description="I can help with counselling needs, but there are limits to my scope."
          />
          <div className="space-y-4">
            {[
              "You need urgent crisis support or emergency care",
              "You are seeking diagnosis, medical advice, or court reports",
              "You want guaranteed outcomes or fast fixes"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-sage/50 bg-white/80 p-4 text-sm text-forest/75">
                {item}
              </div>
            ))}
            <Callout title="If you need urgent help" tone="soft">
              <p>{site.crisisLine}</p>
            </Callout>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Fees transparency"
            title="Clear information, no surprises."
            description="Fees and policies are shared upfront so you can make an informed choice."
          />
          <div className="space-y-4">
            <div className="rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
              <p className="font-semibold text-forest">Standard session</p>
              <p className="mt-2">{site.sessionLength}</p>
              <p className="mt-2">{site.fees}</p>
            </div>
            <div className="rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
              <p className="font-semibold text-forest">Cost barrier?</p>
              <p className="mt-2">{site.slidingScale}</p>
              <Link href="/fees" className="mt-3 inline-flex text-sm font-medium text-forest">
                View fees and policies
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Trust and safety"
            title="A calm, ethical space."
            description="Confidentiality, inclusivity, and clear boundaries are built into every step."
          />
          <TrustStrip />
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="A few quick answers to help you decide what feels right."
          />
          <FaqAccordion items={homeFaqs} />
          <Button href="/faq" variant="ghost">
            View all FAQs
          </Button>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
