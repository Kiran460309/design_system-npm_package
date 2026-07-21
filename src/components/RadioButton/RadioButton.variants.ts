import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Radio Button page (node 74:10). States: unselected/selected x default/disabled. */
export const radioVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "size-[var(--components-radio-size)]",
    "rounded-[var(--components-radio-radius)]",
    "border border-[var(--components-radio-border-unselected)]",
    "bg-[var(--components-radio-bg-unselected)]",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-radio-bg-disabled)] disabled:border-[var(--components-radio-border-disabled)]",
  ],
  {
    variants: {
      selected: {
        true: "border-[var(--components-radio-border-selected)]",
        false: "",
      },
    },
    defaultVariants: { selected: false },
  },
);

export type RadioVariantProps = VariantProps<typeof radioVariants>;
