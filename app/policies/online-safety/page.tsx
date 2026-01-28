import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Online counselling safety"
};

export default function OnlineSafetyPage() {
  return (
    <>
      <PageHeader
        title="Online counselling safety"
        intro="Simple steps to keep online sessions private, steady, and supportive."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Privacy"
            title="Choose a quiet, private space."
            description="Online sessions work best when you can speak freely without being overheard."
          />
          <Callout title="Practical tips" tone="soft">
            <ul className="mt-3 space-y-2">
              <li>Use headphones to reduce background noise.</li>
              <li>Check your internet connection before the session.</li>
              <li>Close other apps and notifications for privacy.</li>
            </ul>
          </Callout>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Location safety"
            title="Let me know where you are."
            description="I will confirm your location at the start of each session for safety."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <li>Please share your physical location at the start of each session.</li>
              <li>If you move during the session, let me know.</li>
              <li>We will agree on a plan if the connection drops.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Crisis planning"
            title="Online counselling is not crisis care."
            description="If you are in immediate danger, please seek urgent support."
          />
          <Callout title="Crisis support" tone="soft">
            <p>{site.crisisLine}</p>
          </Callout>
        </Container>
      </section>
    </>
  );
}
