import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Checkbox page (node 74:9). States: unchecked/checked x default/disabled. */
export const checkboxVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "size-[var(--components-checkbox-size)]",
    "rounded-[var(--components-checkbox-radius)]",
    "border border-[var(--components-checkbox-border-unchecked)]",
    "bg-[var(--components-checkbox-bg-unchecked)]",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-checkbox-bg-disabled)] disabled:border-[var(--components-checkbox-border-disabled)]",
  ],
  {
    variants: {
      checked: {
        true: "bg-[var(--components-checkbox-bg-checked)] border-[var(--components-checkbox-bg-checked)] text-[var(--components-checkbox-icon-checked)]",
        false: "text-transparent",
      },
    },
    defaultVariants: { checked: false },
  },
);

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;
