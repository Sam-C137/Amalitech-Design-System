/** @type { import('@storybook/html-vite').StorybookConfig } */
import path from "path";
import { mergeConfig } from "vite";
const config = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-styling",
        "@storybook/addon-docs",
        "@pxtrn/storybook-addon-docs-stencil",
        "@storybook/addon-viewport",
    ],
    framework: {
        name: "@storybook/html-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
        defaultName: "Documentation",
    },
    staticDirs: ["./public", { from: "../../core/dist/amalitech-design-system", to: "assets" }],
    async viteFinal(config) {
        config.cacheDir = path.join(__dirname, '../node_modules/.cache/sb-vite');
        return mergeConfig(config, {
            optimizeDeps: {
                include: [
                    '@pxtrn/storybook-addon-docs-stencil',
                    'react/jsx-dev-runtime',
                    '@storybook/addon-docs',
                    '@storybook/blocks',
                ]
            }
        })
    },
};

export default config;
