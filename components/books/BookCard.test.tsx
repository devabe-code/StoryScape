import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { books } from "@/lib/books";
import { BookCard } from "./BookCard";

describe("BookCard", () => {
  it("renders book metadata and mood tags", () => {
    render(<BookCard book={books[0]} />);

    expect(screen.getByRole("heading", { name: "Dracula" })).toBeInTheDocument();
    expect(screen.getByText(/Bram Stoker, 1897/)).toBeInTheDocument();
    expect(screen.getByText("Castle Night")).toBeInTheDocument();
  });

  it("links to the detail page and first reader episode", () => {
    render(<BookCard book={books[0]} />);

    expect(screen.getByRole("link", { name: /dracula/i })).toHaveAttribute("href", "/books/dracula");
    expect(screen.getByRole("link", { name: /start episode 1/i })).toHaveAttribute("href", "/read/dracula/1");
  });
});
