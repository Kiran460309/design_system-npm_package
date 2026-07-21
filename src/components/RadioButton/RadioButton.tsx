import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { radioVariants } from "./RadioButton.variants";

export type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  label?: string;
};

/** RadioButton — Figma node 74:10. */
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (
      <label htmlFor={inputId} className="inline-flex items-center gap-space-xs cursor-pointer">
        <span className="relative inline-flex">
          <input
            ref={ref}
            id={inputId}
            type="radio"
            checked={checked}
            className="peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
            data-figma-node="74:10"
            {...props}
          />
          <span aria-hidden className={cn(radioVariants({ selected: !!checked }), className)}>
            {checked && (
              <span className="size-[5px] rounded-full bg-[var(--components-radio-bg-selected)]" />
            )}
          </span>
        </span>
        {label && <span className="text-sm text-text-primary select-none">{label}</span>}
      </label>
    );
  },
);

RadioButton.displayName = "RadioButton";
