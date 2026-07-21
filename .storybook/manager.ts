import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "@system-ui-kit/ui",
    brandUrl: "https://github.com/kiranshan/ui",
    colorPrimary: "#F99C00",
    colorSecondary: "#F99C00",
  }),
});
