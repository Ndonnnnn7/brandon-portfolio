# Skills Section Override

This section extends the master design system with an interactive category-and-tool matrix.

## Layout

- Lead with the editorial statement `The tools I reach for.` and a concise toolkit summary.
- Use a two-column category navigator and tool matrix at extra-large widths; stack both regions below 1280px.
- Tool cards use a dense matrix on desktop, three columns on tablet, and two columns on phones.
- Category rows include an index, title, description, and tool count.

## Interaction

- Hovering or keyboard-focusing a category keeps its related tools sharp and applies a subtle blur plus reduced opacity to unrelated tools.
- Tapping a category pins the same state for touch devices; tapping it again resets the matrix.
- Filtering is contextual only and must not remove content or cause layout shifts.
- Transitions are limited to 200–300ms color, opacity, and filter changes.

## Color and surface

- Primary focus and active state: `#8FE8F6`.
- Supporting ambient accent: `#C8F7D7`.
- Keep the canvas and tool cards white with `#DCEAEA` dividers.
- Use `#087F90` for accessible accent text on white.
