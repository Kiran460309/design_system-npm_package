import type { IconProps } from "./types";

/** icon/plus — 24x24, from Figma Icons page (node 81:2) */
export default function Plus({ size = 24, ...props }: IconProps) {
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
      <path d="M12 5v14" /><path d="M5 12h14" />
    </svg>
  );
}
