import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Select page (node 74:8). */
export const selectVariants = cva(
  [
    "w-full h-[var(--components-select-height)]",
    "px-[var(--components-select-padding-x)]",
    "rounded-[var(--components-select-radius)] border appearance-none",
    "bg-[var(--components-select-bg-default)] text-[var(--components-select-text-value)]",
    "text-sm border-[var(--components-select-border-default)]",
    "transition-colors duration-150",
    "focus:outline-none focus:border-[var(--components-select-border-focus)] focus:ring-2 focus:ring-border-focus/30",
    "disabled:cursor-not-allowed disabled:text-[var(--components-select-text-placeholder)]",
  ],
  {
    variants: {},
  },
);

export type SelectVariantProps = VariantProps<typeof selectVariants>;
