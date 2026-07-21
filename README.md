# @system-ui-kit/ui

React component library — system-ui-kit design system.

## Install

```bash
npm install @system-ui-kit/ui
```

```tsx
import "@system-ui-kit/ui/styles.css";
import { Button } from "@system-ui-kit/ui";

export function Example() {
  return <Button variant="primary">Click me</Button>;
}
```

## Develop

```bash
pnpm install
pnpm storybook       # http://localhost:6006
pnpm test            # vitest
pnpm build           # tsup (JS/d.ts) + tailwindcss (dist/styles.css)
pnpm lint
```

## Structure

- `src/tokens/*.css` — design tokens exported from Figma "Foundations" (74:2),
  light mode only. `colors.css`, `spacing.css`, `radius.css`, `typography.css`
  are primitives + semantic layer; `components.css` is the per-component layer
  (button/checkbox/card/etc). Never hardcode a hex or px value in a component —
  add or reuse a token instead.
- `src/icons/` — one file per icon from the Figma Icons page (81:2).
- `src/components/<Name>/` — `Component.tsx`, `Component.variants.ts` (cva
  variant map), `Component.stories.tsx`, `Component.test.tsx`, `index.ts`.
- `tailwind.config.ts` — maps every utility class used in components back to
  the CSS variables in `src/tokens`.

## Publishing

### 1. Build the package

```bash
pnpm build
```

### 2. Create the npm org (first time only)

Go to **https://www.npmjs.com/org/create** and create the `system-ui-kit` org (free).

### 3. Login & publish

```bash
npm login
npm publish --access public
```

## Verify after install

```bash
# In a fresh Vite project
npm install @system-ui-kit/ui
```

```tsx
import "@system-ui-kit/ui/styles.css";
import { Button } from "@system-ui-kit/ui";

export default function App() {
  return <Button variant="primary">Hello from @system-ui-kit/ui!</Button>;
}
```

## Releasing

```bash
pnpm changeset          # describe the change
pnpm release             # build + changesets publish
```

## Known gaps vs. the Figma file (please review)

- **Icons**: the Figma Icons page (81:2) resolves each icon layer to a local
  asset URL served by the Figma desktop app, which isn't reachable from this
  environment — so I could not pull literal vector path data. `src/icons/`
  currently ships a clean 24×24 stroke icon set matching the 15 icon names 1:1
  (check, close, chevron-down/up/left/right, plus, minus, search, info,
  warning, alert-circle, star, arrow-right, more-horizontal). Swap in the real
  paths via Figma's "Copy as SVG" when you have desktop access, keeping the
  same file names/exports so nothing downstream breaks.
- **Button sizing**: Figma's Button page (74:4) only authored the Medium size
  frame. `sm`/`lg` were added from the `--components-button-height-*` tokens
  in Foundations, so double-check those two against Figma if/when Small and
  Large frames get added there.
- **Dark mode**: intentionally out of scope per your request — `tailwind.config.ts`
  has `darkMode: "class"` wired so it's a small lift when you add a dark
  semantic layer to `colors.css`.
