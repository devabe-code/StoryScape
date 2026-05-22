# StoryScape

StoryScape is an immersive reading platform that turns classic books into episode-based reading experiences.

## Current Milestone

This repo now contains the first static vertical slice:

- Homepage with a featured Dracula entry
- Curated book library
- Book detail pages
- Episode reader page
- Mock progress display
- Mock soundscape controls

The app is scaffolded with Next.js, React, TypeScript, and Tailwind CSS.

## Run Locally

Node.js is required. Once Node is installed:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Test Locally

```bash
npm run test
npm run lint
npm run typecheck
npm run test:e2e
```

Every page, reusable component, utility, API route, backend service, and future feature should include dedicated tests alongside the implementation.

## Pull Request Validation

CI runs on pull requests targeting `main` and on pushes to `main`. Before merge, CI must pass linting, formatting, type checking, tests, and the production build.

## Component Organization

Components are grouped by the part of the site they support:

- `components/layout`: shared shell and navigation components.
- `components/books`: catalog, book detail, and reusable book display components.
- `components/reader`: reader experience and soundscape controls.

Keep component tests colocated with the component they cover.

## Next Build Steps

1. Replace mock excerpts with sanitized public-domain chapter text.
2. Add Prisma and the baseline database schema from `AGENTS.md`.
3. Add authentication and user-owned progress/library records.
4. Add real audio asset metadata and licensed soundscape files.
5. Add tests for the main demo flow.
