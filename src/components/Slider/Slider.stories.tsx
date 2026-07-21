import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: { min: 0, max: 100, defaultValue: 40 },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
