import type { IconProps } from "./types";

/** icon/close — 24x24, from Figma Icons page (node 81:2) */
export default function Close({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" /><path d="M6 6l12 12" />
    </svg>
  );
}
