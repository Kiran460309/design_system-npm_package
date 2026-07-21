import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  args: { label: "Option A", name: "story-group" },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Unselected: Story = { args: { checked: false } };
export const Selected: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledSelected: Story = { args: { disabled: true, checked: true } };
