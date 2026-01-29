# STYLEGUIDE - Harbourlight Counselling

Last updated: 2026-01-29
Source of truth: Tailwind config and `app/globals.css`

This styleguide documents the design tokens and UI conventions currently used in the site.
Scope note: Brand voice and imagery live in `docs/brand/BRAND_GUIDE.md`. Product scope and requirements live in `project.md`.

## Color palette
All colors are defined in `tailwind.config.js` and `app/globals.css`.

Core colors:
- cream: #f7f3ec (primary background)
- mist: #eef3ee (soft panel background)
- sage: #cbd6c1 (borders, soft accents)
- moss: #8a9b82 (secondary accent, quiet emphasis)
- forest: #1f3b2c (primary text, buttons)
- clay: #d8c8b4 (warm neutral accent)
- charcoal: #1f1d1a (body text)
- sun: #f2ddbe (warm highlight)
- danger: #8b2f2f (error text only)

Role mapping (use these consistently):
- Background: cream (primary), mist (secondary), white/80 for cards
- Text: forest (headings), charcoal (body), forest/70 for muted
- Border: sage/50
- CTA: forest background with cream text
- Focus ring: forest/50 with cream offset
- Status: danger for error messaging only (avoid for decorative use)

Accessibility guidance:
- Ensure text contrast meets WCAG 2.2 AA (4.5:1 for body text).
- Avoid using moss or sage for body text on cream.

## Typography
Fonts are loaded in `app/layout.tsx` using `next/font/google`.

- Heading font: Fraunces (variable `--font-fraunces`)
- Body font: Manrope (variable `--font-manrope`)

Recommended scale (Tailwind defaults):
- H1: text-4xl to text-5xl, font-heading, text-forest
- H2: text-3xl to text-4xl, font-heading, text-forest
- H3: text-2xl, font-heading, text-forest
- Body: text-base, font-body, text-charcoal
- Small: text-sm, font-body, text-forest/75

Letter-spacing:
- Use uppercase micro-labels sparingly (tracking-[0.22em])

Line-height:
- Body: 1.6-1.8
- Headings: 1.1-1.3

## Layout and spacing
Container:
- `components/Container.tsx` uses `max-w-6xl` with `px-6` (72rem / 1152px).

Section spacing:
- Use `.section-space` (py-16 md:py-24).

Card surface:
- Use `.card-surface` for standard cards.

Spacing rhythm:
- Use 4px increments where possible (Tailwind scale).
- Prefer breathable spacing over dense layouts.

## Radius, borders, shadows
Radius:
- xl: 1.25rem
- 2xl: 1.75rem
- Buttons: rounded-full

Borders:
- Default card border: `border-sage/50`

Shadows:
- soft: `0 24px 60px -35px rgba(31, 59, 44, 0.45)`
- lift: `0 18px 45px -30px rgba(31, 59, 44, 0.4)`

## Background treatments
- Body background: cream with a soft radial gradient.
- Optional section background: `bg-mist` or `bg-[soft-linear]`.
- Avoid flat, high-contrast backgrounds.

## Motion
Defined in Tailwind config:
- `fade-up`: 0.7s ease, translateY(12px) -> 0

Motion rules:
- Use sparingly for primary hero or section reveals.
- Respect reduced motion preferences.

## UI components (conventions)
Buttons:
- Primary: forest background, cream text, rounded-full, medium weight.
- Secondary: ghost or outline using forest text with sage border.

Links:
- Use forest text with a subtle hover shift.

Cards:
- Use `card-surface` and `shadow-soft`.

Forms:
- Clear labels, `text-sm font-medium text-forest`.
- Focus ring: forest/50, offset cream.

Accordions:
- Use native `details/summary` for accessibility.

## Imagery placement
- Image frames use `rounded-2xl`, `border-sage/50`, `shadow-lift`.
- Maintain consistent max-width (sm/md). Use generous spacing around images.

## CSS utilities
Defined in `app/globals.css`:
- `.section-space` for section vertical spacing.
- `.card-surface` for card background, border, padding, shadow.

## Do not do
- Do not introduce new colors without adding them to `tailwind.config.js` and documenting them here.
- Do not change fonts without updating `app/layout.tsx` and this guide.
- Do not use sharp-cornered buttons or cards.

## Fill-in fields (do not guess)
- Primary CTA selection ("Book a free 15-min consult" or "Send an enquiry")
