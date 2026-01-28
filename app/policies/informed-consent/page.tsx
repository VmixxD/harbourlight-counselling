import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Informed consent"
};

export default function InformedConsentPage() {
  return (
    <>
      <PageHeader
        title="Informed consent"
        intro="We agree on how counselling works together so you feel informed and in control."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="What it means"
            title="Clarity, choice, and consent."
            description="Informed consent means you understand the counselling process and your rights."
          />
          <Callout title="You can expect" tone="soft">
            <ul className="mt-3 space-y-2">
              <li>A clear explanation of fees, session length, and boundaries.</li>
              <li>Transparency about confidentiality and its limits.</li>
              <li>Freedom to ask questions and review decisions at any time.</li>
            </ul>
          </Callout>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Working together"
            title="A shared plan."
            description="Counselling works best when we regularly check in about goals and pace."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <li>We agree on goals and review them together.</li>
              <li>You can pause, change direction, or end counselling at any time.</li>
              <li>We will talk about what is and is not helpful as we go.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Online counselling"
            title="Extra care for online sessions."
            description="Online counselling includes consent for technology and privacy considerations."
          />
          <Callout title="Online consent includes" tone="soft">
            <ul className="mt-3 space-y-2">
              <li>Agreement to use secure video or phone sessions.</li>
              <li>Confirmation of your location for safety purposes.</li>
              <li>Understanding how we handle connection issues.</li>
            </ul>
          </Callout>
        </Container>
      </section>
    </>
  );
}
