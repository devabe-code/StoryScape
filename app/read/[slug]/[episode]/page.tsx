import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Menu, Settings } from "lucide-react";
import { SiteHeader } from "@/components/layout";
import { SoundscapePlayer } from "@/components/reader";
import { books, getBook, getEpisode } from "@/lib/books";

export function generateStaticParams() {
  return books.flatMap((book) =>
    book.episodes.map((episode) => ({
      slug: book.slug,
      episode: String(episode.number),
    }))
  );
}

export default async function ReaderPage({
  params,
}: {
  params: Promise<{ slug: string; episode: string }>;
}) {
  const { slug, episode } = await params;
  const episodeNumber = Number(episode);
  const book = getBook(slug);
  const currentEpisode = getEpisode(slug, episodeNumber);

  if (!book || !currentEpisode) {
    notFound();
  }

  const nextEpisode = book.episodes.find((item) => item.number === episodeNumber + 1);
  const percent =
    book.progress > 0
      ? book.progress
      : Math.min(100, Math.round((episodeNumber / book.episodes.length) * 100));

  return (
    <main className="min-h-screen bg-[#fbfaf5]">
      <SiteHeader />
      <div className="border-b border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-md px-2 text-sm font-semibold text-ink/70 hover:bg-ink/5 hover:text-ink"
            href={`/books/${book.slug}`}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Book
          </Link>
          <div className="min-w-0 text-center">
            <p className="truncate text-sm font-semibold">{book.title}</p>
            <p className="text-xs text-ink/55">
              Episode {currentEpisode.number} of {book.episodes.length}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="focus-ring grid h-10 w-10 place-items-center rounded-md hover:bg-ink/5"
              type="button"
              aria-label="Reader settings"
            >
              <Settings size={17} aria-hidden="true" />
            </button>
            <button
              className="focus-ring grid h-10 w-10 place-items-center rounded-md hover:bg-ink/5"
              type="button"
              aria-label="Episode menu"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="h-1 bg-ink/10">
          <div className="h-full bg-ember" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="mx-auto w-full max-w-3xl">
          <header className="border-b border-ink/10 pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
              Episode {currentEpisode.number}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              {currentEpisode.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-ink/62">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen size={16} aria-hidden="true" />
                {currentEpisode.estimatedMinutes} min read
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} aria-hidden="true" />
                Progress saved
              </span>
            </div>
          </header>

          <div className="mt-8 space-y-7 font-serif text-[1.35rem] leading-9 text-ink sm:text-[1.45rem] sm:leading-10">
            {currentEpisode.excerpt.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              This demo uses a short adapted excerpt placeholder while the ingestion worker is still
              future work. The next milestone will replace these samples with sanitized
              public-domain chapter text and stored provenance.
            </p>
          </div>

          <nav
            className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
            aria-label="Episode navigation"
          >
            <Link
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md border border-ink/15 px-4 text-sm font-semibold hover:bg-paper"
              href={`/books/${book.slug}`}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Episodes
            </Link>
            {nextEpisode ? (
              <Link
                className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-paper hover:bg-moss"
                href={`/read/${book.slug}/${nextEpisode.number}`}
              >
                Next Episode
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : (
              <Link
                className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-paper hover:bg-moss"
                href="/"
              >
                Back Home
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </nav>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <SoundscapePlayer profile={currentEpisode.soundscape} />
          <section className="rounded-lg border border-ink/10 bg-white/65 p-4">
            <p className="text-sm font-semibold text-ember">Reading Progress</p>
            <p className="mt-2 text-3xl font-semibold">{percent}%</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10">
              <div className="h-full rounded-full bg-ember" style={{ width: `${percent}%` }} />
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/65">
              Mock persistence is active for the demo surface. Real user progress will move behind
              auth and the database schema next.
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
