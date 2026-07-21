import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { buttonVariants, type ButtonVariantProps } from "./Button.variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    /** Icon rendered before the label. Import from src/icons — never inline an SVG. */
    leadingIcon?: React.ReactNode;
    /** Icon rendered after the label. Import from src/icons — never inline an SVG. */
    trailingIcon?: React.ReactNode;
  };

/**
 * Button — Figma node 74:4.
 * `variant` maps to Figma's "Style" property, `size` to "Size", and the
 * native `disabled` attribute maps to Figma's "State" property.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leadingIcon, trailingIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        data-figma-node="74:4"
        {...props}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
