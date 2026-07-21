import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("reflects selected state via aria-pressed", () => {
    render(<Chip selected>Design</Chip>);
    expect(screen.getByRole("button", { name: "Design" })).toHaveAttribute("aria-pressed", "true");
  });
});
