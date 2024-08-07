# amalitech-time-picker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                 | Type                             | Default         |
| -------------- | --------------- | ----------------------------------------------------------- | -------------------------------- | --------------- |
| `label`        | `label`         | The label of the time picker                                | `string`                         | `'Pick a Time'` |
| `max`          | `max`           | The maximum time that can be selected in the format `00:00` | `string \| undefined`            | `undefined`     |
| `meridian`     | `meridian`      | If true, time picker will be in 12 hour format              | `boolean`                        | `false`         |
| `min`          | `min`           | The minimum time that can be selected in the format `00:00` | `string \| undefined`            | `undefined`     |
| `outputFormat` | `output-format` | The format of the time picker event detail                  | `"date" \| "string"`             | `'string'`      |
| `required`     | `required`      | If true, the time picker will show a required state         | `boolean`                        | `undefined`     |
| `seconds`      | `seconds`       | If true, time picker will show seconds                      | `boolean`                        | `false`         |
| `size`         | `size`          | The size of the time picker                                 | `"large" \| "medium" \| "small"` | `'medium'`      |
| `value`        | `value`         | The current value of the time picker in the format `00:00`  | `string \| undefined`            | `undefined`     |


## Events

| Event                 | Description                                                                                                                 | Type                                                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amalitechTimeChange` | This event emmits the value of the selected time in the format {time: '00:00 AM', hour: '00', minute: '00', meridian: 'AM'} | `CustomEvent<Date \| { time?: string \| undefined; meridian?: string \| undefined; hour?: string \| undefined; minute?: string \| undefined; second?: string \| undefined; }>` |
| `amalitechTimeClear`  | This event is emitted when the time picker value is cleared                                                                 | `CustomEvent<void>`                                                                                                                                                            |


## Methods

### `close() => Promise<void>`

Closes the time picker dropdown

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Opens the time picker dropdown

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                      | Description                                                                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `--time-picker-active-bg`                 | The background color of the active time default is `#e47453`                                                                 |
| `--time-picker-active-color`              | The text color of the active time default is `#ffffff`                                                                       |
| `--time-picker-bg-color`                  | The background color of the time dropdown default is `#ffffff`                                                               |
| `--time-picker-color`                     | The color of the time picker default is `#8f95b2`                                                                            |
| `--time-picker-disabled-color`            | The text color of the disabled time default is `#8f95b2`                                                                     |
| `--time-picker-dropdown-box-shadow`       | The box shadow of the time picker dropdown default is `0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12)` |
| `--time-picker-focus-color`               | The focus color of the time picker default is `#e47453`                                                                      |
| `--time-picker-font-family`               | The font family of the time picker default is `Work Sans`                                                                    |
| `--time-picker-footer-now-button-padding` | The padding of the time picker footer now button default is `0.5rem 0.625rem`                                                |
| `--time-picker-footer-ok-button-br`       | The border radius of the time picker footer ok button default is `0.4125rem`                                                 |
| `--time-picker-footer-ok-button-padding`  | The padding of the time picker footer ok button default is `0.35rem 0.625rem`                                                |
| `--time-picker-footer-padding`            | The padding of the time picker footer default is `0.5rem 0.75rem`                                                            |
| `--time-picker-panel-display`             | The display of the time picker panel default is `flex`                                                                       |
| `--time-picker-panel-opacity`             | The opacity of the time picker panel default is `1`                                                                          |
| `--time-picker-transition-duration`       | The transition duration of the time picker default is `0.3s`                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
