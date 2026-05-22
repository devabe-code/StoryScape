import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { notFound } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import ReaderPage, { generateStaticParams } from "./page";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("ReaderPage", () => {
  it("generates static params for available reader episodes", () => {
    expect(generateStaticParams()).toContainEqual({ slug: "dracula", episode: "1" });
    expect(generateStaticParams()).toContainEqual({ slug: "dracula", episode: "2" });
  });

  it("renders episode content, progress, and reader controls", async () => {
    render(await ReaderPage({ params: Promise.resolve({ slug: "dracula", episode: "1" }) }));

    expect(
      screen.getByRole("heading", { level: 1, name: "Jonathan Harker's Journal" })
    ).toBeInTheDocument();
    expect(screen.getByText(/22 min read/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reader settings/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /episode menu/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Castle Night" })).toBeInTheDocument();
    expect(screen.getByText("18%")).toBeInTheDocument();
  });

  it("lets the reader play and pause the soundscape", async () => {
    const user = userEvent.setup();
    render(await ReaderPage({ params: Promise.resolve({ slug: "dracula", episode: "1" }) }));

    await user.click(screen.getByRole("button", { name: /play soundscape/i }));
    expect(screen.getByRole("button", { name: /pause soundscape/i })).toBeInTheDocument();
  });

  it("uses the route error boundary for unknown episodes", async () => {
    await expect(
      ReaderPage({ params: Promise.resolve({ slug: "dracula", episode: "99" }) })
    ).rejects.toThrow("NEXT_NOT_FOUND");
    expect(notFound).toHaveBeenCalled();
  });
});
