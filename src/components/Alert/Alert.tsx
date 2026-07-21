import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { alertVariants, type AlertVariantProps } from "./Alert.variants";
import { IconInfo, IconWarning, IconAlertCircle, IconCheck } from "../../icons";

export type AlertProps = HTMLAttributes<HTMLDivElement> &
  AlertVariantProps & {
    title?: ReactNode;
  };

const toneIcon = {
  success: IconCheck,
  warning: IconWarning,
  danger: IconAlertCircle,
  info: IconInfo,
} as const;

/** Alert — Figma node 74:17. */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, tone = "info", title, children, ...props }, ref) => {
    const Icon = toneIcon[tone ?? "info"];
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ tone }), className)}
        data-figma-node="74:17"
        {...props}
      >
        <Icon size={18} className="mt-0.5 shrink-0" />
        <div>
          {title && <p className="font-medium">{title}</p>}
          {children && <div className="opacity-90">{children}</div>}
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
