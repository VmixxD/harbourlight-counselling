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
"Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor
and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/
olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered
composition with breathing room for text overlays, emotionally supportive and grounded."

Negative block:
"No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast,
no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks,
no hard black outlines, no thick comic line art, no sharp vector edges,
no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."

Prompt pattern:
"{SUBJECT}. {STYLE_ANCHOR} Composition: {COMPOSITION}. {NEGATIVE_BLOCK}"

## Rescue lines (append one only when needed)
- Too dark: "Lift paper highlights, soften shadow density, and keep the palette muted."
- Too busy: "Reduce detail density by 30 percent and simplify secondary foliage."
- Too flat: "Add gentle foreground-midground-background separation with soft mist depth."
- Looks digital: "Increase natural paper grain and watercolor bloom at paint edges."
- Looks photoreal: "Shift clearly to hand-painted watercolor with soft contour linework."
- No copy space: "Reserve open negative space on the left third for text overlay."
- Lines too heavy: "Thin and soften contour lines so they support rather than dominate."

## Aspect ratio targets
- 3:4 portrait: export around 1536x2048.
- 1:1 square: export around 1536x1536.
- Wide panorama (4:1 to 5:1): export around 3200x800 or 3000x600.

## Asset prompt pack

### `public/images/hlc-home-hero-harbour-dawn.png`
Primary prompt:
"Quiet coastal harbour in Aotearoa at first light, soft mist over still water, distant hills, calm open sky. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: foreground water texture with horizon in upper third and open negative space on the left side for headline text. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Illustrated harbour inlet at dawn with light fog, calm ripples, distant tree-covered shoreline, soft watercolor layers, and open left-side copy space."

### `public/images/hlc-home-hero-bush-trail.png`
Primary prompt:
"Native NZ bush trail after light rain, fern-lined path, filtered light through canopy, gentle sense of forward movement. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: pathway starts near bottom edge and curves softly into depth, with uncluttered space for nearby text. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor fern-rich bush walkway with damp earth, soft haze, and light canopy linework, breathable composition with muted greens."

### `public/images/hlc-about-abstract-shapes.png`
Primary prompt:
"Layered riverbank contours, soft fern silhouettes, and calm tonal overlap suggesting steadiness, care, and connection. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: centered layered forms with generous margins and gentle transitions. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Soft watercolor contour study of shoreline and fern shadows, warm paper texture, minimal composition, calm symmetry."

### `public/images/hlc-services-textures-triptych.png`
Primary prompt:
"Panoramic triptych-style scene blending harbour-water texture, fern canopy forms, and sun-warmed shoreline tones into one cohesive strip. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: wide strip with three softly blended zones and no hard boundaries. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Wide watercolor panorama with left water ripples, central fern canopy, and right warm shoreline textures, blended softly for continuity."

### `public/images/hlc-service-identity-fern.png`
Primary prompt:
"An unfurling ponga fern koru in soft morning light, symbol of self-acceptance and growth at a human pace. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: main fern slightly off-center with clear breathing room around it and clean copy space. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Single koru fern in watercolor with fine contour detail, soft upward movement, and restrained background wash."

### `public/images/hlc-service-relationships-stones.png`
Primary prompt:
"Two weathered stones resting side by side at a tidal edge with gentle ripples, balanced and connected. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: paired stones in lower center with surrounding soft water texture and open upper area. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor pair of shoreline stones with subtle ripple lines and morning haze, connected without rigid symmetry."

### `public/images/hlc-service-burnout-clearing.png`
Primary prompt:
"Quiet forest clearing with filtered light, a resting place, and a soft path leading onward to suggest recovery and steadier rhythm. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: open clearing in center, path leading from foreground, minimal high-detail foliage. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor forest glade with soft haze, gentle light filtering through trees, and low-detail calming composition."

### `public/images/hlc-fees-gradient-wash.png`
Primary prompt:
"Minimal horizon scene where land and water meet in soft focus, calm tonal transition from warm cream into sage. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: broad tonal wash with a light horizon reference and very low detail density. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor coastal gradient with faint horizon line, soft paper grain, and clear overlay-safe negative space."

### `public/images/hlc-faq-water-ripples.png`
Primary prompt:
"Close view of still harbour-water ripples expanding outward, meditative and simple in muted sage and cream tones. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: wide panoramic crop with ripple movement across frame and low-detail edges. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Panoramic watercolor still-water texture with concentric ripple lines, mist-softened edges, and minimal detail."

### `public/images/hlc-policies-geometric-layers.png`
Primary prompt:
"Structured but soft shoreline contours and layered natural forms, communicating clarity and containment. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: wide layered arrangement with gentle structure and softened transitions. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor layered shoreline contours with restrained structure and calm rhythm, matte paper texture and muted tones."

### `public/images/hlc-policy-privacy-leaf-lock.png`
Primary prompt:
"Fern fronds beside a small lock and closed notebook on a natural desk, signaling privacy, care, and protection. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: centered still-life motif with minimal surrounding detail and no readable markings. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor still life of fern, lock, and closed notebook on warm paper-toned desk, quiet and reassuring with clean negative space."

### `public/images/hlc-policy-online-safety-desk.png`
Primary prompt:
"Quiet home desk by a window with a closed laptop, notebook, and cup of tea in soft natural light, uncluttered and calm. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: desk in lower half with open negative space in upper area, no visible brand logos. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor home-desk scene by soft window light, minimal objects, warm private mood, and clear upper text space."

### `public/images/hlc-policy-cancellation-calendar.png`
Primary prompt:
"Simple paper calendar and pencil on a warm neutral surface with gentle shadow, clear and calm rather than strict. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: single calendar focus with surrounding negative space and soft desk texture, no readable dates. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor date-planning still life with blank calendar and pencil, soft edges, gentle shadow, and low detail density."

### `public/images/hlc-policy-consent-notebook.png`
Primary prompt:
"Open notebook with blank pages on a natural desk, soft side light, and a feeling of clarity, collaboration, and unhurried pace. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: notebook centered lower-middle with balanced empty space around it and tactile paper feel. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor open notebook on warm desk surface with soft daylight, calm negative space, and natural texture."

### `public/images/hlc-contact-harbour-horizon.png`
Primary prompt:
"Wide harbour horizon with low mist and soft gradient sky, evoking steadiness, welcome, and room to begin. Calm vintage watercolor illustration inspired by Aotearoa New Zealand landscapes, matte watercolor and gouache washes on warm textured paper, delicate pencil-and-ink contour accents, muted sage/moss/olive/clay palette with warm cream paper values, low saturation, soft atmospheric haze, uncluttered composition with breathing room for text overlays, emotionally supportive and grounded. Composition: horizon in upper third, subtle foreground water texture, calm right-side breathing room. No photorealism, no 3D render, no CGI, no glossy digital painting, no neon colors, no harsh contrast, no dramatic storm mood, no clutter, no visible text, no signage, no logos, no watermarks, no hard black outlines, no thick comic line art, no sharp vector edges, no clinical office stock-photo look, no recognisable faces, no staged therapy sessions."
Fallback prompt:
"Watercolor harbour vista with misty dawn sky, softened shoreline, and spacious composition that feels calm and welcoming."
