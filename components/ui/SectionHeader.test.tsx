import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders eyebrow, heading, and supporting text", () => {
    render(
      <SectionHeader
        eyebrow="Library"
        heading="Curated classics"
        level={1}
        supportingText="A small shelf with clear provenance."
      />
    );

    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: "Curated classics" })).toBeInTheDocument();
    expect(screen.getByText("A small shelf with clear provenance.")).toBeInTheDocument();
  });

  it("renders optional actions", () => {
    render(
      <SectionHeader action={<button type="button">View all</button>} heading="Continue Reading" />
    );

    expect(screen.getByRole("button", { name: "View all" })).toBeInTheDocument();
  });
});
