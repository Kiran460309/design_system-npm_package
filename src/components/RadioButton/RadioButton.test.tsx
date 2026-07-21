import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  it("renders with a label", () => {
    render(<RadioButton label="Option A" onChange={() => {}} />);
    expect(screen.getByLabelText("Option A")).toBeInTheDocument();
  });

  it("reflects selected state", () => {
    render(<RadioButton label="Option A" checked readOnly />);
    expect(screen.getByLabelText("Option A")).toBeChecked();
  });
});
