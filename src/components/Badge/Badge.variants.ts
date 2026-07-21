import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Badge page (node 74:13). Tone options: neutral, brand, success, warning, danger. */
export const badgeVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "h-[var(--components-badge-height)] px-[var(--components-badge-padding-x)]",
    "rounded-[var(--components-badge-radius)]",
    "text-xs font-medium whitespace-nowrap",
  ],
  {
    variants: {
      tone: {
        neutral: "bg-[var(--components-badge-bg-neutral)] text-[var(--components-badge-text-neutral)]",
        brand: "bg-[var(--components-badge-bg-brand)] text-[var(--components-badge-text-brand)]",
        success: "bg-[var(--components-badge-bg-success)] text-[var(--components-badge-text-success)]",
        warning: "bg-[var(--components-badge-bg-warning)] text-[var(--components-badge-text-warning)]",
        danger: "bg-[var(--components-badge-bg-danger)] text-[var(--components-badge-text-danger)]",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
