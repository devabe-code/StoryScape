import { ArrowRight, BookOpen, Clock, Headphones, Play } from "lucide-react";
import { BookCard, BookCover } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { Badge, ButtonLink, Card, Container, SectionHeader } from "@/components/ui";
import { books } from "@/lib/books";

export default function BooksPage() {
  const featured = books[0];
  const gothicBooks = books.filter((book) =>
    book.moodTags.some((tag) => ["Castle Night", "Storm", "Fog", "Laboratory"].includes(tag))
  );
  const shortStarts = books.filter((book) => book.episodes[0].estimatedMinutes <= 18);

  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-paper/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${featured.coverTone} opacity-50`} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#18211f_0%,rgba(24,33,31,0.92)_42%,rgba(24,33,31,0.42)_100%)]" />
        <Container className="relative grid gap-8 py-12 lg:grid-cols-[1fr_280px] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
              Featured Classics
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
              Curated classics for atmospheric reading
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-paper/75">
              Browse StoryScape like a calm streaming shelf: featured public-domain titles,
              episode-sized starts, mood rails, and subtle soundscape pairings.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.moodTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/read/${featured.slug}/1`} size="lg">
                <Play size={18} aria-hidden="true" />
                Start Reading
              </ButtonLink>
              <ButtonLink href={`/books/${featured.slug}`} size="lg" variant="secondary">
                View Details
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
          <div className="mx-auto w-56 lg:w-full">
            <BookCover book={featured} />
          </div>
        </Container>
      </section>

      <Container as="section" className="py-10">
        <SectionHeader
          eyebrow="Continue Reading"
          heading="Resume your current episode"
          supportingText="Progress-aware rails should stay near the top once real accounts and saved reading state are connected."
          tone="inverse"
        />
        <Card className="mt-5 grid gap-4 border-paper/10 bg-paper/10 p-4 text-paper sm:grid-cols-[96px_1fr_auto]">
          <BookCover book={featured} compact />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-brass">Episode 1 · 18% complete</p>
            <h2 className="mt-1 font-serif text-3xl">{featured.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-paper/68">
              TODO: Replace this sample progress card with user-owned reading progress.
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-paper/15">
              <div className="h-full w-[18%] rounded-full bg-ember" />
            </div>
          </div>
          <ButtonLink className="self-center" href={`/read/${featured.slug}/1`}>
            Resume Episode
          </ButtonLink>
        </Card>
      </Container>

      <Container as="section" className="pb-10">
        <SectionHeader
          eyebrow="Curated shelf"
          heading="Gothic Nights"
          supportingText="Poster-forward rails group books by atmosphere instead of dumping every title into a database-style grid."
          tone="inverse"
        />
        <div className="-mx-4 mt-5 flex gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          {gothicBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Container>

      <section className="border-y border-paper/10 bg-[#202b28]">
        <Container className="py-10">
          <SectionHeader
            eyebrow="Start fast"
            heading="Start in under 20 minutes"
            supportingText="Short first episodes make classic books feel easier to begin."
            tone="inverse"
          />
          <div className="-mx-4 mt-5 flex gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
            {shortStarts.map((book) => (
              <Card
                as="article"
                className="w-72 shrink-0 border-paper/10 bg-paper/10 p-4 text-paper"
                key={book.slug}
              >
                <div className="flex items-start gap-4">
                  <BookCover book={book} compact />
                  <div>
                    <h3 className="font-serif text-2xl">{book.title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-paper/65">
                      <Clock size={15} aria-hidden="true" />
                      {book.episodes[0].estimatedMinutes} min start
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-paper/65">
                      <Headphones size={15} aria-hidden="true" />
                      {book.episodes[0].soundscape.name}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Container as="section" className="py-10">
        <SectionHeader
          eyebrow="All titles"
          heading="Full curated shelf"
          supportingText="This can become a filterable catalog later, but the MVP should still read like an editorial shelf."
          tone="inverse"
        />
        <div className="-mx-4 mt-5 flex gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Container>

      <Container as="section" className="pb-12">
        <Card className="grid gap-4 border-paper/10 bg-paper/10 p-5 text-paper md:grid-cols-3">
          <div>
            <BookOpen className="mb-3 text-brass" size={22} aria-hidden="true" />
            <p className="font-semibold">Public-domain only</p>
            <p className="mt-2 text-sm text-paper/65">
              Every title needs provenance before launch.
            </p>
          </div>
          <div>
            <Clock className="mb-3 text-brass" size={22} aria-hidden="true" />
            <p className="font-semibold">Episode-sized starts</p>
            <p className="mt-2 text-sm text-paper/65">Each first chapter shows estimated time.</p>
          </div>
          <div>
            <Headphones className="mb-3 text-brass" size={22} aria-hidden="true" />
            <p className="font-semibold">Mood-led discovery</p>
            <p className="mt-2 text-sm text-paper/65">Soundscapes guide rails and detail pages.</p>
          </div>
        </Card>
      </Container>
    </main>
  );
}
