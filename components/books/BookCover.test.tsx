import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { books } from "@/lib/books";
import { BookCover } from "./BookCover";

describe("BookCover", () => {
  it("renders the visual title and author for a book", () => {
    render(<BookCover book={books[0]} />);

    expect(screen.getByText("Dracula")).toBeInTheDocument();
    expect(screen.getByText("Bram Stoker")).toBeInTheDocument();
  });

  it("supports the compact cover variant", () => {
    const { container } = render(<BookCover book={books[0]} compact />);

    expect(container.firstElementChild).toHaveClass("w-24");
  });
});
