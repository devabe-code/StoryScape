import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, Clock, Headphones, Library } from "lucide-react";
import { BookCover } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { books, getBook } from "@/lib/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[340px_1fr]">
        <div>
          <BookCover book={book} />
          <button
            className="focus-ring mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-ink/15 bg-white/55 text-sm font-semibold hover:bg-white"
            type="button"
          >
            <Bookmark size={17} aria-hidden="true" />
            Save to Library
          </button>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
            {book.author}
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight">{book.title}</h1>
          <p className="mt-2 text-sm text-ink/60">First published {book.year}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/74">{book.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {book.moodTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-moss/10 px-3 py-1.5 text-sm font-medium text-moss"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-ink/10 bg-white/55 p-4">
              <Library className="mb-3 text-moss" size={20} aria-hidden="true" />
              <p className="font-semibold">{book.episodes.length} episodes</p>
              <p className="mt-1 text-sm text-ink/62">Chapter-based sessions</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white/55 p-4">
              <Clock className="mb-3 text-moss" size={20} aria-hidden="true" />
              <p className="font-semibold">{book.episodes[0].estimatedMinutes} min start</p>
              <p className="mt-1 text-sm text-ink/62">Episode 1 estimate</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white/55 p-4">
              <Headphones className="mb-3 text-moss" size={20} aria-hidden="true" />
              <p className="font-semibold">{book.episodes[0].soundscape.name}</p>
              <p className="mt-1 text-sm text-ink/62">Assigned profile</p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="font-serif text-3xl">Episodes</h2>
            <div className="mt-4 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white/55">
              {book.episodes.map((episode) => (
                <Link
                  className="focus-ring grid gap-4 p-4 hover:bg-white sm:grid-cols-[1fr_auto]"
                  href={`/read/${book.slug}/${episode.number}`}
                  key={episode.number}
                >
                  <div>
                    <p className="text-sm font-semibold text-ember">Episode {episode.number}</p>
                    <h3 className="mt-1 font-serif text-2xl">{episode.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
                      {episode.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 self-center text-sm font-semibold text-moss">
                    Read <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
