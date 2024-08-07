# amalitech-tree-node



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                             | Type                                    | Default     |
| -------------- | --------------- | ----------------------------------------------------------------------- | --------------------------------------- | ----------- |
| `disabled`     | `disabled`      | If true, the user cannot interact with the button. Defaults to `false`. | `boolean`                               | `false`     |
| `expanded`     | `expanded`      | reflects the expanded state                                             | `boolean`                               | `false`     |
| `href`         | `href`          | Hyperlink to navigate to on click.                                      | `string`                                | `undefined` |
| `label`        | `label`         | label                                                                   | `string`                                | `''`        |
| `level`        | `level`         |                                                                         | `number`                                | `0`         |
| `selectedNode` | `selected-node` | Menu item selection state.                                              | `string`                                | `undefined` |
| `value`        | `value`         | The menu item value.                                                    | `null \| number \| string \| undefined` | `undefined` |


## Events

| Event                  | Description                            | Type               |
| ---------------------- | -------------------------------------- | ------------------ |
| `tree:tree-node-click` | Emitted when the menu item is clicked. | `CustomEvent<any>` |


## Methods

### `setBlur() => Promise<void>`

Sets blur on the native `input`. Use this method instead of the global
`input.blur()`.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the native `input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
