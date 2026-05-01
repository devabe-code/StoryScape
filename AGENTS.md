# AGENTS.md
---

## 1. Project Identity

### Working Name

**StoryScape**

### Product Summary

StoryScape is a public-domain immersive reading platform that turns classic books into bingeable, episode-based reading experiences with optional ambient soundscapes.

### Core Value Proposition

Classic literature often feels large, slow, and intimidating. StoryScape makes reading feel lighter, more atmospheric, and easier to continue by combining:

- Curated public-domain books
- Episode/chapter-based reading
- Estimated reading times
- Progress saving
- Continue-reading flows
- Ambient soundscapes matched to the book/chapter mood
- A modern, mobile-first reader experience

### One-Sentence Description

> StoryScape turns public-domain books into bingeable, atmospheric reading experiences with episode-based progress and immersive soundscapes.

### MVP Demo Goal

The MVP should support this demo flow:

1. User lands on a polished homepage.
2. User browses a curated set of classic public-domain books.
3. User opens a book detail page, such as Dracula.
4. User starts Episode 1 / Chapter 1.
5. A clean reader opens.
6. User can play an ambient soundscape.
7. User’s reading progress is saved.
8. User returns to the homepage and sees “Continue Reading.”

---

## 2. MVP Boundaries

### MVP Must Include

- Account creation and sign-in
- Curated book library
- Book detail pages
- Reader page
- Chapter/episode navigation
- Estimated reading time
- Save/resume progress
- Save book to personal library
- Soundscape player
- Soundscape intensity control
- Basic admin/content management
- Secure API and role-based access control
- Staging and production deployment
- CI/CD, tests, linting, formatting, and monitoring

### MVP Must Not Include Unless Explicitly Requested

Do not build these in the MVP unless the project owner explicitly changes the scope:

- User-uploaded ebooks
- AI narration
- AI-generated music or sound effects
- Full audiobook production
- Native mobile apps
- Payments/subscriptions
- Social book clubs
- Comments
- Public annotations
- Large-scale Project Gutenberg ingestion
- Complex recommendation engine
- Offline downloads
- DRM
- Real-time collaboration

### Product Philosophy

Prefer a small, polished, curated experience over a huge, messy catalog.

The MVP is not “Project Gutenberg but prettier.”  
The MVP is “a new reading experience layered on top of public-domain literature.”

---

## 3. Initial Book Catalog

Begin with 5–10 curated public-domain books that pair well with atmosphere.

Recommended initial titles:

- Dracula
- Frankenstein
- The Strange Case of Dr. Jekyll and Mr. Hyde
- The Picture of Dorian Gray
- Alice’s Adventures in Wonderland
- The Time Machine
- The War of the Worlds
- Pride and Prejudice
- The Adventures of Sherlock Holmes
- The Call of the Wild

### Content Rules

- Use public-domain texts only for MVP.
- Track source, license/public-domain status, and attribution.
- Do not imply official affiliation with Project Gutenberg.
- Avoid using “Project Gutenberg” as a product/brand name.
- Store imported book files in project-owned object storage.
- Do not scrape Project Gutenberg’s human-facing pages.
- Prefer official catalog files, mirrors, or approved access methods.
- Keep a content provenance record for every book.

---

## 4. Soundscape Concept

### MVP Soundscape Experience

The soundscape system should be subtle and supportive, not distracting.

Each episode/chapter can be assigned a `soundscape_profile`.

Example profiles:

- Castle Night
- Rainy Manor
- Fireplace Study
- Forest Path
- Ocean Ship
- City Street
- Storm
- Ballroom
- Laboratory
- Train or Carriage Journey

### Soundscape Layers

A profile may include:

- Ambience loop
- Optional low-volume music bed
- Optional sparse sound effect layer

### MVP Controls

The reader should support:

- Play/pause
- Volume
- Intensity: Low / Medium / Cinematic
- Mute
- Persisted user preference if signed in

### Taste Rule

Avoid cheap or noisy sound design. Do not trigger loud sound effects for every sentence. Ambience should remain subtle by default.

---

## 5. Recommended Tech Stack

### Preferred MVP Stack

Use this stack unless the repository already has different established choices:

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** Clerk, Supabase Auth, Auth0, or Auth.js
- **Object Storage:** Cloudflare R2, AWS S3, or Supabase Storage
- **Search:** PostgreSQL full-text search for MVP; Meilisearch/Typesense later
- **Reader:** EPUB.js or React Reader
- **State Management:** React Query/TanStack Query for server state; Zustand for reader/audio UI state
- **Testing:** Vitest/Jest, React Testing Library, Playwright
- **Analytics:** PostHog, Mixpanel, or similar
- **Errors:** Sentry
- **Deployment:** Vercel, Fly.io, Render, or similar
- **CI/CD:** GitHub Actions

### Architecture Style

For MVP, prefer a simple full-stack Next.js architecture unless a separate backend is explicitly requested.

Acceptable architecture:

```text
Next.js App
  ├─ React UI
  ├─ API Routes / Server Actions
  ├─ Prisma ORM
  ├─ PostgreSQL
  ├─ Object Storage
  └─ Background scripts/workers for ingestion
```

If the project grows, split into:

```text
apps/
  web/
  worker/
packages/
  database/
  ui/
  shared/
  config/
```

Do not over-engineer the first version.

---

## 6. High-Level Architecture

### Main Components

- Web client
- API layer
- PostgreSQL database
- Object storage
- Background ingestion worker
- Admin/content dashboard
- Analytics and error tracking

### System Responsibilities

#### Web Client

- Homepage
- Book catalog
- Book detail pages
- Reader
- Soundscape controls
- Authentication pages
- User library
- Continue-reading UI
- Admin UI, if role permits

#### API Layer

- Books API
- Episodes API
- Progress API
- Library API
- Soundscape API
- Admin/content API
- Search API

#### Database

Stores:

- Users
- Books
- Authors
- Book-author links
- Episodes
- Reading progress
- User library entries
- Soundscape profiles
- Audio assets
- Admin audit logs

#### Object Storage

Stores:

- EPUB files
- HTML/text book files
- Cover images
- Audio loops
- Music beds
- Sound effects
- Generated manifests

#### Background Worker

Handles:

- Book import
- EPUB parsing
- Chapter extraction
- Reading-time calculation
- Metadata normalization
- Soundscape assignment
- Search indexing
- Cover/image processing

---

## 7. Data Model

Use this as the baseline schema. Adapt as needed, but preserve the intent.

### users

- id
- email
- display_name
- auth_provider_id
- role
- created_at
- updated_at

Roles:

- user
- admin
- content_manager

### books

- id
- title
- slug
- subtitle
- description
- language
- source
- source_id
- gutenberg_id
- public_domain_status
- publication_year
- cover_url
- epub_url
- html_url
- status
- created_at
- updated_at

Statuses:

- draft
- processing
- review
- published
- archived

### authors

- id
- name
- birth_year
- death_year
- description

### book_authors

- book_id
- author_id

### episodes

- id
- book_id
- title
- order_index
- chapter_number
- start_location
- end_location
- estimated_minutes
- summary
- mood_tags
- soundscape_profile_id
- created_at
- updated_at

### reading_progress

- id
- user_id
- book_id
- episode_id
- location
- percent_complete
- completed
- last_read_at
- created_at
- updated_at

### user_library

- id
- user_id
- book_id
- status
- favorited
- added_at
- updated_at

Statuses:

- want_to_read
- reading
- completed
- abandoned

### soundscape_profiles

- id
- name
- slug
- mood
- description
- default_intensity
- created_at
- updated_at

### soundscape_layers

- id
- profile_id
- audio_asset_id
- layer_type
- volume_default
- loop
- start_offset
- created_at
- updated_at

Layer types:

- ambience
- music
- sfx

### audio_assets

- id
- name
- slug
- type
- file_url
- duration_seconds
- license
- attribution
- source_url
- commercial_use_allowed
- modification_allowed
- created_at
- updated_at

### admin_audit_logs

- id
- actor_user_id
- action
- entity_type
- entity_id
- metadata_json
- created_at

---

## 8. API Design

Use REST or typed server actions consistently. If REST is used, follow these baseline endpoints.

### Book APIs

```http
GET /api/books
GET /api/books/:slug
GET /api/books/:slug/episodes
GET /api/search?q=dracula
```

### Reader APIs

```http
GET /api/reader/books/:bookId
GET /api/progress/:bookId
POST /api/progress
POST /api/library
PATCH /api/library/:bookId
DELETE /api/library/:bookId
```

### Soundscape APIs

```http
GET /api/soundscapes/:profileId
GET /api/audio-assets/:id/signed-url
```

### Admin APIs

```http
POST /api/admin/books
PATCH /api/admin/books/:id
POST /api/admin/books/:id/import
POST /api/admin/books/:id/publish
POST /api/admin/audio-assets
POST /api/admin/soundscape-profiles
```

### API Rules

- Validate all inputs with Zod or equivalent.
- Never trust frontend authorization.
- Enforce user ownership on progress/library records.
- Enforce role-based access for admin APIs.
- Return consistent error shapes.
- Do not leak internal IDs unnecessarily.
- Log meaningful server-side errors without exposing secrets.

---

## 9. Security Rules

Security is a core requirement, not a later cleanup task.

### Authentication

- Use managed auth or a mature auth library.
- Require secure session handling.
- Email verification should be enabled when practical.
- Support MFA-ready architecture even if MFA is not required in MVP.
- Rate-limit auth-sensitive endpoints.

### Authorization

- Use server-side role-based access control.
- Roles: `user`, `content_manager`, `admin`.
- Users may only access and modify their own progress/library.
- Admin/content routes must be protected on the server.
- Never rely only on hidden UI elements for security.

### Input Validation

- Validate all request bodies, route params, and query params.
- Validate file uploads by type, size, and content where possible.
- Sanitize any HTML or rich text before rendering.
- Avoid `dangerouslySetInnerHTML`; if unavoidable, sanitize first.

### File Upload and Content Processing

- Limit file sizes.
- Only allow approved MIME types.
- Store files outside the application filesystem.
- Treat uploaded/imported EPUB/HTML as untrusted content.
- Sanitize parsed HTML.
- Do not execute scripts from book content.
- Strip unsafe inline event handlers and script tags.

### Web Security

- HTTPS everywhere in production.
- Secure cookies.
- CSRF protection if using cookie-based auth.
- Strict CORS.
- Content Security Policy.
- Secure headers.
- No secrets in frontend bundles.
- No secrets in logs.
- No credentials committed to Git.

### Dependency and Supply Chain

- Commit lockfiles.
- Use Dependabot or Renovate.
- Run dependency scanning in CI.
- Do not add large or obscure dependencies without justification.
- Prefer actively maintained packages.

### Audio Licensing

Every audio asset must track:

- Source
- License
- Attribution
- Commercial-use permission
- Modification permission
- Redistribution permission

Do not use random internet audio.

---

## 10. Accessibility and UX Standards

### Reader Experience

The reader must be comfortable on:

- Desktop
- Laptop
- Tablet
- Phone

Reader controls should include:

- Font size
- Font family or readable default
- Line spacing
- Theme: light, dark, sepia
- Chapter/episode navigation
- Progress indicator
- Soundscape toggle

### Accessibility

- Use semantic HTML.
- All controls must be keyboard-accessible.
- Maintain visible focus states.
- Meet reasonable color contrast.
- Provide labels for icon buttons.
- Do not rely on sound alone for critical state.
- Respect reduced-motion preferences where animations exist.

### Mobile UX

- Mobile reader is first-class.
- Controls should not cover text.
- Audio controls should be reachable but not intrusive.
- Avoid layout shift during reading.
- Remember reader preferences.

---

## 11. Agile Development Process

### Project Management

Use GitHub Projects, Linear, Jira, or similar.

Recommended lightweight setup:

- GitHub Issues
- GitHub Projects
- GitHub Pull Requests
- Notion or Markdown docs for product/architecture notes
- Figma for designs

### Sprint Cadence

Use 2-week sprints.

Ceremonies:

- Sprint planning
- Async daily standup
- Backlog refinement
- Sprint review/demo
- Retrospective

### Epics

Create and maintain these epics:

1. Product Foundation
2. Authentication and Users
3. Book Catalog and Metadata
4. Reader Experience
5. Soundscape Experience
6. Progress and User Library
7. Admin/Content Operations
8. Security and Compliance
9. Testing and QA
10. Deployment and Observability
11. Beta Launch

### Ticket Format

Every ticket should include:

- Title
- User story
- Acceptance criteria
- Technical notes
- Design link, if applicable
- Dependencies
- QA notes
- Priority
- Estimate

### Definition of Ready

A ticket is ready when:

- Goal is clear
- Acceptance criteria exist
- Dependencies are known
- Design exists or is not needed
- API/data impact is understood

### Definition of Done

A ticket is done when:

- Code is merged to main
- Tests added or updated
- Acceptance criteria met
- Security considerations addressed
- Responsive behavior checked
- Error states handled
- Analytics event added where useful
- Docs updated if needed
- Deployed to staging
- QA passed

---

## 12. Version Control Rules

### Branching

Use trunk-based development with short-lived feature branches.

Branch examples:

```text
feature/book-reader
feature/soundscape-player
feature/progress-api
bugfix/mobile-reader-scroll
chore/setup-ci
```

Rules:

- `main` must always be deployable.
- All changes go through pull requests.
- CI must pass before merge.
- Prefer small PRs.
- Do not keep long-running branches.
- Squash or rebase according to project convention.

### Commit Convention

Use conventional commits:

```text
feat: add reader progress API
fix: prevent duplicate library entries
chore: add eslint config
docs: add content ingestion guide
test: add progress API tests
refactor: simplify soundscape state
```

### Pull Request Requirements

Every PR should include:

- Summary
- Screenshots/video for UI changes
- Testing performed
- Risks/rollback notes for larger changes
- Linked ticket

---

## 13. Testing Strategy

### Unit Tests

Cover:

- Reading-time calculation
- Slug generation
- Progress percentage calculation
- Soundscape profile mapping
- Authorization utilities
- Sanitization helpers

### Integration Tests

Cover:

- Books API
- Episodes API
- Progress API
- Library API
- Admin API
- Auth-protected endpoints

### End-to-End Tests

Use Playwright for critical flows:

1. User signs up/signs in.
2. User browses books.
3. User opens book detail page.
4. User starts reading.
5. User changes reader settings.
6. User starts/stops soundscape.
7. User progress saves.
8. User resumes reading.
9. Admin publishes a book.

### Manual QA

Test:

- Chrome desktop
- Safari desktop
- Firefox desktop
- Chrome Android
- Safari iOS
- Tablet widths
- Slow network
- Dark mode
- Signed-out behavior
- Signed-in behavior
- Admin behavior
- Audio autoplay restrictions

### Accessibility QA

Check:

- Keyboard navigation
- Screen reader labels
- Focus states
- Color contrast
- Reduced motion
- Reader controls on mobile

---

## 14. CI/CD Requirements

Every pull request should run:

- Install dependencies
- Type check
- Lint
- Format check
- Unit tests
- Build
- Dependency/security scan
- Database migration validation, if applicable

On merge to `main`:

- Deploy to staging
- Run smoke tests

For production release:

- Tag version
- Run migrations
- Deploy production
- Run post-deploy smoke tests
- Confirm monitoring is healthy

---

## 15. Environments

Use four environments:

### Local

- Developer machine
- Local or development database
- Seeded sample content

### Preview

- Per pull request
- Temporary URL for review

### Staging

- Production-like
- Separate database and storage
- Used for final QA

### Production

- Real users
- Backups enabled
- Monitoring enabled
- Error tracking enabled
- Production auth and storage

---

## 16. Observability

### Error Tracking

Use Sentry or equivalent.

Track:

- Frontend errors
- Backend errors
- Failed book loads
- Failed audio loads
- Auth errors
- Admin import failures

### Product Analytics

Track key events:

- `signup_completed`
- `book_viewed`
- `reading_started`
- `episode_completed`
- `soundscape_started`
- `soundscape_stopped`
- `soundscape_intensity_changed`
- `book_saved`
- `reading_resumed`
- `book_completed`

### Operational Metrics

Track:

- API latency
- Error rate
- Database query performance
- Reader load time
- Audio load time
- Storage failures
- Background job failures

---

## 17. Roadmap

### Phase 0: Discovery and Planning

Deliverables:

- Product brief
- MVP scope
- User personas
- Technical architecture
- Initial wireframes
- Book shortlist
- Audio licensing plan
- Project board

### Sprint 1: Foundation

Deliverables:

- Repository setup
- Next.js app
- TypeScript
- Tailwind/shadcn
- Database connection
- Prisma setup
- Auth provider selected
- CI pipeline started
- Landing page shell

### Sprint 2: Catalog

Deliverables:

- Book/author schema
- Seed data for first books
- Homepage
- Book cards
- Book detail page
- Basic search/filtering
- Responsive layout

### Sprint 3: Reader

Deliverables:

- EPUB/HTML loading
- Reader page
- Chapter navigation
- Theme controls
- Typography controls
- Mobile reader
- Initial progress model

### Sprint 4: Progress and Library

Deliverables:

- Save progress
- Resume progress
- Continue Reading row
- Save to Library
- User library page
- Basic stats

### Sprint 5: Soundscape MVP

Deliverables:

- Audio asset storage
- Soundscape profiles
- Reader-integrated audio player
- Volume control
- Intensity control
- Episode-to-soundscape mapping
- First soundscape set

### Sprint 6: Admin and Content Operations

Deliverables:

- Admin dashboard
- Create/edit book
- Upload cover
- Upload EPUB/HTML
- Assign soundscape
- Publish/unpublish
- Preview mode
- Admin audit logging

### Sprint 7: Hardening

Deliverables:

- Security pass
- API validation
- Rate limiting
- Error handling
- Analytics
- Sentry
- Accessibility pass
- Cross-browser QA
- Performance pass

### Sprint 8: Private Beta

Deliverables:

- Production deployment
- Invite-only beta
- Feedback form
- Bug triage workflow
- Usage analytics dashboard
- Beta launch checklist

---

## 18. Production Readiness Checklist

Before public launch, confirm:

- HTTPS enabled
- Auth tested
- Admin routes protected
- User data access controls tested
- Database backups enabled
- Storage backup/versioning considered
- Rate limits enabled
- Error tracking enabled
- Analytics enabled
- Privacy policy published
- Terms of service published
- Content/source attribution implemented
- Audio license records complete
- Accessibility pass complete
- Mobile QA complete
- Performance budget met
- Incident response process documented

### Performance Targets

- Homepage loads quickly on normal mobile networks.
- Book detail page feels instant after first load.
- Reader opens within a few seconds.
- Audio starts promptly after user interaction.
- Avoid unnecessary client-side JavaScript.
- Optimize images and audio files.
- Lazy-load heavy reader/audio components.

---

## 19. Future Expansion

### User-Submitted Ebooks

Only add after MVP validation.

Requirements:

- File upload
- EPUB/PDF/TXT support decision
- Malware scanning
- Copyright responsibility terms
- Private storage
- Parsing queue
- User-only access controls
- Metadata extraction
- Failed import handling
- User deletion/export controls

### AI Features

Potential later features:

- Chapter recaps
- Spoiler-safe character tracker
- Mood tagging
- Soundscape recommendations
- Reading plan generation
- Plain-language explanations
- Narration generation
- Dynamic scene timeline

### Social Features

Potential later features:

- Book clubs
- Group reading progress
- Spoiler-safe comments
- Shared annotations
- Reading challenges
- Friend activity

### Monetization

Do not monetize until the experience is validated.

Potential models:

- Free public-domain reading
- Premium soundscape packs
- Premium narration
- Offline downloads
- Study mode
- Custom uploaded-book soundscapes
- Classroom accounts
- Book club tools

Charge for the experience layer, not simply access to public-domain text.

---

## 20. Coding Standards

### General

- Use TypeScript.
- Prefer explicit types at boundaries.
- Avoid `any` unless justified.
- Keep components small and focused.
- Keep business logic outside UI components when practical.
- Prefer server-side validation even when client validation exists.
- Write clear names over clever abstractions.
- Avoid premature abstraction.

### Frontend

- Use accessible components.
- Use semantic HTML.
- Keep reader UI distraction-free.
- Make mobile layouts first-class.
- Handle loading, empty, and error states.
- Avoid blocking the reader with unnecessary UI.
- Persist reader preferences where appropriate.

### Backend

- Validate every input.
- Enforce authorization server-side.
- Use database transactions where consistency matters.
- Use pagination for list endpoints.
- Avoid N+1 queries.
- Keep secrets in environment variables.
- Do not expose stack traces to clients.

### Database

- Use migrations.
- Add indexes for common lookups.
- Keep slugs unique.
- Enforce user/content ownership constraints.
- Prefer soft-delete/archive for content entities when useful.

### Error Handling

- Show helpful user-facing messages.
- Log detailed server-side errors.
- Do not leak secrets or internal implementation details.
- Make failed imports recoverable.

---

## 21. Assistant Behavior Rules

When working on this repository, Codex or any coding assistant should:

1. Preserve the MVP scope unless explicitly instructed otherwise.
2. Prefer small, reviewable changes.
3. Update or create tests for behavior changes.
4. Run the relevant test/lint/build commands when possible.
5. Explain tradeoffs when choosing architecture or dependencies.
6. Avoid adding unnecessary services.
7. Ask before adding paid third-party services.
8. Keep security and authorization in every backend change.
9. Keep accessibility in every UI change.
10. Update documentation when changing project structure or workflows.
11. Never claim a feature is production-ready without tests and basic hardening.
12. Never add copyrighted or unlicensed book/audio assets.
13. Never imply official Project Gutenberg affiliation.
14. Treat imported book files and user uploads as untrusted input.
15. Prefer polished, curated user experience over broad, low-quality catalog expansion.

---

## 22. Suggested Initial Repository Files

Create these early:

```text
README.md
CODEX.md
AGENTS.md
docs/
  product-brief.md
  architecture.md
  security.md
  content-ingestion.md
  audio-licensing.md
  agile-process.md
  release-checklist.md
  qa-checklist.md
```

If using Codex, `AGENTS.md` can either duplicate this file or simply say:

```md
# AGENTS.md

Follow the project instructions in ./CODEX.md.
```

---

## 23. North Star Metric

The MVP North Star metric is:

> Weekly completed reading episodes with soundscape enabled.

This captures both reading engagement and the product’s unique differentiator.

Secondary metrics:

- Signup-to-first-reading conversion
- Percentage of readers who start a soundscape
- Episode completion rate
- Return rate after one day
- Return rate after seven days
- Books saved per user
- Average reading session duration

---
# AGENTS.md Testing Requirements Addendum

Add this section to your `AGENTS.md` file to require dedicated tests for every page, component, backend service, API route, and feature Codex builds.

```md
## Testing Requirements

Before implementing or modifying any feature, page, component, API route, backend service, utility, or database-related logic, Codex must also create or update dedicated tests for that work.

Testing is not optional. A feature is not considered complete unless its relevant tests are included and passing.

### General Testing Rules

- Every new page must have a dedicated test file.
- Every new reusable component must have a dedicated test file.
- Every new backend service, API route, server action, worker job, parser, ingestion utility, or database-access helper must have dedicated tests.
- Every bug fix must include a regression test that fails before the fix and passes after the fix.
- Every meaningful behavior change must update existing tests or add new ones.
- Tests should validate user-visible behavior, security boundaries, error states, and edge cases.
- Do not only test happy paths.
- Do not skip, disable, or weaken existing tests to make a change pass unless explicitly instructed and justified.

### Frontend Testing

Use component and page tests for all frontend work.

Required coverage for pages:

- Page renders successfully.
- Main heading/content is visible.
- Loading state is handled if applicable.
- Empty state is handled if applicable.
- Error state is handled if applicable.
- Authenticated and unauthenticated behavior is handled if applicable.
- User interactions work as expected.
- Accessibility basics are checked where reasonable.

Required coverage for components:

- Component renders with required props.
- Important variants/states render correctly.
- User interactions fire expected behavior.
- Disabled/loading/error states work when applicable.
- Invalid or missing optional data does not crash the component.
- Accessibility labels, roles, and keyboard behavior are tested where relevant.

Preferred tools:

- Vitest or Jest for unit/component tests.
- React Testing Library for React components and pages.
- Playwright for end-to-end flows.

### Backend Testing

Backend services, API routes, and server-side logic must have tests covering:

- Successful requests.
- Invalid input.
- Unauthorized access.
- Forbidden access.
- Missing resources.
- Database errors or downstream service failures where practical.
- Data ownership boundaries, especially user-specific resources.
- Input validation and sanitization.
- Rate-limit or abuse-sensitive behavior where applicable.

Backend tests should not rely on production services or production data.

Use mocked dependencies, test databases, fixtures, or factories as appropriate.

### API and Authorization Testing

For every protected endpoint or server action, include tests proving:

- Signed-out users cannot access protected resources.
- Regular users cannot access admin-only functionality.
- Users cannot read or modify another user’s data.
- Invalid request bodies are rejected.
- Sensitive fields are not leaked in responses.

This is especially important for:

- Reading progress.
- User library.
- Uploaded books.
- Admin content management.
- Audio asset management.
- User profile data.
- Future payment/subscription features.

### Database and Migration Testing

When changing schema, models, or database behavior:

- Add or update tests for the affected queries/services.
- Confirm required fields, defaults, uniqueness, and relations behave correctly.
- Confirm cascade/delete behavior where relevant.
- Do not modify migrations casually after they have been committed unless the project is still in a local-only pre-release state.

### Content Ingestion and Ebook Processing Tests

Any book ingestion, EPUB parsing, chapter extraction, metadata normalization, reading-time calculation, or soundscape assignment logic must include tests for:

- Valid book input.
- Missing metadata.
- Malformed or incomplete files.
- Long chapters.
- Empty chapters.
- Duplicate titles/slugs.
- Unsupported file types.
- Failed parsing.
- Safe error handling.

### Soundscape and Audio Tests

Any audio or soundscape feature must include tests for:

- Correct soundscape profile loading.
- Correct episode-to-soundscape mapping.
- Play/pause state behavior.
- Volume/intensity controls.
- Missing audio assets.
- Failed audio loading.
- User preference persistence where applicable.

### End-to-End Test Requirements

Important user journeys should have Playwright end-to-end tests.

MVP critical flows:

- User can sign up or sign in.
- User can browse the library.
- User can open a book detail page.
- User can start reading.
- User can change reader settings.
- User can play/pause a soundscape.
- User progress is saved.
- User can resume from Continue Reading.
- User can save a book to their library.
- Admin can create or edit book metadata.
- Admin can publish or unpublish a book.

### Test File Location Convention

Follow the project’s established convention. If no convention exists yet, use one of these patterns consistently:

Frontend components:

```txt
ComponentName.tsx
ComponentName.test.tsx
```

Pages/routes:

```txt
page.tsx
page.test.tsx
```

Backend services:

```txt
service-name.ts
service-name.test.ts
```

Utilities:

```txt
utility-name.ts
utility-name.test.ts
```

End-to-end tests:

```txt
tests/e2e/
```

### Minimum Completion Standard

Before marking work complete, Codex must run the relevant test commands when possible and report the result.

At minimum, Codex should run:

```bash
npm run test
npm run lint
npm run typecheck
```

If the project includes end-to-end tests, also run:

```bash
npm run test:e2e
```

If these scripts do not exist yet, Codex should create appropriate scripts before proceeding with feature work.

### Pull Request / Change Summary Expectations

Every completed change should include a testing summary:

```txt
Testing:
- Added unit tests for ...
- Added component tests for ...
- Added API/service tests for ...
- Added/updated E2E tests for ...
- Ran npm run test: passing
- Ran npm run lint: passing
- Ran npm run typecheck: passing
```

If any test could not be run, Codex must clearly state why.

### Do Not Proceed Without Tests

Codex must not consider a feature complete if it lacks relevant tests.

If a requested change is difficult to test, Codex should still add the best practical test coverage and explain any remaining limitations.
```

Recommended placement: put this under an `# Engineering Standards` heading in `AGENTS.md`, or directly after the architecture and MVP scope sections so Codex treats it as a core project rule.

```
---

## 24. Final Product Principle

StoryScape should make readers feel:

- “I can start this.”
- “I understand what is happening.”
- “This feels atmospheric.”
- “I want to read one more episode.”
- “I can come back later without feeling lost.”

Every feature should support one of those outcomes.