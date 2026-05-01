import { describe, expect, it } from "vitest";
import { books, continueReading, getBook, getEpisode } from "./books";

describe("book catalog helpers", () => {
  it("provides the curated MVP shelf with episode and soundscape data", () => {
    expect(books.length).toBeGreaterThanOrEqual(4);
    expect(books.map((book) => book.slug)).toContain("dracula");
    expect(books.every((book) => book.episodes.length > 0)).toBe(true);
    expect(books.every((book) => book.episodes[0].soundscape.layers.length > 0)).toBe(true);
  });

  it("finds a book by slug", () => {
    expect(getBook("dracula")?.title).toBe("Dracula");
  });

  it("returns undefined for a missing book slug", () => {
    expect(getBook("missing-title")).toBeUndefined();
  });

  it("finds a specific episode by book slug and episode number", () => {
    expect(getEpisode("dracula", 1)?.title).toBe("Jonathan Harker's Journal");
  });

  it("returns undefined for a missing episode", () => {
    expect(getEpisode("dracula", 99)).toBeUndefined();
  });

  it("selects a continue-reading book from active progress", () => {
    expect(continueReading?.status).toBe("reading");
    expect(continueReading?.progress).toBeGreaterThan(0);
  });
});
