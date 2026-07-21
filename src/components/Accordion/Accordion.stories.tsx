import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { value: "1", title: "What is @kiranshan/ui?", content: "A React component library." },
      { value: "2", title: "Is it themeable?", content: "Yes, entirely via CSS variables." },
    ],
    defaultOpen: "1",
  },
};
