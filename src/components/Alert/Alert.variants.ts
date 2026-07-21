import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Alert page (node 74:17). Tone options: success, warning, danger, info. */
export const alertVariants = cva(
  [
    "flex items-start gap-[var(--components-alert-gap)]",
    "px-[var(--components-alert-padding-x)] py-[var(--components-alert-padding-y)]",
    "rounded-[var(--components-alert-radius)] text-sm",
  ],
  {
    variants: {
      tone: {
        success: "bg-[var(--components-alert-bg-success)] text-[var(--components-alert-text-success)]",
        warning: "bg-[var(--components-alert-bg-warning)] text-[var(--components-alert-text-warning)]",
        danger: "bg-[var(--components-alert-bg-danger)] text-[var(--components-alert-text-danger)]",
        info: "bg-[var(--components-alert-bg-info)] text-[var(--components-alert-text-info)]",
      },
    },
    defaultVariants: { tone: "info" },
  },
);

export type AlertVariantProps = VariantProps<typeof alertVariants>;
