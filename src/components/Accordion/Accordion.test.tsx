import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "./Accordion";

const items = [
  { value: "1", title: "Q1", content: "A1" },
  { value: "2", title: "Q2", content: "A2" },
];

describe("Accordion", () => {
  it("opens the item marked defaultOpen", () => {
    render(<Accordion items={items} defaultOpen="1" />);
    expect(screen.getByText("A1")).toBeInTheDocument();
  });

  it("toggles an item on click", () => {
    render(<Accordion items={items} />);
    fireEvent.click(screen.getByRole("button", { name: "Q2" }));
    expect(screen.getByText("A2")).toBeInTheDocument();
  });
});
