import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, ButtonLink } from "./Button";

describe("Button", () => {
  it("renders an accessible button with the default primary treatment", () => {
    render(<Button>Save progress</Button>);

    const button = screen.getByRole("button", { name: "Save progress" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("bg-ink");
  });

  it("supports disabled state and secondary variant", () => {
    render(
      <Button disabled variant="secondary">
        Save to Library
      </Button>
    );

    const button = screen.getByRole("button", { name: "Save to Library" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("border");
  });
});

describe("ButtonLink", () => {
  it("renders a styled link with an href", () => {
    render(<ButtonLink href="/books">Browse Library</ButtonLink>);

    expect(screen.getByRole("link", { name: "Browse Library" })).toHaveAttribute("href", "/books");
  });
});
