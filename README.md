<div align="center">

# @system-ui-kit/ui

**A production-ready React component and design token library built for seamless Figma-to-code handoff.**

[![npm version](https://img.shields.io/npm/v/@system-ui-kit/ui.svg)](https://www.npmjs.com/package/@system-ui-kit/ui)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg)](#)

</div>

---

## Overview

`@system-ui-kit/ui` is a token-driven component library that keeps design and engineering in sync. Every color, spacing value, and typography rule is mapped 1:1 from Figma foundations, so what's designed is exactly what ships.

| | |
|---|---|
| **Developers** | Zero-config Tailwind integration, fully typed components, instant install-and-build workflow |
| **Designers** | Strict token architecture (Primitives → Semantic → Component) mirrors Figma foundations pixel-for-pixel |
| **Product Managers** | Reusable primitives and a single source of truth accelerate prototyping and cross-product consistency |

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Local Development](#local-development)
- [Repository Structure](#repository-structure)
- [Design Tokens](#design-tokens)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @system-ui-kit/ui
# or
pnpm add @system-ui-kit/ui
# or
yarn add @system-ui-kit/ui
```

## Quick Start

Import the global stylesheet once at your app root (`main.tsx`, `App.tsx`, or `layout.tsx`), then import components as needed.

```tsx
import "@system-ui-kit/ui/dist/styles.css";
import { Button } from "@system-ui-kit/ui";

export function App() {
  return (
    <div className="p-6">
      <Button variant="primary">Hello from @system-ui-kit/ui</Button>
    </div>
  );
}
```

## Local Development

```bash
pnpm install         # Install dependencies
pnpm storybook       # Playground/docs — http://localhost:6006
pnpm test            # Vitest
pnpm build           # tsup (JS/.d.ts) + Tailwind (styles)
pnpm lint            # Linters
```

## Repository Structure
src/
├── tokens/*.css # Design tokens from Figma foundations
│ (colors, spacing, radius, typography)
├── icons/ # Modular SVG icons synced from Figma
├── components/
│ └── <Name>/
│ ├── Component.tsx # Logic
│ ├── Component.variants.ts # CVA variant mapping
│ ├── Component.stories.tsx # Storybook stories
│ ├── Component.test.tsx # Unit tests
│ └── index.ts
tailwind.config.ts # Maps utility classes to CSS variables in src/tokens

> **Convention:** Never hardcode hex or pixel values in components — always reference a token.

## Design Tokens

Three-tier architecture so Figma changes propagate predictably through the codebase:

1. **Primitives** — raw values (e.g. `blue.500`, `space.4`)
2. **Semantic** — purpose-driven aliases (e.g. `color.action.primary`, `space.gap.md`)
3. **Component** — scoped overrides (e.g. `button.radius`)

## Contributing

Open an issue for significant changes before a PR. Ensure `pnpm lint` and `pnpm test` pass locally.

## License

[MIT](./LICENSE)
