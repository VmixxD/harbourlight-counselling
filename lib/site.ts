export const site = {
  name: "Harbourlight Counselling",
  practitioner: "Vince Batters",
  tagline:
    "Counselling for identity, relationships, and burnout. A grounded space to reconnect with yourself and others.",
  description:
    "Harbourlight Counselling offers warm, practical counselling for adults across Aotearoa New Zealand, with a focus on identity, relationships, and burnout.",
  location: "Auckland, New Zealand",
  serviceArea: "Online across New Zealand. In-person Auckland by arrangement.",
  email: "hello@harbourlightcounselling.co.nz",
  phone: "",
  responseTime: "within 2 business days",
  primaryCta: "Book a free 15-min consult",
  secondaryCta: "Send an enquiry",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/your-link",
  sessionLength: "50 minutes (option for 75 minutes)",
  fees: "NZD [add fee] per 50-minute session",
  slidingScale:
    "Limited sliding scale spots are available. If cost is a barrier, reach out and we will explore options.",
  cancellationWindow: "24 hours",
  enquiryRetention: "6 months",
  crisisLine:
    "If you or someone else is in immediate danger, call 111. For free 24/7 support in NZ, call or text 1737."
};

export const schemaConfig = {
  type: "ProfessionalService",
  areaServed: "New Zealand",
  addressLocality: "Auckland",
  addressCountry: "NZ"
};
