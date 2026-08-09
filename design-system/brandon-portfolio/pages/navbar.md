# Navigation Override

This component follows the global cyan portfolio system in both light and dark modes. Rules here refine the navbar structure without replacing the palettes in `MASTER.md`.

## Structure

- Use a full-width, edge-to-edge navigation bar with fully rounded brand, navigation, menu, and CTA controls.
- Use 24px phone padding and 48px padding from tablet widths upward.
- Below 1024px, replace desktop links with a square 44px control and a full-viewport navigation panel.
- Use five single-column editorial rows, small numbered indexes, and a bottom CTA/status block.
- Use the active theme canvas with no grid, watermark, image, gradient, or other background decoration.
- Use 80px rows and fluid 42-76px labels, increasing to at least 96px rows at tablet widths.

## Color and states

- Use the active `canvas` token for the menu and open header background.
- Use `primary` for the close control, CTA, active pill, and bottom rule.
- Use `primaryInk` for numbered indexes and focus outlines.
- Use `ink` for the logo, borders, and icons; use fixed accent ink on solid cyan controls.
- Use `muted` for inactive labels and metadata.
- Use `line` for row dividers.
- Provide a 44px circular Sun/Moon toggle in the persistent header on desktop and mobile.
- The toggle updates its accessible label, uses the shared focus ring, and persists the selected theme.

## Accessibility and motion

- Preserve semantic links, `aria-current`, visible focus, Escape-to-close, focus containment, and focus return.
- The opaque drawer covers the viewport so page content cannot leak into the menu.
- Allow vertical scrolling on short viewports and keep every touch target at least 44px.
- Limit transitions to 200-450ms and respect reduced-motion preferences.
- The desktop active indicator uses one shared cyan Framer Motion pill and updates immediately on click.
- During smooth navigation, keep the clicked link active until scrolling settles; resume position-based scroll tracking afterward.
