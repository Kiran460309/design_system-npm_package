import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { cardVariants, type CardVariantProps } from "./Card.variants";

export type CardProps = HTMLAttributes<HTMLDivElement> & CardVariantProps;

/** Card — Figma node 74:19. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, selected, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ selected }), className)}
        data-figma-node="74:19"
        {...props}
      />
    );
  },
);

Card.displayName = "Card";
