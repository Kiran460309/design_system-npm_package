import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IconArrowRight, IconPlus } from "../../icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "outline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Button",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };

export const PrimaryDisabled: Story = { args: { variant: "primary", disabled: true } };
export const SecondaryDisabled: Story = { args: { variant: "secondary", disabled: true } };
export const OutlineDisabled: Story = { args: { variant: "outline", disabled: true } };

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

export const WithLeadingIcon: Story = {
  args: { leadingIcon: <IconPlus size={16} />, children: "Add item" },
};
export const WithTrailingIcon: Story = {
  args: { trailingIcon: <IconArrowRight size={16} />, children: "Continue" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["primary", "secondary", "outline"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          <Button variant={variant}>Default</Button>
          <Button variant={variant} disabled>
            Disabled
          </Button>
        </div>
      ))}
    </div>
  ),
};
