# IMAGE_PROMPT_PACK - Harbourlight Counselling

Last updated: 2026-02-07
Owner: Product + Design

Purpose: Provide production-ready prompts for the current image set, including a primary prompt,
fallback prompt, and quick rescue instructions for consistent output quality.

## When to use this file
- Use this file when you are actively generating or regenerating assets.
- Use `docs/brand/IMAGE_PROMPTS.md` for the canonical subject list and style intent.
- Use `docs/brand/IMAGE_REGEN_CHECKLIST.md` to track delivery and QA.

## Recommended generation workflow
1. Generate one asset at a time.
2. Run 3-4 attempts for the same prompt before changing direction.
3. If output drifts, apply one rescue line only, then rerun.
4. Keep composition simple and leave clear negative space for text overlays.
5. Export to the target ratio and keep the existing filename.

## Shared prompt blocks
Use these exactly, then add asset-specific text from the sections below.

Style anchor:
"Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache
washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/
forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive
and grounded."

Negative block:
"No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh
contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks,
no clinical office stock-photo look, no recognisable faces."

Prompt pattern:
"{SUBJECT}. {STYLE_ANCHOR} Composition: {COMPOSITION}. {NEGATIVE_BLOCK}"

## Rescue lines (append one only when needed)
- Too dark: "Lift exposure slightly, keep warm cream highlights, maintain soft shadow detail."
- Too busy: "Reduce detail density by 30 percent and simplify background forms."
- Too flat: "Add subtle tonal wash depth while keeping low contrast."
- Looks corporate: "Replace office cues with natural textures and home-like warmth."
- Feels symbolic/iconic: "Avoid icon style; render as a natural scene with tactile texture."
- No copy space: "Reserve open negative space on the left third for text overlay."

## Aspect ratio targets
- 3:4 portrait: export around 1536x2048.
- 1:1 square: export around 1536x1536.
- Wide panorama (4:1 to 5:1): export around 3200x800 or 3000x600.

## Asset prompt pack

### `public/images/hlc-home-hero-harbour-dawn.png`
Primary prompt:
"Quiet coastal harbour in Aotearoa at first light, soft mist over still water, distant hills, calm open sky. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: foreground water texture with horizon in upper third and open negative space on the left side for headline text. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Harbour inlet at dawn after light fog, gentle ripples, soft sky gradient from warm cream to muted sage, distant tree-covered shoreline. Keep composition minimal with copy space on the left third."

### `public/images/hlc-home-hero-bush-trail.png`
Primary prompt:
"Native NZ bush trail after light rain, fern-lined path, filtered sunlight through canopy, gentle sense of forward movement. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: pathway starts near bottom edge and curves softly into depth, with uncluttered space for nearby text. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Fern-rich bush walkway with damp earth and soft mist, calm after-rain atmosphere, subtle light breaking through trees, simple and breathable framing."

### `public/images/hlc-about-abstract-shapes.png`
Primary prompt:
"Layered organic shapes inspired by harbour contours and fern forms, overlapping softly to suggest steadiness, care, and connection. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: centered abstract cluster with generous margins and smooth tonal transitions. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Soft paper-cut inspired natural forms in sage and clay, subtle botanical texture, minimal abstract composition with calm symmetry."

### `public/images/hlc-services-textures-triptych.png`
Primary prompt:
"Triptych composition blending harbour-water texture, fern canopy forms, and sun-warmed sand tones into one cohesive panoramic scene. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: three soft vertical zones integrated into a single wide strip with no harsh boundaries. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Wide textured panorama with left water movement, central fern canopy, right warm shoreline tones, blended edges and low detail density."

### `public/images/hlc-service-identity-fern.png`
Primary prompt:
"An unfurling ponga fern koru in soft morning light, symbol of self-acceptance and growth at a human pace. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: main fern slightly off-center with clear breathing room around it and clean copy space. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Single koru fern emerging from soft wash background, subtle paper grain, gentle upward movement, minimal distractions."

### `public/images/hlc-service-relationships-stones.png`
Primary prompt:
"Two weathered stones resting side by side at a tidal edge with gentle ripples, balanced and connected. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: paired stones in lower center with surrounding soft water texture and open upper area. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Two naturally balanced shoreline stones with shallow ripples and dawn mist, expressing connection and mutual steadiness without symmetry rigidity."

### `public/images/hlc-service-burnout-clearing.png`
Primary prompt:
"Quiet forest clearing with filtered sunlight, a resting place, and a soft path leading onward to suggest recovery and steadier rhythm. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: open clearing in center, path leading from foreground, minimal high-detail foliage. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"After-rain forest glade with soft haze and clear resting space, warm light shafts, low visual density, calm restorative mood."

### `public/images/hlc-fees-gradient-wash.png`
Primary prompt:
"Minimal horizon scene where land and water meet in soft focus, calm tonal transition from warm cream into sage. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: broad tonal wash with light horizon reference and very minimal line detail. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Soft abstract coastal gradient with faint horizon and paper texture, quiet and uncluttered with clear overlay-safe area."

### `public/images/hlc-faq-water-ripples.png`
Primary prompt:
"Close view of still harbour-water ripples expanding outward, meditative and simple in muted sage and cream tones. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: wide panoramic crop with ripple movement across frame and low detail edges. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Panoramic still-water texture with concentric ripples and soft mist tone, simple and calming without visual clutter."

### `public/images/hlc-policies-geometric-layers.png`
Primary prompt:
"Structured but soft layered forms inspired by shoreline contours and paper-cut shapes, communicating clarity and containment. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: wide layered arrangement with gentle geometric logic and softened edges. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Panoramic layered-paper style landscape forms with restrained structure and natural textures, calm but organized visual rhythm."

### `public/images/hlc-policy-privacy-leaf-lock.png`
Primary prompt:
"Leaf-inspired forms interwoven into a subtle lock motif over natural paper texture, signaling privacy, care, and protection. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: central motif with minimal surrounding texture, no icon-like hard edges. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Organic leaf layers suggesting safe containment, abstract privacy theme, warm neutral paper background, soft contours."

### `public/images/hlc-policy-online-safety-desk.png`
Primary prompt:
"Quiet home desk by a window with a closed laptop, notebook, and cup of tea in soft natural light, uncluttered and calm. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: desk in lower half with open negative space in upper area, no visible brand logos. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Simple at-home counselling setup by window light, minimal objects, warm and private atmosphere, composition with clear text space."

### `public/images/hlc-policy-cancellation-calendar.png`
Primary prompt:
"Simple paper calendar and pencil on a warm neutral surface with gentle shadow, clear and calm rather than strict. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: single calendar focus with surrounding negative space and soft desk texture. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Minimal date-planning still life with paper calendar and pencil, warm quiet mood, no text legibility, soft tonal wash."

### `public/images/hlc-policy-consent-notebook.png`
Primary prompt:
"Open notebook with blank pages on a natural desk, soft side light, and a feeling of clarity, collaboration, and unhurried pace. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: notebook centered lower-middle with balanced empty space around it and tactile paper feel. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Open blank journal on warm desk surface with gentle daylight, natural texture, and clean composition for text-adjacent placement."

### `public/images/hlc-contact-harbour-horizon.png`
Primary prompt:
"Wide harbour horizon with low mist and soft gradient sky, evoking steadiness, welcome, and room to begin. Calm editorial illustration inspired by Aotearoa New Zealand nature, matte watercolor and gouache washes on textured paper, soft pencil contour accents only, layered organic forms, muted sage/moss/forest/clay palette on warm cream, gentle diffused natural light, low contrast, emotionally supportive and grounded. Composition: horizon in upper third, subtle foreground water texture, calm right-side breathing room. No photorealism, no 3D render, no glossy surfaces, no hard black outlines, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no clinical office stock-photo look, no recognisable faces."
Fallback prompt:
"Harbour vista at soft dawn with misty gradient sky and minimal shoreline detail, spacious composition and welcoming calm."
