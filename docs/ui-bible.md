# UI Bible

This is the working source of truth for StoryScape UI decisions.

It should evolve as the product grows, but changes should stay small, intentional, and consistent with the reading-first streaming experience.

StoryScape should feel like:

> A calm premium streaming service for public-domain literature.

It should not feel like:

> A database of public-domain books, an academic archive, or a generic SaaS dashboard.

## Core Product Feeling

StoryScape combines two modes:

1. **Discovery mode**: cinematic, visual, curated, and streaming-like.
2. **Reader mode**: quiet, warm, stable, and comfortable.

Discovery pages can use dark, cinematic surfaces, poster art, rails, and hero sections.

Reader pages should reduce visual noise and prioritize typography, progress, and comfort.

The UI should make it obvious what to do next:

- Start reading.
- Continue reading.
- Resume an episode.
- Explore a curated shelf.
- Try a soundscape.
- Return to the reader.

## Foundations

Use Tailwind tokens before one-off values.

Add new tokens only when a pattern repeats or expresses clear product meaning.

Current foundations:

- Colors: `ink`, `paper`, `fog`, `moss`, `ember`, `brass`
- Fonts: `font-serif`, `font-sans`
- Shadow: `shadow-soft`
- Focus: `.focus-ring`

### Color Roles

Use colors semantically.

- `ink`: dark cinematic surfaces, primary dark text, strong actions.
- `paper`: warm reading surfaces and high-contrast text on dark backgrounds.
- `fog`: borders, dividers, skeletons, quiet UI, subdued states.
- `moss`: calm secondary actions, ambience, grounded accents.
- `ember`: progress, active state, focus, editorial emphasis.
- `brass`: warm metadata, premium highlights, subtle editorial accents.

Avoid generic black-and-red streaming imitation.

Avoid neon gradients, glossy surfaces, and low-contrast translucent overlays.

### Typography

Use typography to separate literary content from app controls.

Use `font-serif` for:

- Book titles.
- Hero titles.
- Page headings.
- Reader body text.
- Editorial collection names when appropriate.

Use `font-sans` for:

- Navigation.
- Buttons.
- Controls.
- Metadata.
- Badges.
- Tabs.
- Compact interface text.

Reader text should feel generous and stable.

Controls should never cause reader text to shift.

### Focus

Use `.focus-ring` for visible keyboard focus.

Never remove focus styles without replacing them with an equally visible accessible state.

## Layout

Use `Container` for page-width content.

Container modes:

- `default`: most app pages, catalog sections, and standard layouts.
- `reader`: narrow, comfortable reading surfaces.
- `wide`: cinematic discovery, large rails, and future dense operational views.

Use full-width section bands and rails for major discovery areas.

Do not nest cards inside decorative cards.

Avoid stacked SaaS-style card dashboards unless the page is truly operational.

### Layout Priorities

Prefer:

- Hero sections.
- Horizontal rails.
- Poster-forward cards.
- Full-width bands.
- Compact metadata rows.
- Clear action hierarchy.
- Detail pages with strong visual anchors.

Avoid:

- Dense tables for books.
- Generic card grids as the default.
- Academic archive layouts.
- Floating card stacks.
- Overly wide reader text.
- Hover states that shift layout.

## Streaming Patterns

Discovery pages should use these patterns before inventing new layouts.

### Hero Feature

Use for the primary featured title, collection, mood, or resume path.

A hero feature should include:

- Oversized title.
- Short atmospheric description.
- Minimal metadata.
- One primary CTA.
- One or two secondary actions at most.
- Poster, cover, or atmospheric art.
- Strong text contrast.

Good hero actions:

- `Start Reading`
- `Continue Reading`
- `Resume Episode`
- `View Details`
- `Read with Ambience`

Avoid loud marketing copy.

Do not use vague CTAs like:

- `Explore Now`
- `Unlock Magic`
- `Begin Your Journey`

### Continue Rail

Use when the user has active progress.

The continue rail should appear near the top of discovery and library surfaces.

A continue item should show:

- Title.
- Current episode or chapter.
- Progress.
- Resume action.
- Reading estimate when useful.
- Last-read context when useful.

The resume path should always be obvious.

### Curated Shelf Rail

Use for editorial groupings by mood, theme, length, genre, or intent.

Good shelf names:

- `Gothic Nights`
- `Short Classics`
- `Epic Journeys`
- `Quiet Evening Reads`
- `Adventure & Sea Voyages`
- `Dark Academia`
- `Start in Under 20 Minutes`

Avoid generic shelf names:

- `Books`
- `Items`
- `Catalog`
- `Data`
- `Content`

### Soundscape Rail

Use for ambience profiles that support reading discovery.

Soundscape cards should be quiet and optional.

A soundscape card may show:

- Soundscape name.
- Mood.
- Intensity hint.
- Associated title or genre.
- Preview or select action.

Good soundscape names:

- `Fireplace`
- `Rain on Glass`
- `Quiet Library`
- `Storm at Sea`
- `Night Forest`

Do not make soundscape controls compete with reading actions.

### Episode Rail

Use for chapter-sized or episode-sized reading segments.

Episode tiles should show:

- Episode title.
- Estimated minutes.
- Progress state.
- Mood or soundscape pairing when useful.
- Start or resume action.

Episode tiles should not carry long summaries unless the page is specifically an episode detail view.

### Related Rail

Use on detail pages to suggest similar books, collections, moods, or soundscapes.

Good labels:

- `More Gothic Classics`
- `Because you read Frankenstein`
- `Short Reads with Dark Atmosphere`
- `More Sea Voyages`

Recommendations should feel editorial, not aggressive.

## Page Patterns

### Home / Discovery

The home page should feel closest to a streaming service.

Recommended order:

1. Hero Feature.
2. Continue Rail when progress exists.
3. Curated Shelf Rail.
4. Mood or Soundscape Rail.
5. Genre or Collection Rail.
6. Recently Added or Featured Classics Rail.

Avoid starting the home page with a search form, dense grid, or catalog table.

### Catalog

Catalog pages should still feel curated.

Use:

- Filters when helpful.
- Rails for featured groupings.
- Grids only when comparison or browsing density is more useful.
- Clear empty states.
- Clear resume/start actions.

Avoid infinite-scroll or huge catalog patterns in the MVP.

### Book Detail

Book detail pages should feel like streaming title pages.

Include:

- Large title area.
- Author and publication context.
- Cover or poster treatment.
- Short description.
- Primary CTA.
- Progress state when available.
- Episode or chapter list.
- Soundscape options.
- Related rail.

For unread books, prioritize `Start Reading`.

For books in progress, prioritize `Continue Reading`.

### Reader

The reader is quieter than every discovery surface.

Use:

- Warm reading background.
- Comfortable text width.
- Serif body text.
- Generous line height.
- Clear progress.
- Minimal controls.
- Optional ambience controls.
- Stable layout.

Do not make the reader feel like a video player.

Borrow only the useful streaming behaviors:

- Resume.
- Progress.
- Up next.
- Episode sequencing.
- Optional ambience.

## Components

### Button

Use `Button` for commands.

Use `ButtonLink` for navigation styled as a command.

Variants:

- `primary`: main action, usually one per local surface.
- `secondary`: bordered action or alternate route.
- `ghost`: compact navigation and low-emphasis controls.

Good button labels:

- `Start Reading`
- `Continue Reading`
- `Resume Episode`
- `Add to Library`
- `View Details`
- `Preview Soundscape`

Rules:

- Use one primary button per local surface when possible.
- Do not use buttons as metadata.
- Do not overload a hero with too many actions.
- Icon-only buttons must include `aria-label`.

### Badge

Use `Badge` for mood tags, provenance tags, status labels, and compact metadata.

Variants:

- `mood`: soundscape and atmosphere labels.
- `accent`: featured or progress-related emphasis.
- `neutral`: quiet metadata.

Good badge text:

- `Gothic`
- `Storm`
- `18 min`
- `Episode 3`
- `42% complete`
- `New`
- `Calm`

Rules:

- Keep badge text short.
- Avoid badge overload.
- Do not use badges as long descriptions.
- Do not use badges as the only indicator of important state.

### Card

Use `Card` for repeated items, tools, and small framed surfaces.

Variants:

- `default`: repeated catalog items.
- `elevated`: featured or hero-adjacent item.
- `quiet`: reader side panels and low-emphasis utility panels.

Use cards for:

- Book poster cards.
- Episode tiles.
- Collection cards.
- Continue-reading cards.
- Soundscape cards.
- Reader side panels.
- Progress summaries.

Do not use `Card` as the default wrapper for every page section.

Poster cards should keep stable dimensions, use strong cover imagery or generated cover treatments, and keep metadata compact.

### SectionHeader

Use `SectionHeader` for consistent section headings and optional actions.

Use `level={1}` only for the page heading.

Good section titles:

- `Continue Reading`
- `Featured Classics`
- `Gothic Nights`
- `Short First Episodes`
- `Soundscapes to Try`

Supporting text should be optional and useful.

Avoid generic section labels.

### Container

Use `Container` to control page rhythm and readable width.

Rules:

- Use `default` for most catalog and app pages.
- Use `reader` for long-form reading.
- Use `wide` for cinematic discovery and larger rail layouts.
- Do not force reader content into wide layouts.

## Composite Components

The shared UI system should stay small.

Product-specific patterns should live in feature folders unless they become broadly reusable.

Preferred composite components:

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

Suggested folders:

```txt
components/catalog/
components/reader/
components/soundscape/
components/library/
```

Promote a component into `components/ui` only when reuse is clear across multiple features.

## Reader Rules

Reader controls must not cover text.

Reader text should use serif type and generous line height.

Progress indicators use `ember`.

Soundscape controls stay subtle by default.

Reader controls should:

- Be keyboard accessible.
- Have visible focus states.
- Avoid layout shift.
- Stay out of the main reading flow.
- Respect reduced-motion preferences.
- Never rely on sound alone for state.

Reader pages should prioritize comfort over spectacle.

## Catalog Rules

Book cards should show:

- Title.
- Author.
- Year when useful.
- Mood tags.
- Reading estimate.
- Soundscape when relevant.
- Progress when available.
- Clear start or resume action.

Catalog pages should emphasize curation and provenance through streaming-style shelves.

Avoid infinite-scroll or huge catalog patterns in the MVP.

Prefer rails named by user intent:

- `Continue Reading`
- `Gothic Nights`
- `Short First Episodes`
- `Soundscapes to Try`
- `Quiet Evening Reads`
- `Featured Classics`

Catalog screens should not feel like a database.

## Metadata Rules

Metadata should be short, calm, and decision-oriented.

Good metadata:

- `Mary Shelley`
- `1818`
- `Gothic · 12 episodes`
- `18 min read`
- `42% complete`
- `Resume Episode 3`
- `Storm ambience`

Avoid:

- Dense academic citation strings on cards.
- Internal object names.
- Technical implementation labels.
- Placeholder CMS copy.
- Long metadata rows that wrap awkwardly.

Detailed publication data can live on detail pages, not cards.

## Motion Rules

Motion should feel smooth and premium.

Use motion for:

- Rail scrolling.
- Focus transitions.
- Hover elevation.
- Progress changes.
- Hero fades.
- Opening and closing secondary panels.

Avoid:

- Bouncy motion.
- Constant ambient animation.
- Motion that competes with reading.
- Layout-shifting hover effects.

Respect reduced-motion preferences.

## Accessibility Rules

Accessibility is part of the UI system.

Requirements:

- Preserve visible focus states with `.focus-ring`.
- Icon-only controls must include accessible names.
- Interactive cards must expose clear link or button semantics.
- Do not rely on color alone for important state.
- Do not rely on sound alone for important state.
- Keep contrast readable on `paper`, translucent surfaces, and `ink`.
- Support keyboard navigation through rails, cards, dialogs, and reader controls.
- Avoid hover-only access to critical actions.
- Respect reduced-motion preferences.
- Keep reader text resizable and comfortable.

## Copy Rules

StoryScape copy should be concise, calm, and useful.

Prefer:

- `Continue Reading`
- `Start Episode`
- `Resume Chapter`
- `Progress saved`
- `Read with ambience`
- `Add to Library`
- `Up Next`
- `Because you read Dracula`

Avoid:

- `Unlock literary magic`
- `Transform the way you read forever`
- `Embark on a revolutionary journey`
- `Content object`
- `Metadata entity`
- `Book database`

The app should sound human and editorial, not promotional or technical.

## Testing Rules

Every reusable UI component needs a colocated test.

Cover:

- Rendering.
- Core variants.
- Accessible labels or roles.
- Disabled states where applicable.
- Error states where applicable.
- Link or button semantics.
- Consumer `className` support when exposed.

Feature-level composites should test user-visible behavior.

Examples:

- A continue-reading card links to the correct reader route.
- A rail renders its title and items.
- A hero exposes the primary action.
- Reader controls have accessible names.
- Progress indicators expose readable progress text.
- Soundscape controls can be paused or changed accessibly.

## Local Validation

Run the full local gate before marking UI changes complete:

```bash
npm run ci
```

Run E2E when page-level behavior, routing, navigation, catalog flows, or reader flows change:

```bash
npm run test:e2e
```

## AI-Assisted Development Rules

When Codex or another AI assistant generates UI, it should follow these defaults:

- Make discovery feel like a calm premium streaming homepage.
- Use rails before generic grids.
- Use poster cards before generic cards.
- Use hero sections for major discovery entry points.
- Keep resume/start actions obvious.
- Keep metadata compact.
- Use feature components for product-specific patterns.
- Keep shared primitives small and typed.
- Avoid overbuilding the design system too early.
- Avoid academic archive layouts unless explicitly requested.
- Preserve tests for every primitive and major feature component.
- Update this file when a reusable UI decision changes.

When uncertain, choose the pattern that makes StoryScape feel more like a premium streaming app for literature and less like a public-domain book database.
