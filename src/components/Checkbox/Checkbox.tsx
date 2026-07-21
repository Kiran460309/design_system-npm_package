import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { checkboxVariants } from "./Checkbox.variants";
import { IconCheck } from "../../icons";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  label?: string;
};

/** Checkbox — Figma node 74:9. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (
      <label htmlFor={inputId} className="inline-flex items-center gap-space-xs cursor-pointer">
        <span className="relative inline-flex">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            checked={checked}
            className="peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
            data-figma-node="74:9"
            {...props}
          />
          <span
            aria-hidden
            className={cn(checkboxVariants({ checked: !!checked }), className)}
          >
            <IconCheck size={12} strokeWidth={3} />
          </span>
        </span>
        {label && <span className="text-sm text-text-primary select-none">{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
