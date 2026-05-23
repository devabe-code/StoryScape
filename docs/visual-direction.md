# Visual Direction

StoryScape should feel like a premium streaming service for public-domain reading: visual, immediate, atmospheric, and easy to resume. The product should borrow familiar discovery patterns from Netflix, Hulu, Disney Plus, Max, and Prime Video, but reinterpret them for books, chapters, episodes, moods, and soundscapes.

The goal is not to imitate entertainment apps directly. StoryScape should feel cinematic and curated, but slower, warmer, quieter, and more readable.

## Experience Goals

- Make classic literature feel approachable, visual, and easy to start.
- Treat books like premium titles, episodes, seasons, and curated collections.
- Make resuming obvious from every major surface.
- Prioritize reading comfort, progress, and clear next actions.
- Use atmosphere to support reading, not overwhelm it.
- Favor editorial curation over dense catalog browsing.
- Make the app feel premium without becoming loud, glossy, or promotional.

## Product Shape

Discovery surfaces should follow streaming-service interaction patterns by default.

Use:

- A large cinematic hero area for the primary featured book, collection, or resume item.
- One dominant action in the hero, usually `Start Reading`, `Continue Reading`, or `Resume Episode`.
- Secondary hero actions such as `View Details`, `Add to Library`, or `Preview Soundscape`.
- Horizontal rails for curated shelves, moods, genres, continue-reading, new episodes, and soundscape profiles.
- Poster-like book covers as the primary visual object.
- Episode tiles for segmented reading experiences.
- Progress-aware cards that make it clear where the reader left off.
- Detail pages that feel closer to a streaming title page than an academic book record.

The default mental model should be:

> Browse like a streaming service.  
> Resume like a show.  
> Read like a calm premium reader.

Do not use dense grids, database-style catalog pages, or academic archive layouts as the primary experience.

## Streaming-Service Patterns to Borrow

StoryScape may borrow the following patterns:

- Featured hero banners.
- Continue Reading rails.
- “Because you read...” recommendation rails.
- Mood-based shelves.
- Recently added shelves.
- Featured collections.
- Large cover-forward cards.
- Short metadata rows.
- Title detail pages.
- Episode lists.
- Progress bars.
- Persistent resume behavior.
- Preview-like moments through excerpts, mood, and soundscape.

StoryScape should not borrow:

- Auto-playing video behavior.
- Loud promotional badges.
- Overly aggressive recommendations.
- Cluttered metadata overlays.
- Excessive gradients, glare, or motion.
- Generic black-and-red streaming-app imitation.

## Discovery Pages

Discovery pages should feel like a streaming home screen redesigned for reading.

A typical page should include:

1. A cinematic hero section.
2. A `Continue Reading` rail near the top when progress exists.
3. Curated editorial rails.
4. Mood or atmosphere rails.
5. Genre or collection rails.
6. Soundscape-driven discovery where appropriate.

Prefer rails and bands over isolated floating cards.

Good rail examples:

- `Continue Reading`
- `Featured Classics`
- `Dark Gothic Evenings`
- `Short Reads`
- `Epic Journeys`
- `Calm Before Sleep`
- `Recently Added`
- `Popular Public-Domain Stories`
- `Soundscapes for Mystery`
- `Because you read Frankenstein`

Each rail should have a clear purpose. Avoid filler sections.

## Hero Treatment

The hero is the most streaming-like surface in StoryScape.

It should feel cinematic, but not noisy.

Use the hero for:

- A featured title.
- A resumed book or episode.
- A curated collection.
- A seasonal editorial shelf.
- A mood-based reading path.

The hero should include:

- Large title treatment.
- Short atmospheric description.
- Minimal metadata.
- One primary action.
- One or two secondary actions at most.
- Background imagery, gradient, or cover art treatment.
- Clear contrast for text and controls.

Hero copy should be direct and calm.

Good examples:

- `Continue Reading`
- `Start Episode`
- `Resume from Chapter 4`
- `Begin the Collection`
- `Read with Storm Ambience`

Avoid:

- `Unlock your imagination`
- `The ultimate reading experience`
- `Dive into a world of wonder`
- `Revolutionize your reading journey`

## Cards and Tiles

Cards should behave like streaming tiles, but represent books, episodes, collections, moods, or soundscapes.

Primary card types:

- Book poster card.
- Episode tile.
- Continue-reading card.
- Collection card.
- Soundscape card.
- Mood card.
- Reader stats card.

Book cards should prioritize:

- Cover/poster image.
- Title.
- Author.
- Progress when relevant.
- Short metadata row when helpful.

Episode cards should prioritize:

- Episode title.
- Estimated reading time.
- Progress state.
- Soundscape or mood pairing.
- Clear resume/start action.

Card metadata should be compact.

Good metadata examples:

- `12 episodes`
- `18 min read`
- `42% complete`
- `Gothic · Storm`
- `Resume Episode 3`
- `Calm · Fireplace`

Do not overload cards with descriptions. Longer context belongs on detail pages.

## Rails

Rails are the preferred layout pattern for discovery and library surfaces.

Each rail needs:

- A clear title.
- A focused content type or editorial purpose.
- Optional supporting copy only when it helps decision-making.
- Horizontally scrollable cards on small screens.
- Stable card dimensions.
- No layout shift on hover, focus, progress updates, or metadata reveal.

Rail titles should feel editorial, not mechanical.

Prefer:

- `Continue Reading`
- `Gothic Nights`
- `Short Classics`
- `Adventure & Sea Voyages`
- `Quiet Evening Reads`

Avoid:

- `Books List`
- `Items`
- `Content Section`
- `Recommended Data`
- `User Progress Objects`

## Detail Pages

Book and collection detail pages should feel like streaming title pages.

A detail page may include:

- Large title area.
- Cover/poster art.
- Author and publication metadata.
- Short description.
- Primary reading action.
- Progress state.
- Episode/chapter list.
- Soundscape options.
- Related rails.
- Mood tags.
- Estimated reading time.

The most important action should be immediately visible.

For books in progress, prioritize:

- `Continue Reading`
- Current episode/chapter.
- Progress percentage.
- Last-read timestamp when useful.

For unread books, prioritize:

- `Start Reading`
- Estimated first episode length.
- Mood/soundscape preview.

## Reader Experience

The reader should be calmer than the discovery experience.

Discovery can feel cinematic. Reading should feel quiet, stable, and comfortable.

Reader priorities:

- Stable typography.
- No layout shift when controls appear.
- Clear progress.
- Easy resume.
- Comfortable line length.
- Accessible contrast.
- Minimal chrome.
- Optional ambience controls that never distract from text.

Reader controls should feel more like a premium reading app than a video player, while still borrowing familiar resume/progress behavior.

Use streaming-inspired language only where it helps:

- `Episode`
- `Continue`
- `Resume`
- `Up Next`
- `Progress saved`

Avoid making the reader feel like a video playback interface.

## Tone

Use concise, human copy.

StoryScape language should feel calm, useful, and lightly editorial.

Good examples:

- `Continue Reading`
- `Start Episode`
- `Resume Chapter`
- `Curated shelf`
- `Progress saved`
- `Episode 1 estimate`
- `Read with ambience`
- `Add to Library`
- `Up Next`
- `Because you read Dracula`

Avoid:

- Grand claims.
- Product-tour language.
- Marketing-heavy labels.
- Excessive exclamation points.
- Academic archive language.
- Overly playful gamified copy.

Bad examples:

- `Transform the way you read forever`
- `Unlock literary magic`
- `Embark on a revolutionary journey`
- `Content object`
- `Metadata entity`
- `Book database`

## Palette

The baseline palette lives in `tailwind.config.ts`.

Use the palette to create a streaming-inspired dark discovery experience without copying generic black-and-red entertainment branding.

Core color roles:

- `ink`: primary dark canvas, deep surfaces, text, and primary actions.
- `paper`: warm reading background and high-contrast text on dark surfaces.
- `moss`: calm secondary action, ambience, and grounded accents.
- `ember`: progress, focus, active states, and editorial emphasis.
- `brass`: warm premium-feeling metadata and subtle highlight accents.
- `fog`: quiet separators, subdued borders, skeleton states, and low-emphasis UI.

Discovery pages may lean dark and cinematic using `ink`, layered gradients, and warm `paper` text.

Reader pages should lean warmer and calmer, using `paper` as the dominant reading surface.

Avoid:

- Pure black as the only background.
- Generic Netflix-style red as the main identity.
- Neon gradients.
- Overly glossy surfaces.
- Low-contrast translucent overlays.

## Typography

Typography should distinguish literary content from app controls.

Use serif type for:

- Book titles.
- Hero titles.
- Page headings.
- Reader body text.
- Editorial collection titles when appropriate.

Use sans type for:

- Navigation.
- Buttons.
- Controls.
- Metadata.
- Tabs.
- Labels.
- Compact UI.
- Progress information.

Reader body type should be generous, stable, and comfortable.

Controls should never cause text layout shift.

## Layout

Favor strong streaming-style composition:

- Wide hero sections.
- Horizontal rails.
- Poster-forward cards.
- Detail pages with large visual anchors.
- Full-width bands instead of scattered panels.
- Compact metadata rows.
- Clear action hierarchy.

Avoid:

- Dense admin dashboards.
- Overuse of floating cards.
- Catalog pages that feel like tables.
- Repeated identical section layouts.
- Excessive whitespace that weakens the streaming feel.
- Crowded overlays that reduce readability.

## Surfaces

Cards should frame actual items or tools:

- Book posters.
- Episode tiles.
- Featured episodes.
- Collections.
- Soundscapes.
- Reader side panels.
- Progress summaries.
- Stats.

Page sections should become rails, shelves, or bands rather than stacks of unrelated cards.

Use `rounded-lg` as the maximum default radius for cards.

Use `rounded-md` for buttons, tabs, inputs, and compact controls.

Avoid overly pill-shaped UI unless the element is a small tag, chip, or filter.

## Motion

Motion should feel smooth and premium, not playful or distracting.

Use motion for:

- Rail scrolling.
- Focus transitions.
- Hover elevation.
- Progress updates.
- Hero image fades.
- Opening or closing secondary panels.
- Reader controls appearing and disappearing.

Avoid:

- Bouncy motion.
- Excessive spring effects.
- Constant ambient animation.
- Motion that competes with reading.
- Layout-shifting hover effects.

Respect reduced-motion preferences.

## Metadata

Metadata should be short and decision-oriented.

Use metadata to answer:

- What is this?
- How long will it take?
- Where did I leave off?
- What mood does it fit?
- What action should I take next?

Good metadata examples:

- `Mary Shelley`
- `Gothic · 12 episodes`
- `18 min read`
- `42% complete`
- `Resume Episode 3`
- `Storm ambience`
- `Added to Library`

Avoid long metadata strings and dense academic citations on discovery surfaces.

Detailed publication data can appear on detail pages, not cards.

## Soundscape UI

Soundscapes should feel like ambience profiles, not music-player clutter.

Soundscape controls should be:

- Optional.
- Quiet.
- Clearly labeled.
- Accessible.
- Easy to pause or change.
- Visually secondary to reading actions.

Soundscape cards may appear in rails when they support discovery.

Good examples:

- `Fireplace`
- `Rain on Glass`
- `Quiet Library`
- `Storm at Sea`
- `Night Forest`

Do not communicate important state through sound alone.

## Accessibility

Accessibility is part of the visual direction, not a separate polish step.

Requirements:

- Preserve visible focus states with `.focus-ring`.
- All icon-only controls need accessible names.
- Important state must be visible in text, not only color, sound, or motion.
- Maintain readable contrast on `paper`, translucent surfaces, and `ink`.
- Support keyboard navigation through rails, cards, dialogs, and reader controls.
- Avoid hover-only access to critical actions.
- Respect reduced-motion preferences.
- Keep reader text resizable and comfortable.

## Implementation Guidance for AI-Assisted Development

When generating UI, default to the following interpretation:

- Discovery screens should resemble a calm premium streaming homepage.
- Library and detail pages should use poster-forward layouts, rails, and clear resume actions.
- Reader screens should prioritize comfort over spectacle.
- Cards should represent real content, not decorative containers.
- Rails should be the default section pattern.
- Use dark cinematic surfaces for browsing and warm paper-like surfaces for reading.
- Keep metadata short.
- Keep actions obvious.
- Avoid generic SaaS dashboard layouts.
- Avoid academic archive layouts unless explicitly requested.

When uncertain, choose the pattern that makes StoryScape feel more like:

> A premium streaming app for literature.

And less like:

> A database of public-domain books.
