import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BooksPage from "./page";

describe("BooksPage", () => {
  it("renders the library page and curated book grid", () => {
    render(<BooksPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /curated classics for atmospheric reading/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Dracula" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Frankenstein" })).toBeInTheDocument();
  });

  it("provides start-reading links for each catalog item", () => {
    render(<BooksPage />);

    expect(screen.getAllByRole("link", { name: /start episode 1/i })).toHaveLength(4);
  });
});
