# amalitech-switch



<!-- Auto Generated Below -->


## Overview

The switch component is a wrapper around the native checkbox element.

## Properties

| Property   | Attribute   | Description                                            | Type                             | Default     |
| ---------- | ----------- | ------------------------------------------------------ | -------------------------------- | ----------- |
| `checked`  | `checked`   | The whether the component is checked or not            | `boolean`                        | `false`     |
| `disabled` | `disabled`  | The whether the component is disabled or not           | `boolean`                        | `false`     |
| `name`     | `name`      | The name attribute of the underlying checkbox element  | `string \| undefined`            | `undefined` |
| `size`     | `size`      | The size of the switch component                       | `"large" \| "medium" \| "small"` | `'medium'`  |
| `switchId` | `switch-id` | The id of the underlying checkbox element              | `string \| undefined`            | `undefined` |
| `value`    | `value`     | The value attribute of the underlying checkbox element | `string \| undefined`            | `undefined` |


## Events

| Event                   | Description                                             | Type                                               |
| ----------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| `amalitechSwitchChange` | The event that is emitted when the component is clicked | `CustomEvent<{ [x: string]: string \| boolean; }>` |


## CSS Custom Properties

| Name                              | Description                                                         |
| --------------------------------- | ------------------------------------------------------------------- |
| `--amalitech-switch-checked-bg`   | Background color of the switch when checked, default is `#dd5928`   |
| `--amalitech-switch-knob-bg`      | Background color of the knob, default is `#fff`                     |
| `--amalitech-switch-unchecked-bg` | Background color of the switch when unchecked, default is `#d3d3d3` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
