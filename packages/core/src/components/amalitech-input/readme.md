# amalitech-input

<!-- Auto Generated Below -->


## Overview

The Input component is a wrapper to the HTML input element with custom styling and additional
functionality.

## Properties

| Property            | Attribute             | Description                                                                                                      | Type                                                                                                                                     | Default                      |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `aTitle`            | `a-title`             | Title text of the input text.                                                                                    | `string`                                                                                                                                 | `undefined`                  |
| `anyAriaRequired`   | `any-aria-required`   | Used to indicate that user input is required on an element before a form can be submitted.                       | `boolean`                                                                                                                                | `undefined`                  |
| `anyTabIndex`       | `any-tab-index`       | Specifies tab order of the element.                                                                              | `string`                                                                                                                                 | `undefined`                  |
| `ariaDetailedId`    | `aria-detailed-id`    | (optional) id or space separated list of ids of elements that provide or link to additional related information. | `string \| undefined`                                                                                                                    | `undefined`                  |
| `autocomplete`      | `autocomplete`        | Used to define a string that autocomplete attribute the current element.                                         | `string`                                                                                                                                 | `undefined`                  |
| `autofocus`         | `autofocus`           | (optional) the input should automatically get focus when the page loads.                                         | `boolean`                                                                                                                                | `false`                      |
| `counter`           | `counter`             | (optional) Input counter                                                                                         | `boolean`                                                                                                                                | `false`                      |
| `disabled`          | `disabled`            | When present, it specifies that the element should be disabled                                                   | `boolean`                                                                                                                                | `false`                      |
| `floatLabel`        | `float-label`         | When enabled, the label will have floating effect on input text focus                                            | `boolean`                                                                                                                                | `false`                      |
| `helperText`        | `helper-text`         | (optional) Input helper text                                                                                     | `string \| undefined`                                                                                                                    | `''`                         |
| `inputClass`        | `input-class`         | Inline style of the element                                                                                      | `any`                                                                                                                                    | `null`                       |
| `inputHolderClass`  | `input-holder-class`  | The class of input holder element                                                                                | `any`                                                                                                                                    | `null`                       |
| `inputId`           | `input-id`            | Identifier of the focus input to match a label defined for the component.                                        | `string`                                                                                                                                 | ``input-text-${inputIds++}`` |
| `inputStyle`        | `input-style`         | Inline style of the input element                                                                                | `any`                                                                                                                                    | `null`                       |
| `inputWrapperClass` | `input-wrapper-class` | The class of input wrapper element                                                                               | `any`                                                                                                                                    | `null`                       |
| `label`             | `label`               | Label of the input text                                                                                          | `string`                                                                                                                                 | `''`                         |
| `leftIconClass`     | `left-icon-class`     | The class of left icon wrapper element                                                                           | `any`                                                                                                                                    | `null`                       |
| `list`              | `list`                | (optional) input list                                                                                            | `string \| undefined`                                                                                                                    | `undefined`                  |
| `max`               | `max`                 | (optional) define the numeric maximum value of input types such as month, date, time                             | `number \| undefined`                                                                                                                    | `undefined`                  |
| `maxLength`         | `max-length`          | Maximum number of character allows in the input field.                                                           | `number \| undefined`                                                                                                                    | `undefined`                  |
| `min`               | `min`                 | (optional) defines the numeric minimum value of input types such as month, date, time                            | `number \| undefined`                                                                                                                    | `undefined`                  |
| `minLength`         | `min-length`          | (optional) Input text string min length                                                                          | `number \| undefined`                                                                                                                    | `undefined`                  |
| `name`              | `name`                | Name of the input text.                                                                                          | `string`                                                                                                                                 | `this.inputId`               |
| `pattern`           | `pattern`             | Regular expression for input field                                                                               | `string \| undefined`                                                                                                                    | `undefined`                  |
| `placeholder`       | `placeholder`         | Default text to display when no value in input text                                                              | `string`                                                                                                                                 | `''`                         |
| `readonly`          | `readonly`            | When present, it specifies that the element value cannot be changed                                              | `boolean`                                                                                                                                | `false`                      |
| `required`          | `required`            | When present, it specifies that an input field is required.                                                      | `boolean`                                                                                                                                | `false`                      |
| `size`              | `size`                | Size of the input field.                                                                                         | `number`                                                                                                                                 | `undefined`                  |
| `styles`            | `styles`              | Inline style for the entire element                                                                              | `string \| undefined`                                                                                                                    | `undefined`                  |
| `type`              | `type`                | Input type                                                                                                       | `"date" \| "datetime-local" \| "email" \| "hidden" \| "month" \| "number" \| "password" \| "tel" \| "text" \| "time" \| "url" \| "week"` | `'text'`                     |
| `value`             | `value`               | Value of the input text                                                                                          | `string`                                                                                                                                 | `''`                         |


## Events

| Event         | Description                                         | Type               |
| ------------- | --------------------------------------------------- | ------------------ |
| `valueChange` | Callback to invoke when value of input text changes | `CustomEvent<any>` |


## Methods

### `getInputRef() => Promise<HTMLInputElement | null>`

Retrieves a reference to the input element within the component.

#### Returns

Type: `Promise<HTMLInputElement | null>`

The input element, or null if not found.


## Slots

| Slot         | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `"end"`      | Slot for content to be placed at the end of the input.       |
| `"iconLeft"` | Slot for an icon to be placed on the left side of the input. |
| `"start"`    | Slot for content to be placed at the start of the input.     |


## Shadow Parts

| Part            | Description                  |
| --------------- | ---------------------------- |
| `"input-field"` | The main input text element. |


## CSS Custom Properties

| Name                          | Description                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `--input-BorderRadius`        | The border radius of the input field                                                                                       |
| `--inputBgColor`              | The background color of the input field.                                                                                   |
| `--inputBorder`               | The border of the input field.                                                                                             |
| `--inputComponentWidth`       | The width of the whole input component.                                                                                    |
| `--inputErrorBorder`          | The border of the input field in case of an error.                                                                         |
| `--inputFilledBg`             | The background color of the input field when filled.                                                                       |
| `--inputFilledFocusBg`        | The background color of the input field when filled and focused.                                                           |
| `--inputFilledHoverBg`        | The background color of the input field when filled and hovered.                                                           |
| `--inputFocusBorderColor`     | The border color of the input field on focus                                                                               |
| `--inputHelperTextColor`      | The color of the helper text within the input field                                                                        |
| `--inputHelperTextSize`       | The font size of the helper text within the input field                                                                    |
| `--inputHoverBorderColor`     | The border color of the input field on hover                                                                               |
| `--inputIconColor`            | The color of icons within the input field                                                                                  |
| `--inputLabelColor`           | The color of label within the input field                                                                                  |
| `--inputLabelFontSize`        | The font size of the label within the input field                                                                          |
| `--inputLabelFontWeight`      | The font weight of the label within the input field                                                                        |
| `--inputPadding`              | The padding of the input field.                                                                                            |
| `--inputPlaceholderTextColor` | The text color of the input field placeholder.                                                                             |
| `--inputTextColor`            | The text color of the input field                                                                                          |
| `--inputTransition`           | The transition effect for the input field, involving border color and box shadow, using the --transitionDuration variable. |
| `--inputWidth`                | The width of the input field.                                                                                              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
