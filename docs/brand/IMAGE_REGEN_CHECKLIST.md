# IMAGE_REGEN_CHECKLIST - Harbourlight Counselling

Last updated: 2026-02-07
Owner: Product + Design

Purpose: Provide a practical production checklist for regenerating, validating, and replacing the
current AI-assisted imagery set.

## Scope
- In scope: all AI-assisted illustration assets used by site pages.
- Out of scope: `public/images/vince-batters.png` (real headshot), `public/images/harbourlight.png` (wordmark).

## Source files to use
- Style and subject source: `docs/brand/IMAGE_PROMPTS.md`
- Model-ready prompt pack: `docs/brand/IMAGE_PROMPT_PACK.md`
- Brand guardrails: `docs/brand/BRAND_GUIDE.md`, `docs/brand/STYLEGUIDE.md`

## Preflight
- [ ] Confirm this visual direction is approved: earthy, textured NZ editorial illustration.
- [ ] Confirm no change to filenames (drop-in replacements only).
- [ ] Confirm ratio targets before generating.
- [ ] Create a temporary working folder for candidate exports.
- [ ] Keep at least one backup of current production images.

## Generation batch checklist

| Done | Asset | Ratio target | Usage |
| --- | --- | --- | --- |
| [ ] | `public/images/hlc-home-hero-harbour-dawn.png` | 3:4 portrait | `app/page.tsx` |
| [ ] | `public/images/hlc-home-hero-bush-trail.png` | 3:4 portrait | `app/page.tsx` |
| [ ] | `public/images/hlc-about-abstract-shapes.png` | 1:1 square | `app/about/page.tsx` |
| [ ] | `public/images/hlc-services-textures-triptych.png` | 4:1 to 5:1 panorama | `app/services/page.tsx` |
| [ ] | `public/images/hlc-service-identity-fern.png` | 3:4 portrait | `app/services/[slug]/page.tsx` |
| [ ] | `public/images/hlc-service-relationships-stones.png` | 3:4 portrait | `app/services/[slug]/page.tsx` |
| [ ] | `public/images/hlc-service-burnout-clearing.png` | 3:4 portrait | `app/services/[slug]/page.tsx` |
| [ ] | `public/images/hlc-fees-gradient-wash.png` | 3:4 portrait | `app/fees/page.tsx` |
| [ ] | `public/images/hlc-faq-water-ripples.png` | 4:1 to 5:1 panorama | `app/faq/page.tsx` |
| [ ] | `public/images/hlc-policies-geometric-layers.png` | 4:1 to 5:1 panorama | `app/policies/page.tsx` |
| [ ] | `public/images/hlc-policy-privacy-leaf-lock.png` | 3:4 portrait | `app/policies/privacy/page.tsx` |
| [ ] | `public/images/hlc-policy-online-safety-desk.png` | 3:4 portrait | `app/policies/online-safety/page.tsx` |
| [ ] | `public/images/hlc-policy-cancellation-calendar.png` | 3:4 portrait | `app/policies/cancellation/page.tsx` |
| [ ] | `public/images/hlc-policy-consent-notebook.png` | 3:4 portrait | `app/policies/informed-consent/page.tsx` |
| [ ] | `public/images/hlc-contact-harbour-horizon.png` | 3:4 portrait | `app/contact/page.tsx`, `app/book/page.tsx` |

## Per-asset generation flow
1. Copy the asset prompt from `docs/brand/IMAGE_PROMPT_PACK.md`.
2. Generate 3-4 variants with the same prompt before adjusting.
3. If needed, apply one rescue line and rerun.
4. Select best candidate using QA criteria below.
5. Export at target ratio and replace the existing filename.

## QA criteria (must pass)
- [ ] Visual style matches earthy watercolor/gouache direction.
- [ ] Low saturation and soft contrast (no neon, no hard black outlines).
- [ ] Calm mood and non-clinical tone.
- [ ] No recognisable faces, no logos, no text artifacts.
- [ ] Enough negative space for text overlays where headers/heroes need it.
- [ ] Subject reads clearly at mobile size.
- [ ] Crop remains coherent at likely responsive trims.

## Implementation checks
- [ ] New asset appears correctly in all referenced pages.
- [ ] No stretching, clipping, or awkward focal crops.
- [ ] File sizes are reasonable for web delivery.
- [ ] Contrast with adjacent copy remains accessible.

## Final sign-off
- [ ] All 15 AI-assisted assets replaced and checked.
- [ ] Headshot and wordmark unchanged.
- [ ] Visual consistency pass completed across Home, one service page, FAQ, and Policies.
- [ ] Team approval captured for production deployment.
