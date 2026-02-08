# BRAND_GUIDE - Harbourlight Counselling

Last updated: 2026-02-07
Owner: Product + Design

This guide is written for humans and AI agents. It defines the brand foundations, tone, and visual direction.
Do not invent missing information. If a field is listed as a placeholder, confirm with the owner.
Scope note: Product scope, IA, compliance, and functional requirements live in `project.md`.

## Brand summary
- Purpose: A steady, warm, grounded space to reconnect with self and others.
- Positioning: Person-centred, pluralistic, trauma-informed, inclusive counselling with a nature-forward calm.
- Audience: Teens and adults across NZ, with primary focus areas: identity/shame, relationships, burnout/work stress.
- Promise style: No guarantees. No clinical claims. Warm, clear, collaborative language.

## Brand voice and tone
Primary tone: human, calm, plain-language, non-clinical, non-promissory.

Voice principles:
- Speak like a steady, respectful human. Avoid therapy jargon and marketing hype.
- Be specific about what is offered and what is not offered.
- Be gentle and inclusive. Avoid assumptions about identity, culture, or relationship structure.

Do:
- Use short sentences and clear headings.
- Acknowledge uncertainty and choice.
- Use everyday language ("talk", "work through", "make sense of").

Do not:
- Promise outcomes or cures.
- Use clinical labels without consent or qualification.
- Use high-pressure sales language.

## Messaging guardrails
- Always include a non-emergency disclaimer where relevant.
- State confidentiality and its limits in plain language.
- Reference NZ compliance obligations (Privacy Act 2020, HIPC 2020, HDC Code of Rights, NZAC Code of Ethics).
- Do not use testimonials with identifiable client information.

## Visual principles
- Calm, grounded, nature-forward.
- Vintage watercolor illustration style with soft contour detail and warm paper texture.
- Natural NZ environments with subtle relational cues (connection, support, steadiness) without identifiable client faces.
- Warm neutrals with muted greens; low visual noise and low saturation.
- Generous whitespace, rounded corners, soft shadows.

## CTA hierarchy and labels
- Use a single filled primary CTA per group; secondary CTAs should be outline/ghost.
- Avoid two filled buttons side by side.
- Eyebrow labels use moderate tracking (tracking-[0.18em]) with `text-forest/70` for readability.

## Logo and wordmark
- Current state: wordmark only. No standalone logo mark is defined.
- Do not create a new logo mark or lockup without approval.
- Use the wordmark consistently in the header and footer.

## Imagery and photography
Primary image themes:
- Natural New Zealand motifs (harbour water, bush, ferns, mist, tidal edges, soft horizon lines).
- Matte watercolor/gouache scenes with textured paper grain, gentle wash transitions, and calm composition.
- Gentle relational symbolism (paired forms, pathways, shared spaces) that feels supportive and human.

Headshots:
- Use authentic photography of Vince with soft, natural light.
- Avoid staged office or handshake imagery.

Do:
- Favor soft watercolor wash transitions, muted color, and calm atmosphere.
- Leave open negative space for text overlays.
- Keep tonal transitions soft, misty, and detail intentionally sparse.
- If people are shown, keep them distant or faceless and non-identifiable.

Do not:
- Use busy, high-contrast, or high-saturation scenes.
- Use photorealistic, 3D-rendered, CGI, or heavily cinematic effects.
- Use hard black line art, vector-like edges, or thick comic outlines.
- Use stock imagery that feels clinical or corporate.
- Use close-up emotional faces, posed therapy scenes, or recognisable client depictions.

## Iconography
Icon style must match the current site icons in `components/Icons.tsx`.

Specs:
- Canvas: 24x24
- Stroke: 1.6, rounded line joins/caps
- Fill: none
- Corners: soft, organic curves
- Color: `forest` (primary), or `forest/70` for secondary use

Do:
- Keep icons simple and symbolic (leaf, link, flame, shield).
- Ensure icons read clearly at 16-24px.

Do not:
- Use filled icons or heavy strokes.
- Use sharp angles or geometric tech styling.

## Abstract overlays and graphic shapes
- Prefer abstract treatments derived from watercolor washes and natural contour studies.
- Keep detail minimal and breathable.
- Use overlays as secondary support, not the primary image style.
- Avoid neon accents, harsh digital gradients, rigid geometry, and glossy effects.

## Image prompt creator
Use the image prompt system files together:
- `docs/brand/IMAGE_PROMPTS.md` for canonical subjects and style intent.
- `docs/brand/IMAGE_PROMPT_PACK.md` for model-ready primary/fallback prompts and rescue lines.
- `docs/brand/IMAGE_REGEN_CHECKLIST.md` for production replacement workflow and QA.

## Accessibility and inclusion
- Prioritise contrast, readable type sizes, and clear focus states.
- Use inclusive language (no assumptions about gender, identity, or relationship structure).
- Ensure imagery does not exclude or stereotype.

## Required content blocks
Ensure all core content blocks are present per `AGENTS.md`:
- Positioning line, fit/not-fit, how it works, confidentiality, online safety, NZ context, fees transparency.

## Brand governance
- Primary CTA is a single choice sitewide. Do not invent it; confirm with the owner.
- Any new visual style change should update `docs/brand/STYLEGUIDE.md` and `docs/brand/IMAGE_PROMPTS.md`.

## Fill-in fields (do not guess)
- Credentials/qualifications
- Professional membership/status wording
- Fees and sliding scale policy
- Cancellation window
- Service area wording (NZ-wide online)
- Response time and preferred contact method
- Primary CTA selection
