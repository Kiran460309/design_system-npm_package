import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("shows tooltip content on focus", () => {
    render(
      <Tooltip content="Helpful hint">
        <button>Target</button>
      </Tooltip>,
    );
    fireEvent.focus(screen.getByText("Target"));
    expect(screen.getByRole("tooltip")).toHaveTextContent("Helpful hint");
  });
});
