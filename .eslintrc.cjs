module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: { version: "detect" },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  ignorePatterns: ["dist", "storybook-static", "node_modules"],
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        // Storybook's `render: () => {...}` callbacks legitimately call hooks
        // but aren't named like components/hooks, which trips this rule.
        "react-hooks/rules-of-hooks": "off",
      },
    },
  ],
};
