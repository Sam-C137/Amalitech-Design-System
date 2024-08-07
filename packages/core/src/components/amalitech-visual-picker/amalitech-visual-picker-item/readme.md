# amalitech-visual-picker-item



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                     | Type                    | Default      |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| `disabled`      | `disabled`       | Disables the item thus preventing it from being selectable                                                      | `boolean`               | `false`      |
| `label`         | `label`          | Any label to be used with the item                                                                              | `string`                | `''`         |
| `selectVariant` | `select-variant` | Allow single or multiselect of choices. radio for single select, and checkbox for multiple selection            | `"checkbox" \| "radio"` | `'checkbox'` |
| `selected`      | `selected`       | Indicates whether the item is selected or not                                                                   | `boolean`               | `false`      |
| `uncoverable`   | `uncoverable`    | If set to true the component will only be selected by highlighting the edges, without covering the entire area. | `boolean`               | `false`      |
| `value`         | `value`          | The value for the picker item                                                                                   | `string`                | `''`         |


## Events

| Event       | Description                                     | Type                                     |
| ----------- | ----------------------------------------------- | ---------------------------------------- |
| `selection` | This event is emitted when the item is selected | `CustomEvent<{ [x: string]: boolean; }>` |


## CSS Custom Properties

| Name                                  | Description                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `--visual-picker-active-border-width` | The border width of the visual picker item when active default is `0.125rem`                      |
| `--visual-picker-active-box-shadow`   | The box shadow of the visual picker item when active default is `0 4px 4px 0 rgba(0, 0, 0, 0.16)` |
| `--visual-picker-active-color`        | The color of the visual picker item when active default is `amalitech-color-primary`              |
| `--visual-picker-bg`                  | The background color of the visual picker item default is `amalitech-color-light`                 |
| `--visual-picker-checked-icon`        | The icon of the visual picker item when checked default is a checkmark svg                        |
| `--visual-picker-font-family`         | The font family of the visual picker item label default is `amalitech-base-font-family`           |
| `--visual-picker-font-size`           | The font size of the visual picker item label default is `1rem`                                   |
| `--visual-picker-font-weight`         | The font weight of the visual picker item label default is `500`                                  |
| `--visual-picker-item-border-color`   | The border color of the visual picker item default is `amalitech-color-neutral-300`               |
| `--visual-picker-item-border-width`   | The border width of the visual picker item default is `0.125rem`                                  |
| `--visual-picker-item-padding`        | The padding of the visual picker item default is `1.25rem`                                        |
| `--visual-picker-item-radius`         | The border radius of the visual picker item default is `0.35rem`                                  |
| `--visual-picker-label-color`         | The color of the visual picker item label default is `amalitech-color-neutral-700`                |
| `--visual-picker-transition-duration` | The transition duration of the visual picker item default is `0.3s`                               |
| `--visual-picker-transition-timing`   | The transition timing of the visual picker item default is `ease`                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
