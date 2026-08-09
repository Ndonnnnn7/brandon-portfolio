# Project Detail Override

The Project Detail page extends the Projects section's rounded white-and-cyan component language without changing its editorial hierarchy.

## Shape

- Use `rounded-3xl` for the primary media frame and metadata cards.
- Use `rounded-full` for the back control, category badge, technology chips, icon controls, and outbound action buttons.
- Keep media clipped by its outer radius and preserve `object-contain` so local project images remain fully visible.
- Remove sharp decorative corner markers from rounded media surfaces.

## Interaction

- Use the standard system cursor; do not add a decorative cursor-following overlay.
- Rounded actions retain visible hover feedback and keyboard focus outlines.
- Shape changes must not alter touch-target dimensions, responsive spacing, or motion timing.

## Technology matrix

- Present the project stack as an icon-led matrix rather than a plain chip row.
- Use official Simple Icons for branded technologies and Lucide icons for generic capabilities or workflows.
- Stack cards use one column on phones, two on tablets, and up to four columns on desktop based on the number of tools.
- On hover, only the icon tile changes to solid `primary` with fixed `accentInk`; do not shift card dimensions.
