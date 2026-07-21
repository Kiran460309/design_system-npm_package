import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { toastVariants, type ToastVariantProps } from "./Toast.variants";
import { IconClose } from "../../icons";

export type ToastProps = HTMLAttributes<HTMLDivElement> &
  ToastVariantProps & {
    onDismiss?: () => void;
  };

/** Toast — Figma node 74:18. */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ className, tone, children, onDismiss, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn(toastVariants({ tone }), className)}
        data-figma-node="74:18"
        {...props}
      >
        <span className="flex-1">{children}</span>
        {onDismiss && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="shrink-0 opacity-80 hover:opacity-100"
          >
            <IconClose size={16} />
          </button>
        )}
      </div>
    );
  },
);

Toast.displayName = "Toast";
