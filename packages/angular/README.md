# Amalitech Design System and Angular

This is the angular components wrapper for [amalitech-design-system](https://www.npmjs.com/package/@amalitech-design-system/core)

## Setup

First, install the package:

```bash
npm install @amalitech-design-system/core
npm install @amalitech-design-system/angular
```

Then load the component library in `main.ts`:

```ts
// src/main.ts
import { applyPolyfills, defineCustomElements } from "@amalitech-design-system/core/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

After that, load the CSS in the `angular.json` config file:

```json
// angular.json
{
  "build": {
    "styles": ["@amalitech-design-system/core/dist/amalitech-design-system/amalitech-design-system.css"]
  }
}
```

In order for Angular to handle non-Angular element names, include the wrapper at the root of your project: `src/app/app.component.ts`:

```ts
// src/app/app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
```

You should now be able to use ADS components in your templates:

```html
<div>
  <amalitech-button>Click!</amalitech-button>
</div>
```

### Adding ADS Utilities

To add utilities, add the utilities to the styles in your `angular.json` file:

```json
// angular.json
{
  "build": {
    "styles": [
      "@amalitech-design-system/core/dist/amalitech-design-system/amalitech-design-system.css",
      "@amalitech-design-system/utilities/dist/main.css"
    ]
  }
}
```

> **For more information view our full documentation on [Storybook](https://amalitech-design-system.amalitech-dev.net)**
