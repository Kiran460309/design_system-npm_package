import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Pagination page (node 74:24). States: default/active. */
export const paginationItemVariants = cva(
  [
    "inline-flex items-center justify-center",
    "size-[var(--components-pagination-size)]",
    "rounded-[var(--components-pagination-radius)] border text-sm",
    "border-[var(--components-pagination-border-default)]",
    "transition-colors duration-150",
  ],
  {
    variants: {
      active: {
        true: "bg-[var(--components-pagination-bg-active)] text-[var(--components-pagination-text-active)] border-transparent",
        false: "bg-[var(--components-pagination-bg-default)] text-[var(--components-pagination-text-default)]",
      },
    },
    defaultVariants: { active: false },
  },
);

export type PaginationItemVariantProps = VariantProps<typeof paginationItemVariants>;
