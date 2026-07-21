import { useId, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export type TooltipProps = HTMLAttributes<HTMLSpanElement> & {
  content: ReactNode;
  children: ReactNode;
};

/** Tooltip — Figma node 74:16. Simple hover/focus-driven tooltip using component tokens. */
export function Tooltip({ content, children, className, ...props }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? id : undefined} tabIndex={0}>
        {children}
      </span>
      {visible && (
        <span
          role="tooltip"
          id={id}
          data-figma-node="74:16"
          className={cn(
            "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 z-10 whitespace-nowrap",
            "px-[var(--components-tooltip-padding-x)] py-[var(--components-tooltip-padding-y)]",
            "rounded-[var(--components-tooltip-radius)]",
            "bg-[var(--components-tooltip-bg)] text-[var(--components-tooltip-text)]",
            "text-xs",
            className,
          )}
          {...props}
        >
          {content}
        </span>
      )}
    </span>
  );
}
