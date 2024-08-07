# Amalitech Design System

Amalitech Design Sytem provides a comprehensive set of web components built with typescript to work with vanilla html and other frameworks

## Setting things up

Install the component library in your project with `npm`, `yarn` or `pnpm`:

```bash
npm install @amalitech-design-system/core
```

```bash
yarn add @amalitech-design-system/core
```

```bash
pnpm add @amalitech-design-system/core
```

You can also add a CDN link fron https://cdn.jsdelivr.net into the head of your html template.

### Plain HTML

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@amalitech-design-system/core@<VERSION NUMBER>/dist/amalitech-design-system/amalitech-design-system.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@amalitech-design-system/core@<VERSION NUMBER>/dist/amalitech-design-system/amalitech-design-system.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@amalitech-design-system/core@<VERSION NUMBER>/dist/amalitech-design-system/amalitech-design-system.js"></script>
```

> Replace `@<VERSION NUMBER>` with your desired version

> Omit the `@<VERSION NUMBER>` to get the most recent version

### With a bundler or ES modules

```js
import '@amalitech-design-system/core/dist/amalitech-design-system/amalitech-design-system.css';
import { defineCustomElements, applyPolyfills } from '@amalitech-design-system/core/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

> **For more information view our full documentation on [Storybook](https://amalitech-design-system.amalitech-dev.net)**
