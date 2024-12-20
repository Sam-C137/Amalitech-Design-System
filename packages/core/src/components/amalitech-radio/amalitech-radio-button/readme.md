# amalitech-radio-button

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                               | Type                  | Default                              |
| ----------------- | ------------------- | ------------------------------------------------------------------------- | --------------------- | ------------------------------------ |
| `anyStyle`        | `any-style`         | Inline style of the component.                                            | `any`                 | `null`                               |
| `anyTabIndex`     | `any-tab-index`     | Index of the element in tabbing order                                     | `number \| undefined` | `0`                                  |
| `disabled`        | `disabled`          | When present, it specifies that the element should be disabled.           | `boolean`             | `false`                              |
| `doubleBorder`    | `double-border`     | If `true`, the radio button has a double border.                          | `boolean`             | `false`                              |
| `inputId`         | `input-id`          | Identifier of the focus input to match a label defined for the component. | `string`              | ``amalitech-rb-${radiobuttonIds++}`` |
| `label`           | `label`             | Label of the radiobutton.                                                 | `string`              | `''`                                 |
| `labelStyleClass` | `label-style-class` | Style class of the label.                                                 | `string \| undefined` | `''`                                 |
| `name`            | `name`              | The name of the control, which is submitted with the form data.           | `string`              | `this.inputId`                       |
| `styleClass`      | `style-class`       | Style class of the component.                                             | `any`                 | `null`                               |
| `value`           | `value`             | the value of the radio.                                                   | `any`                 | `undefined`                          |


## Events

| Event       | Description                                              | Type               |
| ----------- | -------------------------------------------------------- | ------------------ |
| `aOnBlur`   | Callback to invoke when the radio button loses focus.    | `CustomEvent<any>` |
| `aOnFocus`  | Callback to invoke when the radio button receives focus. | `CustomEvent<any>` |
| `aOnSelect` | Callback to invoke on radio button select.               | `CustomEvent<any>` |


## Methods

### `setFocus(event: FocusEvent) => Promise<void>`

Applies focus.

#### Parameters

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| `event` | `FocusEvent` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
