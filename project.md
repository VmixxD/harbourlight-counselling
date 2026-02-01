# PRD — Harbourlight Counselling Website (UPDATED)

Note: This PRD defines product scope, IA, compliance, and functional requirements. Brand voice, imagery, and visual system details live in:
- docs/brand/BRAND_GUIDE.md
- docs/brand/STYLEGUIDE.md

## 1) Product overview
**Product name:** Harbourlight Counselling (Vince Batters)  
**Type:** Individual counsellor website (lead-gen + online counselling intake)  
**Primary goal:** Convert visitors into **enquiries / consult bookings** with a clear, safe, values-aligned journey.  
**Secondary goals:**  
- Establish trust (warmth, credibility, clarity, safety).  
- Explain fit (who it’s for / not for).  
- Provide transparent policies (fees, privacy, cancellation, online safety).  
- Support NZ-wide online counselling.

## 2) Target audience
**Primary audience (NZ-wide):**
- Teens and adults navigating **identity/shame**, internalised stigma, self-criticism, belonging.
- Teens and adults wanting support with **relationships** (communication, attachment patterns, conflict, intimacy).
- Professionals experiencing **burnout** (corporate stress, restructuring impacts, perfectionism, people-pleasing, overwhelm).

**Additional but still visible support themes (common overlap with the primary three):**
- **Anxiety, stress & overwhelm** (often alongside burnout and shame).
- **Grief & loss** (bereavement, break-ups, estrangement, “life didn’t go to plan”).
- **Trauma & recovery** (stabilisation, safety, shame sensitivity, rebuilding trust in self/others).

**Secondary audience:**
- LGBTQ+ folks seeking affirming counselling (without excluding non-LGBTQ+ clients).
- Neurodivergent clients (affirming tone, clear structure, predictable process).

## 3) Brand and positioning
See `docs/brand/BRAND_GUIDE.md` for brand promise, tone, approach, and positioning cues. This PRD only references those requirements when they impact functional or content acceptance criteria.

## 4) Design direction
See `docs/brand/STYLEGUIDE.md` for the visual system, palette, typography, and UI conventions.

## 5) Information architecture

### Required pages
1. **Home**
2. **About Vince**
3. **Work With Me / Services** (hub page)
4. **Primary Service detail pages (3) — focal points**
   - Identity & Shame
   - Relationships
   - Burnout & Work Stress
5. **Fees**
6. **Book / Enquiry**
7. **FAQ**
8. **Policies hub**
   - Privacy & confidentiality (NZ)
   - Cancellation/no-show
   - Online counselling safety
   - Informed consent overview (not a form download unless you want)
9. **Contact**

### Required content placement (visibility requirement)
- Home + Services hub must include **two groups** of service tiles/cards:
  - **Primary focus areas (3)** — larger, first, most prominent (links to detail pages).
  - **Additional support areas (3)** — still visible (smaller cards or “Also support with…” section).  
    These can link to either:
    - anchors/sections on the Services hub (v1), or
    - optional future mini-pages (v1.1).

### Optional (nice-to-have)
- Resources (articles, reflections, links)
- Accessibility statement
- “For workplaces” (if you want EAP-style referrals later)

## 6) Core user journeys

### Journey A: “I’m anxious/shamey and unsure counselling is for me”
- Lands on Home → reads “this is for you if…” → sees low-pressure CTA → views FAQ (“What happens in the first session?”, “How many sessions?”) → books consult/enquiry.

### Journey B: “Burnt out professional, needs practical clarity”
- Lands on Burnout page → sees structured “How it works” + person-centred/pluralistic approach → fees/policies transparent → books.

### Journey C: “Relationship stress, wants to know your approach”
- Lands on Relationships page → reads approach + outcomes (non-guaranteed) → sees fit/not-fit → enquiry.

## 7) Functional requirements

### CTAs and conversion
- Primary CTA sitewide: **“Book a free 15-min consult”** *or* **“Send an enquiry”** (choose one primary; the other is secondary).
- Sticky header CTA on desktop; prominent on mobile.

### Booking
Provide **two implementation options**:
- **Option 1 (fast):** External booking tool embed/link (Calendly-style).
- **Option 2 (practice-grade):** Practice management system booking (if you use one).

**Session length requirement (non-negotiable):**
- All paid counselling sessions are **50 minutes** only (no 75-minute option in v1).

**Booking flow must capture:**
- name, email, phone (optional), preferred contact method
- brief “what brings you here?” (optional but helpful)
- optional “Which areas feel most relevant?” multi-select:  
  - Identity/Shame, Relationships, Burnout/Work Stress, Anxiety/Stress, Grief/Loss, Trauma/Recovery, Not sure yet
- confirmation of privacy notice + consent checkbox
- timezone handling (NZ default)

### Enquiry form
- Spam protection (honeypot + rate limiting; CAPTCHA only if needed).
- Auto-response email confirming receipt + “what happens next”.
- Clear crisis disclaimer (not an emergency service).

### Accessibility & responsiveness
- Mobile-first design
- Keyboard navigable
- WCAG 2.2 AA targets (contrast, focus states, alt text, semantic headings)

### Performance
- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+ (on main pages).

## 8) Content requirements (copy system)

### Global copy blocks (must exist)
- **One-line positioning statement:** who you help + what shifts.
- **Primary focus areas (3) tiles:** Identity/Shame, Relationships, Burnout/Work Stress.
- **Additional support areas (3) tiles/section:** Anxiety/Stress, Grief/Loss, Trauma/Recovery.
- **“This might be for you if…”** bullets (3–6 bullets).
- **“Not the right fit if…”** bullets (2–4 bullets) with warmth (e.g., needing crisis care / wanting diagnosis reports).
- **“How it works” (3 steps)** that reflects person-centred + pluralistic practice:
  1) Start where you are (relational safety + what matters to you)  
  2) Make sense of patterns together (your pace; your goals)  
  3) Choose what helps (talking + optional tools/structure if you want it)
- **“My approach” block (required):**
  - Person-centred foundation (empathy, authenticity, client-led pacing)
  - Pluralistic collaboration (“we decide together what’s helpful”)
  - Ongoing review (“we check in and adjust together”)
- **Session length:** “Sessions are 50 minutes.”
- **How many sessions? (required copy block):**
  - Offer a realistic, non-promissory frame e.g. “Some people come for a few sessions, others longer-term. We’ll check in regularly and reassess together.”
  - Include an example review point (e.g., “we review after 4–6 sessions”) but keep it flexible and collaborative.
- **Fees transparency** (and what to do if cost is a barrier).
- **Confidentiality + limits** (plain language).
- **Online counselling safety basics** (privacy, location, crisis planning).
- **NZ professional context**: a short statement clarifying scope and complaint pathways.

### Service page template (repeatable) — for the 3 focal pages
Each of the 3 primary service pages must include:
- Hero: short empathetic hook + outcome direction (no guarantees)
- “Common signs this shows up as…”
- “What we’ll focus on…”
- **How I work (required):** person-centred foundation + pluralistic options (clearly framed as optional)
- **What you can expect (required):**
  - first session overview
  - sessions are 50 minutes
  - collaboration + review
- Fit / not-fit
- CTA block
- Short FAQ relevant to that theme (include “How many sessions?” on at least one key page, ideally FAQ page globally)

### Additional support areas content (required on Home + Services hub)
For Anxiety/Stress, Grief/Loss, Trauma/Recovery include a short visible section:
- 2–3 sentences each: what it can look like + reassurance + invite to enquire  
- Optional: link to relevant focal page(s) or a “Not sure where to start?” section.

### About page must include
- Your values and approach (warm + grounded)
- **Person-centred + pluralistic explanation** (in plain language; avoid jargon)
- Corporate background relevance (burnout/work stress)
- A gentle personal note about your why (identity/shame) without oversharing
- Qualifications/status (fillable fields)
- Supervision + ongoing learning statement (general)
- Clear boundaries: what you do / don’t provide (e.g., not an emergency service)

## 9) NZ ethics, legal, and safety requirements
*(Build as clear website copy, not legalese. Keep it calm.)*

### Must include (with correct links)
- **NZAC Code of Ethics**: All counselling meets my obligations in the NZAC Code of Ethics:  
  - https://nzac.org.nz/site/about-us/code-of-ethics
- **HDC Code of Rights (Consumers’ Rights)**: Clients’ rights and provider obligations (complaints pathway reference):  
  - https://www.hdc.org.nz/your-rights/about-the-code/code-of-health-and-disability-services-consumers-rights/
- **Privacy compliance:** align to **Privacy Act 2020** + **Health Information Privacy Code 2020** principles.  
  - Privacy Act 2020 (NZ Legislation): https://www.legislation.govt.nz/act/public/2020/0031/latest/whole.html  
  - Health Information Privacy Code 2020 (Privacy Commissioner): https://www.privacy.org.nz/privacy-principles/codes-of-practice/hipc2020/

### Must include (content)
- **Confidentiality + limits:** harm to self/others, abuse, court order—explained simply.
- **Complaints pathway:** include a section that references the HDC Code of Rights and how clients can raise concerns (start with you, then external pathways).
- **Scope clarity:** counsellor scope (not psychology/psychiatry), no diagnosis unless qualified and explicitly within scope.
- **Crisis disclaimer:** not suitable for urgent crisis; provide NZ crisis contacts (include 111 + 1737 and local supports).
- **Advertising integrity:** avoid guarantees, avoid “cure”, avoid inflated claims.

### Data/security (non-negotiable)
- HTTPS, secure hosting, routine updates
- Form submissions encrypted in transit
- Limit data fields to what’s necessary
- If storing enquiries: encrypted storage + restricted access
- Clear retention statement (e.g., “I keep enquiry info for X months if we don’t begin counselling” — make X configurable)

## 10) UI components (build a reusable library)
- **Header:** logo wordmark + nav + primary CTA button
- **Hero:** warm headline, short subheadline, 1–2 CTAs, supportive microcopy
- **Primary focus service cards (3):** larger, first, prominent, link to detail pages
- **Additional support cards/section (3):** still visible, calmer styling, link to hub anchors or future mini-pages
- **“This might be for you if…” section:** bullet list + subtle highlight panel
- **Process steps:** 3-step horizontal on desktop / vertical on mobile
- **Trust + safety strip:** confidentiality, online NZ-wide, inclusive practice, supervision (non-specific)
- **FAQ accordion:** accessible accordion with keyboard controls
- **CTA band:** soft green background band with CTA + reassurance line
- **Footer:** quick links, contact, social (optional), privacy/policies, copyright, professional status placeholders

## 11) Technical requirements

### Recommended stack (agent-friendly)
- Next.js (or similar), Tailwind, TypeScript
- Headless CMS optional (e.g., Sanity/Contentful) OR simple Markdown content system
- Forms via secure handler (serverless function) + email delivery provider

### Integrations (optional)
- Analytics: privacy-conscious (Plausible or GA with consent)
- Email: secure transactional email (for form confirmations)
- Booking: external embed/link

### SEO
- Page titles + meta descriptions written per page
- OpenGraph/Twitter cards
- Local SEO basics: NZ-wide online
- Schema.org: LocalBusiness/ProfessionalService where appropriate

## 12) Non-goals (out of scope for v1)
- Client portal
- Payments/subscriptions on-site
- Testimonials using identifiable client info (avoid)
- Blog with heavy publishing workflow (can add later)

## 13) Acceptance criteria (definition of done)
- All required pages delivered, responsive, accessible
- Primary CTA present on every key page
- Booking/enquiry flow works end-to-end + confirmation email
- Policies pages present (privacy, cancellation, online safety)
- Lighthouse targets met on Home + a service page
- Basic SEO metadata complete
- Clear scope + crisis + complaints info included
- Content matches tone: human, warm, non-jargony, non-promissory
- Primary (3) and additional (3) themes are both visible on Home + Services hub
- Sessions displayed consistently as **50 minutes** only
- Copy includes a collaborative explanation of **how many sessions** (flexible, reviewed together)

## 14) Agent handoff tasks

### Agent A — UX/Visual Designer
- Create style guide (palette, typography, spacing, components)
- Produce page wireframes + a high-fidelity Home + Service template
- Ensure calm, nature-forward look
- Implement two-tier services display (Primary 3 + Additional 3)

### Agent B — Copywriter (NZ counselling tone)
- Draft all page copy using the templates above
- Ensure scope clarity + inclusive language + no guarantees
- Write FAQs and policies in plain language
- Ensure approach is consistently person-centred + pluralistic
- Ensure “sessions are 50 minutes” and “how many sessions” copy is included

### Agent C — Web Developer
- Implement Next.js site + components library
- Hook up booking + enquiry forms + email confirmation
- Ensure booking only offers 50-minute sessions
- Performance + accessibility compliance

### Agent D — Compliance pass
- Review privacy/confidentiality/complaints/scope content against NZ expectations (HDC Code of Rights, Privacy Act, HIPC)
- Ensure crisis copy and limits of confidentiality are present and clear
- Confirm correct placement of NZAC/HDC/Privacy links

## 15) Quick “fill-in fields” list (so agents don’t guess)
- Credentials/qualifications (as you want displayed)
- Professional membership/status wording (NZAC pathway etc.)
- **Session length: 50 minutes only**
- Fees (standard + any sliding scale approach)
- Cancellation window (e.g., 24 or 48 hours)
- Service area wording (Online across NZ)
- Preferred contact method + response time (e.g., “within 2 business days”)
- Booking tool choice (embed vs link)
- Whether to add optional mini-pages for the additional support areas (v1.1)

