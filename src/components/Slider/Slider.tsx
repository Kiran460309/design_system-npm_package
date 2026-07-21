import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

/** Slider — Figma node 74:12. Uses a native range input styled via component tokens. */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="range"
        disabled={disabled}
        data-figma-node="74:12"
        className={cn(
          "w-full appearance-none cursor-pointer disabled:cursor-not-allowed",
          "h-[var(--components-slider-track-height)] rounded-[var(--components-slider-radius)]",
          disabled ? "bg-[var(--components-slider-bg-track-disabled)]" : "bg-[var(--components-slider-bg-track)]",
          "accent-[var(--components-slider-bg-track-fill)]",
          "[&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:size-[var(--components-slider-thumb-size)]",
          "[&::-webkit-slider-thumb]:rounded-[var(--components-slider-radius)]",
          "[&::-webkit-slider-thumb]:bg-[var(--components-slider-bg-thumb)]",
          "[&::-webkit-slider-thumb]:shadow",
          "[&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-border",
          className,
        )}
        {...props}
      />
    );
  },
);

Slider.displayName = "Slider";
