import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Vince"
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Vince"
        intro="I offer a calm, grounded space for adults who want to feel more at ease with themselves and their relationships."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
      />
      <section className="section-space">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="order-2 space-y-4 text-sm text-forest/75 lg:order-1">
            <SectionHeading
              eyebrow="Bio"
              title="A brief introduction."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift">
              <img
                src="/images/vince-batters.jpg"
                alt="Portrait of Vince Batters"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Values and approach"
            title="Warm, practical, and affirming."
            description="I work in a relational, trauma-informed way that balances emotional depth with clear next steps."
          />
          <ul className="space-y-3 rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
            {[
              "LGBTQ+ affirming and neurodiversity-affirming",
              "Te Tiriti-aligned values: manaakitanga, respect, and choice",
              "Plain language, no jargon, and no guarantees",
              "A steady pace that honours your nervous system"
            ].map((item) => (
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
            eyebrow="Why this work"
            title="A gentle, grounded invitation."
            description="I believe counselling should feel like a steady light: warm, clear, and safe enough to be honest."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <p>
              My interest in counselling grew from seeing how shame and disconnection shape the way
              people relate to themselves and others. I aim to create a space where you do not have
              to perform or fix yourself to be welcome.
            </p>
            <p>
              You can expect honesty, care, and clarity about what I can offer. We work together to
              find what is most helpful for you.
            </p>
            <Callout title="Scope and boundaries" tone="soft">
              <p>I provide counselling, not medical or crisis services.</p>
            </Callout>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Corporate background"
            title="Workplace insight without the corporate spin."
            description="My professional background helps me understand real-world work pressures, change cycles, and the human cost of burnout."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <p>
              Many clients are navigating heavy workloads, restructures, or a constant sense of
              responsibility. We make room for the emotional impact while also building practical,
              sustainable strategies that fit your reality.
            </p>
            <p>
              If you are trying to keep things together at work while feeling exhausted inside,
              you are not alone.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Credentials"
            title="Qualifications and ongoing learning."
            description="Add your professional details here so visitors know exactly where you sit."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              {[
                "[Add qualifications or training]",
                "[Add professional membership or registration status]",
                "[Add supervision arrangements]",
                "[Add ongoing learning statement]"
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Callout title="Professional context" tone="soft">
              <p>
                I work within the counselling scope and align with the NZAC Code of Ethics. If you
                are unsure whether counselling is right for you, please ask.
              </p>
            </Callout>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Clear boundaries"
            title="What I do and do not provide."
            description="Clear boundaries protect you and keep the work safe."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <li>Not an emergency service or crisis hotline.</li>
              <li>No diagnosis or medical advice.</li>
              <li>No court reports or formal workplace assessments.</li>
            </ul>
            <Button href="/policies" variant="ghost">
              Read policies and confidentiality
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
