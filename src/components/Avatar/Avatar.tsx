import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { avatarVariants, type AvatarVariantProps } from "./Avatar.variants";

export type AvatarProps = HTMLAttributes<HTMLSpanElement> &
  AvatarVariantProps & {
    src?: string;
    alt?: string;
    /** Fallback initials shown when no `src` is provided or the image fails to load. */
    initials?: string;
  };

/** Avatar — Figma node 74:15. */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt, initials, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        data-figma-node="74:15"
        {...props}
      >
        {src ? (
          <img src={src} alt={alt ?? ""} className="size-full object-cover" />
        ) : (
          <span aria-hidden={!alt}>{initials}</span>
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";
