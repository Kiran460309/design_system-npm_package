import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Card page (node 74:19). States: default/selected. */
export const cardVariants = cva(
  [
    "flex flex-col gap-[var(--components-card-gap)]",
    "p-[var(--components-card-padding)]",
    "rounded-[var(--components-card-radius)] border",
    "bg-[var(--components-card-bg-default)]",
  ],
  {
    variants: {
      selected: {
        true: "border-[var(--components-card-border-selected)]",
        false: "border-[var(--components-card-border-default)]",
      },
    },
    defaultVariants: { selected: false },
  },
);

export type CardVariantProps = VariantProps<typeof cardVariants>;
