import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <h3 className="text-base font-semibold text-text-primary">Card title</h3>
      <p className="text-sm text-text-secondary">Supporting description text goes here.</p>
    </Card>
  ),
};

export const Selected: Story = {
  args: { selected: true },
  render: (args) => (
    <Card {...args} className="w-80">
      <h3 className="text-base font-semibold text-text-primary">Card title</h3>
      <p className="text-sm text-text-secondary">Supporting description text goes here.</p>
    </Card>
  ),
};
