"use client";

// src/components/Button/Button.tsx
import { forwardRef } from "react";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button/Button.variants.ts
import { cva } from "class-variance-authority";
var buttonVariants = cva(
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
import { jsxs } from "react/jsx-runtime";
var Button = forwardRef(
  ({ className, variant, size, leadingIcon, trailingIcon, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
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
import { forwardRef as forwardRef2 } from "react";

// src/components/IconButton/IconButton.variants.ts
import { cva as cva2 } from "class-variance-authority";
var iconButtonVariants = cva2(
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
import { jsx } from "react/jsx-runtime";
var IconButton = forwardRef2(
  ({ className, variant, size, icon, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
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
import { forwardRef as forwardRef3 } from "react";

// src/components/TextField/TextField.variants.ts
import { cva as cva3 } from "class-variance-authority";
var textFieldVariants = cva3(
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
import { jsx as jsx2 } from "react/jsx-runtime";
var TextField = forwardRef3(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
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
import { forwardRef as forwardRef4 } from "react";

// src/components/TextArea/TextArea.variants.ts
import { cva as cva4 } from "class-variance-authority";
var textAreaVariants = cva4(
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
import { jsx as jsx3 } from "react/jsx-runtime";
var TextArea = forwardRef4(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
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
import { forwardRef as forwardRef5 } from "react";

// src/components/Select/Select.variants.ts
import { cva as cva5 } from "class-variance-authority";
var selectVariants = cva5(
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
import { jsx as jsx4 } from "react/jsx-runtime";
function Check({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx4(
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
      children: /* @__PURE__ */ jsx4("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}

// src/icons/Close.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function Close({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs2(
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
        /* @__PURE__ */ jsx5("path", { d: "M18 6 6 18" }),
        /* @__PURE__ */ jsx5("path", { d: "M6 6l12 12" })
      ]
    }
  );
}

// src/icons/ChevronDown.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function ChevronDown({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx6(
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
      children: /* @__PURE__ */ jsx6("path", { d: "m6 9 6 6 6-6" })
    }
  );
}

// src/icons/ChevronUp.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function ChevronUp({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx7(
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
      children: /* @__PURE__ */ jsx7("path", { d: "m18 15-6-6-6 6" })
    }
  );
}

// src/icons/ChevronLeft.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function ChevronLeft({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx8(
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
      children: /* @__PURE__ */ jsx8("path", { d: "m15 18-6-6 6-6" })
    }
  );
}

// src/icons/ChevronRight.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function ChevronRight({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx9(
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
      children: /* @__PURE__ */ jsx9("path", { d: "m9 18 6-6-6-6" })
    }
  );
}

// src/icons/Plus.tsx
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
function Plus({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs3(
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
        /* @__PURE__ */ jsx10("path", { d: "M12 5v14" }),
        /* @__PURE__ */ jsx10("path", { d: "M5 12h14" })
      ]
    }
  );
}

// src/icons/Minus.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function Minus({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx11(
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
      children: /* @__PURE__ */ jsx11("path", { d: "M5 12h14" })
    }
  );
}

// src/icons/Search.tsx
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
function Search({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs4(
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
        /* @__PURE__ */ jsx12("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsx12("path", { d: "m21 21-4.3-4.3" })
      ]
    }
  );
}

// src/icons/Info.tsx
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
function Info({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs5(
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
        /* @__PURE__ */ jsx13("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ jsx13("path", { d: "M12 16v-4" }),
        /* @__PURE__ */ jsx13("path", { d: "M12 8h.01" })
      ]
    }
  );
}

// src/icons/Warning.tsx
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
function Warning({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs6(
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
        /* @__PURE__ */ jsx14("path", { d: "m10.29 3.86-8.18 14.14A2 2 0 0 0 3.82 21h16.36a2 2 0 0 0 1.71-3l-8.18-14.14a2 2 0 0 0-3.42 0Z" }),
        /* @__PURE__ */ jsx14("path", { d: "M12 9v4" }),
        /* @__PURE__ */ jsx14("path", { d: "M12 17h.01" })
      ]
    }
  );
}

// src/icons/AlertCircle.tsx
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
function AlertCircle({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs7(
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
        /* @__PURE__ */ jsx15("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ jsx15("path", { d: "M12 8v4" }),
        /* @__PURE__ */ jsx15("path", { d: "M12 16h.01" })
      ]
    }
  );
}

// src/icons/Star.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function Star({ size = 24, ...props }) {
  return /* @__PURE__ */ jsx16(
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
      children: /* @__PURE__ */ jsx16("path", { d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" })
    }
  );
}

// src/icons/ArrowRight.tsx
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
function ArrowRight({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs8(
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
        /* @__PURE__ */ jsx17("path", { d: "M5 12h14" }),
        /* @__PURE__ */ jsx17("path", { d: "m12 5 7 7-7 7" })
      ]
    }
  );
}

// src/icons/MoreHorizontal.tsx
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
function MoreHorizontal({ size = 24, ...props }) {
  return /* @__PURE__ */ jsxs9(
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
        /* @__PURE__ */ jsx18("circle", { cx: "12", cy: "12", r: "1" }),
        /* @__PURE__ */ jsx18("circle", { cx: "19", cy: "12", r: "1" }),
        /* @__PURE__ */ jsx18("circle", { cx: "5", cy: "12", r: "1" })
      ]
    }
  );
}

// src/components/Select/Select.tsx
import { jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
var Select = forwardRef5(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs10("span", { className: "relative inline-block w-full", children: [
      /* @__PURE__ */ jsx19(
        "select",
        {
          ref,
          className: cn(selectVariants(), "pr-10", className),
          "data-figma-node": "74:8",
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsx19(
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
import { forwardRef as forwardRef6, useId } from "react";

// src/components/Checkbox/Checkbox.variants.ts
import { cva as cva6 } from "class-variance-authority";
var checkboxVariants = cva6(
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
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
var Checkbox = forwardRef6(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ jsxs11("label", { htmlFor: inputId, className: "inline-flex items-center gap-space-xs cursor-pointer", children: [
      /* @__PURE__ */ jsxs11("span", { className: "relative inline-flex", children: [
        /* @__PURE__ */ jsx20(
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
        /* @__PURE__ */ jsx20(
          "span",
          {
            "aria-hidden": true,
            className: cn(checkboxVariants({ checked: !!checked }), className),
            children: /* @__PURE__ */ jsx20(Check, { size: 12, strokeWidth: 3 })
          }
        )
      ] }),
      label && /* @__PURE__ */ jsx20("span", { className: "text-sm text-text-primary select-none", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/RadioButton/RadioButton.tsx
import { forwardRef as forwardRef7, useId as useId2 } from "react";

// src/components/RadioButton/RadioButton.variants.ts
import { cva as cva7 } from "class-variance-authority";
var radioVariants = cva7(
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
import { jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";
var RadioButton = forwardRef7(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = useId2();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ jsxs12("label", { htmlFor: inputId, className: "inline-flex items-center gap-space-xs cursor-pointer", children: [
      /* @__PURE__ */ jsxs12("span", { className: "relative inline-flex", children: [
        /* @__PURE__ */ jsx21(
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
        /* @__PURE__ */ jsx21("span", { "aria-hidden": true, className: cn(radioVariants({ selected: !!checked }), className), children: checked && /* @__PURE__ */ jsx21("span", { className: "size-[5px] rounded-full bg-[var(--components-radio-bg-selected)]" }) })
      ] }),
      label && /* @__PURE__ */ jsx21("span", { className: "text-sm text-text-primary select-none", children: label })
    ] });
  }
);
RadioButton.displayName = "RadioButton";

// src/components/Switch/Switch.tsx
import { forwardRef as forwardRef8, useId as useId3 } from "react";
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";
var Switch = forwardRef8(
  ({ className, checked, label, id, ...props }, ref) => {
    const generatedId = useId3();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ jsxs13("label", { htmlFor: inputId, className: "inline-flex items-center gap-space-xs cursor-pointer", children: [
      /* @__PURE__ */ jsxs13(
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
            /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(
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
      label && /* @__PURE__ */ jsx22("span", { className: "text-sm text-text-primary select-none", children: label })
    ] });
  }
);
Switch.displayName = "Switch";

// src/components/Slider/Slider.tsx
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
var Slider = forwardRef9(
  ({ className, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsx23(
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
import { forwardRef as forwardRef10 } from "react";

// src/components/Badge/Badge.variants.ts
import { cva as cva8 } from "class-variance-authority";
var badgeVariants = cva8(
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
import { jsx as jsx24 } from "react/jsx-runtime";
var Badge = forwardRef10(
  ({ className, tone, ...props }, ref) => {
    return /* @__PURE__ */ jsx24(
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
import { forwardRef as forwardRef11 } from "react";

// src/components/Chip/Chip.variants.ts
import { cva as cva9 } from "class-variance-authority";
var chipVariants = cva9(
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
import { jsx as jsx25 } from "react/jsx-runtime";
var Chip = forwardRef11(
  ({ className, selected, ...props }, ref) => {
    return /* @__PURE__ */ jsx25(
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
import { forwardRef as forwardRef12 } from "react";

// src/components/Avatar/Avatar.variants.ts
import { cva as cva10 } from "class-variance-authority";
var avatarVariants = cva10(
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
import { jsx as jsx26 } from "react/jsx-runtime";
var Avatar = forwardRef12(
  ({ className, size, src, alt, initials, ...props }, ref) => {
    return /* @__PURE__ */ jsx26(
      "span",
      {
        ref,
        className: cn(avatarVariants({ size }), className),
        "data-figma-node": "74:15",
        ...props,
        children: src ? /* @__PURE__ */ jsx26("img", { src, alt: alt ?? "", className: "size-full object-cover" }) : /* @__PURE__ */ jsx26("span", { "aria-hidden": !alt, children: initials })
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/Tooltip/Tooltip.tsx
import { useId as useId4, useState } from "react";
import { jsx as jsx27, jsxs as jsxs14 } from "react/jsx-runtime";
function Tooltip({ content, children, className, ...props }) {
  const [visible, setVisible] = useState(false);
  const id = useId4();
  return /* @__PURE__ */ jsxs14(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false),
      onFocus: () => setVisible(true),
      onBlur: () => setVisible(false),
      children: [
        /* @__PURE__ */ jsx27("span", { "aria-describedby": visible ? id : void 0, tabIndex: 0, children }),
        visible && /* @__PURE__ */ jsx27(
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
import { forwardRef as forwardRef13 } from "react";

// src/components/Alert/Alert.variants.ts
import { cva as cva11 } from "class-variance-authority";
var alertVariants = cva11(
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
import { jsx as jsx28, jsxs as jsxs15 } from "react/jsx-runtime";
var toneIcon = {
  success: Check,
  warning: Warning,
  danger: AlertCircle,
  info: Info
};
var Alert = forwardRef13(
  ({ className, tone = "info", title, children, ...props }, ref) => {
    const Icon = toneIcon[tone ?? "info"];
    return /* @__PURE__ */ jsxs15(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ tone }), className),
        "data-figma-node": "74:17",
        ...props,
        children: [
          /* @__PURE__ */ jsx28(Icon, { size: 18, className: "mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxs15("div", { children: [
            title && /* @__PURE__ */ jsx28("p", { className: "font-medium", children: title }),
            children && /* @__PURE__ */ jsx28("div", { className: "opacity-90", children })
          ] })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";

// src/components/Toast/Toast.tsx
import { forwardRef as forwardRef14 } from "react";

// src/components/Toast/Toast.variants.ts
import { cva as cva12 } from "class-variance-authority";
var toastVariants = cva12(
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
import { jsx as jsx29, jsxs as jsxs16 } from "react/jsx-runtime";
var Toast = forwardRef14(
  ({ className, tone, children, onDismiss, ...props }, ref) => {
    return /* @__PURE__ */ jsxs16(
      "div",
      {
        ref,
        role: "status",
        className: cn(toastVariants({ tone }), className),
        "data-figma-node": "74:18",
        ...props,
        children: [
          /* @__PURE__ */ jsx29("span", { className: "flex-1", children }),
          onDismiss && /* @__PURE__ */ jsx29(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              onClick: onDismiss,
              className: "shrink-0 opacity-80 hover:opacity-100",
              children: /* @__PURE__ */ jsx29(Close, { size: 16 })
            }
          )
        ]
      }
    );
  }
);
Toast.displayName = "Toast";

// src/components/Card/Card.tsx
import { forwardRef as forwardRef15 } from "react";

// src/components/Card/Card.variants.ts
import { cva as cva13 } from "class-variance-authority";
var cardVariants = cva13(
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
import { jsx as jsx30 } from "react/jsx-runtime";
var Card = forwardRef15(
  ({ className, selected, ...props }, ref) => {
    return /* @__PURE__ */ jsx30(
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
import { useEffect } from "react";
import { jsx as jsx31, jsxs as jsxs17 } from "react/jsx-runtime";
function Modal({ open, onClose, title, children, className, ...props }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsx31(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[var(--components-modal-bg-scrim)]/50",
      onClick: onClose,
      "data-figma-node": "74:20",
      children: /* @__PURE__ */ jsxs17(
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
            /* @__PURE__ */ jsxs17("div", { className: "flex items-start justify-between gap-4", children: [
              title && /* @__PURE__ */ jsx31("h2", { className: "text-lg font-semibold text-text-primary", children: title }),
              /* @__PURE__ */ jsx31(
                "button",
                {
                  type: "button",
                  "aria-label": "Close",
                  onClick: onClose,
                  className: "text-icon-secondary hover:text-icon-primary",
                  children: /* @__PURE__ */ jsx31(Close, { size: 20 })
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
import { useState as useState2 } from "react";
import { jsx as jsx32, jsxs as jsxs18 } from "react/jsx-runtime";
function Tabs({ items, defaultValue, className, ...props }) {
  const [active, setActive] = useState2(defaultValue ?? items[0]?.value);
  const activeItem = items.find((item) => item.value === active);
  return /* @__PURE__ */ jsxs18("div", { className: cn("w-full", className), "data-figma-node": "74:21", ...props, children: [
    /* @__PURE__ */ jsx32(
      "div",
      {
        role: "tablist",
        className: "flex items-center gap-[var(--components-tabs-gap)] h-[var(--components-tabs-height)] px-[var(--components-tabs-padding-x)] border-b border-border-subtle",
        children: items.map((item) => {
          const isActive = item.value === active;
          return /* @__PURE__ */ jsxs18(
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
                isActive && /* @__PURE__ */ jsx32(
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
    /* @__PURE__ */ jsx32("div", { role: "tabpanel", className: "pt-space-md", children: activeItem?.content })
  ] });
}

// src/components/Accordion/Accordion.tsx
import { useState as useState3 } from "react";
import { jsx as jsx33, jsxs as jsxs19 } from "react/jsx-runtime";
function Accordion({ items, defaultOpen, className, ...props }) {
  const [open, setOpen] = useState3(defaultOpen);
  return /* @__PURE__ */ jsx33(
    "div",
    {
      className: cn("border rounded-[var(--components-accordion-radius)] border-[var(--components-accordion-border-default)] divide-y divide-[var(--components-accordion-border-default)]", className),
      "data-figma-node": "74:22",
      ...props,
      children: items.map((item) => {
        const isOpen = open === item.value;
        return /* @__PURE__ */ jsxs19("div", { children: [
          /* @__PURE__ */ jsxs19(
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
                /* @__PURE__ */ jsx33(
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
          isOpen && /* @__PURE__ */ jsx33("div", { className: "px-[var(--components-accordion-padding-x)] pb-space-md text-sm text-text-secondary", children: item.content })
        ] }, item.value);
      })
    }
  );
}

// src/components/Table/Table.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "table",
    {
      className: cn("w-full border-collapse text-sm", className),
      "data-figma-node": "74:23",
      ...props
    }
  );
}
Table.Header = function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx34("thead", { className: cn("bg-[var(--components-table-bg-header)]", className), ...props });
};
Table.Body = function TableBody(props) {
  return /* @__PURE__ */ jsx34("tbody", { ...props });
};
Table.Row = function TableRow({
  className,
  selected,
  ...props
}) {
  return /* @__PURE__ */ jsx34(
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
  return /* @__PURE__ */ jsx34(
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
  return /* @__PURE__ */ jsx34(
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
import { cva as cva14 } from "class-variance-authority";
var paginationItemVariants = cva14(
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
import { jsx as jsx35, jsxs as jsxs20 } from "react/jsx-runtime";
function Pagination({ page, pageCount, onPageChange, className }) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxs20(
    "nav",
    {
      "aria-label": "Pagination",
      className: cn("flex items-center gap-[var(--components-pagination-gap)]", className),
      "data-figma-node": "74:24",
      children: [
        /* @__PURE__ */ jsx35(
          "button",
          {
            type: "button",
            "aria-label": "Previous page",
            disabled: page <= 1,
            onClick: () => onPageChange(page - 1),
            className: cn(paginationItemVariants({ active: false }), "disabled:opacity-40 disabled:cursor-not-allowed"),
            children: /* @__PURE__ */ jsx35(ChevronLeft, { size: 16 })
          }
        ),
        pages.map((p) => /* @__PURE__ */ jsx35(
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
        /* @__PURE__ */ jsx35(
          "button",
          {
            type: "button",
            "aria-label": "Next page",
            disabled: page >= pageCount,
            onClick: () => onPageChange(page + 1),
            className: cn(paginationItemVariants({ active: false }), "disabled:opacity-40 disabled:cursor-not-allowed"),
            children: /* @__PURE__ */ jsx35(ChevronRight, { size: 16 })
          }
        )
      ]
    }
  );
}
export {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  AlertCircle as IconAlertCircle,
  ArrowRight as IconArrowRight,
  IconButton,
  Check as IconCheck,
  ChevronDown as IconChevronDown,
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
  ChevronUp as IconChevronUp,
  Close as IconClose,
  Info as IconInfo,
  Minus as IconMinus,
  MoreHorizontal as IconMoreHorizontal,
  Plus as IconPlus,
  Search as IconSearch,
  Star as IconStar,
  Warning as IconWarning,
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
};
//# sourceMappingURL=index.js.map