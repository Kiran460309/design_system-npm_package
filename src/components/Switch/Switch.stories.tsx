import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { label: "Enable notifications" },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = { args: { checked: false } };
export const On: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledOn: Story = { args: { disabled: true, checked: true } };
