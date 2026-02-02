# IMAGE_PROMPTS - Harbourlight Counselling

Last updated: 2026-02-02
Owner: Product + Design

Purpose: Provide a single, consistent line-art illustration style prompt and per-image add-ons for
the ChatGPT image generator. This is the source of truth for AI-assisted imagery.

## How to use
1) Choose the image you are generating from the list below.
2) Copy the Base prompt and replace {SUBJECT} with the add-on subject line.
3) Append any optional modifiers listed for that image.
4) Append the Negative prompt.
5) Generate at the recommended aspect ratio.

## Base prompt (copy/paste)
"{SUBJECT}. Minimalist line art illustration, natural New Zealand theme, fine ink lines with rounded
ends, muted forest/ moss linework on warm cream background, low contrast, generous negative space,
calm atmosphere, subtle paper texture, no heavy shading."

## Optional style modifiers (use only if needed)
- mist rolling over calm water
- soft fog and filtered morning light
- gentle grain
- light wash behind the linework
- single continuous line style
- sparse crosshatching (very minimal)

## Negative prompt (append)
"No photorealism, no 3D, no glossy effects, no high contrast, no neon, no harsh shadows, no text,
no signage, no logos, no clutter, no clinical office, no city crowds."

## Output guidance
- Palette: sage, moss, forest, warm cream, clay. Keep saturation low.
- Default: no people unless the add-on subject explicitly includes them.
- If people are included, use simple line art silhouettes with minimal detail.
- Avoid sharp edges or busy detail. Keep compositions simple and breathable.
- Keep key subject matter centered or slightly off-center to survive crops.
- Aspect ratios should match usage (see list below).
- Exception: `public/images/vince-batters.png` is a real headshot, not AI-generated.

## Current site images and add-on prompts
Use the add-on line as {SUBJECT}. Keep the filename and replace the image asset.

`public/images/hlc-home-hero-harbour-dawn.png`
Page usage: `app/page.tsx` (home hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a soft coastal harbour at dawn, mist rolling over calm water"
Optional modifiers: mist rolling over calm water, soft fog and filtered morning light

`public/images/hlc-home-hero-bush-trail.png`
Page usage: `app/page.tsx` (home "This might be for you")
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a native NZ bush trail after light rain, soft fog"
Optional modifiers: soft fog and filtered morning light, gentle grain

`public/images/hlc-about-abstract-shapes.png`
Page usage: `app/about/page.tsx`
Aspect ratio: 1:1 square
Add-on subject: "Minimalist line art of abstract organic shapes layered in sage, moss, and warm cream"
Optional modifiers: light wash behind the linework, subtle paper texture

`public/images/hlc-services-textures-triptych.png`
Page usage: `app/services/page.tsx` (services hub banner)
Aspect ratio: wide panorama (target 4:1 to 5:1)
Add-on subject: "Triptych-style line art collage of harbour water, fern canopy, and sunlit sand textures"
Optional modifiers: single continuous line style, gentle grain

`public/images/hlc-service-identity-fern.png`
Page usage: `app/services/[slug]/page.tsx` (Identity & Shame hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a single fern frond unfurling, symbol of gentleness and growth"
Optional modifiers: light wash behind the linework, gentle grain

`public/images/hlc-service-relationships-stones.png`
Page usage: `app/services/[slug]/page.tsx` (Relationships hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of two stones balanced on a tidal rock with gentle ripples"
Optional modifiers: light wash behind the linework

`public/images/hlc-service-burnout-clearing.png`
Page usage: `app/services/[slug]/page.tsx` (Burnout & Work Stress hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a quiet forest clearing with soft light breaking through"
Optional modifiers: light wash behind the linework, gentle grain

`public/images/hlc-fees-gradient-wash.png`
Page usage: `app/fees/page.tsx`
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a gentle horizon line with a soft gradient wash"
Optional modifiers: light wash behind the linework, subtle paper texture

`public/images/hlc-faq-water-ripples.png`
Page usage: `app/faq/page.tsx`
Aspect ratio: wide panorama (target 4:1 to 5:1)
Add-on subject: "Minimalist line art of close-up ripples in still water, monochrome sage and cream palette"
Optional modifiers: gentle grain

`public/images/hlc-policies-geometric-layers.png`
Page usage: `app/policies/page.tsx`
Aspect ratio: wide panorama (target 4:1 to 5:1)
Add-on subject: "Minimalist line art of soft geometric shapes layered like translucent paper"
Optional modifiers: light wash behind the linework

`public/images/hlc-policy-privacy-leaf-lock.png`
Page usage: `app/policies/privacy/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of an abstract lock icon formed by overlapping leaves"
Optional modifiers: single continuous line style, subtle paper texture

`public/images/hlc-policy-online-safety-desk.png`
Page usage: `app/policies/online-safety/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a desk by a window, closed laptop, cup of tea"
Optional modifiers: gentle grain

`public/images/hlc-policy-cancellation-calendar.png`
Page usage: `app/policies/cancellation/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a simple calendar page with soft shadows"
Optional modifiers: light wash behind the linework, subtle paper texture

`public/images/hlc-policy-consent-notebook.png`
Page usage: `app/policies/informed-consent/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of an open notebook with a blank page"
Optional modifiers: light wash behind the linework, subtle paper texture

`public/images/hlc-contact-harbour-horizon.png`
Page usage: `app/contact/page.tsx`, `app/book/page.tsx`
Aspect ratio: 3:4 portrait
Add-on subject: "Minimalist line art of a harbour horizon line with soft fog"
Optional modifiers: mist rolling over calm water, gentle grain

`public/images/vince-batters.png`
Page usage: `app/page.tsx`, `app/about/page.tsx`
Notes: Real headshot photography. Do not generate via AI. Keep color grading warm and natural.

`public/images/harbourlight.png`
Page usage: Not referenced in app code as of 2026-02-02.
Notes: Wordmark asset. Do not replace with AI-generated imagery.
