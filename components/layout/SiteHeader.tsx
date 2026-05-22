import Link from "next/link";
import { BookOpen, Library, UserRound } from "lucide-react";
import { Button, ButtonLink, Container } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link className="focus-ring flex items-center gap-2 rounded-sm" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper">
            <BookOpen size={18} aria-hidden="true" />
          </span>
          <span className="font-serif text-xl">StoryScape</span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Main navigation">
          <ButtonLink href="/books" size="sm" variant="ghost">
            <Library size={17} aria-hidden="true" />
            Library
          </ButtonLink>
          <Button aria-label="Account" className="grid" size="icon" variant="ghost">
            <UserRound size={18} aria-hidden="true" />
          </Button>
        </nav>
      </Container>
    </header>
  );
}
