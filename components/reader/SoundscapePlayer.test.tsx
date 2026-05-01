import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { books } from "@/lib/books";
import { SoundscapePlayer } from "./SoundscapePlayer";

const profile = books[0].episodes[0].soundscape;

describe("SoundscapePlayer", () => {
  it("renders the assigned profile and layer metadata", () => {
    render(<SoundscapePlayer profile={profile} />);

    expect(screen.getByRole("heading", { name: "Castle Night" })).toBeInTheDocument();
    expect(screen.getByText("Mountain wind")).toBeInTheDocument();
    expect(screen.getByLabelText(/volume/i)).toHaveValue("42");
  });

  it("toggles play and pause state", async () => {
    const user = userEvent.setup();
    render(<SoundscapePlayer profile={profile} />);

    await user.click(screen.getByRole("button", { name: /play soundscape/i }));
    expect(screen.getByRole("button", { name: /pause soundscape/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /pause soundscape/i }));
    expect(screen.getByRole("button", { name: /play soundscape/i })).toBeInTheDocument();
  });

  it("supports muting, volume changes, and intensity changes", async () => {
    const user = userEvent.setup();
    render(<SoundscapePlayer profile={profile} />);

    await user.click(screen.getByRole("button", { name: /mute soundscape/i }));
    expect(screen.getByLabelText(/volume/i)).toHaveValue("0");
    expect(screen.getByRole("button", { name: /unmute soundscape/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cinematic" }));
    expect(screen.getByRole("button", { name: "Cinematic" })).toHaveClass("bg-ink");
  });
});
