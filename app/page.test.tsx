import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the StoryScape homepage and primary actions", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1, name: "StoryScape" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /start dracula/i })).toHaveAttribute(
      "href",
      "/read/dracula/1"
    );
    expect(screen.getByRole("link", { name: /browse library/i })).toHaveAttribute("href", "/books");
  });

  it("shows continue-reading progress and curated book cards", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /continue reading/i })).toBeInTheDocument();
    expect(screen.getByText("18% complete")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Curated Library" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /start episode 1/i })).toHaveLength(4);
  });
});
