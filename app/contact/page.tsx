import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro={`Reach out in the way that feels easiest. ${site.primaryCta} or ${site.secondaryCta.toLowerCase()}. I will respond within the stated timeframe.`}
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />
      <section className="section-space">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Get in touch"
              title="A calm, low-pressure start."
              description="You are welcome to ask questions or share what you are hoping for."
            />
            <div className="space-y-4 text-sm text-forest/75">
              <Callout title="Contact details" tone="soft">
                <p>Email: {site.email}</p>
                <p>Location: {site.location}</p>
                <p>Service area: {site.serviceArea}</p>
                <p>Response time: {site.responseTime}</p>
              </Callout>
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

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Enquiry form"
            title="Send an enquiry"
            description="Share as much or as little as you feel comfortable with."
          />
          <EnquiryForm />
        </Container>
      </section>
    </>
  );
}
