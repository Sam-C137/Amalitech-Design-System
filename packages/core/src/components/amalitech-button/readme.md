# amalitech-button



<!-- Auto Generated Below -->


## Overview

The Button component is a wrapper for the native button element with custom styling and variations.

## Properties

| Property         | Attribute          | Description                                                                                                | Type                                                                                                                       | Default          |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `disabled`       | `disabled`         | The disabled state of the button. If set to true, interactions would not be alowed, color will also change | `boolean`                                                                                                                  | `false`          |
| `iconPosition`   | `icon-position`    | Position of an icon in the button, default set to right                                                    | `"left" \| "right"`                                                                                                        | `'right'`        |
| `innerAriaLabel` | `inner-aria-label` | (optional) Any aria label                                                                                  | `string`                                                                                                                   | `'Button label'` |
| `innerTabIndex`  | `inner-tab-index`  | The tabindex of the inner button element                                                                   | `number`                                                                                                                   | `0`              |
| `name`           | `name`             | (optional) Any name of the button element                                                                  | `string \| undefined`                                                                                                      | `undefined`      |
| `size`           | `size`             | Size of the button                                                                                         | `"large" \| "medium" \| "small"`                                                                                           | `'medium'`       |
| `type`           | `type`             | The type attribute of the button                                                                           | `"button" \| "reset" \| "submit"`                                                                                          | `'button'`       |
| `value`          | `value`            | (optional) Any value of the button element                                                                 | `string \| undefined`                                                                                                      | `undefined`      |
| `variant`        | `variant`          | The color of the button, default is 'default'                                                              | `"danger" \| "dark" \| "default" \| "info" \| "light" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'default'`      |


## Slots

| Slot | Description                                                    |
| ---- | -------------------------------------------------------------- |
|      | The default slot for button content, text + icon or text only. |


## CSS Custom Properties

| Name                             | Description                                                    |
| -------------------------------- | -------------------------------------------------------------- |
| `--amalitech-button-bg`          | Background color of the button, default is `#C1C4D6`           |
| `--amalitech-button-bg-hover`    | Background color of the button on hover, default is `#8F95B2`  |
| `--amalitech-button-color`       | Color of the button text, default is `#474D66`                 |
| `--amalitech-button-focus-color` | Color of the button outline when focused, default is `#eb9c7f` |
| `--amalitech-button-font-size`   | Font size of the button text, default is `1rem`                |
| `--amalitech-button-plr`         | Padding left and right of the button, default is `1.5rem`      |
| `--amalitech-button-ptb`         | Padding top and bottom of the button, default is `0.75rem`     |
| `--amalitech-button-radius`      | Border radius of the button, default is `0.313rem`             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
