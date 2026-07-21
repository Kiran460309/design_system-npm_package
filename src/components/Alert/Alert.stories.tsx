import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: { tone: { control: "select", options: ["success", "warning", "danger", "info"] } },
  args: { title: "Heads up", children: "This is an alert message." },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = { args: { tone: "success" } };
export const Warning: Story = { args: { tone: "warning" } };
export const Danger: Story = { args: { tone: "danger" } };
export const Info: Story = { args: { tone: "info" } };
