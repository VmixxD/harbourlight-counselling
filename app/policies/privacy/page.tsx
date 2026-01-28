import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy and confidentiality"
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy and confidentiality"
        intro="Your information is treated with care and only collected for counselling purposes."
        primaryCta={{ label: site.primaryCta, href: "/book" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Privacy"
            title="Aligned with NZ privacy standards."
            description="I follow the Privacy Act 2020 and Health Information Privacy Code 2020 principles."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Callout title="Information collected" tone="soft">
              <ul className="mt-3 space-y-2">
                <li>Basic contact details (name, email, phone if provided).</li>
                <li>Brief notes about your enquiry and session focus.</li>
                <li>Billing and appointment records as required.</li>
              </ul>
            </Callout>
            <Callout title="How information is used" tone="soft">
              <ul className="mt-3 space-y-2">
                <li>To provide counselling services and follow up on enquiries.</li>
                <li>To maintain ethical and professional records.</li>
                <li>To meet legal obligations where required.</li>
              </ul>
            </Callout>
          </div>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Storage and access"
            title="Secure handling and clear retention."
            description="Information is stored securely and only accessed when needed."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <ul className="space-y-2 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft">
              <li>Only necessary information is collected.</li>
              <li>Form submissions are encrypted in transit (HTTPS).</li>
              <li>Data is stored securely with restricted access.</li>
              <li>Hosting and software are kept up to date.</li>
              <li>You can request access or correction of your information.</li>
              <li>Enquiry information is kept for {site.enquiryRetention} if counselling does not begin.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Confidentiality"
            title="Confidential, with clear limits."
            description="Confidentiality is central to counselling, with a few legal and ethical exceptions."
          />
          <Callout title="Limits to confidentiality" tone="soft">
            <ul className="mt-3 space-y-2">
              <li>Risk of serious harm to you or someone else.</li>
              <li>Concerns about abuse or neglect of a child or vulnerable person.</li>
              <li>A legal requirement such as a court order.</li>
            </ul>
          </Callout>
        </Container>
      </section>

      <section className="section-space bg-mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Concerns and complaints"
            title="You have rights and options."
            description="I align with the HDC Code of Rights and NZAC Code of Ethics."
          />
          <div className="space-y-4 text-sm text-forest/75">
            <p>
              If something does not feel right, I encourage you to raise it with me first so we can
              work through it together. If you prefer external support, you can contact the Health
              and Disability Commissioner (HDC) or the NZ Association of Counsellors (NZAC).
            </p>
            <Callout title="Scope clarity" tone="soft">
              <p>
                I work within a counselling scope and do not provide medical or diagnostic services.
              </p>
            </Callout>
          </div>
        </Container>
      </section>
    </>
  );
}
