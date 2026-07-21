import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { badgeVariants, type BadgeVariantProps } from "./Badge.variants";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & BadgeVariantProps;

/** Badge — Figma node 74:13. */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ tone }), className)}
        data-figma-node="74:13"
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
