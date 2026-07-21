import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("renders as a textbox", () => {
    render(<TextField placeholder="Name" aria-label="Name" />);
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
  });

  it("marks aria-invalid when error is set", () => {
    render(<TextField error aria-label="Name" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});
