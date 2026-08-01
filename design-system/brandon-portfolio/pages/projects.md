# Projects Override

The Projects section follows the global light portfolio system with the shared 24px large radius.

## Shape

- Project cards use `rounded-3xl` (24px), one continuous outer border, and clipped media.
- Category filters use `rounded-full` pill geometry.
- Category and technology chips use `rounded-full`.
- Compact arrow controls use a circular shape.
- Keep card movement and hover color changes stable; rounding must not alter layout dimensions.
- Use a 64px gap between the header divider and the project grid so the first row remains visually connected to its introduction.

## Color

- Use `canvas` and `surface` for card backgrounds.
- Use `line` for default borders and `primary` for hover borders and active filters.
- Use `primaryInk` for small cyan-accented text to preserve contrast.
- Use the `primary` token for the outlined `WORKS.` display heading stroke.

## Media

- Use a consistent 16:9 (`1920 × 1080`) media ratio for every project card.
- Keep portfolio media as static local assets under `public/img` and reference each file from React with a root-relative `/img/Filename.ext` URL.
- Do not route project, achievement, certificate, or profile imagery through a database or remote image transformation service.
- Preserve descriptive `alt` text and lazy loading below the fold.
- Project grid thumbnails use centered `object-contain` treatment so non-16:9 source images remain fully visible inside the 16:9 card frame; native 16:9 images fill the frame naturally.
