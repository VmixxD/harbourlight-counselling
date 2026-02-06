# IMAGE_PROMPTS - Harbourlight Counselling

Last updated: 2026-02-07
Owner: Product + Design

Purpose: Provide a single, consistent earthy illustration prompt system and per-image add-ons for
the ChatGPT image generator. This is the source of truth for AI-assisted imagery.

Companion files:
- `docs/brand/IMAGE_PROMPT_PACK.md` for model-ready primary/fallback prompt sets and rescue lines.
- `docs/brand/IMAGE_REGEN_CHECKLIST.md` for production workflow and QA tracking.

## How to use
1) Choose the image you are generating from the list below.
2) Copy the Base prompt and replace {SUBJECT} with the add-on subject line.
3) Append any optional modifiers listed for that image.
4) Append the Negative prompt.
5) Generate at the recommended aspect ratio.

## Base prompt (copy/paste)
"{SUBJECT}. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and
gouache washes on textured paper, soft pencil contour accents (not dominant line art), layered organic
forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, spacious
composition with breathing room for text overlays, emotionally supportive and grounded."

## Optional style modifiers (use only if needed)
- morning sea mist and diffused dawn light
- after-rain atmosphere with soft reflections
- subtle paper grain and dry-brush edges
- tonal wash gradient from warm cream to sage
- faint botanical texture overlay
- paired elements suggesting connection and support
- open negative space on one side for copy

## Negative prompt (append)
"No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh
contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks,
no clinical office stock-photo look, no recognisable faces."

## Output guidance
- Palette: sage, moss, forest, warm cream, clay. Keep saturation low.
- Default: no people unless the add-on subject explicitly includes them.
- If people are included, keep them distant/faceless and non-identifiable.
- Avoid symbolic medical/legal icon style unless explicitly required by the subject.
- Keep key subject matter centered or slightly off-center to survive crops.
- Aspect ratios should match usage (see list below).
- Exception: `public/images/vince-batters.png` is a real headshot, not AI-generated.

## Current site images and add-on prompts
Use the add-on line as {SUBJECT}. Keep the filename and replace the image asset.

`public/images/hlc-home-hero-harbour-dawn.png`
Page usage: `app/page.tsx` (home hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Quiet coastal harbour in Aotearoa at first light, soft mist over still water, distant hills, and a calm open sky"
Optional modifiers: morning sea mist and diffused dawn light, open negative space on one side for copy

`public/images/hlc-home-hero-bush-trail.png`
Page usage: `app/page.tsx` (home "This might be for you")
Aspect ratio: 3:4 portrait
Add-on subject: "Native NZ bush trail after light rain, fern-lined edges, filtered sunlight through canopy, and a gentle sense of forward movement"
Optional modifiers: after-rain atmosphere with soft reflections, subtle paper grain and dry-brush edges

`public/images/hlc-about-abstract-shapes.png`
Page usage: `app/about/page.tsx`
Aspect ratio: 1:1 square
Add-on subject: "Layered organic shapes inspired by harbour contours and fern forms, softly overlapping to suggest steadiness, care, and connection"
Optional modifiers: tonal wash gradient from warm cream to sage, subtle paper grain and dry-brush edges

`public/images/hlc-services-textures-triptych.png`
Page usage: `app/services/page.tsx` (services hub banner)
Aspect ratio: wide panorama (target 4:1 to 5:1)
Add-on subject: "Triptych composition blending harbour-water texture, fern canopy forms, and sun-warmed sand tones into one cohesive panoramic scene"
Optional modifiers: faint botanical texture overlay, tonal wash gradient from warm cream to sage

`public/images/hlc-service-identity-fern.png`
Page usage: `app/services/[slug]/page.tsx` (Identity & Shame hero)
Aspect ratio: 3:4 portrait
Add-on subject: "An unfurling ponga fern koru in soft morning light, conveying self-acceptance and growth at a human pace"
Optional modifiers: subtle paper grain and dry-brush edges, open negative space on one side for copy

`public/images/hlc-service-relationships-stones.png`
Page usage: `app/services/[slug]/page.tsx` (Relationships hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Two weathered stones resting side by side at a tidal edge with gentle ripples, balanced and connected"
Optional modifiers: paired elements suggesting connection and support, morning sea mist and diffused dawn light

`public/images/hlc-service-burnout-clearing.png`
Page usage: `app/services/[slug]/page.tsx` (Burnout & Work Stress hero)
Aspect ratio: 3:4 portrait
Add-on subject: "Quiet forest clearing with filtered sunlight, a resting place, and a soft path leading onward to suggest recovery and steadier rhythm"
Optional modifiers: after-rain atmosphere with soft reflections, open negative space on one side for copy

`public/images/hlc-fees-gradient-wash.png`
Page usage: `app/fees/page.tsx`
Aspect ratio: 3:4 portrait
Add-on subject: "Minimal horizon scene where land and water meet in soft focus, with a calm tonal transition from warm cream into sage"
Optional modifiers: tonal wash gradient from warm cream to sage, subtle paper grain and dry-brush edges

`public/images/hlc-faq-water-ripples.png`
Page usage: `app/faq/page.tsx`
Aspect ratio: wide panorama (target 4:1 to 5:1)
Add-on subject: "Close view of still harbour-water ripples expanding outward, meditative and simple in muted sage and cream tones"
Optional modifiers: morning sea mist and diffused dawn light

`public/images/hlc-policies-geometric-layers.png`
Page usage: `app/policies/page.tsx`
Aspect ratio: wide panorama (target 4:1 to 5:1)
Add-on subject: "Structured but soft layered forms inspired by shoreline contours and paper-cut shapes, communicating clarity and containment"
Optional modifiers: tonal wash gradient from warm cream to sage, faint botanical texture overlay

`public/images/hlc-policy-privacy-leaf-lock.png`
Page usage: `app/policies/privacy/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Leaf-inspired forms interwoven into a subtle lock motif over natural paper texture, signaling privacy, care, and protection"
Optional modifiers: faint botanical texture overlay, subtle paper grain and dry-brush edges

`public/images/hlc-policy-online-safety-desk.png`
Page usage: `app/policies/online-safety/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Quiet home desk by a window with a closed laptop, notebook, and cup of tea in soft natural light, uncluttered and calm"
Optional modifiers: open negative space on one side for copy, subtle paper grain and dry-brush edges

`public/images/hlc-policy-cancellation-calendar.png`
Page usage: `app/policies/cancellation/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Simple paper calendar and pencil on a warm neutral surface with gentle shadow, clear and calm rather than strict"
Optional modifiers: tonal wash gradient from warm cream to sage, subtle paper grain and dry-brush edges

`public/images/hlc-policy-consent-notebook.png`
Page usage: `app/policies/informed-consent/page.tsx` (PageHeader image)
Aspect ratio: 3:4 portrait
Add-on subject: "Open notebook with blank pages on a natural desk, soft side light, and a feeling of clarity, collaboration, and unhurried pace"
Optional modifiers: open negative space on one side for copy, subtle paper grain and dry-brush edges

`public/images/hlc-contact-harbour-horizon.png`
Page usage: `app/contact/page.tsx`, `app/book/page.tsx`
Aspect ratio: 3:4 portrait
Add-on subject: "Wide harbour horizon with low mist and soft gradient sky, evoking steadiness, welcome, and room to begin"
Optional modifiers: morning sea mist and diffused dawn light, tonal wash gradient from warm cream to sage

`public/images/vince-batters.png`
Page usage: `app/page.tsx`, `app/about/page.tsx`
Notes: Real headshot photography. Do not generate via AI. Keep color grading warm and natural.

`public/images/harbourlight.png`
Page usage: Not referenced in app code as of 2026-02-06.
Notes: Wordmark asset. Do not replace with AI-generated imagery.
