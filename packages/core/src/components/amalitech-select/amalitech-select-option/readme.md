# amalitech-select-option

<!-- Auto Generated Below -->


## Overview

The select option component is designed to be nested within a select component.

## Properties

| Property        | Attribute        | Description                                       | Type                                     | Default       |
| --------------- | ---------------- | ------------------------------------------------- | ---------------------------------------- | ------------- |
| `disabled`      | `disabled`       | If true, the user cannot interact with the option | `boolean`                                | `false`       |
| `selected`      | `selected`       | If true, the option is selected                   | `boolean`                                | `false`       |
| `selectedStyle` | `selected-style` | The style to be applied when items are checked    | `"checkRounded" \| "checkmark" \| "dot"` | `'checkmark'` |
| `value`         | `value`          | The value of the option                           | `string`                                 | `undefined`   |


## Events

| Event         | Description                                         | Type                                                   |
| ------------- | --------------------------------------------------- | ------------------------------------------------------ |
| `clearEvent`  |                                                     | `CustomEvent<void>`                                    |
| `deselection` | This event is triggered when a selection is removed | `CustomEvent<{ value: string; textContent: string; }>` |
| `selection`   | This event is triggered when a selection is made    | `CustomEvent<{ value: string; textContent: string; }>` |


## Methods

### `clear() => Promise<void>`

Clears the selected state of the option

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                        | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `--select-option-font-size` | The font size of the select option default is `0.875rem`     |
| `--select-option-padding`   | The padding of the select option default is `0.5rem 0.75rem` |
| `--select-option-radius`    | The border radius of the select option default is `0.35rem`  |
| `--select-option-weight`    | The font weight of the select option default is `500`        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
