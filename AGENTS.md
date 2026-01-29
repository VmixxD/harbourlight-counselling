# AGENTS.md — Harbourlight Counselling Website

This file captures the current agent-facing requirements based on the latest `project.md`.
Use it as the single source of truth for cross‑agent coordination and handoffs.

## Changelog
- 2026-01-29: Initial agent brief created from `project.md`.

## Global requirements (all agents)
- Tone: human, calm, plain-language, non-clinical, non-promissory.
- Primary CTA sitewide: pick one primary CTA ("Book a free 15-min consult" or "Send an enquiry"); the other is secondary.
- Accessibility: WCAG 2.2 AA targets, keyboard navigable, clear focus states, semantic headings.
- Performance: Lighthouse targets — Perf 90+, A11y 95+, Best Practices 95+, SEO 90+ (Home + at least one service page).
- NZ compliance content must be present and clear (Privacy Act 2020, HIPC 2020, HDC Code of Rights, NZAC Code of Ethics, crisis contacts).
- Avoid guarantees/cures/testimonials with identifiable client info.

## Required pages
1) Home
2) About Vince
3) Work With Me / Services (hub)
4) Service detail pages: Identity & Shame, Relationships, Burnout & Work Stress
5) Fees
6) Book / Enquiry
7) FAQ
8) Policies hub + subpages:
   - Privacy & confidentiality (NZ)
   - Cancellation / no-show
   - Online counselling safety
   - Informed consent overview
9) Contact

Optional (nice-to-have): Resources, Accessibility statement, For workplaces

## Shared content blocks (must exist)
- One-line positioning statement (who you help + what shifts)
- "This might be for you if…" bullets (3–6)
- "Not the right fit if…" bullets (2–4, warm)
- "How it works" (3 steps)
- Fees transparency + cost barrier note
- Confidentiality + limits (plain language)
- Online counselling safety basics
- NZ professional context + complaints pathway

## Service page template (repeatable)
Each service page must include:
- Hero with empathetic hook + outcome direction (no guarantees)
- "Common signs this shows up as…"
- "What we’ll focus on…"
- "How I work"
- "What you can expect"
- Fit / not‑fit
- CTA block
- Short, theme‑specific FAQ

## Booking/enquiry requirements
- Booking: provide 2 implementation options (external booking link/embed OR practice system).
- Form fields: name, email, phone (optional), preferred contact method, "what brings you here?" (optional).
- Consent: privacy notice + consent checkbox.
- Timezone handling (NZ default).
- Spam protection: honeypot + rate limiting; CAPTCHA only if needed.
- Auto-response email with "what happens next".
- Crisis disclaimer present (not emergency service) with NZ contacts (111, 1737).

## Agent roles and tasks

### Agent A — UX/Visual Designer
- Create a style guide (palette, typography, spacing, components).
- Produce wireframes and a high‑fidelity Home + Service template.
- Deliver a calm, nature‑forward visual system (greens + warm neutrals).

### Agent B — Copywriter (NZ counselling tone)
- Draft all page copy using templates above.
- Ensure scope clarity, inclusive language, and no guarantees.
- Write FAQs and policies in plain language.

### Agent C — Web Developer
- Implement the Next.js site with reusable components.
- Wire booking + enquiry forms + confirmation email.
- Meet performance and accessibility targets.

### Agent D — Compliance pass
- Verify privacy/confidentiality/complaints/scope content aligns with NZ expectations.
- Ensure crisis copy and limits of confidentiality are clear and present.

## Fill‑in fields (do not guess)
- Credentials/qualifications
- Professional membership/status wording
- Session length options
- Fees (standard + any sliding scale)
- Cancellation window
- Service area wording (online NZ-wide; in-person Auckland optional)
- Preferred contact method + response time
- Booking tool choice (embed vs link)
