import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { chipVariants, type ChipVariantProps } from "./Chip.variants";

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & ChipVariantProps;

/** Chip — Figma node 74:14. Renders as a toggleable <button>. */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, selected, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={!!selected}
        className={cn(chipVariants({ selected }), className)}
        data-figma-node="74:14"
        {...props}
      />
    );
  },
);

Chip.displayName = "Chip";
