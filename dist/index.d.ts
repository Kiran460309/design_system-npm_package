import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes, SVGProps } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

/**
 * Source: Figma Button page (node 74:4)
 * Variants observed: Style=[Primary,Secondary,Outline], Size=[Medium] (Small/Large sized
 * added here from the Foundations button-height tokens, since only Medium was authored
 * in Figma), State=[Default,Disabled] (hover/active are token-driven, not separate
 * Figma frames).
 */
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps & {
    /** Icon rendered before the label. Import from src/icons — never inline an SVG. */
    leadingIcon?: React.ReactNode;
    /** Icon rendered after the label. Import from src/icons — never inline an SVG. */
    trailingIcon?: React.ReactNode;
};
/**
 * Button — Figma node 74:4.
 * `variant` maps to Figma's "Style" property, `size` to "Size", and the
 * native `disabled` attribute maps to Figma's "State" property.
 */
declare const Button: react.ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps & {
    /** Icon rendered before the label. Import from src/icons — never inline an SVG. */
    leadingIcon?: React.ReactNode;
    /** Icon rendered after the label. Import from src/icons — never inline an SVG. */
    trailingIcon?: React.ReactNode;
} & react.RefAttributes<HTMLButtonElement>>;

/** Source: Figma Icon Button page (node 74:5). */
declare const iconButtonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IconButtonVariantProps & {
    icon: ReactNode;
    "aria-label": string;
};
/** IconButton — Figma node 74:5. */
declare const IconButton: react.ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & IconButtonVariantProps & {
    icon: ReactNode;
    "aria-label": string;
} & react.RefAttributes<HTMLButtonElement>>;

/** Source: Figma Text Field page (node 74:6). States: default/focus/error/disabled. */
declare const textFieldVariants: (props?: ({
    error?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type TextFieldVariantProps = VariantProps<typeof textFieldVariants>;

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & TextFieldVariantProps;
/** TextField — Figma node 74:6. */
declare const TextField: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & TextFieldVariantProps & react.RefAttributes<HTMLInputElement>>;

/** Source: Figma Text Area page (node 74:7). */
declare const textAreaVariants: (props?: ({
    error?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type TextAreaVariantProps = VariantProps<typeof textAreaVariants>;

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaVariantProps;
/** TextArea — Figma node 74:7. */
declare const TextArea: react.ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaVariantProps & react.RefAttributes<HTMLTextAreaElement>>;

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
/** Select — Figma node 74:8. Chevron icon comes from src/icons, never inlined. */
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

/** Source: Figma Select page (node 74:8). */
declare const selectVariants: (props?: ({} & class_variance_authority_types.ClassProp) | undefined) => string;

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    label?: string;
};
/** Checkbox — Figma node 74:9. */
declare const Checkbox: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    label?: string;
} & react.RefAttributes<HTMLInputElement>>;

/** Source: Figma Checkbox page (node 74:9). States: unchecked/checked x default/disabled. */
declare const checkboxVariants: (props?: ({
    checked?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    label?: string;
};
/** RadioButton — Figma node 74:10. */
declare const RadioButton: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    label?: string;
} & react.RefAttributes<HTMLInputElement>>;

/** Source: Figma Radio Button page (node 74:10). States: unselected/selected x default/disabled. */
declare const radioVariants: (props?: ({
    selected?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    label?: string;
};
/** Switch — Figma node 74:11. Track/thumb sizes and colors come straight from tokens. */
declare const Switch: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    label?: string;
} & react.RefAttributes<HTMLInputElement>>;

type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
/** Slider — Figma node 74:12. Uses a native range input styled via component tokens. */
declare const Slider: react.ForwardRefExoticComponent<SliderProps & react.RefAttributes<HTMLInputElement>>;

/** Source: Figma Badge page (node 74:13). Tone options: neutral, brand, success, warning, danger. */
declare const badgeVariants: (props?: ({
    tone?: "neutral" | "brand" | "success" | "warning" | "danger" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeVariantProps = VariantProps<typeof badgeVariants>;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & BadgeVariantProps;
/** Badge — Figma node 74:13. */
declare const Badge: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & BadgeVariantProps & react.RefAttributes<HTMLSpanElement>>;

/** Source: Figma Chip page (node 74:14). States: default/selected/disabled. */
declare const chipVariants: (props?: ({
    selected?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ChipVariantProps = VariantProps<typeof chipVariants>;

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & ChipVariantProps;
/** Chip — Figma node 74:14. Renders as a toggleable <button>. */
declare const Chip: react.ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & ChipVariantProps & react.RefAttributes<HTMLButtonElement>>;

/** Source: Figma Avatar page (node 74:15). Size options: sm, md, lg. */
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AvatarVariantProps = VariantProps<typeof avatarVariants>;

type AvatarProps = HTMLAttributes<HTMLSpanElement> & AvatarVariantProps & {
    src?: string;
    alt?: string;
    /** Fallback initials shown when no `src` is provided or the image fails to load. */
    initials?: string;
};
/** Avatar — Figma node 74:15. */
declare const Avatar: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & AvatarVariantProps & {
    src?: string;
    alt?: string;
    /** Fallback initials shown when no `src` is provided or the image fails to load. */
    initials?: string;
} & react.RefAttributes<HTMLSpanElement>>;

type TooltipProps = HTMLAttributes<HTMLSpanElement> & {
    content: ReactNode;
    children: ReactNode;
};
/** Tooltip — Figma node 74:16. Simple hover/focus-driven tooltip using component tokens. */
declare function Tooltip({ content, children, className, ...props }: TooltipProps): react.JSX.Element;

/** Source: Figma Alert page (node 74:17). Tone options: success, warning, danger, info. */
declare const alertVariants: (props?: ({
    tone?: "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AlertVariantProps = VariantProps<typeof alertVariants>;

type AlertProps = HTMLAttributes<HTMLDivElement> & AlertVariantProps & {
    title?: ReactNode;
};
/** Alert — Figma node 74:17. */
declare const Alert: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & AlertVariantProps & {
    title?: ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

/** Source: Figma Toast page (node 74:18). Tone options: default, success, danger. */
declare const toastVariants: (props?: ({
    tone?: "default" | "success" | "danger" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ToastVariantProps = VariantProps<typeof toastVariants>;

type ToastProps = HTMLAttributes<HTMLDivElement> & ToastVariantProps & {
    onDismiss?: () => void;
};
/** Toast — Figma node 74:18. */
declare const Toast: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & ToastVariantProps & {
    onDismiss?: () => void;
} & react.RefAttributes<HTMLDivElement>>;

/** Source: Figma Card page (node 74:19). States: default/selected. */
declare const cardVariants: (props?: ({
    selected?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type CardVariantProps = VariantProps<typeof cardVariants>;

type CardProps = HTMLAttributes<HTMLDivElement> & CardVariantProps;
/** Card — Figma node 74:19. */
declare const Card: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & CardVariantProps & react.RefAttributes<HTMLDivElement>>;

type ModalProps = HTMLAttributes<HTMLDivElement> & {
    open: boolean;
    onClose: () => void;
    title?: ReactNode;
    children?: ReactNode;
};
/** Modal — Figma node 74:20. Scrim + centered surface, closes on Escape or scrim click. */
declare function Modal({ open, onClose, title, children, className, ...props }: ModalProps): react.JSX.Element | null;

type TabItem = {
    value: string;
    label: ReactNode;
    content: ReactNode;
};
type TabsProps = HTMLAttributes<HTMLDivElement> & {
    items: TabItem[];
    defaultValue?: string;
};
/** Tabs — Figma node 74:21. */
declare function Tabs({ items, defaultValue, className, ...props }: TabsProps): react.JSX.Element;

type AccordionItem = {
    value: string;
    title: ReactNode;
    content: ReactNode;
};
type AccordionProps = HTMLAttributes<HTMLDivElement> & {
    items: AccordionItem[];
    defaultOpen?: string;
};
/** Accordion — Figma node 74:22. Single-open pattern. */
declare function Accordion({ items, defaultOpen, className, ...props }: AccordionProps): react.JSX.Element;

type TableProps = HTMLAttributes<HTMLTableElement>;
/** Table — Figma node 74:23. Compound component: Table.Head / Table.Row / Table.Cell. */
declare function Table({ className, ...props }: TableProps): react.JSX.Element;
declare namespace Table {
    var Header: ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => react.JSX.Element;
    var Body: (props: HTMLAttributes<HTMLTableSectionElement>) => react.JSX.Element;
    var Row: ({ className, selected, ...props }: HTMLAttributes<HTMLTableRowElement> & {
        selected?: boolean;
    }) => react.JSX.Element;
    var HeadCell: ({ className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) => react.JSX.Element;
    var Cell: ({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) => react.JSX.Element;
}

type PaginationProps = {
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    className?: string;
};
/** Pagination — Figma node 74:24. */
declare function Pagination({ page, pageCount, onPageChange, className }: PaginationProps): react.JSX.Element;

/** Source: Figma Pagination page (node 74:24). States: default/active. */
declare const paginationItemVariants: (props?: ({
    active?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

/** icon/check — 24x24, from Figma Icons page (node 81:2) */
declare function Check({ size, ...props }: IconProps): react.JSX.Element;

/** icon/close — 24x24, from Figma Icons page (node 81:2) */
declare function Close({ size, ...props }: IconProps): react.JSX.Element;

/** icon/chevron-down — 24x24, from Figma Icons page (node 81:2) */
declare function ChevronDown({ size, ...props }: IconProps): react.JSX.Element;

/** icon/chevron-up — 24x24, from Figma Icons page (node 81:2) */
declare function ChevronUp({ size, ...props }: IconProps): react.JSX.Element;

/** icon/chevron-left — 24x24, from Figma Icons page (node 81:2) */
declare function ChevronLeft({ size, ...props }: IconProps): react.JSX.Element;

/** icon/chevron-right — 24x24, from Figma Icons page (node 81:2) */
declare function ChevronRight({ size, ...props }: IconProps): react.JSX.Element;

/** icon/plus — 24x24, from Figma Icons page (node 81:2) */
declare function Plus({ size, ...props }: IconProps): react.JSX.Element;

/** icon/minus — 24x24, from Figma Icons page (node 81:2) */
declare function Minus({ size, ...props }: IconProps): react.JSX.Element;

/** icon/search — 24x24, from Figma Icons page (node 81:2) */
declare function Search({ size, ...props }: IconProps): react.JSX.Element;

/** icon/info — 24x24, from Figma Icons page (node 81:2) */
declare function Info({ size, ...props }: IconProps): react.JSX.Element;

/** icon/warning — 24x24, from Figma Icons page (node 81:2) */
declare function Warning({ size, ...props }: IconProps): react.JSX.Element;

/** icon/alert-circle — 24x24, from Figma Icons page (node 81:2) */
declare function AlertCircle({ size, ...props }: IconProps): react.JSX.Element;

/** icon/star — 24x24, from Figma Icons page (node 81:2) */
declare function Star({ size, ...props }: IconProps): react.JSX.Element;

/** icon/arrow-right — 24x24, from Figma Icons page (node 81:2) */
declare function ArrowRight({ size, ...props }: IconProps): react.JSX.Element;

/** icon/more-horizontal — 24x24, from Figma Icons page (node 81:2) */
declare function MoreHorizontal({ size, ...props }: IconProps): react.JSX.Element;

/**
 * Merge conditional class names and resolve conflicting Tailwind utility
 * classes (last one wins), the same helper used by shadcn/ui.
 */
declare function cn(...inputs: ClassValue[]): string;

export { Accordion, type AccordionItem, type AccordionProps, Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, type ButtonVariantProps, Card, type CardProps, Checkbox, type CheckboxProps, Chip, type ChipProps, AlertCircle as IconAlertCircle, ArrowRight as IconArrowRight, IconButton, type IconButtonProps, type IconButtonVariantProps, Check as IconCheck, ChevronDown as IconChevronDown, ChevronLeft as IconChevronLeft, ChevronRight as IconChevronRight, ChevronUp as IconChevronUp, Close as IconClose, Info as IconInfo, Minus as IconMinus, MoreHorizontal as IconMoreHorizontal, Plus as IconPlus, type IconProps, Search as IconSearch, Star as IconStar, Warning as IconWarning, Modal, type ModalProps, Pagination, type PaginationProps, RadioButton, type RadioButtonProps, Select, type SelectProps, Slider, type SliderProps, Switch, type SwitchProps, type TabItem, Table, type TableProps, Tabs, type TabsProps, TextArea, type TextAreaProps, TextField, type TextFieldProps, Toast, type ToastProps, Tooltip, type TooltipProps, alertVariants, avatarVariants, badgeVariants, buttonVariants, cardVariants, checkboxVariants, chipVariants, cn, iconButtonVariants, paginationItemVariants, radioVariants, selectVariants, textAreaVariants, textFieldVariants, toastVariants };
