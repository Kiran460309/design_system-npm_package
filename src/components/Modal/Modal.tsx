import { useEffect, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { IconClose } from "../../icons";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
};

/** Modal — Figma node 74:20. Scrim + centered surface, closes on Escape or scrim click. */
export function Modal({ open, onClose, title, children, className, ...props }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--components-modal-bg-scrim)]/50"
      onClick={onClose}
      data-figma-node="74:20"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "flex flex-col gap-[var(--components-modal-gap)]",
          "p-[var(--components-modal-padding)]",
          "rounded-[var(--components-modal-radius)]",
          "bg-[var(--components-modal-bg-surface)] shadow-xl max-w-md w-full mx-4",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-4">
          {title && <h2 className="text-lg font-semibold text-text-primary">{title}</h2>}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-icon-secondary hover:text-icon-primary"
          >
            <IconClose size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
