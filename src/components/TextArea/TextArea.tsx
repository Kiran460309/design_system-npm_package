import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { textAreaVariants, type TextAreaVariantProps } from "./TextArea.variants";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaVariantProps;

/** TextArea — Figma node 74:7. */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textAreaVariants({ error }), className)}
        aria-invalid={!!error}
        data-figma-node="74:7"
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";
