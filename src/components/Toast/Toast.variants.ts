import { cva, type VariantProps } from "class-variance-authority";

/** Source: Figma Toast page (node 74:18). Tone options: default, success, danger. */
export const toastVariants = cva(
  [
    "flex items-center gap-[var(--components-toast-gap)]",
    "px-[var(--components-toast-padding-x)] py-[var(--components-toast-padding-y)]",
    "rounded-[var(--components-toast-radius)] text-sm shadow-lg",
    "text-[var(--components-toast-text-default)]",
  ],
  {
    variants: {
      tone: {
        default: "bg-[var(--components-toast-bg-default)]",
        success: "bg-[var(--components-toast-bg-success)]",
        danger: "bg-[var(--components-toast-bg-danger)]",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

export type ToastVariantProps = VariantProps<typeof toastVariants>;
