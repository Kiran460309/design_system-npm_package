import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with a label", () => {
    render(<Checkbox label="Accept" onChange={() => {}} />);
    expect(screen.getByLabelText("Accept")).toBeInTheDocument();
  });

  it("reflects checked state", () => {
    render(<Checkbox label="Accept" checked readOnly />);
    expect(screen.getByLabelText("Accept")).toBeChecked();
  });
});
