import { ArrowRight, BookOpen, Clock3, Headphones, Library, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout";
import { Badge, ButtonLink, Card, Container, SectionHeader } from "@/components/ui";
import { books } from "@/lib/books";

type LandingBook = {
  author: string;
  coverTone: string;
  mood: string;
  slug: string;
  title: string;
};

type LandingStep = {
  description: string;
  icon: typeof BookOpen;
  title: string;
};

type SoundscapePreview = {
  layers: string[];
  mood: string;
  name: string;
};

type LandingContent = {
  books: LandingBook[];
  steps: LandingStep[];
  soundscape: SoundscapePreview | null;
};

export const defaultLandingContent: LandingContent = {
  // TODO: Replace landing placeholders with CMS-backed catalog teasers once Sprint 2 data exists.
  books: books.slice(0, 4).map((book) => ({
    author: book.author,
    coverTone: book.coverTone,
    mood: book.moodTags[0] ?? "Atmospheric",
    slug: book.slug,
    title: book.title,
  })),
  // TODO: Revisit this copy when onboarding and auth flows exist.
  steps: [
    {
      description: "Choose a curated public-domain classic with provenance and a clear mood.",
      icon: Library,
      title: "Pick a classic",
    },
    {
      description: "Read in chapter-sized sessions with estimated time and visible progress.",
      icon: Clock3,
      title: "Start an episode",
    },
    {
      description: "Add subtle ambience matched to the scene without turning reading into noise.",
      icon: Headphones,
      title: "Set the atmosphere",
    },
  ],
  // TODO: Replace this shell with licensed audio asset metadata in the soundscape sprint.
  soundscape: {
    layers: ["Low wind", "Distant thunder", "Stone hall hush"],
    mood: "A subtle, looped background for Dracula's opening journey.",
    name: "Castle Night",
  },
};

export const emptyLandingContent: LandingContent = {
  books: [],
  soundscape: null,
  steps: [],
};

export function LandingPage({ content = defaultLandingContent }: { content?: LandingContent }) {
  const hasBooks = content.books.length > 0;
  const hasSteps = content.steps.length > 0;
  const hasSoundscape = Boolean(content.soundscape);

  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-paper/10 bg-ink">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="h-full w-full bg-[radial-gradient(circle_at_72%_22%,rgba(179,92,57,0.38),transparent_26%),linear-gradient(90deg,#18211f_0%,rgba(24,33,31,0.9)_38%,rgba(24,33,31,0.34)_78%),linear-gradient(135deg,#18211f_0%,#4a6358_100%)]" />
        </div>
        <Container className="relative grid min-h-[calc(100vh-4rem)] gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
              Now previewing: StoryScape
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Classic books, broken into bingeable episodes with immersive soundscapes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/78">
              StoryScape turns public-domain literature into a lighter reading habit: curated books,
              episode-sized chapters, saved progress, and optional ambience that helps each scene
              settle in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="bg-paper text-ink hover:bg-brass" href="/books" size="lg">
                Browse placeholder library
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                className="border-paper/30 text-paper hover:bg-paper/10"
                href="/read/dracula/1"
                size="lg"
                variant="secondary"
              >
                Preview episode one
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[28rem]">
            <div className="absolute right-0 top-4 hidden h-[25rem] w-[18rem] rotate-6 rounded-lg bg-gradient-to-br from-ember via-brass to-moss opacity-60 blur-sm lg:block" />
            <div className="relative ml-auto grid max-w-xl grid-cols-[0.76fr_1fr] gap-4">
              <div className="mt-20 hidden space-y-4 sm:block">
                {content.books.slice(1, 3).map((book) => (
                  <div
                    className="aspect-[3/4] rounded-lg border border-paper/15 shadow-soft"
                    key={book.title}
                  >
                    <div className={`h-full rounded-lg bg-gradient-to-br ${book.coverTone} p-4`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/65">
                        {book.mood}
                      </p>
                      <p className="mt-20 font-serif text-2xl leading-tight">{book.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-paper/15 bg-paper/10 p-4 shadow-soft backdrop-blur">
                <div className="aspect-[3/4] rounded-md bg-gradient-to-br from-[#2b1f2d] via-[#593d45] to-[#9f6a4b] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
                    Featured placeholder
                  </p>
                  <h2 className="mt-32 font-serif text-5xl leading-none">Dracula</h2>
                  <p className="mt-3 max-w-56 text-sm leading-6 text-paper/75">
                    Episode cards, progress, and provenance will replace this shell as Sprint 2
                    catalog work lands.
                  </p>
                </div>
                <div className="mt-4 space-y-3 text-sm text-paper/78">
                  <div className="h-2 rounded-full bg-paper/15">
                    <div className="h-full w-[18%] rounded-full bg-ember" />
                  </div>
                  <p>18% sample progress</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-12">
        <SectionHeader
          eyebrow="Product promise"
          heading="A smaller, more atmospheric way into classic books"
          supportingText="The MVP is not a giant catalog. It is a curated path from choosing a book to finishing one more episode, with ambience as a quiet companion."
          tone="inverse"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Public-domain texts only",
            "Episode-based progress",
            "Subtle soundscapes by default",
          ].map((promise) => (
            <Card className="border-paper/10 bg-paper/10 p-5 text-paper" key={promise}>
              <Sparkles className="mb-4 text-ember" size={20} aria-hidden="true" />
              <p className="font-semibold">{promise}</p>
            </Card>
          ))}
        </div>
      </Container>

      <section className="border-y border-paper/10 bg-[#202b28]">
        <Container className="py-12">
          <SectionHeader eyebrow="How it works" heading="Open, read, return" tone="inverse" />
          {hasSteps ? (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.steps.map((step) => {
                const Icon = step.icon;

                return (
                  <Card className="border-paper/10 bg-paper/10 p-5 text-paper" key={step.title}>
                    <Icon className="mb-4 text-moss" size={22} aria-hidden="true" />
                    <h3 className="font-serif text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-paper/68">{step.description}</p>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="mt-6 border-paper/10 bg-paper/10 p-5 text-paper" role="status">
              <p className="font-semibold">How-it-works placeholders are coming soon.</p>
              <p className="mt-2 text-sm text-paper/65">
                TODO: Replace this fallback when onboarding content is finalized.
              </p>
            </Card>
          )}
        </Container>
      </section>

      <Container as="section" className="py-12">
        <SectionHeader
          eyebrow="Book discovery rail"
          heading="Continue with a curated shelf"
          supportingText="StoryScape catalog pages should behave like focused streaming rails: featured titles first, then compact rows grouped by mood, progress, and reading intent."
          tone="inverse"
        />
        {hasBooks ? (
          <div className="-mx-4 mt-6 flex gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6">
            {content.books.map((book) => (
              <Card
                className="w-52 shrink-0 border-paper/10 bg-paper/10 p-3 text-paper transition-transform hover:-translate-y-1"
                key={book.title}
              >
                <div
                  className={`mb-4 aspect-[3/4] rounded-md bg-gradient-to-br ${book.coverTone}`}
                />
                <Badge>{book.mood}</Badge>
                <h3 className="mt-4 font-serif text-2xl">{book.title}</h3>
                <p className="mt-1 text-sm text-paper/62">{book.author}</p>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mt-6 border-paper/10 bg-paper/10 p-5 text-paper" role="status">
            <p className="font-semibold">Book discovery placeholders are coming soon.</p>
            <p className="mt-2 text-sm text-paper/65">
              TODO: Connect this section to curated catalog data in Sprint 2.
            </p>
          </Card>
        )}
      </Container>

      <section className="border-y border-paper/10 bg-[#202b28] text-paper">
        <Container className="grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Soundscape preview placeholder"
            heading="Atmosphere that stays behind the words"
            supportingText="Soundscapes should feel supportive, low-volume, and optional. The MVP preview starts with named profiles and simple layer metadata before real licensed audio is wired in."
            tone="inverse"
          />
          {hasSoundscape && content.soundscape ? (
            <Card className="border-paper/15 bg-paper/10 p-5 text-paper" variant="quiet">
              <p className="text-sm font-semibold text-brass">{content.soundscape.name}</p>
              <h3 className="mt-2 font-serif text-3xl">{content.soundscape.mood}</h3>
              <div className="mt-5 grid gap-3">
                {content.soundscape.layers.map((layer) => (
                  <div
                    className="flex items-center justify-between rounded-md bg-paper/10 px-3 py-2 text-sm"
                    key={layer}
                  >
                    <span>{layer}</span>
                    <span className="h-2 w-24 rounded-full bg-paper/20">
                      <span className="block h-full w-1/2 rounded-full bg-brass" />
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            <Card className="border-paper/15 bg-paper/10 p-5 text-paper" role="status">
              <p className="font-semibold">Soundscape preview placeholder is coming soon.</p>
              <p className="mt-2 text-sm text-paper/70">
                TODO: Replace this fallback when licensed audio profiles are available.
              </p>
            </Card>
          )}
        </Container>
      </section>

      <Container as="section" className="py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
          Ready for the first episode?
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Build the habit one atmospheric chapter at a time.
        </h2>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/books" size="lg">
            Browse library
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/read/dracula/1" size="lg" variant="secondary">
            Start Dracula
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
