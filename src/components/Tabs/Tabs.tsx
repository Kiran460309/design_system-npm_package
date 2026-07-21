import { useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export type TabItem = {
  value: string;
  label: ReactNode;
  content: ReactNode;
};

export type TabsProps = HTMLAttributes<HTMLDivElement> & {
  items: TabItem[];
  defaultValue?: string;
};

/** Tabs — Figma node 74:21. */
export function Tabs({ items, defaultValue, className, ...props }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? items[0]?.value);
  const activeItem = items.find((item) => item.value === active);

  return (
    <div className={cn("w-full", className)} data-figma-node="74:21" {...props}>
      <div
        role="tablist"
        className="flex items-center gap-[var(--components-tabs-gap)] h-[var(--components-tabs-height)] px-[var(--components-tabs-padding-x)] border-b border-border-subtle"
      >
        {items.map((item) => {
          const isActive = item.value === active;
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(item.value)}
              className={cn(
                "relative h-full text-sm font-medium transition-colors",
                isActive
                  ? "text-[var(--components-tabs-text-active)]"
                  : "text-[var(--components-tabs-text-inactive)]",
              )}
            >
              {item.label}
              {isActive && (
                <span
                  className="absolute left-0 right-0 bottom-0 bg-[var(--components-tabs-border-indicator)]"
                  style={{ height: "var(--components-tabs-indicator-height)" }}
                />
              )}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="pt-space-md">
        {activeItem?.content}
      </div>
    </div>
  );
}
