# PRD — Harbourlight Counselling Website

Note: When updating this PRD, also update AGENTS.md so agent briefs stay in sync.

## 1) Product overview
**Product name:** Harbourlight Counselling (Vince Batters)  
**Type:** Individual counsellor website (lead-gen + online counselling intake)  
**Primary goal:** Convert visitors into **enquiries / consult bookings** with a clear, safe, values-aligned journey.  
**Secondary goals:**  
- Establish trust (warmth, credibility, clarity, safety).  
- Explain fit (who it’s for / not for).  
- Provide transparent policies (fees, privacy, cancellation, online safety).  
- Support NZ-wide online counselling (and optional in-person Auckland later).

## 2) Target audience
**Primary audience (NZ-wide):**
- Adults (18+) navigating **identity/shame**, internalised stigma, self-criticism, belonging.
- Adults wanting support with **relationships** (communication, attachment patterns, conflict, intimacy).
- Professionals experiencing **burnout** (corporate stress, restructuring impacts, perfectionism, people-pleasing, overwhelm).

**Secondary audience:**
- LGBTQ+ folks seeking affirming counselling (without excluding non-LGBTQ+ clients).
- Neurodivergent clients (affirming tone, clear structure, predictable process).

## 3) Brand and positioning
**Brand promise (conceptual):** A steady, warm, grounded space to reconnect with self and others.  
**Tone:** Human, plain-language, calm, confident, non-clinical.  

**Positioning cues to weave through site:**
- LGBTQ+ affirming, trauma-informed, neurodiversity-affirming, anti-oppressive.
- Te Tiriti-aligned values (manaakitanga, relational safety, respect, choice).
- Corporate background is an advantage for burnout/work stress clients.

## 4) Design direction
**Reference style:** Ikigai Integrative vibe (clean, bold, friendly, modern).  
**Your palette:** Nature greens + warm neutrals.

### Visual system (guidelines)
- Backgrounds: off-white / warm cream; sections with subtle green tint.
- Accent greens: deep forest + softer sage (used sparingly).
- Typography: modern sans-serif, highly readable; generous line-height.
- Layout: lots of whitespace, strong hierarchy, scannable sections, short blocks.
- Shape language: rounded corners (cards/buttons), soft shadows, calm animations.
- Imagery: authentic headshot(s) + nature textures (harbour, bush, soft light). Avoid overly stocky “therapy office handshake” visuals.

## 5) Information architecture

### Required pages
1. **Home**
2. **About Vince**
3. **Work With Me / Services** (hub page)
4. **Service detail pages (3)**
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

### Optional (nice-to-have)
- Resources (articles, reflections, links)
- Accessibility statement
- “For workplaces” (if you want EAP-style referrals later)

## 6) Core user journeys

### Journey A: “I’m anxious/shamey and unsure counselling is for me”
- Lands on Home → reads “this is for you if…” → sees low-pressure CTA → views FAQ → books consult/enquiry.

### Journey B: “Burnt out professional, needs practical clarity”
- Lands on Burnout page → sees structured “How it works” → fees/policies transparent → books.

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

**Requirement:** booking flow must capture:
- name, email, phone (optional), preferred contact method
- brief “what brings you here?” (optional but helpful)
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
- **“This might be for you if…”** bullets (3–6 bullets).
- **“Not the right fit if…”** bullets (2–4 bullets) with warmth (e.g., needing crisis care / wanting diagnosis reports).
- **“How it works”** (3 steps).
- **Fees transparency** (and what to do if cost is a barrier).
- **Confidentiality + limits** (plain language).
- **Online counselling safety basics** (privacy, location, crisis planning).
- **NZ professional context**: a short statement clarifying scope and complaint pathways.

### Service page template (repeatable)
Each of the 3 service pages must include:
- Hero: short empathetic hook + outcome direction (no guarantees)
- “Common signs this shows up as…”
- “What we’ll focus on…”
- “How I work” (relational + structured options)
- “What you can expect” (first sessions)
- Fit / not-fit
- CTA block
- Short FAQ relevant to that theme

### About page must include
- Your values and approach (warm + grounded)
- Corporate background relevance (burnout/work stress)
- A gentle personal note about your why (identity/shame) without oversharing
- Qualifications/status (fillable fields)
- Supervision + ongoing learning statement (general)
- Clear boundaries: what you do / don’t provide (e.g., not an emergency service)

## 9) NZ ethics, legal, and safety requirements
*(Build as clear website copy, not legalese. Keep it calm.)*

### Must include
- **NZAC Code of Ethics** All counselling meets my obligations in the NZAC Code
- **Privacy compliance:** align to **Privacy Act 2020** + **Health Information Privacy Code 2020** principles (collect minimal info, purpose, storage, access/correction, retention/disposal).
- **Confidentiality + limits:** harm to self/others, abuse, court order—explained simply.
- **Complaints pathway:** include a page section that references **HDC Code of Rights** and how clients can raise concerns (start with you, then external pathways).
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
- **Service cards:** 3 cards with icons/illustrations (simple line icons), short blurbs
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
- Local SEO basics: Auckland mention + NZ-wide online
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

## 14) Agent handoff tasks

### Agent A — UX/Visual Designer
- Create style guide (palette, typography, spacing, components)
- Produce page wireframes + a high-fidelity Home + Service template
- Ensure calm, nature-forward look

### Agent B — Copywriter (NZ counselling tone)
- Draft all page copy using the templates above
- Ensure scope clarity + inclusive language + no guarantees
- Write FAQs and policies in plain language

### Agent C — Web Developer
- Implement Next.js site + components library
- Hook up booking + enquiry forms + email confirmation
- Performance + accessibility compliance

### Agent D — Compliance pass
- Review privacy/confidentiality/complaints/scope content against NZ expectations (HDC Code of Rights, Privacy Act, HIPC)
- Ensure crisis copy and limits of confidentiality are present and clear

## 15) Quick “fill-in fields” list (so agents don’t guess)
- Credentials/qualifications (as you want displayed)
- Professional membership/status wording (NZAC pathway etc.)
- Session length options (e.g., 50 mins / 75 mins)
- Fees (standard + any sliding scale approach)
- Cancellation window (e.g., 24 or 48 hours)
- Service area wording (Online across NZ; in-person Auckland optional)
- Preferred contact method + response time (e.g., “within 2 business days”)
- Booking tool choice (embed vs link)
