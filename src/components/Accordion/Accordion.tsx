import { useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { IconChevronDown } from "../../icons";

export type AccordionItem = {
  value: string;
  title: ReactNode;
  content: ReactNode;
};

export type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  items: AccordionItem[];
  defaultOpen?: string;
};

/** Accordion — Figma node 74:22. Single-open pattern. */
export function Accordion({ items, defaultOpen, className, ...props }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn("border rounded-[var(--components-accordion-radius)] border-[var(--components-accordion-border-default)] divide-y divide-[var(--components-accordion-border-default)]", className)}
      data-figma-node="74:22"
      {...props}
    >
      {items.map((item) => {
        const isOpen = open === item.value;
        return (
          <div key={item.value}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? undefined : item.value)}
              className={cn(
                "flex w-full items-center justify-between",
                "h-[var(--components-accordion-header-height)] px-[var(--components-accordion-padding-x)]",
                "text-sm font-medium text-text-primary hover:bg-[var(--components-accordion-bg-header-hover)]",
              )}
            >
              {item.title}
              <IconChevronDown
                size={16}
                className={cn(
                  "text-[var(--components-accordion-icon-chevron)] transition-transform duration-150",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-[var(--components-accordion-padding-x)] pb-space-md text-sm text-text-secondary">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
