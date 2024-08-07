import { Preview } from "@storybook/web-components";
import { extractArgTypes, extractComponentDescription, setStencilDocJson } from "@pxtrn/storybook-addon-docs-stencil";
import docJson from "../../core/doc/docs.json";
import { defineCustomElements, applyPolyfills } from "../../core/loader";
import "../../core/src/global/variables.css";
import { StencilJsonDocs } from "@pxtrn/storybook-addon-docs-stencil/dist/types";

if (docJson) setStencilDocJson(docJson as unknown as StencilJsonDocs);
applyPolyfills().then(() => defineCustomElements(window));

const preview: Preview = {
    parameters: {
        viewMode: "docs",
        options: {
            storySort: {
                includeNames: true,
                order: [
                    "Amalitech Design System",
                    "Setup & Info",
                    "Design Tokens",
                    ["Index"],
                    "Utilities",
                    "Components",
                    [["Documentation", "Usage"]],
                    "Beta Components"
                ],
            },
        },
        backgrounds: {
            values: [
                { name: "light", value: "#F6F9FC" },
                { name: "dark", value: "#222425" },
            ],
        },
        docs: {
            extractArgTypes,
            extractComponentDescription,
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            hideNoControlsWarning: true,
        },
    },
};

export default preview;
