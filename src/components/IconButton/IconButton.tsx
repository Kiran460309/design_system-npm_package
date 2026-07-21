import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { iconButtonVariants, type IconButtonVariantProps } from "./IconButton.variants";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariantProps & {
    icon: ReactNode;
    "aria-label": string;
  };

/** IconButton — Figma node 74:5. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(iconButtonVariants({ variant, size }), className)}
        data-figma-node="74:5"
        {...props}
      >
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
