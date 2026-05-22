# UI Bible

This is the working source of truth for StoryScape UI decisions. It should evolve as the product grows, but changes should stay small, intentional, and consistent with the reading-first experience.

## Foundations

Use Tailwind tokens before one-off values. Add new tokens only when a pattern repeats or expresses product meaning.

Current foundations:

- Colors: `ink`, `paper`, `fog`, `moss`, `ember`, `brass`
- Fonts: `font-serif`, `font-sans`
- Shadow: `shadow-soft`
- Focus: `.focus-ring`

## Layout

Use `Container` for page-width content.

- `default`: most app pages and catalog sections.
- `reader`: narrow reading surfaces.
- `wide`: future admin or dense operational views.

Use full-width section bands for major page areas. Do not nest cards inside decorative cards.

## Components

### Button

Use `Button` for commands and `ButtonLink` for navigation styled as a command.

Variants:

- `primary`: main action, usually one per local surface.
- `secondary`: bordered action or alternate route.
- `ghost`: compact navigation and low-emphasis controls.

Icon-only buttons must include `aria-label`.

### Badge

Use `Badge` for mood tags, provenance tags, status labels, and compact metadata. Keep badge text short.

Variants:

- `mood`: soundscape and atmosphere labels.
- `accent`: featured or progress-related emphasis.
- `neutral`: quiet metadata.

### Card

Use `Card` for repeated items, tools, and small framed surfaces.

Variants:

- `default`: repeated catalog items.
- `elevated`: featured or hero-adjacent item.
- `quiet`: reader side panels and low-emphasis utility panels.

### SectionHeader

Use `SectionHeader` for consistent section headings and optional actions. Use `level={1}` only for the page heading.

## Reader Rules

- Reader controls must not cover text.
- Reader text should use serif type and generous line height.
- Progress indicators use `ember`.
- Soundscape controls stay subtle by default.

## Catalog Rules

- Book cards show title, author/year, mood tags, reading estimate, soundscape, and a clear start action.
- Catalog pages should emphasize curation and provenance over volume.
- Avoid infinite-scroll or huge catalog patterns in the MVP.

## Testing Rules

Every reusable UI component needs a colocated test. Cover rendering, core variants, accessible labels or roles, and disabled/error states where applicable.
