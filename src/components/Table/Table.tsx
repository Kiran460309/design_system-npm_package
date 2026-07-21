import type { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type TableProps = HTMLAttributes<HTMLTableElement>;

/** Table — Figma node 74:23. Compound component: Table.Head / Table.Row / Table.Cell. */
export function Table({ className, ...props }: TableProps) {
  return (
    <table
      className={cn("w-full border-collapse text-sm", className)}
      data-figma-node="74:23"
      {...props}
    />
  );
}

Table.Header = function TableHeader({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("bg-[var(--components-table-bg-header)]", className)} {...props} />;
};

Table.Body = function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
};

Table.Row = function TableRow({
  className,
  selected,
  ...props
}: HTMLAttributes<HTMLTableRowElement> & { selected?: boolean }) {
  return (
    <tr
      className={cn(
        "h-[var(--components-table-row-height)] border-b border-[var(--components-table-border-row)]",
        "hover:bg-[var(--components-table-bg-row-hover)]",
        selected && "bg-[var(--components-table-bg-row-selected)]",
        className,
      )}
      {...props}
    />
  );
};

Table.HeadCell = function TableHeadCell({ className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "text-left font-medium h-[var(--components-table-header-height)] px-[var(--components-table-padding-x)]",
        "text-[var(--components-table-text-header)]",
        className,
      )}
      {...props}
    />
  );
};

Table.Cell = function TableCell({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        "px-[var(--components-table-padding-x)] text-[var(--components-table-text-cell)]",
        className,
      )}
      {...props}
    />
  );
};
