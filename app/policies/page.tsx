import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Policies"
};

const policyCards = [
  {
    title: "Privacy and confidentiality",
    description: "How information is collected, stored, and protected.",
    href: "/policies/privacy"
  },
  {
    title: "Cancellation and no-show",
    description: "Clear boundaries for changes and cancellations.",
    href: "/policies/cancellation"
  },
  {
    title: "Online counselling safety",
    description: "Tips for privacy, location safety, and crisis planning.",
    href: "/policies/online-safety"
  },
  {
    title: "Informed consent",
    description: "What to expect and how we agree on the work together.",
    href: "/policies/informed-consent"
  }
];

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        title="Policies and safety"
        intro="Clear, calm guidance on privacy, confidentiality, and how we work together."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: site.secondaryCta, href: "/contact" }}
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Policies hub"
            title="Everything you need in one place."
            description="These pages keep expectations clear and protect your wellbeing."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {policyCards.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                className="rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft"
              >
                <h3 className="font-heading text-2xl text-forest">{policy.title}</h3>
                <p className="mt-2 text-sm text-forest/75">{policy.description}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-forest">Read more</span>
              </Link>
            ))}
          </div>
          <Callout title="Crisis support" tone="soft">
            <p>{site.crisisLine}</p>
          </Callout>
        </Container>
      </section>
    </>
  );
}
