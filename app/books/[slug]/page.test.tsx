import { render, screen } from "@testing-library/react";
import { notFound } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import BookDetailPage, { generateStaticParams } from "./page";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("BookDetailPage", () => {
  it("generates static params for every curated book", () => {
    expect(generateStaticParams()).toContainEqual({ slug: "dracula" });
    expect(generateStaticParams()).toContainEqual({ slug: "frankenstein" });
  });

  it("renders book metadata, controls, and episodes", async () => {
    render(await BookDetailPage({ params: Promise.resolve({ slug: "dracula" }) }));

    expect(screen.getByRole("heading", { level: 1, name: "Dracula" })).toBeInTheDocument();
    expect(screen.getAllByText("Bram Stoker")).toHaveLength(2);
    expect(screen.getByRole("button", { name: /save to library/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /episode 1/i })).toHaveAttribute(
      "href",
      "/read/dracula/1"
    );
  });

  it("uses the route error boundary for unknown book slugs", async () => {
    await expect(
      BookDetailPage({ params: Promise.resolve({ slug: "unknown-book" }) })
    ).rejects.toThrow("NEXT_NOT_FOUND");
    expect(notFound).toHaveBeenCalled();
  });
});
