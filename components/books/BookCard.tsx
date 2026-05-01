import Link from "next/link";
import { Clock, Headphones, Play } from "lucide-react";
import type { Book } from "@/lib/books";
import { BookCover } from "./BookCover";

export function BookCard({ book }: { book: Book }) {
  const firstEpisode = book.episodes[0];

  return (
    <article className="rounded-lg border border-ink/10 bg-white/55 p-4 shadow-sm">
      <Link className="focus-ring block rounded-md" href={`/books/${book.slug}`}>
        <span className="sr-only">View {book.title}</span>
        <BookCover book={book} />
      </Link>
      <div className="mt-4 space-y-3">
        <div>
          <h2 className="font-serif text-2xl leading-tight">{book.title}</h2>
          <p className="mt-1 text-sm text-ink/65">
            {book.author}, {book.year}
          </p>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-ink/75">{book.description}</p>
        <div className="flex flex-wrap gap-2">
          {book.moodTags.map((tag) => (
            <span key={tag} className="rounded-full bg-moss/10 px-2.5 py-1 text-xs font-medium text-moss">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-ink/10 pt-3 text-sm text-ink/65">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={15} aria-hidden="true" />
            {firstEpisode.estimatedMinutes} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Headphones size={15} aria-hidden="true" />
            {firstEpisode.soundscape.name}
          </span>
        </div>
        <Link
          className="focus-ring inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-paper hover:bg-moss"
          href={`/read/${book.slug}/1`}
        >
          <Play size={16} aria-hidden="true" />
          Start Episode 1
        </Link>
      </div>
    </article>
  );
}
