import Link from "next/link";
import { BookOpen, Library, UserRound } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link className="focus-ring flex items-center gap-2 rounded-sm" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper">
            <BookOpen size={18} aria-hidden="true" />
          </span>
          <span className="font-serif text-xl">StoryScape</span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Main navigation">
          <Link
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-ink/75 hover:bg-ink/5 hover:text-ink"
            href="/books"
          >
            <Library size={17} aria-hidden="true" />
            Library
          </Link>
          <button
            className="focus-ring grid h-10 w-10 place-items-center rounded-md text-ink/75 hover:bg-ink/5 hover:text-ink"
            aria-label="Account"
            type="button"
          >
            <UserRound size={18} aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}
