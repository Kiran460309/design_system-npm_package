import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { textFieldVariants, type TextFieldVariantProps } from "./TextField.variants";

export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  TextFieldVariantProps;

/** TextField — Figma node 74:6. */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(textFieldVariants({ error }), className)}
        aria-invalid={!!error}
        data-figma-node="74:6"
        {...props}
      />
    );
  },
);

TextField.displayName = "TextField";
