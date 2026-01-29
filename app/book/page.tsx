import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Book"
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        title="Book or send an enquiry"
        intro={`Choose the option that feels easiest. ${site.primaryCta} is a gentle first step.`}
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "View fees", href: "/fees" }}
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Booking options"
            title="Two ways to get started."
            description="Use a booking link or send an enquiry form. NZ time is the default."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-forest/60">Option 1</p>
              <h3 className="mt-3 font-heading text-2xl text-forest">Booking link</h3>
              <p className="mt-2 text-sm text-forest/75">
                Use the booking link to choose a time that works for you. NZ time is the default.
              </p>
              <div className="mt-4">
                <Button href={site.bookingUrl}>Open booking link</Button>
              </div>
            </div>
            <div className="rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-forest/60">Option 2</p>
              <h3 className="mt-3 font-heading text-2xl text-forest">Practice system</h3>
              <p className="mt-2 text-sm text-forest/75">
                If you use a practice management system, embed or link it here.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="secondary">
                  Ask about availability
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Send an enquiry"
            title="Prefer email?"
            description="Share a brief note and I will be in touch within the stated response time."
          />
          <EnquiryForm />
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="What happens next"
              title="A simple, supportive process."
              description="You remain in control of the pace and the decision to proceed."
            />
            <div className="space-y-4 text-sm text-forest/75">
              <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
                <li>You will receive an email confirming your enquiry.</li>
                <li>We schedule a short consult or discuss next steps by email.</li>
                <li>If we are not a fit, I can help you consider other options.</li>
              </ul>
              <Callout title="Crisis support" tone="soft">
                <p>{site.crisisLine}</p>
              </Callout>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift">
            <img
              src="/images/hlc-contact-harbour-horizon.png"
              alt="Harbour horizon line with soft fog"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
