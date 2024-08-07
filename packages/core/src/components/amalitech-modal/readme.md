# amalitech-modal

<!-- Auto Generated Below -->


## Overview

The modal component is a custom element used to display content in a layer above the app.
it comes with default text for cancel and confirm buttons but can be customized with

## Properties

| Property          | Attribute           | Description                                   | Type                                                    | Default     |
| ----------------- | ------------------- | --------------------------------------------- | ------------------------------------------------------- | ----------- |
| `cancelText`      | `cancel-text`       | Text to show for cancel                       | `string`                                                | `'cancel'`  |
| `closeButtonType` | `close-button-type` | The customization for close button            | `"arms" \| "rounded" \| "square" \| "x" \| "x-rounded"` | `'arms'`    |
| `confirmText`     | `confirm-text`      | Text to show for confirmation                 | `string`                                                | `'confirm'` |
| `confirmation`    | `confirmation`      | Whether to show the confirmation only variant | `boolean`                                               | `undefined` |
| `scrollable`      | `scrollable`        | Make the modal scrollable/full screen         | `boolean`                                               | `undefined` |
| `visible`         | `visible`           | Show or hide modal                            | `boolean`                                               | `false`     |


## Events

| Event              | Description                                                         | Type                |
| ------------------ | ------------------------------------------------------------------- | ------------------- |
| `amalitechCancel`  | Event is emmitted when user clicks on cancel button or close button | `CustomEvent<void>` |
| `amalitechConfirm` | Event is emmited when a user clicks on confirm button               | `CustomEvent<void>` |


## Methods

### `closeModal() => Promise<void>`

Closes the modal

#### Returns

Type: `Promise<void>`



### `openModal() => Promise<void>`

Opens the modal

#### Returns

Type: `Promise<void>`




## Slots

| Slot       | Description                               |
| ---------- | ----------------------------------------- |
|            | The single default slot for modal content |
| `"header"` | The header text of the modal              |


## Shadow Parts

| Part               | Description |
| ------------------ | ----------- |
| `"cancel-button"`  |             |
| `"confirm-button"` |             |


## CSS Custom Properties

| Name                          | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `--cancel-button-background`  | The background color of the cancel button          |
| `--cancel-button-color`       | The text color of the cancel button                |
| `--confirm-button-background` | The background color of the confirm button         |
| `--confirm-button-color`      | The text color of the confirm button               |
| `--modal-background`          | The background color of the modal                  |
| `--modal-header-color`        | The text color of the modal header                 |
| `--modal-header-font-size`    | The font size of the modal header                  |
| `--modal-top-after`           | The top position of the modal after it is visible  |
| `--modal-top-before`          | The top position of the modal before it is visible |
| `--modal-width`               | The width of the modal                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
