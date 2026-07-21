import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Chip page (node 74:14). States: default/selected/disabled. */
export const chipVariants = cva(
  [
    "inline-flex items-center gap-1 shrink-0",
    "h-[var(--components-chip-height)] px-[var(--components-chip-padding-x)]",
    "rounded-[var(--components-chip-radius)] border",
    "text-sm font-medium whitespace-nowrap transition-colors duration-150",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-chip-bg-disabled)] disabled:text-[var(--components-chip-text-disabled)]",
  ],
  {
    variants: {
      selected: {
        true: "bg-[var(--components-chip-bg-selected)] text-[var(--components-chip-text-selected)] border-[var(--components-chip-border-selected)]",
        false: "bg-[var(--components-chip-bg-default)] text-[var(--components-chip-text-default)] border-[var(--components-chip-border-default)]",
      },
    },
    defaultVariants: { selected: false },
  },
);

export type ChipVariantProps = VariantProps<typeof chipVariants>;
