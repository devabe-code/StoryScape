import { describe, expect, it } from "vitest";
import { cn } from "./styles";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("text-ink", "bg-paper", "rounded-md")).toBe("text-ink bg-paper rounded-md");
  });

  it("omits falsey class values", () => {
    expect(cn("text-ink", false, null, undefined, "bg-paper")).toBe("text-ink bg-paper");
  });
});
