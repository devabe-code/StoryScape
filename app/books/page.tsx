import { BookCard } from "@/components/books";
import { SiteHeader } from "@/components/layout";
import { Container, SectionHeader } from "@/components/ui";
import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <Container as="section" className="py-10">
        <SectionHeader
          eyebrow="Library"
          heading="Curated classics for atmospheric reading"
          level={1}
          supportingText="Start with a compact public-domain shelf, then expand only when each title has clean metadata, readable episodes, and a fitting soundscape profile."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Container>
    </main>
  );
}
