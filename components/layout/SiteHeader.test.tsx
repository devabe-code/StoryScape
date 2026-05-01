import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  it("renders the brand and main navigation", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: /storyscape/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /library/i })).toHaveAttribute("href", "/books");
  });

  it("exposes an accessible account control", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("button", { name: /account/i })).toBeInTheDocument();
  });
});
