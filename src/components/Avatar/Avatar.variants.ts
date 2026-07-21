import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Avatar page (node 74:15). Size options: sm, md, lg. */
export const avatarVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0 overflow-hidden",
    "rounded-[var(--components-avatar-radius)]",
    "bg-[var(--components-avatar-bg-default)] text-[var(--components-avatar-text-initials)]",
    "font-medium select-none",
  ],
  {
    variants: {
      size: {
        sm: "size-[var(--components-avatar-size-sm)] text-xs",
        md: "size-[var(--components-avatar-size-md)] text-sm",
        lg: "size-[var(--components-avatar-size-lg)] text-base",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;
