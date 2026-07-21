import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";
import { IconPlus } from "../../icons";

describe("IconButton", () => {
  it("requires and renders an aria-label", () => {
    render(<IconButton icon={<IconPlus />} aria-label="Add item" />);
    expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
  });

  it("is disabled when disabled prop is set", () => {
    render(<IconButton icon={<IconPlus />} aria-label="Add" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
