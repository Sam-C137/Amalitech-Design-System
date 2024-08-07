# amalitech-progress-ring



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                | Type                  | Default            |
| --------------- | ---------------- | -------------------------------------------------------------------------- | --------------------- | ------------------ |
| `indeterminate` | `indeterminate`  | If the progress ring should be indeterminate.                              | `boolean`             | `false`            |
| `outlineColor`  | `outline-color`  | The color of the background of the progress ring, in any CSS valid format. | `string`              | `color.neutral200` |
| `progress`      | `progress`       | The current progress value in percentage.                                  | `number`              | `0`                |
| `progressColor` | `progress-color` | The color of the progress ring, in any CSS valid format.                   | `string`              | `color.orange500`  |
| `progressText`  | `progress-text`  | The text to display inside the progress ring.                              | `string \| undefined` | `undefined`        |
| `radius`        | `radius`         | The radius of the progress ring in px.                                     | `number`              | `56`               |
| `stroke`        | `stroke`         | The stroke width of the progress ring in px.                               | `number`              | `6`                |


## CSS Custom Properties

| Name                                            | Description                                                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `--progress-ring-indeterminate-duration`        | Duration of the indeterminate progress ring animation default is `2s`                                  |
| `--progress-ring-indeterminate-timing-function` | Timing function of the indeterminate progress ring animation default is `cubic-bezier(0.5, 0, 0.5, 1)` |
| `--progress-ring-text-color`                    | Color of the progress ring text default is `#101840`                                                   |
| `--progress-ring-text-weight`                   | Font weight of the progress ring text default is `500`                                                 |
| `--progress-ring-transition-duration`           | Duration of the progress ring transition default is `0.35s`                                            |
| `--progress-text-size`                          | Font size of the progress ring text default is `1.25rem`                                               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
