import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials as fallback", () => {
    render(<Avatar initials="KS" />);
    expect(screen.getByText("KS")).toBeInTheDocument();
  });

  it("renders an image when src is provided", () => {
    render(<Avatar src="/avatar.png" alt="User" />);
    expect(screen.getByRole("img", { name: "User" })).toBeInTheDocument();
  });
});
