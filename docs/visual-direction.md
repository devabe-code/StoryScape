# Visual Direction

StoryScape should feel literary, calm, and easy to return to. The interface supports public-domain reading without pretending to be a generic ebook shelf or a marketing page.

## Experience Goals

- Make classics feel approachable, not academic or dusty.
- Keep atmosphere present without making the UI theatrical.
- Prioritize reading comfort, progress, and clear next actions.
- Favor curated surfaces over dense catalog browsing.

## Tone

Use concise, human copy. Good StoryScape language sounds like:

- “Continue Reading”
- “Curated classics”
- “Episode 1 estimate”
- “Progress saved”

Avoid grand claims, noisy labels, and product-tour language inside the app surface.

## Palette

The baseline palette lives in `tailwind.config.ts`.

- `paper`: warm reading background.
- `ink`: primary text and primary actions.
- `moss`: calm secondary action and ambience accent.
- `ember`: progress, focus, and editorial emphasis.
- `brass`: future warmth for metadata or premium-feeling accents.
- `fog`: quiet separators and subdued states.

Use warm neutrals and natural accents together. Avoid turning an entire screen into one hue family.

## Typography

- Use serif type for book titles, page headings, and reader text.
- Use sans type for navigation, controls, metadata, and compact UI.
- Keep reader body type generous and stable. Controls should never cause text layout shift.

## Surfaces

Cards should frame actual items or tools: book cards, featured episodes, reader side panels, and stats. Page sections should remain unframed bands or constrained layouts.

Use `rounded-lg` as the maximum default radius for cards. Buttons and controls use `rounded-md`.

## Accessibility

- Preserve visible focus states with `.focus-ring`.
- All icon-only controls need accessible names.
- Do not communicate important state through sound alone.
- Keep contrast readable on `paper`, white translucent surfaces, and `ink` text.
