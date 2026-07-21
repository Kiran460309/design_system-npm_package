import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders a range input", () => {
    render(<Slider aria-label="Volume" />);
    expect(screen.getByRole("slider", { name: "Volume" })).toBeInTheDocument();
  });

  it("is disabled when disabled prop is set", () => {
    render(<Slider aria-label="Volume" disabled />);
    expect(screen.getByRole("slider")).toBeDisabled();
  });
});
