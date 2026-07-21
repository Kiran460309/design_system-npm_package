import { cn } from "../../utils/cn";
import { paginationItemVariants } from "./Pagination.variants";
import { IconChevronLeft, IconChevronRight } from "../../icons";

export type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
};

/** Pagination — Figma node 74:24. */
export function Pagination({ page, pageCount, onPageChange, className }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center gap-[var(--components-pagination-gap)]", className)}
      data-figma-node="74:24"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className={cn(paginationItemVariants({ active: false }), "disabled:opacity-40 disabled:cursor-not-allowed")}
      >
        <IconChevronLeft size={16} />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={p === page ? "page" : undefined}
          onClick={() => onPageChange(p)}
          className={paginationItemVariants({ active: p === page })}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
        className={cn(paginationItemVariants({ active: false }), "disabled:opacity-40 disabled:cursor-not-allowed")}
      >
        <IconChevronRight size={16} />
      </button>
    </nav>
  );
}
