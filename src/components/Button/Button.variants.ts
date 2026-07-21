import { cva, type VariantProps } from "class-variance-authority";

/**
 * Source: Figma Button page (node 74:4)
 * Variants observed: Style=[Primary,Secondary,Outline], Size=[Medium] (Small/Large sized
 * added here from the Foundations button-height tokens, since only Medium was authored
 * in Figma), State=[Default,Disabled] (hover/active are token-driven, not separate
 * Figma frames).
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-[var(--components-button-gap)]",
    "rounded-[var(--components-button-radius)]",
    "font-medium text-sm",
    "transition-colors duration-150",
    "disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--components-button-bg-primary)]",
          "text-[var(--components-button-text-primary)]",
          "hover:bg-[var(--components-button-bg-primary-hover)]",
          "active:bg-[var(--components-button-bg-primary-active)]",
          "disabled:bg-[var(--components-button-bg-primary-disabled)]",
          "disabled:text-[var(--components-button-text-primary-disabled)]",
        ],
        secondary: [
          "bg-[var(--components-button-bg-secondary)]",
          "text-[var(--components-button-text-secondary)]",
          "hover:bg-[var(--components-button-bg-secondary-hover)]",
          "disabled:bg-[var(--components-button-bg-secondary-disabled)]",
          "disabled:text-[var(--components-button-text-secondary-disabled)]",
        ],
        outline: [
          "bg-[var(--components-button-bg-outline)]",
          "text-[var(--components-button-text-outline)]",
          "border border-[var(--components-button-border-outline)]",
          "hover:border-[var(--components-button-border-outline-hover)]",
          "disabled:border-[var(--components-button-border-outline-disabled)]",
          "disabled:text-[var(--components-button-text-outline-disabled)]",
        ],
      },
      size: {
        sm: "h-[var(--components-button-height-sm)] px-space-sm",
        md: "h-[var(--components-button-height-md)] px-[var(--components-button-padding-x)] py-[var(--components-button-padding-y)]",
        lg: "h-[var(--components-button-height-lg)] px-space-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
