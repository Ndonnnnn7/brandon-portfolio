# Brandon Portfolio Design System

This file is the single source of truth for the portfolio UI. The former dark, gold, pink, and neon theme is retired. The interface is light-only.

## Direction

- Style: vibrant, block-based portfolio with editorial typography and restrained technical details.
- Principles: visual-first, highly legible, accessible, responsive, and energetic without visual noise.
- Theme: light mode only. Do not add `dark:` utilities or system-theme detection.

## Color tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-primary` | `#8FE8F6` | Primary highlights, featured blocks, active controls |
| `--color-secondary` | `#C8F7D7` | Supporting surfaces, soft highlights, secondary blocks |
| `--color-tertiary` | `#DBF156` | Optional decorative highlight only; never use for primary actions or active states |
| `--color-canvas` | `#FFFFFF` | Page and section background |
| `--color-surface` | `#FFFFFF` | Cards and raised content |
| `--color-surface-soft` | `#F8FCFB` | Quiet panels and alternating rows |
| `--color-ink` | `#0B1214` | Headings, body text, borders, icons |
| `--color-muted` | `#657275` | Secondary copy; minimum normal-text contrast on light surfaces |
| `--color-line` | `#DCEAEA` | Dividers and card borders |

For accent-colored text on white, use the brighter accessible derived inks `#087F90` (primary), `#24724D` (secondary), and `#667500` (tertiary). Cyan `#8FE8F6` is the sole primary accent for actions, active states, section markers, progress indicators, and focus styling. Lime is optional decoration only.

## Typography

- Display: Archivo, weights 600–900.
- Body: Space Grotesk, weights 400–700.
- Technical labels: IBM Plex Mono, weights 400–700.
- Keep body copy at 16px or larger where space allows, with 1.5–1.7 line-height.
- Use uppercase mono labels sparingly and never below 10px.

## Spacing and layout

- Base unit: 4px.
- Common spacing: 8, 12, 16, 24, 32, 48, 64, 96px.
- Page container: up to 1800px for expressive sections; 1320px for reading-heavy content.
- Section padding: 80px mobile, 112–160px desktop.
- Preserve visible spacing around the fixed navigation.

## Surfaces, borders, and shadows

- Cards use white or `surface-soft`, a visible `line` border, and dark ink.
- Radius scale: 8px, 16px, 24px. Sharp corners are allowed for intentional brutalist blocks.
- Shadows: `0 4px 14px rgba(11,18,20,.05)`, `0 14px 36px rgba(11,18,20,.08)`, `0 28px 70px rgba(11,18,20,.10)`.
- Decorative offset shadows should use primary, secondary, or tertiary at 45–70% opacity.

## Components

### Buttons

- Primary CTA: primary cyan background, ink text, 2px ink border.
- Secondary CTA: white background, ink text, 2px ink border.
- Hover changes color or shadow only; do not scale or shift layout.
- All interactive elements use a pointer cursor and a visible keyboard focus ring.

### Cards

- White surface, `#DCEAEA` border, ink text.
- Hover may deepen the shadow and shift border color over 200–300ms.
- Do not use dark glass panels or low-opacity white text.

### Navigation

- White at 92–96% opacity with backdrop blur after scrolling.
- Active item uses primary cyan with ink text.
- Mobile drawer uses canvas, visible line dividers, and the same light token set.

## Motion and accessibility

- Standard transition: 200–300ms with ease-out.
- Keep continuous decorative animation minimal.
- Respect `prefers-reduced-motion` globally.
- Text contrast target: WCAG AA, 4.5:1 for normal text and 3:1 for large text.
- Color must not be the sole state indicator.
- Images require meaningful alt text; controls require labels; focus must remain visible.

## Responsive checks

Verify at 375px, 768px, 1024px, and 1440px. No horizontal scroll, clipped headings, or content hidden by fixed navigation.

## Retired patterns

- Dark mode, dark-theme detection, and `dark:` variants.
- Gold `#D6B25E`, pink `#FF3355`, neon lime `#CCFF00`, purple, rust, and black panel backgrounds.
- Low-contrast gray-on-dark copy and invisible translucent borders.
- Infinite decorative motion when reduced motion is requested.
