import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Text Field page (node 74:6). States: default/focus/error/disabled. */
export const textFieldVariants = cva(
  [
    "w-full h-[var(--components-text-field-height)]",
    "px-[var(--components-text-field-padding-x)] py-[var(--components-text-field-padding-y)]",
    "rounded-[var(--components-text-field-radius)] border",
    "bg-[var(--components-text-field-bg-default)] text-[var(--components-text-field-text-value)]",
    "text-sm placeholder:text-[var(--components-text-field-text-placeholder)]",
    "border-[var(--components-text-field-border-default)]",
    "transition-colors duration-150",
    "focus:outline-none focus:border-[var(--components-text-field-border-focus)] focus:ring-2 focus:ring-border-focus/30",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-text-field-bg-disabled)] disabled:text-[var(--components-text-field-text-disabled)]",
  ],
  {
    variants: {
      error: {
        true: "border-[var(--components-text-field-border-error)] focus:border-[var(--components-text-field-border-error)]",
        false: "",
      },
    },
    defaultVariants: { error: false },
  },
);

export type TextFieldVariantProps = VariantProps<typeof textFieldVariants>;
