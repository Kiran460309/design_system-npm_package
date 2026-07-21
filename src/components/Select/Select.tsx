import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { selectVariants } from "./Select.variants";
import { IconChevronDown } from "../../icons";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

/** Select — Figma node 74:8. Chevron icon comes from src/icons, never inlined. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span className="relative inline-block w-full">
        <select
          ref={ref}
          className={cn(selectVariants(), "pr-10", className)}
          data-figma-node="74:8"
          {...props}
        >
          {children}
        </select>
        <IconChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--components-select-icon-chevron)]"
        />
      </span>
    );
  },
);

Select.displayName = "Select";
