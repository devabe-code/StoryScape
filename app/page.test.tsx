import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LandingPage, emptyLandingContent } from "@/components/landing/LandingPage";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the landing page headline, description, and calls to action", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /classic books, broken into bingeable episodes with immersive soundscapes/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/storyscape turns public-domain literature into a lighter reading habit/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /browse placeholder library/i })).toHaveAttribute(
      "href",
      "/books"
    );
    expect(screen.getByRole("link", { name: /preview episode one/i })).toHaveAttribute(
      "href",
      "/read/dracula/1"
    );
  });

  it("renders placeholder sections for book discovery and soundscape experience", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /continue with a curated shelf/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /atmosphere that stays/i })).toBeInTheDocument();
    expect(screen.getAllByText("Castle Night")).toHaveLength(2);
  });

  it("does not crash when placeholder content is empty", () => {
    render(<LandingPage content={emptyLandingContent} />);

    expect(screen.getByText(/book discovery placeholders are coming soon/i)).toBeInTheDocument();
    expect(screen.getByText(/soundscape preview placeholder is coming soon/i)).toBeInTheDocument();
    expect(screen.getByText(/how-it-works placeholders are coming soon/i)).toBeInTheDocument();
  });
});
