import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: { tone: { control: "select", options: ["default", "success", "danger"] } },
  args: { children: "Changes saved successfully." },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = { args: { tone: "default" } };
export const Success: Story = { args: { tone: "success" } };
export const Danger: Story = { args: { tone: "danger" } };
export const Dismissible: Story = { args: { onDismiss: () => alert("dismissed") } };
