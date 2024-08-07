# amalitech-date-picker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute           | Description                                                                                        | Type                           | Default         |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------ | --------------- |
| `disabled`       | `disabled`          | The disabled state of the date picker                                                              | `boolean`                      | `false`         |
| `firstDayOfWeek` | `first-day-of-week` | The first day of the week, 0 for Sunday and 1 for Monday                                           | `"0" \| "1"`                   | `'1'`           |
| `iconPosition`   | `icon-position`     | The icon position of the date picker, either `left` or `right`, default is `right`                 | `"left" \| "right"`            | `'right'`       |
| `label`          | `label`             | The label of the date picker                                                                       | `string`                       | `'Pick a Date'` |
| `max`            | `max`               | The maximum date that a user can select in the format `YYYY-MM-DD`                                 | `string \| undefined`          | `undefined`     |
| `min`            | `min`               | The minimum date that a user can select in the format `YYYY-MM-DD`                                 | `string \| undefined`          | `undefined`     |
| `outputFormat`   | `output-format`     | The output format of the date picker, either `YYYY-MM-DD` or `DD-MM-YYYY`, default is `YYYY-MM-DD` | `"DD-MM-YYYY" \| "YYYY-MM-DD"` | `'YYYY-MM-DD'`  |
| `outputType`     | `output-type`       | The output type of the date picker, either `string` or `date`, default is `string`                 | `"date" \| "string"`           | `'string'`      |
| `value`          | `value`             | The value of the date picker in the format `YYYY-MM-DD`                                            | `string \| undefined`          | `undefined`     |


## Events

| Event                 | Description                                                        | Type                          |
| --------------------- | ------------------------------------------------------------------ | ----------------------------- |
| `amalitechDateChange` | The date change event that is emitted when the date changes        | `CustomEvent<Date \| string>` |
| `amalitechDateClear`  | The date clear event is emitted when the date selection is cleared | `CustomEvent<void>`           |


## Methods

### `close() => Promise<void>`

This method toggles the date picker close

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

This method toggles the date picker open

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                                    | Description                                                                                                           |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `--date-picker-active-color`                            | The active color for the date picker default is `#dd5928`                                                             |
| `--date-picker-active-text-color`                       | The text color for the date picker individual date button that is active default is `#fff`                            |
| `--date-picker-calendar-bg`                             | The background color of the date picker calendar default is `#fff`                                                    |
| `--date-picker-calendar-border-color`                   | The border color for the date picker calendar default is `#d8dae5`                                                    |
| `--date-picker-calendar-border-radius`                  | The border radius for the date picker calendar default is `0.5rem`                                                    |
| `--date-picker-calendar-footer-margin-top`              | The margin top for the date picker calendar footer default is `1.25rem`                                               |
| `--date-picker-calendar-header-font-size`               | The font size for the date picker calendar header default is `1.5rem`                                                 |
| `--date-picker-calendar-header-font-weight`             | The font weight for the date picker calendar header default is `600`                                                  |
| `--date-picker-calendar-header-gap`                     | The gap for the date picker calendar header default is `0.5rem`                                                       |
| `--date-picker-calendar-padding`                        | The padding for the date picker calendar default is `0.625rem`                                                        |
| `--date-picker-confirm-text-color`                      | The text color for the date picker confirm button default is `#fff`                                                   |
| `--date-picker-date-background-color`                   | The background color for the date picker individual date button default is `#fff`                                     |
| `--date-picker-date-border-color`                       | The border color for the date picker individual date button default is `#d8dae5`                                      |
| `--date-picker-date-border-radius`                      | The border radius for the date picker date default is `0.625rem`                                                      |
| `--date-picker-date-border-thickness`                   | The border thickness the date picker individual date button default is `0.35rem`                                      |
| `--date-picker-date-font-size`                          | The font size for the date picker individual date button default is `1rem`                                            |
| `--date-picker-date-hover-background-color`             | The hover background color for the date picker individual date button default is `#f5f5f5`                            |
| `--date-picker-date-not-current-month-background-color` | The background color for the date picker individual date button that is not in the current month default is `#f5f5f5` |
| `--date-picker-date-not-current-month-text-color`       | The text color for the date picker individual date button that is not in the current month default is `#c1c4d6`       |
| `--date-picker-date-padding`                            | The padding for the date picker date default is `0.313rem`                                                            |
| `--date-picker-days-font-size`                          | The font size for the date picker days default is `1rem`                                                              |
| `--date-picker-days-font-weight`                        | The font weight for the date picker days default is `600`                                                             |
| `--date-picker-days-margin-bottom`                      | The margin bottom for the date picker days default is `0.625rem`                                                      |
| `--date-picker-disabled-color`                          | The disabled color for the date picker default is `#c1c4d6`                                                           |
| `--date-picker-dropdown-background`                     | The background for the date picker dropdown default is `#fff`                                                         |
| `--date-picker-dropdown-border-color`                   | The border color for the date picker dropdown default is `#d8dae5`                                                    |
| `--date-picker-dropdown-font-size`                      | The font size for the date picker dropdown default is `1rem`                                                          |
| `--date-picker-dropdown-font-weight`                    | The font weight for the date picker dropdown default is `500`                                                         |
| `--date-picker-dropdown-gap`                            | The gap for the date picker dropdown default is `0.625rem`                                                            |
| `--date-picker-dropdown-padding`                        | The padding for the date picker dropdown default is `0.625rem`                                                        |
| `--date-picker-font-family`                             | The font family for the date picker default is `'Work Sans', 'sans-serif'`                                            |
| `--date-picker-footer-button-border-radius`             | The border radius for the date picker footer button default is `0.35rem`                                              |
| `--date-picker-footer-button-font-size`                 | The font size for the date picker footer button default is `0.85rem`                                                  |
| `--date-picker-footer-button-font-weight`               | The font weight for the date picker footer button default is `500`                                                    |
| `--date-picker-footer-button-padding`                   | The padding for the date picker footer button default is `0.5rem`                                                     |
| `--date-picker-header-buttons-gap`                      | The gap for the date picker header buttons default is `0.5rem`                                                        |
| `--date-picker-panel-bg`                                | The background color for the date picker panel default is `#fff`                                                      |
| `--date-picker-panel-border-color`                      | The border color for the date picker panel default is `#8f95b2`                                                       |
| `--date-picker-panel-border-radius`                     | The border radius for the date picker panel default is `0.313rem`                                                     |
| `--date-picker-panel-display`                           | The display for the date picker panel default is `block`                                                              |
| `--date-picker-panel-font-size`                         | The font size for the date picker panel default is `1 rem`                                                            |
| `--date-picker-panel-gap`                               | The gap for the date picker panel default is `0.625rem`                                                               |
| `--date-picker-panel-opacity`                           | The opacity for the date picker panel default is `1`                                                                  |
| `--date-picker-panel-padding`                           | The padding for the date picker panel default is `0.313rem`                                                           |
| `--date-picker-panel-text-color`                        | The text color for the date picker panel default is `#8f95b2`                                                         |
| `--date-picker-today-background-color`                  | The background color for the date picker today button default is `#fff`                                               |
| `--date-picker-today-font-size`                         | The font size for the date picker today button default is `1rem`                                                      |
| `--date-picker-today-font-weight`                       | The font weight for the date picker today button default is `600`                                                     |
| `--date-picker-transition-duration`                     | The transition duration for the date picker default is `0.3s`                                                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
