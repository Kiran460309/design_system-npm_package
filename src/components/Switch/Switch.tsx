import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  label?: string;
};

/** Switch — Figma node 74:11. Track/thumb sizes and colors come straight from tokens. */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (
      <label htmlFor={inputId} className="inline-flex items-center gap-space-xs cursor-pointer">
        <span
          className={cn(
            "relative inline-flex shrink-0 items-center rounded-[var(--components-switch-radius)] transition-colors duration-150",
            "w-[var(--components-switch-width)] h-[var(--components-switch-height)]",
            checked ? "bg-[var(--components-switch-bg-on)]" : "bg-[var(--components-switch-bg-off)]",
            props.disabled && "bg-[var(--components-switch-bg-disabled)]",
            className,
          )}
        >
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            checked={checked}
            className="absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
            data-figma-node="74:11"
            {...props}
          />
          <span
            aria-hidden
            className={cn(
              "pointer-events-none inline-block rounded-full bg-[var(--components-switch-thumb-bg)] shadow transition-transform duration-150",
              "size-[var(--components-switch-thumb-size)]",
              checked ? "translate-x-[calc(var(--components-switch-width)-var(--components-switch-thumb-size)-2px)]" : "translate-x-[1px]",
            )}
          />
        </span>
        {label && <span className="text-sm text-text-primary select-none">{label}</span>}
      </label>
    );
  },
);

Switch.displayName = "Switch";
