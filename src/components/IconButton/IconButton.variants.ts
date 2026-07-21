import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Icon Button page (node 74:5). */
export const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "rounded-[var(--components-icon-button-radius)]",
    "transition-colors duration-150",
    "disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--components-icon-button-bg-primary)]",
          "text-[var(--components-icon-button-icon-primary)]",
          "disabled:bg-[var(--components-icon-button-bg-primary-disabled)]",
          "disabled:text-[var(--components-icon-button-icon-disabled)]",
        ],
        secondary: [
          "bg-[var(--components-icon-button-bg-secondary)]",
          "text-[var(--components-icon-button-icon-secondary)]",
          "disabled:text-[var(--components-icon-button-icon-disabled)]",
        ],
        outline: [
          "bg-transparent border border-[var(--components-icon-button-border-outline)]",
          "text-[var(--components-icon-button-icon-outline)]",
          "disabled:text-[var(--components-icon-button-icon-disabled)]",
        ],
      },
      size: {
        sm: "size-[var(--components-icon-button-size-sm)]",
        md: "size-[var(--components-icon-button-size-md)]",
        lg: "size-[var(--components-icon-button-size-lg)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;
