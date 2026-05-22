import Link from "next/link";
import { ArrowRight, Clock, Headphones, Play } from "lucide-react";
import { BookCard, BookCover } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { books, continueReading } from "@/lib/books";

export default function HomePage() {
  const featured = books[0];
  const savedCount = books.filter((book) => book.status !== "available").length;

  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
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
            <Link
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 font-semibold text-paper hover:bg-moss"
              href={`/read/${featured.slug}/1`}
            >
              <Play size={18} aria-hidden="true" />
              Start Dracula
            </Link>
            <Link
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink/15 px-5 font-semibold text-ink hover:bg-white/60"
              href="/books"
            >
              Browse Library
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className="rounded-lg border border-ink/10 bg-white/55 p-4 shadow-soft">
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
        </aside>
      </section>

      <section className="border-y border-ink/10 bg-[#edf1eb]">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6">
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
        </div>
      </section>

      {continueReading ? (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-serif text-3xl">Continue Reading</h2>
            <Link
              className="focus-ring rounded-sm text-sm font-semibold text-moss hover:text-ink"
              href="/books"
            >
              View all
            </Link>
          </div>
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
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl">Curated Library</h2>
            <p className="mt-2 text-sm text-ink/65">
              A small catalog chosen for atmosphere, pacing, and provenance.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
