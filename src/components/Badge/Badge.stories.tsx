import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["neutral", "brand", "success", "warning", "danger"] },
  },
  args: { children: "Badge" },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Neutral: Story = { args: { tone: "neutral" } };
export const Brand: Story = { args: { tone: "brand" } };
export const Success: Story = { args: { tone: "success" } };
export const Warning: Story = { args: { tone: "warning" } };
export const Danger: Story = { args: { tone: "danger" } };

export const AllTones: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="brand">Brand</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
    </div>
  ),
};
