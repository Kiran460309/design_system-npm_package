import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with role=alert", () => {
    render(<Alert title="Notice">Body</Alert>);
    expect(screen.getByRole("alert")).toHaveTextContent("Notice");
  });
});
