# Honors Override

The Honors section uses the global 24px card radius and pill-shaped compact controls.

## Container

- Use the shared expressive-section container: `max-w-[1800px]` with 24px phone gutters and 48px gutters from tablet widths upward.
- Align the section edges with Skills and Projects.
- Use a clean canvas without a grid background; retain only the subtle watermark and component-level accents.

## Header and metrics

- Lead with the oversized editorial statement `Honors, earned.` and place fixed dark `accentInk` over the solid cyan highlight.
- Pair the heading with three integrated metric tiles for competition honors, credentials, and scholarships.
- Use Lucide icons consistently and keep metric surfaces limited to `primary`, `surface`, and `secondary`.

## Competition showcase

- Present competition results as a two-part award dossier: one large visual spotlight and one selectable award index.
- The first record is selected by default; clicking or keyboard-activating an index row updates the spotlight without removing content.
- Keep the spotlight sticky only at extra-large desktop widths and preserve normal document flow on smaller screens.
- Active index rows use solid `primary` with `accentInk`; resting rows use `surface` with a `line` divider.
- Use `rounded-3xl` for the spotlight and index shell, `rounded-2xl` for media, and `rounded-full` for badges.

## Credential gallery

- Present credentials as an image-led horizontal gallery using local `public/img/Certif*` assets.
- Scale the credential headline from `1.75rem` on small phones to `5rem` on desktop; long words must remain fully visible at 320–414px widths.
- Show one card on phones, two on tablets, and three on desktops with snap scrolling and labeled previous/next controls.
- Each card includes a verified badge, issuer, credential title, issue date, credential ID, and visible credential link.
- Use `surface-soft` for the gallery shell, `surface` for cards, `line` for borders, `primary` for hover emphasis, and `primaryInk` for small accented text.
- Use `rounded-3xl` cards, `rounded-2xl` media, and pill-shaped verified/control elements.
- Preserve keyboard arrow navigation, meaningful image alt text, disabled control states, and a live visible-range indicator.
- Position desktop carousel controls slightly outside the card edges while keeping them inside the padded gallery shell.
- Keep a strong section break between the header, award dossier, and credential gallery without using background grids.

## Color and behavior

- Use `line` for resting borders and `primary` for active row/media borders.
- Use `primaryInk` for small cyan-accented text.
- Preserve readable focus states, reduced-motion behavior, keyboard carousel navigation, and responsive stacking.
