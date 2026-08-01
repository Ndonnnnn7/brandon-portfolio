# Honors Override

The Honors section uses the global 24px card radius and pill-shaped compact controls.

## Container

- Use the shared expressive-section container: `max-w-[1800px]` with 24px phone gutters and 48px gutters from tablet widths upward.
- Align the section edges with Skills and Projects.
- Use a clean canvas without a grid background; retain only the subtle watermark and component-level accents.

## Shape

- The tilted statistics card uses `rounded-3xl`; its offset cyan shadow follows the same silhouette.
- Competition accordion rows use `rounded-3xl` with clipped expanded content.
- Expanded media frames use `rounded-2xl`, with `rounded-xl` images nested inside.
- Status badges and verification actions use `rounded-full`.
- Certification cards use `rounded-3xl`.

## Credential gallery

- Present credentials as an image-led horizontal gallery using local `public/img/Certif*` assets.
- Show one card on phones, two on tablets, and three on desktops with snap scrolling and labeled previous/next controls.
- Each card includes a verified badge, issuer, credential title, issue date, credential ID, and visible credential link.
- Use `surface-soft` for the gallery shell, `surface` for cards, `line` for borders, `primary` for hover emphasis, and `primaryInk` for small accented text.
- Use `rounded-3xl` cards, `rounded-2xl` media, and pill-shaped verified/control elements.
- Preserve keyboard arrow navigation, meaningful image alt text, disabled control states, and a live visible-range indicator.
- Position desktop carousel controls slightly outside the card edges while keeping them inside the padded gallery shell.
- Keep the competition Gallery label unruled; do not add a full-width divider beneath it.
- Use a 64px gap after the Honors header so the competition list begins at the same visual rhythm as the Projects grid.

## Color and behavior

- Use `line` for resting borders and `primary` for active row/media borders.
- Use `primaryInk` for small cyan-accented text.
- Preserve accordion animation, readable focus states, and existing responsive behavior.
