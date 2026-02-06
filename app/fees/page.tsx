import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Fees"
};

export default function FeesPage() {
  return (
    <>
      <PageHeader
        title="Fees"
        intro="Clear, upfront information so you can make an informed choice."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: site.secondaryCta, href: "/contact" }}
      />

      <section className="section-space">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Session options"
              title="Session length and pricing"
              description="Payment details can be confirmed during your consult."
            />
            <div className="space-y-4">
              <div className="rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
                <p className="font-semibold text-forest">Standard session</p>
                <ul className="bullet-list mt-3">
                  <li>{site.sessionLength}</li>
                  <li>{site.fees}</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sage/50 bg-white/80 p-6 text-sm text-forest/75 shadow-soft">
                <p className="font-semibold text-forest">Payment</p>
                <p className="mt-2">Payment details will be provided when we confirm your booking.</p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift">
            <img
              src="/images/hlc-fees-gradient-wash.png"
              alt="Soft gradient wash in warm cream and sage"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="If cost is a barrier"
            title="We can talk about options."
            description="Counselling should be accessible. If cost is difficult, please reach out."
          />
          <Callout title="Sliding scale" tone="soft">
            <p>{site.slidingScale}</p>
          </Callout>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Cancellation"
            title="Respecting your time and mine."
            description="Clear cancellation boundaries help the work stay steady."
          />
          <Callout title="Cancellation window" tone="soft">
            <p>Please provide at least {site.cancellationWindow} notice for changes or cancellations.</p>
          </Callout>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="space-y-4">
          <SectionHeading
            eyebrow="Next steps"
            title="Ready to book?"
            description="A brief consult helps you ask questions and check fit."
          />
          <Button href="/book">{site.primaryCta}</Button>
        </Container>
      </section>
    </>
  );
}
