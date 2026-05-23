import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BooksPage from "./page";

describe("BooksPage", () => {
  it("renders the streaming-style library page and curated rails", () => {
    render(<BooksPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /curated classics for atmospheric reading/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /resume your current episode/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /gothic nights/i })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: "Dracula" }).length).toBeGreaterThan(1);
    expect(screen.getAllByRole("heading", { name: "Frankenstein" }).length).toBeGreaterThan(0);
  });

  it("provides start-reading links across rails", () => {
    render(<BooksPage />);

    expect(screen.getAllByRole("link", { name: /start episode 1/i }).length).toBeGreaterThanOrEqual(
      4
    );
    expect(screen.getByRole("link", { name: /resume episode/i })).toHaveAttribute(
      "href",
      "/read/dracula/1"
    );
  });
});
