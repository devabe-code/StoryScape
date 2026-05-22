import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders badge content", () => {
    render(<Badge>Castle Night</Badge>);

    expect(screen.getByText("Castle Night")).toBeInTheDocument();
  });

  it("supports visual variants", () => {
    render(<Badge variant="accent">Featured</Badge>);

    expect(screen.getByText("Featured")).toHaveClass("text-ember");
  });
});
