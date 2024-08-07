# amalitech-progress



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                            | Type      | Default     |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `currentValue`  | `current-value` | Only present and required if the value is not indeterminate. Set to a decimal value between 0, or valuemin if present, and max-value indicating the current value of the progress bar. | `number`  | `undefined` |
| `indeterminate` | `indeterminate` | Used to show indeterminate or pending progress state.                                                                                                                                  | `boolean` | `undefined` |
| `labeledBy`     | `labeled-by`    | Defines the string value or identifies the element (or elements) that label the progressbar element providing an accessible name.                                                      | `string`  | `undefined` |
| `maxValue`      | `max-value`     | Set to a decimal value representing the maximum value, and greater than min-value. If not present, the default value is 100.                                                           | `number`  | `100`       |
| `minValue`      | `min-value`     | Set to a decimal value representing the minimum value, and less than max-value. If not present, the default value is 0.                                                                | `number`  | `0`         |
| `steps`         | `steps`         | Divides progress bar in multiple progress steps.                                                                                                                                       | `boolean` | `undefined` |
| `valueText`     | `value-text`    | Assistive technologies often present the value of current-value as a percentage. If this would not be accurate use this property to make the progress bar value understandable.        | `string`  | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
