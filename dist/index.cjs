"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  Alert: () => Alert,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  IconAlertCircle: () => AlertCircle,
  IconArrowRight: () => ArrowRight,
  IconButton: () => IconButton,
  IconCheck: () => Check,
  IconChevronDown: () => ChevronDown,
  IconChevronLeft: () => ChevronLeft,
  IconChevronRight: () => ChevronRight,
  IconChevronUp: () => ChevronUp,
  IconClose: () => Close,
  IconInfo: () => Info,
  IconMinus: () => Minus,
  IconMoreHorizontal: () => MoreHorizontal,
  IconPlus: () => Plus,
  IconSearch: () => Search,
  IconStar: () => Star,
  IconWarning: () => Warning,
  Modal: () => Modal,
  Pagination: () => Pagination,
  RadioButton: () => RadioButton,
  Select: () => Select,
  Slider: () => Slider,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  TextArea: () => TextArea,
  TextField: () => TextField,
  Toast: () => Toast,
  Tooltip: () => Tooltip,
  alertVariants: () => alertVariants,
  avatarVariants: () => avatarVariants,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cardVariants: () => cardVariants,
  checkboxVariants: () => checkboxVariants,
  chipVariants: () => chipVariants,
  cn: () => cn,
  iconButtonVariants: () => iconButtonVariants,
  paginationItemVariants: () => paginationItemVariants,
  radioVariants: () => radioVariants,
  selectVariants: () => selectVariants,
  textAreaVariants: () => textAreaVariants,
  textFieldVariants: () => textFieldVariants,
  toastVariants: () => toastVariants
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_react = require("react");

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Button/Button.variants.ts
var import_class_variance_authority = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority.cva)(
  [
    "inline-flex items-center justify-center gap-[var(--components-button-gap)]",
    "rounded-[var(--components-button-radius)]",
    "font-medium text-sm",
    "transition-colors duration-150",
    "disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--components-button-bg-primary)]",
          "text-[var(--components-button-text-primary)]",
          "hover:bg-[var(--components-button-bg-primary-hover)]",
          "active:bg-[var(--components-button-bg-primary-active)]",
          "disabled:bg-[var(--components-button-bg-primary-disabled)]",
          "disabled:text-[var(--components-button-text-primary-disabled)]"
        ],
        secondary: [
          "bg-[var(--components-button-bg-secondary)]",
          "text-[var(--components-button-text-secondary)]",
          "hover:bg-[var(--components-button-bg-secondary-hover)]",
          "disabled:bg-[var(--components-button-bg-secondary-disabled)]",
          "disabled:text-[var(--components-button-text-secondary-disabled)]"
        ],
        outline: [
          "bg-[var(--components-button-bg-outline)]",
          "text-[var(--components-button-text-outline)]",
          "border border-[var(--components-button-border-outline)]",
          "hover:border-[var(--components-button-border-outline-hover)]",
          "disabled:border-[var(--components-button-border-outline-disabled)]",
          "disabled:text-[var(--components-button-text-outline-disabled)]"
        ]
      },
      size: {
        sm: "h-[var(--components-button-height-sm)] px-space-sm",
        md: "h-[var(--components-button-height-md)] px-[var(--components-button-padding-x)] py-[var(--components-button-padding-y)]",
        lg: "h-[var(--components-button-height-lg)] px-space-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
  ({ className, variant, size, leadingIcon, trailingIcon, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref,
        className: cn(buttonVariants({ variant, size }), className),
        "data-figma-node": "74:4",
        ...props,
        children: [
          leadingIcon,
          children,
          trailingIcon
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/IconButton/IconButton.tsx
var import_react2 = require("react");

// src/components/IconButton/IconButton.variants.ts
var import_class_variance_authority2 = require("class-variance-authority");
var iconButtonVariants = (0, import_class_variance_authority2.cva)(
  [
    "inline-flex items-center justify-center shrink-0",
    "rounded-[var(--components-icon-button-radius)]",
    "transition-colors duration-150",
    "disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--components-icon-button-bg-primary)]",
          "text-[var(--components-icon-button-icon-primary)]",
          "disabled:bg-[var(--components-icon-button-bg-primary-disabled)]",
          "disabled:text-[var(--components-icon-button-icon-disabled)]"
        ],
        secondary: [
          "bg-[var(--components-icon-button-bg-secondary)]",
          "text-[var(--components-icon-button-icon-secondary)]",
          "disabled:text-[var(--components-icon-button-icon-disabled)]"
        ],
        outline: [
          "bg-transparent border border-[var(--components-icon-button-border-outline)]",
          "text-[var(--components-icon-button-icon-outline)]",
          "disabled:text-[var(--components-icon-button-icon-disabled)]"
        ]
      },
      size: {
        sm: "size-[var(--components-icon-button-size-sm)]",
        md: "size-[var(--components-icon-button-size-md)]",
        lg: "size-[var(--components-icon-button-size-lg)]"
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);

// src/components/IconButton/IconButton.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var IconButton = (0, import_react2.forwardRef)(
  ({ className, variant, size, icon, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        ref,
        className: cn(iconButtonVariants({ variant, size }), className),
        "data-figma-node": "74:5",
        ...props,
        children: icon
      }
    );
  }
);
IconButton.displayName = "IconButton";

// src/components/TextField/TextField.tsx
var import_react3 = require("react");

// src/components/TextField/TextField.variants.ts
var import_class_variance_authority3 = require("class-variance-authority");
var textFieldVariants = (0, import_class_variance_authority3.cva)(
  [
    "w-full h-[var(--components-text-field-height)]",
    "px-[var(--components-text-field-padding-x)] py-[var(--components-text-field-padding-y)]",
    "rounded-[var(--components-text-field-radius)] border",
    "bg-[var(--components-text-field-bg-default)] text-[var(--components-text-field-text-value)]",
    "text-sm placeholder:text-[var(--components-text-field-text-placeholder)]",
    "border-[var(--components-text-field-border-default)]",
    "transition-colors duration-150",
    "focus:outline-none focus:border-[var(--components-text-field-border-focus)] focus:ring-2 focus:ring-border-focus/30",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-text-field-bg-disabled)] disabled:text-[var(--components-text-field-text-disabled)]"
  ],
  {
    variants: {
      error: {
        true: "border-[var(--components-text-field-border-error)] focus:border-[var(--components-text-field-border-error)]",
        false: ""
      }
    },
    defaultVariants: { error: false }
  }
);

// src/components/TextField/TextField.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var TextField = (0, import_react3.forwardRef)(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        ref,
        className: cn(textFieldVariants({ error }), className),
        "aria-invalid": !!error,
        "data-figma-node": "74:6",
        ...props
      }
    );
  }
);
TextField.displayName = "TextField";

// src/components/TextArea/TextArea.tsx
var import_react4 = require("react");

// src/components/TextArea/TextArea.variants.ts
var import_class_variance_authority4 = require("class-variance-authority");
var textAreaVariants = (0, import_class_variance_authority4.cva)(
  [
    "w-full min-h-[var(--components-textarea-min-height)]",
    "px-[var(--components-textarea-padding-x)] py-[var(--components-textarea-padding-y)]",
    "rounded-[var(--components-textarea-radius)] border",
    "bg-[var(--components-textarea-bg-default)] text-[var(--components-textarea-text-value)]",
    "text-sm placeholder:text-[var(--components-textarea-text-placeholder)]",
    "border-[var(--components-textarea-border-default)]",
    "transition-colors duration-150",
    "focus:outline-none focus:border-[var(--components-textarea-border-focus)] focus:ring-2 focus:ring-border-focus/30",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-textarea-bg-disabled)]"
  ],
  {
    variants: {
      error: {
        true: "border-[var(--components-textarea-border-error)] focus:border-[var(--components-textarea-border-error)]",
        false: ""
      }
    },
    defaultVariants: { error: false }
  }
);

// src/components/TextArea/TextArea.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var TextArea = (0, import_react4.forwardRef)(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "textarea",
      {
        ref,
        className: cn(textAreaVariants({ error }), className),
        "aria-invalid": !!error,
        "data-figma-node": "74:7",
        ...props
      }
    );
  }
);
TextArea.displayName = "TextArea";

// src/components/Select/Select.tsx
var import_react5 = require("react");

// src/components/Select/Select.variants.ts
var import_class_variance_authority5 = require("class-variance-authority");
var selectVariants = (0, import_class_variance_authority5.cva)(
  [
    "w-full h-[var(--components-select-height)]",
    "px-[var(--components-select-padding-x)]",
    "rounded-[var(--components-select-radius)] border appearance-none",
    "bg-[var(--components-select-bg-default)] text-[var(--components-select-text-value)]",
    "text-sm border-[var(--components-select-border-default)]",
    "transition-colors duration-150",
    "focus:outline-none focus:border-[var(--components-select-border-focus)] focus:ring-2 focus:ring-border-focus/30",
    "disabled:cursor-not-allowed disabled:text-[var(--components-select-text-placeholder)]"
  ],
  {
    variants: {}
  }
);

// src/icons/Check.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Check({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}

// src/icons/Close.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Close({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18 6 6 18" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M6 6l12 12" })
      ]
    }
  );
}

// src/icons/ChevronDown.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ChevronDown({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m6 9 6 6 6-6" })
    }
  );
}

// src/icons/ChevronUp.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ChevronUp({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "m18 15-6-6-6 6" })
    }
  );
}

// src/icons/ChevronLeft.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function ChevronLeft({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "m15 18-6-6 6-6" })
    }
  );
}

// src/icons/ChevronRight.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function ChevronRight({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "m9 18 6-6-6-6" })
    }
  );
}

// src/icons/Plus.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Plus({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M12 5v14" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M5 12h14" })
      ]
    }
  );
}

// src/icons/Minus.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Minus({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M5 12h14" })
    }
  );
}

// src/icons/Search.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Search({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { d: "m21 21-4.3-4.3" })
      ]
    }
  );
}

// src/icons/Info.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Info({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 16v-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 8h.01" })
      ]
    }
  );
}

// src/icons/Warning.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Warning({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "m10.29 3.86-8.18 14.14A2 2 0 0 0 3.82 21h16.36a2 2 0 0 0 1.71-3l-8.18-14.14a2 2 0 0 0-3.42 0Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M12 9v4" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M12 17h.01" })
      ]
    }
  );
}

// src/icons/AlertCircle.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function AlertCircle({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M12 8v4" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M12 16h.01" })
      ]
    }
  );
}

// src/icons/Star.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function Star({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" })
    }
  );
}

// src/icons/ArrowRight.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function ArrowRight({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M5 12h14" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "m12 5 7 7-7 7" })
      ]
    }
  );
}

// src/icons/MoreHorizontal.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function MoreHorizontal({ size = 24, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "19", cy: "12", r: "1" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "5", cy: "12", r: "1" })
      ]
    }
  );
}

// src/components/Select/Select.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var Select = (0, import_react5.forwardRef)(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "relative inline-block w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "select",
        {
          ref,
          className: cn(selectVariants(), "pr-10", className),
          "data-figma-node": "74:8",
          ...props,
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        ChevronDown,
        {
          size: 16,
          className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--components-select-icon-chevron)]"
        }
      )
    ] });
  }
);
Select.displayName = "Select";

// src/components/Checkbox/Checkbox.tsx
var import_react6 = require("react");

// src/components/Checkbox/Checkbox.variants.ts
var import_class_variance_authority6 = require("class-variance-authority");
var checkboxVariants = (0, import_class_variance_authority6.cva)(
  [
    "inline-flex items-center justify-center shrink-0",
    "size-[var(--components-checkbox-size)]",
    "rounded-[var(--components-checkbox-radius)]",
    "border border-[var(--components-checkbox-border-unchecked)]",
    "bg-[var(--components-checkbox-bg-unchecked)]",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-checkbox-bg-disabled)] disabled:border-[var(--components-checkbox-border-disabled)]"
  ],
  {
    variants: {
      checked: {
        true: "bg-[var(--components-checkbox-bg-checked)] border-[var(--components-checkbox-bg-checked)] text-[var(--components-checkbox-icon-checked)]",
        false: "text-transparent"
      }
    },
    defaultVariants: { checked: false }
  }
);

// src/components/Checkbox/Checkbox.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var Checkbox = (0, import_react6.forwardRef)(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = (0, import_react6.useId)();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { htmlFor: inputId, className: "inline-flex items-center gap-space-xs cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "relative inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "input",
          {
            ref,
            id: inputId,
            type: "checkbox",
            checked,
            className: "peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed",
            "data-figma-node": "74:9",
            ...props
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "span",
          {
            "aria-hidden": true,
            className: cn(checkboxVariants({ checked: !!checked }), className),
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Check, { size: 12, strokeWidth: 3 })
          }
        )
      ] }),
      label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-sm text-text-primary select-none", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/RadioButton/RadioButton.tsx
var import_react7 = require("react");

// src/components/RadioButton/RadioButton.variants.ts
var import_class_variance_authority7 = require("class-variance-authority");
var radioVariants = (0, import_class_variance_authority7.cva)(
  [
    "inline-flex items-center justify-center shrink-0",
    "size-[var(--components-radio-size)]",
    "rounded-[var(--components-radio-radius)]",
    "border border-[var(--components-radio-border-unselected)]",
    "bg-[var(--components-radio-bg-unselected)]",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-radio-bg-disabled)] disabled:border-[var(--components-radio-border-disabled)]"
  ],
  {
    variants: {
      selected: {
        true: "border-[var(--components-radio-border-selected)]",
        false: ""
      }
    },
    defaultVariants: { selected: false }
  }
);

// src/components/RadioButton/RadioButton.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var RadioButton = (0, import_react7.forwardRef)(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = (0, import_react7.useId)();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { htmlFor: inputId, className: "inline-flex items-center gap-space-xs cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "relative inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "input",
          {
            ref,
            id: inputId,
            type: "radio",
            checked,
            className: "peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed",
            "data-figma-node": "74:10",
            ...props
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { "aria-hidden": true, className: cn(radioVariants({ selected: !!checked }), className), children: checked && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "size-[5px] rounded-full bg-[var(--components-radio-bg-selected)]" }) })
      ] }),
      label && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-sm text-text-primary select-none", children: label })
    ] });
  }
);
RadioButton.displayName = "RadioButton";

// src/components/Switch/Switch.tsx
var import_react8 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Switch = (0, import_react8.forwardRef)(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = (0, import_react8.useId)();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("label", { htmlFor: inputId, className: "inline-flex items-center gap-space-xs cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
        "span",
        {
          className: cn(
            "relative inline-flex shrink-0 items-center rounded-[var(--components-switch-radius)] transition-colors duration-150",
            "w-[var(--components-switch-width)] h-[var(--components-switch-height)]",
            checked ? "bg-[var(--components-switch-bg-on)]" : "bg-[var(--components-switch-bg-off)]",
            props.disabled && "bg-[var(--components-switch-bg-disabled)]",
            className
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "input",
              {
                ref,
                id: inputId,
                type: "checkbox",
                role: "switch",
                checked,
                className: "absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed",
                "data-figma-node": "74:11",
                ...props
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "span",
              {
                "aria-hidden": true,
                className: cn(
                  "pointer-events-none inline-block rounded-full bg-[var(--components-switch-thumb-bg)] shadow transition-transform duration-150",
                  "size-[var(--components-switch-thumb-size)]",
                  checked ? "translate-x-[calc(var(--components-switch-width)-var(--components-switch-thumb-size)-2px)]" : "translate-x-[1px]"
                )
              }
            )
          ]
        }
      ),
      label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-sm text-text-primary select-none", children: label })
    ] });
  }
);
Switch.displayName = "Switch";

// src/components/Slider/Slider.tsx
var import_react9 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Slider = (0, import_react9.forwardRef)(
  ({ className, disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "input",
      {
        ref,
        type: "range",
        disabled,
        "data-figma-node": "74:12",
        className: cn(
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
          className
        ),
        ...props
      }
    );
  }
);
Slider.displayName = "Slider";

// src/components/Badge/Badge.tsx
var import_react10 = require("react");

// src/components/Badge/Badge.variants.ts
var import_class_variance_authority8 = require("class-variance-authority");
var badgeVariants = (0, import_class_variance_authority8.cva)(
  [
    "inline-flex items-center justify-center shrink-0",
    "h-[var(--components-badge-height)] px-[var(--components-badge-padding-x)]",
    "rounded-[var(--components-badge-radius)]",
    "text-xs font-medium whitespace-nowrap"
  ],
  {
    variants: {
      tone: {
        neutral: "bg-[var(--components-badge-bg-neutral)] text-[var(--components-badge-text-neutral)]",
        brand: "bg-[var(--components-badge-bg-brand)] text-[var(--components-badge-text-brand)]",
        success: "bg-[var(--components-badge-bg-success)] text-[var(--components-badge-text-success)]",
        warning: "bg-[var(--components-badge-bg-warning)] text-[var(--components-badge-text-warning)]",
        danger: "bg-[var(--components-badge-bg-danger)] text-[var(--components-badge-text-danger)]"
      }
    },
    defaultVariants: { tone: "neutral" }
  }
);

// src/components/Badge/Badge.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var Badge = (0, import_react10.forwardRef)(
  ({ className, tone, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "span",
      {
        ref,
        className: cn(badgeVariants({ tone }), className),
        "data-figma-node": "74:13",
        ...props
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Chip/Chip.tsx
var import_react11 = require("react");

// src/components/Chip/Chip.variants.ts
var import_class_variance_authority9 = require("class-variance-authority");
var chipVariants = (0, import_class_variance_authority9.cva)(
  [
    "inline-flex items-center gap-1 shrink-0",
    "h-[var(--components-chip-height)] px-[var(--components-chip-padding-x)]",
    "rounded-[var(--components-chip-radius)] border",
    "text-sm font-medium whitespace-nowrap transition-colors duration-150",
    "disabled:cursor-not-allowed disabled:bg-[var(--components-chip-bg-disabled)] disabled:text-[var(--components-chip-text-disabled)]"
  ],
  {
    variants: {
      selected: {
        true: "bg-[var(--components-chip-bg-selected)] text-[var(--components-chip-text-selected)] border-[var(--components-chip-border-selected)]",
        false: "bg-[var(--components-chip-bg-default)] text-[var(--components-chip-text-default)] border-[var(--components-chip-border-default)]"
      }
    },
    defaultVariants: { selected: false }
  }
);

// src/components/Chip/Chip.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var Chip = (0, import_react11.forwardRef)(
  ({ className, selected, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "button",
      {
        ref,
        type: "button",
        "aria-pressed": !!selected,
        className: cn(chipVariants({ selected }), className),
        "data-figma-node": "74:14",
        ...props
      }
    );
  }
);
Chip.displayName = "Chip";

// src/components/Avatar/Avatar.tsx
var import_react12 = require("react");

// src/components/Avatar/Avatar.variants.ts
var import_class_variance_authority10 = require("class-variance-authority");
var avatarVariants = (0, import_class_variance_authority10.cva)(
  [
    "inline-flex items-center justify-center shrink-0 overflow-hidden",
    "rounded-[var(--components-avatar-radius)]",
    "bg-[var(--components-avatar-bg-default)] text-[var(--components-avatar-text-initials)]",
    "font-medium select-none"
  ],
  {
    variants: {
      size: {
        sm: "size-[var(--components-avatar-size-sm)] text-xs",
        md: "size-[var(--components-avatar-size-md)] text-sm",
        lg: "size-[var(--components-avatar-size-lg)] text-base"
      }
    },
    defaultVariants: { size: "md" }
  }
);

// src/components/Avatar/Avatar.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var Avatar = (0, import_react12.forwardRef)(
  ({ className, size, src, alt, initials, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "span",
      {
        ref,
        className: cn(avatarVariants({ size }), className),
        "data-figma-node": "74:15",
        ...props,
        children: src ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src, alt: alt ?? "", className: "size-full object-cover" }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": !alt, children: initials })
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/Tooltip/Tooltip.tsx
var import_react13 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
function Tooltip({ content, children, className, ...props }) {
  const [visible, setVisible] = (0, import_react13.useState)(false);
  const id = (0, import_react13.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false),
      onFocus: () => setVisible(true),
      onBlur: () => setVisible(false),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { "aria-describedby": visible ? id : void 0, tabIndex: 0, children }),
        visible && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "span",
          {
            role: "tooltip",
            id,
            "data-figma-node": "74:16",
            className: cn(
              "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 z-10 whitespace-nowrap",
              "px-[var(--components-tooltip-padding-x)] py-[var(--components-tooltip-padding-y)]",
              "rounded-[var(--components-tooltip-radius)]",
              "bg-[var(--components-tooltip-bg)] text-[var(--components-tooltip-text)]",
              "text-xs",
              className
            ),
            ...props,
            children: content
          }
        )
      ]
    }
  );
}

// src/components/Alert/Alert.tsx
var import_react14 = require("react");

// src/components/Alert/Alert.variants.ts
var import_class_variance_authority11 = require("class-variance-authority");
var alertVariants = (0, import_class_variance_authority11.cva)(
  [
    "flex items-start gap-[var(--components-alert-gap)]",
    "px-[var(--components-alert-padding-x)] py-[var(--components-alert-padding-y)]",
    "rounded-[var(--components-alert-radius)] text-sm"
  ],
  {
    variants: {
      tone: {
        success: "bg-[var(--components-alert-bg-success)] text-[var(--components-alert-text-success)]",
        warning: "bg-[var(--components-alert-bg-warning)] text-[var(--components-alert-text-warning)]",
        danger: "bg-[var(--components-alert-bg-danger)] text-[var(--components-alert-text-danger)]",
        info: "bg-[var(--components-alert-bg-info)] text-[var(--components-alert-text-info)]"
      }
    },
    defaultVariants: { tone: "info" }
  }
);

// src/components/Alert/Alert.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var toneIcon = {
  success: Check,
  warning: Warning,
  danger: AlertCircle,
  info: Info
};
var Alert = (0, import_react14.forwardRef)(
  ({ className, tone = "info", title, children, ...props }, ref) => {
    const Icon = toneIcon[tone ?? "info"];
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ tone }), className),
        "data-figma-node": "74:17",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { size: 18, className: "mt-0.5 shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "font-medium", children: title }),
            children && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "opacity-90", children })
          ] })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";

// src/components/Toast/Toast.tsx
var import_react15 = require("react");

// src/components/Toast/Toast.variants.ts
var import_class_variance_authority12 = require("class-variance-authority");
var toastVariants = (0, import_class_variance_authority12.cva)(
  [
    "flex items-center gap-[var(--components-toast-gap)]",
    "px-[var(--components-toast-padding-x)] py-[var(--components-toast-padding-y)]",
    "rounded-[var(--components-toast-radius)] text-sm shadow-lg",
    "text-[var(--components-toast-text-default)]"
  ],
  {
    variants: {
      tone: {
        default: "bg-[var(--components-toast-bg-default)]",
        success: "bg-[var(--components-toast-bg-success)]",
        danger: "bg-[var(--components-toast-bg-danger)]"
      }
    },
    defaultVariants: { tone: "default" }
  }
);

// src/components/Toast/Toast.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var Toast = (0, import_react15.forwardRef)(
  ({ className, tone, children, onDismiss, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
      "div",
      {
        ref,
        role: "status",
        className: cn(toastVariants({ tone }), className),
        "data-figma-node": "74:18",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "flex-1", children }),
          onDismiss && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              onClick: onDismiss,
              className: "shrink-0 opacity-80 hover:opacity-100",
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Close, { size: 16 })
            }
          )
        ]
      }
    );
  }
);
Toast.displayName = "Toast";

// src/components/Card/Card.tsx
var import_react16 = require("react");

// src/components/Card/Card.variants.ts
var import_class_variance_authority13 = require("class-variance-authority");
var cardVariants = (0, import_class_variance_authority13.cva)(
  [
    "flex flex-col gap-[var(--components-card-gap)]",
    "p-[var(--components-card-padding)]",
    "rounded-[var(--components-card-radius)] border",
    "bg-[var(--components-card-bg-default)]"
  ],
  {
    variants: {
      selected: {
        true: "border-[var(--components-card-border-selected)]",
        false: "border-[var(--components-card-border-default)]"
      }
    },
    defaultVariants: { selected: false }
  }
);

// src/components/Card/Card.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var Card = (0, import_react16.forwardRef)(
  ({ className, selected, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "div",
      {
        ref,
        className: cn(cardVariants({ selected }), className),
        "data-figma-node": "74:19",
        ...props
      }
    );
  }
);
Card.displayName = "Card";

// src/components/Modal/Modal.tsx
var import_react17 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
function Modal({ open, onClose, title, children, className, ...props }) {
  (0, import_react17.useEffect)(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[var(--components-modal-bg-scrim)]/50",
      onClick: onClose,
      "data-figma-node": "74:20",
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": typeof title === "string" ? title : void 0,
          onClick: (e) => e.stopPropagation(),
          className: cn(
            "flex flex-col gap-[var(--components-modal-gap)]",
            "p-[var(--components-modal-padding)]",
            "rounded-[var(--components-modal-radius)]",
            "bg-[var(--components-modal-bg-surface)] shadow-xl max-w-md w-full mx-4",
            className
          ),
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { className: "text-lg font-semibold text-text-primary", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": "Close",
                  onClick: onClose,
                  className: "text-icon-secondary hover:text-icon-primary",
                  children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Close, { size: 20 })
                }
              )
            ] }),
            children
          ]
        }
      )
    }
  );
}

// src/components/Tabs/Tabs.tsx
var import_react18 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
function Tabs({ items, defaultValue, className, ...props }) {
  const [active, setActive] = (0, import_react18.useState)(defaultValue ?? items[0]?.value);
  const activeItem = items.find((item) => item.value === active);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("w-full", className), "data-figma-node": "74:21", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "div",
      {
        role: "tablist",
        className: "flex items-center gap-[var(--components-tabs-gap)] h-[var(--components-tabs-height)] px-[var(--components-tabs-padding-x)] border-b border-border-subtle",
        children: items.map((item) => {
          const isActive = item.value === active;
          return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": isActive,
              onClick: () => setActive(item.value),
              className: cn(
                "relative h-full text-sm font-medium transition-colors",
                isActive ? "text-[var(--components-tabs-text-active)]" : "text-[var(--components-tabs-text-inactive)]"
              ),
              children: [
                item.label,
                isActive && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                  "span",
                  {
                    className: "absolute left-0 right-0 bottom-0 bg-[var(--components-tabs-border-indicator)]",
                    style: { height: "var(--components-tabs-indicator-height)" }
                  }
                )
              ]
            },
            item.value
          );
        })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { role: "tabpanel", className: "pt-space-md", children: activeItem?.content })
  ] });
}

// src/components/Accordion/Accordion.tsx
var import_react19 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
function Accordion({ items, defaultOpen, className, ...props }) {
  const [open, setOpen] = (0, import_react19.useState)(defaultOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "div",
    {
      className: cn("border rounded-[var(--components-accordion-radius)] border-[var(--components-accordion-border-default)] divide-y divide-[var(--components-accordion-border-default)]", className),
      "data-figma-node": "74:22",
      ...props,
      children: items.map((item) => {
        const isOpen = open === item.value;
        return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
            "button",
            {
              type: "button",
              "aria-expanded": isOpen,
              onClick: () => setOpen(isOpen ? void 0 : item.value),
              className: cn(
                "flex w-full items-center justify-between",
                "h-[var(--components-accordion-header-height)] px-[var(--components-accordion-padding-x)]",
                "text-sm font-medium text-text-primary hover:bg-[var(--components-accordion-bg-header-hover)]"
              ),
              children: [
                item.title,
                /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                  ChevronDown,
                  {
                    size: 16,
                    className: cn(
                      "text-[var(--components-accordion-icon-chevron)] transition-transform duration-150",
                      isOpen && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          isOpen && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "px-[var(--components-accordion-padding-x)] pb-space-md text-sm text-text-secondary", children: item.content })
        ] }, item.value);
      })
    }
  );
}

// src/components/Table/Table.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "table",
    {
      className: cn("w-full border-collapse text-sm", className),
      "data-figma-node": "74:23",
      ...props
    }
  );
}
Table.Header = function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("thead", { className: cn("bg-[var(--components-table-bg-header)]", className), ...props });
};
Table.Body = function TableBody(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("tbody", { ...props });
};
Table.Row = function TableRow({
  className,
  selected,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "tr",
    {
      className: cn(
        "h-[var(--components-table-row-height)] border-b border-[var(--components-table-border-row)]",
        "hover:bg-[var(--components-table-bg-row-hover)]",
        selected && "bg-[var(--components-table-bg-row-selected)]",
        className
      ),
      ...props
    }
  );
};
Table.HeadCell = function TableHeadCell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "th",
    {
      className: cn(
        "text-left font-medium h-[var(--components-table-header-height)] px-[var(--components-table-padding-x)]",
        "text-[var(--components-table-text-header)]",
        className
      ),
      ...props
    }
  );
};
Table.Cell = function TableCell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "td",
    {
      className: cn(
        "px-[var(--components-table-padding-x)] text-[var(--components-table-text-cell)]",
        className
      ),
      ...props
    }
  );
};

// src/components/Pagination/Pagination.variants.ts
var import_class_variance_authority14 = require("class-variance-authority");
var paginationItemVariants = (0, import_class_variance_authority14.cva)(
  [
    "inline-flex items-center justify-center",
    "size-[var(--components-pagination-size)]",
    "rounded-[var(--components-pagination-radius)] border text-sm",
    "border-[var(--components-pagination-border-default)]",
    "transition-colors duration-150"
  ],
  {
    variants: {
      active: {
        true: "bg-[var(--components-pagination-bg-active)] text-[var(--components-pagination-text-active)] border-transparent",
        false: "bg-[var(--components-pagination-bg-default)] text-[var(--components-pagination-text-default)]"
      }
    },
    defaultVariants: { active: false }
  }
);

// src/components/Pagination/Pagination.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function Pagination({ page, pageCount, onPageChange, className }) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "nav",
    {
      "aria-label": "Pagination",
      className: cn("flex items-center gap-[var(--components-pagination-gap)]", className),
      "data-figma-node": "74:24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Previous page",
            disabled: page <= 1,
            onClick: () => onPageChange(page - 1),
            className: cn(paginationItemVariants({ active: false }), "disabled:opacity-40 disabled:cursor-not-allowed"),
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ChevronLeft, { size: 16 })
          }
        ),
        pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            type: "button",
            "aria-current": p === page ? "page" : void 0,
            onClick: () => onPageChange(p),
            className: paginationItemVariants({ active: p === page }),
            children: p
          },
          p
        )),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Next page",
            disabled: page >= pageCount,
            onClick: () => onPageChange(page + 1),
            className: cn(paginationItemVariants({ active: false }), "disabled:opacity-40 disabled:cursor-not-allowed"),
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ChevronRight, { size: 16 })
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  IconAlertCircle,
  IconArrowRight,
  IconButton,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClose,
  IconInfo,
  IconMinus,
  IconMoreHorizontal,
  IconPlus,
  IconSearch,
  IconStar,
  IconWarning,
  Modal,
  Pagination,
  RadioButton,
  Select,
  Slider,
  Switch,
  Table,
  Tabs,
  TextArea,
  TextField,
  Toast,
  Tooltip,
  alertVariants,
  avatarVariants,
  badgeVariants,
  buttonVariants,
  cardVariants,
  checkboxVariants,
  chipVariants,
  cn,
  iconButtonVariants,
  paginationItemVariants,
  radioVariants,
  selectVariants,
  textAreaVariants,
  textFieldVariants,
  toastVariants
});
//# sourceMappingURL=index.cjs.map