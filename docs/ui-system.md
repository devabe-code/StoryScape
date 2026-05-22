# UI System

The base UI system lives in `components/ui`. It is intentionally small and focused on Sprint 2 catalog pages and Sprint 3 reader pages.

## Exports

Import shared primitives from the barrel:

```tsx
import { Badge, Button, ButtonLink, Card, Container, SectionHeader } from "@/components/ui";
```

## Primitives

- `Button`: command button with `primary`, `secondary`, and `ghost` variants.
- `ButtonLink`: Next.js link with button styling.
- `Badge`: compact labels for mood, accent, or neutral metadata.
- `Card`: framed content surface for repeated items and tools.
- `Container`: responsive page-width wrapper.
- `SectionHeader`: consistent heading block with optional eyebrow, text, and action.

## Supporting Helper

`cn` in `lib/styles.ts` joins conditional class names. Keep it simple; do not add a styling dependency unless the project has a real composition need.

## Adding Components

When adding a new primitive:

1. Keep the API small and typed.
2. Use existing Tailwind tokens.
3. Include a colocated test file.
4. Export it from `components/ui/index.ts`.
5. Update `docs/ui-bible.md` when the component creates a new pattern.

## Local Validation

Run the full local gate before marking UI system changes complete:

```bash
npm run ci
```

Run E2E when page-level behavior or navigation changes:

```bash
npm run test:e2e
```
