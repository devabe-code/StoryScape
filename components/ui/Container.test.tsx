import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders content in the default page width", () => {
    render(<Container>Page content</Container>);

    expect(screen.getByText("Page content")).toHaveClass("max-w-6xl");
  });

  it("supports reader width", () => {
    render(<Container width="reader">Reader content</Container>);

    expect(screen.getByText("Reader content")).toHaveClass("max-w-3xl");
  });
});
