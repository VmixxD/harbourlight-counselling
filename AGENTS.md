# AGENTS.md — Harbourlight Counselling Website

This file captures the current agent-facing requirements based on the latest `project.md`.
Use it as the single source of truth for cross‑agent coordination and handoffs.

## Changelog
- 2026-02-07: Added model-ready prompt pack and production image regeneration checklist.
- 2026-02-06: Updated imagery direction to earthy NZ textured illustrations with relational, supportive cues.
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
- Service area wording (online NZ-wide)
- Preferred contact method + response time
- Booking tool choice (embed vs link)

## Image prompt library (AI-assisted visuals)
Use earthy, textured editorial illustrations inspired by Aotearoa New Zealand landscapes. Favor
matte watercolor/gouache washes, subtle paper grain, soft contour detail, low saturation, and calm
compositions. People are optional and should be distant/faceless if used.

Execution files:
- `docs/brand/IMAGE_PROMPTS.md` (canonical subjects + style rules)
- `docs/brand/IMAGE_PROMPT_PACK.md` (model-ready prompt variants + rescue lines)
- `docs/brand/IMAGE_REGEN_CHECKLIST.md` (production replacement + QA workflow)

- Home hero (main image): "Quiet coastal harbour in Aotearoa at first light, soft mist over still water, distant hills, and a calm open sky."
- Home hero alternate: "Native NZ bush trail after light rain, fern-lined edges, filtered sunlight through canopy, and a gentle sense of forward movement."
- About page (secondary image): "Layered organic shapes inspired by harbour contours and fern forms, softly overlapping to suggest steadiness, care, and connection."
- Services hub banner: "Triptych composition blending harbour-water texture, fern canopy forms, and sun-warmed sand tones into one cohesive panoramic scene."
- Service hero (Identity & Shame): "An unfurling ponga fern koru in soft morning light, conveying self-acceptance and growth at a human pace."
- Service hero (Relationships): "Two weathered stones resting side by side at a tidal edge with gentle ripples, balanced and connected."
- Service hero (Burnout & Work Stress): "Quiet forest clearing with filtered sunlight, a resting place, and a soft path leading onward to suggest recovery and steadier rhythm."
- Fees page background: "Minimal horizon scene where land and water meet in soft focus, with a calm tonal transition from warm cream into sage."
- FAQ header: "Close view of still harbour-water ripples expanding outward, meditative and simple in muted sage and cream tones."
- Policies hub banner: "Structured but soft layered forms inspired by shoreline contours and paper-cut shapes, communicating clarity and containment."
- Online safety header: "Quiet home desk by a window with a closed laptop, notebook, and cup of tea in soft natural light, uncluttered and calm."
- Privacy header: "Leaf-inspired forms interwoven into a subtle lock motif over natural paper texture, signaling privacy, care, and protection."
- Cancellation header: "Simple paper calendar and pencil on a warm neutral surface with gentle shadow, clear and calm rather than strict."
- Informed consent header: "Open notebook with blank pages on a natural desk, soft side light, and a feeling of clarity, collaboration, and unhurried pace."
- Contact/Book side image: "Wide harbour horizon with low mist and soft gradient sky, evoking steadiness, welcome, and room to begin."
