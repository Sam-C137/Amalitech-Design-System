# amalitech-tree



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                          | Type     | Default                                                                                  |
| -------------- | --------------- | ------------------------------------ | -------- | ---------------------------------------------------------------------------------------- |
| `emptyState`   | `empty-state`   | To be shown when no node is rendered | `string` | ``{     "headline": "No items",     "description": "There are no items to display"   }`` |
| `selectedNode` | `selected-node` | selects a node at default            | `string` | `undefined`                                                                              |


## Methods

### `getSelectedNode() => Promise<string>`

Returns selected node

#### Returns

Type: `Promise<string>`



### `setFocus() => Promise<void>`

Sets focus on first menu item. Use this method instead of the global
`element.focus()`.

#### Returns

Type: `Promise<void>`



### `subscribeToSelect(cb: any) => Promise<void>`



#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| `cb` | `any` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
