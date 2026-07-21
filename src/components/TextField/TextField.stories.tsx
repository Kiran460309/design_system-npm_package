import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: { placeholder: "Enter your name" },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "Ada Lovelace" } };
export const Error: Story = { args: { error: true, defaultValue: "invalid@" } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled" } };
