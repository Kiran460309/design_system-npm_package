import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Text Area page (node 74:7). */
export const textAreaVariants = cva(
  [
    "w-full min-h-[var(--components-textarea-min-height)]",
    "px-[var(--components-textarea-padding-x)] py-[var(--components-textarea-padding-y)]",
    "rounded-[var(--components-textarea-radius)] border",
    "bg-[var(--components-textarea-bg-default)] text-[var(--components-textarea-text-value)]",
    "text-sm placeholder:text-[var(--components-textarea-text-placeholder)]",
    "border-[var(--components-textarea-border-default)]",
    "transition-colors duration-150",
    "focus:outline-none focus:border-[var(--components-textarea-border-focus)] focus:ring-2 focus:ring-border-focus/30",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-textarea-bg-disabled)]",
  ],
  {
    variants: {
      error: {
        true: "border-[var(--components-textarea-border-error)] focus:border-[var(--components-textarea-border-error)]",
        false: "",
      },
    },
    defaultVariants: { error: false },
  },
);

export type TextAreaVariantProps = VariantProps<typeof textAreaVariants>;
