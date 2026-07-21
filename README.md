# system-ui-kit

A modern, production-ready React UI component and design token library built for seamless handoff between Figma and code.

---

## 👋 Quick Guide by Role

*   **For Developers:** Fast installation, zero-config Tailwind integration, fully typed components, and an easy local development setup.
*   **For Designers:** Built on strict design tokens mapped directly from Figma (foundations, spacing, and component states), ensuring high-fidelity implementation.
*   **For Product Managers:** Consistent UI primitives, rapid prototyping capabilities, and a unified design language to speed up feature delivery.

---

## Installation & Usage

### 1. Install the Package
```bash
npm install system-ui-kit
# or
pnpm add system-ui-kit
# or
yarn add system-ui-kit

2. Import Styles & Components
Make sure to include the global stylesheet once at your application root (e.g., in main.tsx, App.tsx, or layout.tsx), then import components as needed:

TypeScript
import "system-ui-kit/dist/styles.css";
import { Button } from "system-ui-kit";

export function App() {
  return (
    <div className="p-6">
      <Button variant="primary">Hello from system-ui-kit</Button>
    </div>
  );
}

For Developers: Local Development
If you want to contribute, run components locally, or build the library from source:

Bash
# Clone the repository and install dependencies
pnpm install

# Run Storybook for component playground and documentation
pnpm storybook       # Opens at http://localhost:6006

# Run tests
pnpm test            # Vitest

# Build the bundle (tsup for JS/d.ts + Tailwind for styles)
pnpm build

# Run linters
pnpm lint

Repository Structure
src/tokens/*.css — Design tokens exported from Figma foundations (colors, spacing, radius, typography). Never hardcode hex or pixel values; always reuse tokens.

src/icons/ — Modular SVG icons synced directly from Figma.

src/components/<Name>/ — Isolated component folders containing:

Component.tsx (Component logic)

Component.variants.ts (CVA variant mapping)

Component.stories.tsx (Storybook stories)

Component.test.tsx (Unit tests)

index.ts

tailwind.config.ts — Maps utility classes back to CSS variables in src/tokens.

### **Key Benefits by Role**

* **For Developers**
* **Plug-and-Play:** Install quickly and start building instantly with zero-config Tailwind styling.
* **Fully Typed:** Complete TypeScript support ensures auto-completions and fewer runtime bugs.
* **Easy Maintenance:** Clean modular folder structure makes it simple to test, debug, and contribute.


* **For Designers**
* **Design Consistency:** Tokens mapped directly from Figma ensure code matches designs pixel-for-pixel.
* **Zero Guesswork:** Standardized spacing, colors, and typography rules eliminate ad-hoc styling.


* **For Product Managers**
* **Faster Delivery:** Reusable components speed up prototyping and feature shipping.
* **Unified Brand:** A single source of truth keeps the user interface consistent across all products.
