# Amalitech Design Tokens

Design tokens serve as variables for our designs, storing values such as colors, typography, spacing, and radii. Unlike hard-coded values, they promote consistency in product development. By using predefined token packages, developers can easily select the appropriate token, reducing the risk of errors when translating designs into code. Additionally, tokens can be updated globally, automatically reflecting changes across all projects.

## Setting things up

Install our design tokens in your project with `npm`, `yarn` or `pnpm`:

```bash
npm install @amalitech-design-system/design-tokens
```

```bash
yarn add @amalitech-design-system/design-tokens
```

```bash
pnpm add @amalitech-design-system/design-tokens
```

## How designers work with design tokens

We have converted the design tokens into color, text, and shadow styles for Figma. As a designer, you can work like you always have, using styles for your designs. Using semantic token names like Text & Icon or Link will make it easier to understand and remember what to use specific styles for. With the help of the tokens, you can also easily change the designs to ensure consistency. When we update the tokens, you just need to accept the update, and everything will update automatically.

## How developers work with design tokens

As a developer, you can include the tokens as CSS variables or Javascript objects. This way, you can easily implement the styles you receive from the designers. By using the correct tokens, no extra implementation is needed. Whenever a token needs to update, all you have to do is pull in the latest changes from GitHub or npm, and your code will update automatically. You can find the core and semantics tokens in the @amalitech-design-system/design-tokens repo (folder: src). By using the design tokens repository, you only need to take care of the semantic tokens.

[Color Tokens](https://amalitech-design-tokens.amalitech-dev.net?path=/docs/design-tokens-colors--documentation)

[Spacing](https://amalitech-design-tokens.amalitech-dev.net?path=/docs/design-tokens-spacing--documentation/)

[Typography](https://amalitech-design-tokens.amalitech-dev.net?path=/docs/design-tokens-typography--documentation/)

> **For more information view our full documentation on [Storybook](https://amalitech-design-system.amalitech-dev.net/?path=/docs/design-tokens-index--documentation)**
