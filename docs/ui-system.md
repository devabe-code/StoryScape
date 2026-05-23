# UI System

The base UI system lives in `components/ui`.

It is intentionally small, typed, and focused on building StoryScape as a premium streaming-style reading product. Shared primitives should support Sprint 2 catalog/discovery pages and Sprint 3 reader pages without turning the app into a generic SaaS dashboard.

The UI system should help AI-assisted development produce interfaces that feel like:

> A calm premium streaming service for public-domain literature.

Not:

> A database of books, an admin dashboard, or an academic archive.

## Design Direction

Use the UI system to reinforce the core StoryScape patterns:

- Cinematic discovery surfaces.
- Poster-forward book cards.
- Horizontal rails.
- Clear resume/start actions.
- Compact metadata rows.
- Warm, comfortable reader surfaces.
- Calm editorial tone.
- Stable layouts with no hover or control-induced layout shift.

Discovery pages may feel darker, richer, and more cinematic.

Reader pages should feel quieter, warmer, and more text-first.

## Exports

Import shared primitives from the barrel:

```tsx
import { Badge, Button, ButtonLink, Card, Container, SectionHeader } from "@/components/ui";
```

All new shared primitives must be exported from:

```tsx
components / ui / index.ts;
```

Avoid deep imports from individual primitive files in app code unless there is a specific technical reason.

## Primitives

### `Button`

Command button for primary actions, secondary actions, and low-emphasis controls.

Current variants:

- `primary`
- `secondary`
- `ghost`

Use buttons for clear user intent:

- `Start Reading`
- `Continue Reading`
- `Resume Episode`
- `Add to Library`
- `View Details`
- `Preview Soundscape`

Primary buttons should be reserved for the most important action in a section.

On hero surfaces, there should usually be one primary button and no more than two secondary actions.

Avoid using buttons for decorative labels or metadata.

### `ButtonLink`

Next.js link with button styling.

Use `ButtonLink` when navigation is the action:

- Opening a book detail page.
- Starting a reader route.
- Viewing a collection.
- Returning to a library page.

Use `Button` when the action happens in place:

- Toggle ambience.
- Save progress.
- Open a panel.
- Change reader settings.

### `Badge`

Compact label for mood, accent, neutral metadata, or progress-adjacent information.

Use badges for short, scannable information:

- `Gothic`
- `Storm`
- `18 min`
- `42% complete`
- `New`
- `Episode 3`
- `Calm`

Badges should not become paragraphs, buttons, or noisy promotional stickers.

Avoid badge overload. Most cards should use zero to three badges.

### `Card`

Framed content surface for repeated items and tools.

Use `Card` for real content objects:

- Book poster cards.
- Episode tiles.
- Collection cards.
- Soundscape cards.
- Continue-reading cards.
- Reader side panels.
- Progress summaries.
- Stats when they support reading behavior.

Do not use `Card` as a default wrapper for every section.

Streaming-style pages should prefer rails, bands, and full-width composition over stacks of floating cards.

### `Container`

Responsive page-width wrapper.

Use `Container` to control readable width and page rhythm.

Discovery pages may use wider layouts to support hero sections and rails.

Reader pages should use narrower, more comfortable text widths.

Avoid forcing all pages into the same maximum width when the surface has a different purpose.

### `SectionHeader`

Consistent heading block with optional eyebrow, supporting text, and action.

Use `SectionHeader` for rails, shelves, and page bands.

Good section titles:

- `Continue Reading`
- `Featured Classics`
- `Gothic Nights`
- `Short Reads`
- `Quiet Evening Reads`
- `Soundscapes for Mystery`

Avoid generic titles:

- `Items`
- `Data`
- `Cards`
- `Content`
- `Book List`

Supporting text should only appear when it helps the user decide what to do.

## Preferred Composite Patterns

The UI system should keep primitives small, but app-level components should compose them into streaming-style patterns.

Preferred composites include:

- `HeroFeature`
- `ContentRail`
- `BookPosterCard`
- `EpisodeTile`
- `ContinueReadingCard`
- `CollectionCard`
- `SoundscapeCard`
- `ProgressBar`
- `MetadataRow`
- `ReaderShell`
- `ReaderControls`
- `ReaderSettingsPanel`

These do not all need to live in `components/ui`.

Use `components/ui` for reusable primitives.

Use feature folders for product-specific composites, for example:

```txt
components/catalog/
components/reader/
components/soundscape/
components/library/
```

A component should only become a shared UI primitive when it is reusable across multiple features without carrying product-specific assumptions.

## Streaming-Style Layout Rules

AI-assisted development should default to these layout rules:

- Use a hero section at the top of major discovery pages.
- Place `Continue Reading` near the top when progress exists.
- Use horizontal rails for curated discovery.
- Use poster-like vertical cards for books.
- Use wider landscape tiles for episodes when useful.
- Keep metadata compact and scannable.
- Keep the primary action visually obvious.
- Prefer bands and rails over unrelated floating cards.
- Avoid dense grids unless the user is explicitly browsing a full catalog.
- Avoid table-like layouts for books, episodes, or collections.

## Reader Layout Rules

Reader UI should be calmer than discovery UI.

Reader pages should prioritize:

- Comfortable line length.
- Stable typography.
- Warm reading surfaces.
- Clear progress.
- Easy resume.
- Minimal chrome.
- Accessible ambience controls.
- No layout shift when controls appear, disappear, or update.

Do not make the reader feel like a video player.

Borrow only the useful streaming behaviors:

- Resume.
- Progress.
- Up next.
- Episode/chapter sequencing.
- Optional ambience.

## Styling Rules

Use existing Tailwind tokens from the project theme.

Prefer semantic palette usage:

- `ink` for dark surfaces, primary text, and strong actions.
- `paper` for warm reading backgrounds and text on dark surfaces.
- `moss` for calm secondary actions and ambience accents.
- `ember` for progress, active states, focus, and editorial emphasis.
- `brass` for warm metadata and premium-feeling highlights.
- `fog` for borders, dividers, skeletons, and subdued UI.

Avoid:

- Generic black-and-red streaming imitation.
- Neon gradients.
- Overly glossy cards.
- Low-contrast translucent overlays.
- Random one-off colors outside the Tailwind theme.

## Radius and Surface Rules

Use consistent radius values:

- Cards: `rounded-lg` maximum default.
- Buttons, inputs, tabs, and controls: `rounded-md`.
- Badges and small chips may use pill shapes when appropriate.

Avoid overly soft SaaS-style cards unless the product context calls for it.

Streaming-style surfaces should feel structured, cinematic, and editorial.

## Metadata Rules

Metadata should be short and decision-oriented.

Good examples:

- `Mary Shelley`
- `Gothic · 12 episodes`
- `18 min read`
- `42% complete`
- `Resume Episode 3`
- `Storm ambience`

Avoid:

- Long academic citation strings on cards.
- Dense metadata blocks.
- Internal object names.
- Technical implementation labels.
- Placeholder copy that sounds like a CMS.

## Accessibility Rules

All shared primitives must support accessible usage by default.

Requirements:

- Preserve visible focus states with `.focus-ring`.
- Icon-only buttons must have accessible names.
- Interactive cards must expose clear link or button semantics.
- Do not rely on color alone for important state.
- Do not rely on sound alone for important state.
- Keep contrast readable on `paper`, translucent surfaces, and `ink`.
- Support keyboard navigation through rails, cards, dialogs, and reader controls.
- Avoid hover-only access to critical actions.
- Respect reduced-motion preferences.

## Supporting Helper

`cn` in `lib/styles.ts` joins conditional class names.

Keep it simple.

Do not add a styling dependency unless the project has a real composition need.

Use `cn` for:

- Conditional variants.
- State classes.
- Optional layout classes.
- Consumer-provided `className` merging.

Avoid using `cn` to hide overly complex component APIs.

If a primitive requires too many conditional branches, simplify the API or move the complexity into a feature-level component.

## Adding Components

When adding a new primitive:

1. Confirm it is broadly reusable across the product.
2. Keep the API small and typed.
3. Use existing Tailwind tokens.
4. Preserve accessible defaults.
5. Include a colocated test file.
6. Export it from `components/ui/index.ts`.
7. Update `docs/ui-bible.md` when the component creates a new visual or interaction pattern.

Do not add a primitive only because one page needs a custom layout.

Prefer feature components first.

Promote to `components/ui` only when reuse is clear.

## Testing Expectations

Every shared primitive should have colocated tests covering:

- Rendering.
- Variant behavior.
- Core accessibility expectations.
- Link or button semantics where applicable.
- Consumer `className` support when exposed.

Examples:

```txt
components/ui/button.test.tsx
components/ui/badge.test.tsx
components/ui/card.test.tsx
```

For feature-level composites, test the behavior that matters to users:

- A continue-reading card links to the correct reader route.
- A rail renders its title and items.
- A hero exposes the primary action.
- Reader controls have accessible names.
- Progress indicators expose readable progress text.

## Local Validation

Run the full local gate before marking UI system changes complete:

```bash
npm run ci
```

Run E2E when page-level behavior, routing, navigation, or reader flows change:

```bash
npm run test:e2e
```

## AI-Assisted Development Guidance

When Codex or another AI assistant generates UI, it should follow these defaults:

- Start with streaming-style discovery patterns.
- Use rails before grids.
- Use poster cards before generic cards.
- Use clear resume/start actions.
- Keep metadata compact.
- Use feature components for product-specific patterns.
- Keep shared primitives small.
- Do not overbuild a design system before the product needs it.
- Preserve tests for every primitive and major feature component.
- Update `docs/ui-bible.md` when a new reusable pattern appears.

When uncertain, choose the implementation that makes StoryScape feel more like a premium streaming app for books and less like a public-domain catalog.
