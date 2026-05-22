import { BookCard } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">Library</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight">
            Curated classics for atmospheric reading
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink/72">
            Start with a compact public-domain shelf, then expand only when each title has clean
            metadata, readable episodes, and a fitting soundscape profile.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
