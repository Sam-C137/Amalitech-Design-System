import { addons } from "@storybook/addons";
import amalitechTheme from "./amalitechTheme.js";

addons.setConfig({
    theme: amalitechTheme,
});

addons.setConfig({
    previewTabs: {
    'storybook/docs/panel': null,
    canvas: null,
    },
});
