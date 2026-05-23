import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Clock, Headphones, Play } from "lucide-react";
import { BookCover } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { Badge, Button, ButtonLink, Card, Container, SectionHeader } from "@/components/ui";
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

  const firstEpisode = book.episodes[0];
  const isInProgress = book.progress > 0;
  const relatedBooks = books.filter((item) => item.slug !== book.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-paper/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverTone} opacity-50`} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#18211f_0%,rgba(24,33,31,0.92)_46%,rgba(24,33,31,0.48)_100%)]" />
        <Container className="relative grid gap-8 py-12 lg:grid-cols-[280px_1fr] lg:items-center">
          <div className="mx-auto w-56 lg:w-full">
            <BookCover book={book} />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
              {book.author} · {book.year}
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl">{book.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {book.moodTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-paper/75">{book.description}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-paper/70">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} aria-hidden="true" />
                {firstEpisode.estimatedMinutes} min first episode
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Headphones size={16} aria-hidden="true" />
                {firstEpisode.soundscape.name}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} aria-hidden="true" />
                {book.episodes.length} episodes
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/read/${book.slug}/1`} size="lg">
                <Play size={18} aria-hidden="true" />
                {isInProgress ? "Continue Reading" : "Start Reading"}
              </ButtonLink>
              <Button
                className="border-paper/25 text-paper hover:bg-paper/10"
                size="lg"
                variant="secondary"
              >
                <Bookmark size={18} aria-hidden="true" />
                Save to Library
              </Button>
            </div>

            {isInProgress ? (
              <div className="mt-6 max-w-lg">
                <div className="flex items-center justify-between text-sm text-paper/70">
                  <span>{book.progress}% complete</span>
                  <span>Resume Episode 1</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper/15">
                  <div
                    className="h-full rounded-full bg-ember"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <Container as="section" className="py-10">
        <SectionHeader
          eyebrow="Episode rail"
          heading="Episodes"
          supportingText="Chapter-sized starts keep the path forward clear, like picking the next episode of a show."
          tone="inverse"
        />
        <div className="-mx-4 mt-5 flex gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          {book.episodes.map((episode) => (
            <Link
              className="focus-ring w-80 shrink-0 rounded-lg border border-paper/10 bg-paper/10 p-4 text-paper transition-transform hover:-translate-y-1"
              href={`/read/${book.slug}/${episode.number}`}
              key={episode.number}
            >
              <Badge variant="accent">Episode {episode.number}</Badge>
              <h2 className="mt-4 font-serif text-3xl">{episode.title}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-paper/68">{episode.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-3 text-sm text-paper/65">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} aria-hidden="true" />
                  {episode.estimatedMinutes} min
                </span>
                <span className="inline-flex items-center gap-1.5">
                  Read <ArrowRight size={15} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <section className="border-y border-paper/10 bg-[#202b28]">
        <Container className="grid gap-5 py-10 md:grid-cols-[1fr_1fr]">
          <Card className="border-paper/10 bg-paper/10 p-5 text-paper">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
              Soundscape Preview
            </h2>
            <p className="mt-3 font-serif text-3xl">{firstEpisode.soundscape.name}</p>
            <p className="mt-3 text-sm leading-6 text-paper/68">{firstEpisode.soundscape.mood}</p>
            <div className="mt-5 grid gap-2">
              {firstEpisode.soundscape.layers.map((layer) => (
                <div
                  className="flex items-center justify-between rounded-md bg-paper/10 px-3 py-2 text-sm text-paper/75"
                  key={layer}
                >
                  <span>{layer}</span>
                  <span className="h-2 w-20 rounded-full bg-paper/15">
                    <span className="block h-full w-1/2 rounded-full bg-brass" />
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="border-paper/10 bg-paper/10 p-5 text-paper">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
              Provenance Placeholder
            </h2>
            <p className="mt-3 font-serif text-3xl">Public-domain source record</p>
            <p className="mt-3 text-sm leading-6 text-paper/68">
              TODO: Replace this placeholder with source, license, attribution, and imported text
              provenance once ingestion lands.
            </p>
          </Card>
        </Container>
      </section>

      <Container as="section" className="py-10">
        <SectionHeader
          eyebrow="Related rail"
          heading="More atmospheric classics"
          supportingText="Related rails should feel editorial and restrained, not aggressive recommendations."
          tone="inverse"
        />
        <div className="-mx-4 mt-5 flex gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          {relatedBooks.map((item) => (
            <Card
              as="article"
              className="w-52 shrink-0 border-paper/10 bg-paper/10 p-3 text-paper"
              key={item.slug}
            >
              <BookCover book={item} />
              <h2 className="mt-4 font-serif text-2xl">{item.title}</h2>
              <p className="mt-1 text-sm text-paper/62">{item.author}</p>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
