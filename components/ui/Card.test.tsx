import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children in a framed surface", () => {
    render(<Card>Library item</Card>);

    expect(screen.getByText("Library item")).toHaveClass("rounded-lg");
  });

  it("supports elevated surfaces", () => {
    render(<Card variant="elevated">Featured episode</Card>);

    expect(screen.getByText("Featured episode")).toHaveClass("shadow-soft");
  });
});
