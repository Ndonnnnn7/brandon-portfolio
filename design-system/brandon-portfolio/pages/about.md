# About Section Override

This section extends the master design system with a portrait-led editorial profile layout.

## Layout

- Lead with the oversized statement `Design. Build. Compete.` and a short positioning line.
- Pair the full-color `public/img/Profile.png` cutout with the biography in a 5/7-column composition at extra-large widths.
- Split the biography into three numbered, verbatim story chapters: Design, Build, and Compete.
- Stack the portrait, biography, and focus areas below 1280px so tablet reading widths remain comfortable.
- Keep the portrait stage cyan and use mint only for supporting geometry.
- Present skills in two complementary cards: design thinking and front-end craft.
- Present education and experience as a centered vertical timeline on desktop: institution and date on the left, a cyan milestone rail in the center, and role details on the right.
- Use the local institution marks from `public/img` for St. Albertus, Universitas Brawijaya, and DOT Indonesia; keep the center rail icons as role/focus symbols.
- On tablet and mobile, use a left-side cyan milestone rail with one readable card per entry; split institution and role into two columns only when space permits.
- Preserve a maximum content width of 1600px and the master spacing scale.

## Color

- Primary and interactive accent: `#8FE8F6`.
- Supporting card accent: `#C8F7D7`.
- Canvas and cards remain white with `#DCEAEA` borders.
- Use `#087F90` for small cyan text that needs accessible contrast.
- Never apply grayscale, desaturation, or color filters to the profile image.

## Motion and performance

- Use one-time opacity and translate reveals only.
- Do not use scroll-linked springs, SVG path drawing, parallax, or continuous marquees.
- Keep hover effects limited to border and shadow transitions.
- Respect the global reduced-motion rule.
