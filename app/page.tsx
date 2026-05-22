import Link from "next/link";
import { ArrowRight, Clock, Headphones, Play } from "lucide-react";
import { BookCard, BookCover } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { ButtonLink, Card, Container, SectionHeader } from "@/components/ui";
import { books, continueReading } from "@/lib/books";

export default function HomePage() {
  const featured = books[0];
  const savedCount = books.filter((book) => book.status !== "available").length;

  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <Container as="section" className="grid gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
            Public-domain reading, re-shaped
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] text-ink sm:text-6xl">
            StoryScape
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
            Classic books become episode-based reading sessions with saved progress and subtle
            soundscapes that support the mood without stealing the page.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/read/${featured.slug}/1`} size="lg">
              <Play size={18} aria-hidden="true" />
              Start Dracula
            </ButtonLink>
            <ButtonLink href="/books" size="lg" variant="secondary">
              Browse Library
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <Card as="aside" className="p-4" variant="elevated">
          <div className="grid gap-4 sm:grid-cols-[150px_1fr] lg:grid-cols-1">
            <BookCover book={featured} />
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-ember">Featured episode</p>
                <h2 className="mt-1 font-serif text-3xl">{featured.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/72">{featured.episodes[0].summary}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-paper p-3">
                  <Clock className="mb-2 text-moss" size={18} aria-hidden="true" />
                  {featured.episodes[0].estimatedMinutes} minutes
                </div>
                <div className="rounded-md bg-paper p-3">
                  <Headphones className="mb-2 text-moss" size={18} aria-hidden="true" />
                  {featured.episodes[0].soundscape.name}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <section className="border-y border-ink/10 bg-[#edf1eb]">
        <Container className="grid gap-4 py-6 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold">{books.length}</p>
            <p className="text-sm text-ink/65">Curated classics</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">{savedCount}</p>
            <p className="text-sm text-ink/65">In your library</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Subtle</p>
            <p className="text-sm text-ink/65">Soundscapes by default</p>
          </div>
        </Container>
      </section>

      {continueReading ? (
        <Container as="section" className="py-10">
          <SectionHeader
            action={
              <Link
                className="focus-ring rounded-sm text-sm font-semibold text-moss hover:text-ink"
                href="/books"
              >
                View all
              </Link>
            }
            className="mb-4"
            heading="Continue Reading"
          />
          <Link
            className="focus-ring grid gap-4 rounded-lg border border-ink/10 bg-white/60 p-4 shadow-sm hover:bg-white sm:grid-cols-[96px_1fr_auto]"
            href={`/read/${continueReading.slug}/1`}
          >
            <BookCover book={continueReading} compact />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ember">
                {continueReading.progress}% complete
              </p>
              <h3 className="mt-1 font-serif text-2xl">{continueReading.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
                {continueReading.episodes[0].summary}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-ember"
                  style={{ width: `${continueReading.progress}%` }}
                />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 self-center text-sm font-semibold text-moss">
              Resume <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        </Container>
      ) : null}

      <Container as="section" className="pb-12">
        <SectionHeader
          className="mb-5"
          heading="Curated Library"
          supportingText="A small catalog chosen for atmosphere, pacing, and provenance."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Container>
    </main>
  );
}
