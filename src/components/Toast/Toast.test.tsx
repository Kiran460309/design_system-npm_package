import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders its message", () => {
    render(<Toast>Saved</Toast>);
    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });

  it("fires onDismiss", () => {
    const onDismiss = vi.fn();
    render(<Toast onDismiss={onDismiss}>Saved</Toast>);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss" }));
    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
