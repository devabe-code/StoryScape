import type { Book } from "@/lib/books";

export function BookCover({ book, compact = false }: { book: Book; compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gradient-to-br ${book.coverTone} shadow-soft ${
        compact ? "aspect-[3/4] w-24" : "aspect-[3/4] w-full"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.34),transparent_28%),linear-gradient(130deg,rgba(0,0,0,0.08),rgba(0,0,0,0.38))]" />
      <div className="absolute inset-x-4 top-5 h-px bg-paper/50" />
      <div className="absolute inset-x-4 bottom-5 h-px bg-paper/50" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 text-paper">
        <span className="text-xs uppercase tracking-[0.18em] text-paper/75">{book.author}</span>
        <strong className="font-serif text-2xl font-normal leading-tight">{book.title}</strong>
      </div>
    </div>
  );
}
