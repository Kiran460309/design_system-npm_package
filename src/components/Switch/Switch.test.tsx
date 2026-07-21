import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders as a switch role", () => {
    render(<Switch label="Enable" onChange={() => {}} />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("reflects checked state", () => {
    render(<Switch label="Enable" checked readOnly />);
    expect(screen.getByRole("switch")).toBeChecked();
  });
});
