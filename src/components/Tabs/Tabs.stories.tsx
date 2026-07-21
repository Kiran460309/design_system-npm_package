import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      { value: "overview", label: "Overview", content: <p className="text-sm">Overview panel</p> },
      { value: "activity", label: "Activity", content: <p className="text-sm">Activity panel</p> },
      { value: "settings", label: "Settings", content: <p className="text-sm">Settings panel</p> },
    ],
  },
};
