import Link from "next/link";
import { Clock, Headphones, Play, Plus } from "lucide-react";
import { Badge, ButtonLink, Card } from "@/components/ui";
import type { Book } from "@/lib/books";
import { BookCover } from "./BookCover";

export function BookCard({ book }: { book: Book }) {
  const firstEpisode = book.episodes[0];

  return (
    <Card
      as="article"
      className="w-56 shrink-0 border-paper/10 bg-paper/10 p-3 text-paper transition-transform hover:-translate-y-1"
    >
      <Link className="focus-ring block rounded-md" href={`/books/${book.slug}`}>
        <span className="sr-only">View {book.title}</span>
        <BookCover book={book} />
      </Link>
      <div className="mt-4 space-y-3">
        <div>
          <h2 className="font-serif text-2xl leading-tight">{book.title}</h2>
          <p className="mt-1 text-sm text-paper/65">
            {book.author}, {book.year}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {book.moodTags.slice(0, 2).map((tag) => (
            <Badge key={tag} className="px-2.5 py-1">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-paper/10 pt-3 text-sm text-paper/65">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={15} aria-hidden="true" />
            {firstEpisode.estimatedMinutes} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Headphones size={15} aria-hidden="true" />
            {firstEpisode.soundscape.name}
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <ButtonLink className="w-full" href={`/read/${book.slug}/1`} size="sm">
            <Play size={16} aria-hidden="true" />
            Start Episode 1
          </ButtonLink>
          <ButtonLink
            aria-label={`View details for ${book.title}`}
            href={`/books/${book.slug}`}
            size="icon"
            variant="ghost"
          >
            <Plus size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
