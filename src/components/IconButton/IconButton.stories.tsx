import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { IconPlus } from "../../icons";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "outline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  args: { icon: <IconPlus size={18} />, "aria-label": "Add" },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Disabled: Story = { args: { variant: "primary", disabled: true } };
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
