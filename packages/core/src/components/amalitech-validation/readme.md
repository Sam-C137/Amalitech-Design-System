# amalitech-validation

<!-- Auto Generated Below -->


## Overview

Amalitech Form Validation Feedback Component

## Properties

| Property          | Attribute           | Description                                                                   | Type                                                 | Default     |
| ----------------- | ------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| `autoClose`       | `auto-close`        | Whether to automatically close the feedback component. Default duration is 5s | `boolean`                                            | `false`     |
| `closeButtonType` | `close-button-type` | The type of close button to show                                              | `"arms" \| "none" \| "square" \| "x" \| "x-rounded"` | `'arms'`    |
| `closeSecs`       | `close-secs`        | The number of seconds before closing the feedback component                   | `string \| undefined`                                | `undefined` |
| `transition`      | `transition`        | The style of feedback component when opening and closing                      | `"none" \| "opacity" \| "toast"`                     | `'none'`    |
| `variant`         | `variant`           | The variant of validation feedback to show                                    | `"error" \| "success" \| "warning"`                  | `'error'`   |


## Events

| Event            | Description                                             | Type                |
| ---------------- | ------------------------------------------------------- | ------------------- |
| `amalitechClose` | This event is emmitted when the close button is clicked | `CustomEvent<void>` |


## Slots

| Slot        | Description                             |
| ----------- | --------------------------------------- |
| `"detail"`  | The details associated with the message |
| `"message"` | The message to display                  |


## CSS Custom Properties

| Name                                | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `--validation-border-size`          | Border size of the validation, default is `1px`                          |
| `--validation-detail-color`         | Color of the validation detail, default is `#FDF4F4`                     |
| `--validation-detail-size`          | Font size of the validation detail, default is `1rem`                    |
| `--validation-error-bg`             | Background color of the validation error variant, default is `#FDF4F4`   |
| `--validation-error-border-color`   | Border color of the validation error variant, default is `#FDF4F4`       |
| `--validation-error-icon-color`     | Icon color of the validation error variant, default is `#FDF4F4`         |
| `--validation-error-msg-color`      | Text color of the validation error variant, default is `#FDF4F4`         |
| `--validation-msg-size`             | Font size of the validation message, default is `1.15rem`                |
| `--validation-padding`              | Padding of the validation, default is `1.5rem`                           |
| `--validation-radius`               | Border radius of the validation, default is `0.5rem`                     |
| `--validation-success-bg`           | Background color of the validation success variant, default is `#FDF4F4` |
| `--validation-success-border-color` | Border color of the validation success variant, default is `#FDF4F4`     |
| `--validation-success-icon-color`   | Icon color of the validation success variant, default is `#FDF4F4`       |
| `--validation-success-msg-color`    | Text color of the validation success variant, default is `#FDF4F4`       |
| `--validation-warning-bg`           | Background color of the validation warning variant, default is `#FDF4F4` |
| `--validation-warning-border-color` | Border color of the validation warning variant, default is `#FDF4F4`     |
| `--validation-warning-icon-color`   | Icon color of the validation warning variant, default is `#FDF4F4`       |
| `--validation-warning-msg-color`    | Text color of the validation warning variant, default is `#FDF4F4`       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
