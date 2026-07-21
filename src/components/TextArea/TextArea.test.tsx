import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  it("renders as a textbox", () => {
    render(<TextArea aria-label="Description" />);
    expect(screen.getByRole("textbox", { name: "Description" })).toBeInTheDocument();
  });
});
