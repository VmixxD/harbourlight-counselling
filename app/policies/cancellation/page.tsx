import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Cancellation and no-show"
};

export default function CancellationPage() {
  return (
    <>
      <PageHeader
        title="Cancellation and no-show"
        intro="Clear boundaries protect your time and mine."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Cancellation policy"
            title="Please give notice where possible."
            description="This keeps the practice sustainable and respectful of all clients."
          />
          <Callout title="Notice period" tone="soft">
            <p>Please provide at least {site.cancellationWindow} notice for changes or cancellations.</p>
          </Callout>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Late changes"
            title="If you are running late or need to reschedule."
            description="We will do our best to accommodate, but the full session fee may apply."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <li>If you are running late, the session may still end at the scheduled time.</li>
              <li>No-shows or late cancellations may be charged at the full rate.</li>
              <li>If you need to reschedule, please reach out as soon as you can.</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
