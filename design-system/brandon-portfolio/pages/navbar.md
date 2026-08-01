# Navigation Override

This component follows the global white-and-cyan portfolio system. Rules here refine the navbar structure without replacing the palette in `MASTER.md`.

## Structure

- Use a full-width, edge-to-edge navigation bar with fully rounded brand, navigation, menu, and CTA controls.
- Use 24px phone padding and 48px padding from tablet widths upward.
- Below 1024px, replace desktop links with a square 44px control and a full-viewport navigation panel.
- Use five single-column editorial rows, small numbered indexes, and a bottom CTA/status block.
- Use a clean white canvas with no grid, watermark, image, gradient, or other background decoration.
- Use 80px rows and fluid 42-76px labels, increasing to at least 96px rows at tablet widths.

## Color and states

- Use `canvas` (`#FFFFFF`) for the menu and open header background.
- Use `primary` (`#8FE8F6`) for the close control, CTA, and bottom rule.
- Use `primaryInk` (`#087F90`) for numbered indexes and focus outlines.
- Use `ink` (`#0B1214`) for the active label, logo, borders, and icons.
- Use `muted` (`#657275`) for inactive labels and metadata.
- Use `line` (`#DCEAEA`) for row dividers.

## Accessibility and motion

- Preserve semantic links, `aria-current`, visible focus, Escape-to-close, focus containment, and focus return.
- The opaque drawer covers the viewport so page content cannot leak into the menu.
- Allow vertical scrolling on short viewports and keep every touch target at least 44px.
- Limit transitions to 200-450ms and respect reduced-motion preferences.
- The desktop active indicator uses one shared cyan Framer Motion pill and updates immediately on click.
- During smooth navigation, keep the clicked link active until scrolling settles; resume position-based scroll tracking afterward.
