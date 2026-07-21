import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  it("renders as a combobox with options", () => {
    render(
      <Select aria-label="Choice">
        <option value="a">A</option>
      </Select>,
    );
    expect(screen.getByRole("combobox", { name: "Choice" })).toBeInTheDocument();
  });
});
