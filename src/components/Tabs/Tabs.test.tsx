import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs";

const items = [
  { value: "a", label: "Tab A", content: <p>Panel A</p> },
  { value: "b", label: "Tab B", content: <p>Panel B</p> },
];

describe("Tabs", () => {
  it("shows the first tab's content by default", () => {
    render(<Tabs items={items} />);
    expect(screen.getByText("Panel A")).toBeInTheDocument();
  });

  it("switches panels on tab click", () => {
    render(<Tabs items={items} />);
    fireEvent.click(screen.getByRole("tab", { name: "Tab B" }));
    expect(screen.getByText("Panel B")).toBeInTheDocument();
  });
});
