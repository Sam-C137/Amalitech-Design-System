# amalitech-star-rating



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                          | Type                             | Default            |
| --------------- | ---------------- | -------------------------------------------------------------------- | -------------------------------- | ------------------ |
| `animated`      | `animated`       | If true, the star rating will show a variant that animates on render | `boolean`                        | `false`            |
| `count`         | `count`          | The number of stars to display                                       | `number`                         | `5`                |
| `disabled`      | `disabled`       | Indicates the disabled state of the component                        | `boolean`                        | `false`            |
| `hoverDisabled` | `hover-disabled` | If true, the user cannot hover over the star rating                  | `boolean`                        | `false`            |
| `readonly`      | `readonly`       | If true, the user cannot interact with the star rating               | `boolean`                        | `false`            |
| `size`          | `size`           | The size of the star rating                                          | `"large" \| "medium" \| "small"` | `'medium'`         |
| `strokeColor`   | `stroke-color`   | The color of the star rating stroke, default is `#474d66`            | `string`                         | `color.neutral600` |
| `value`         | `value`          | The value of the star rating                                         | `number`                         | `0`                |


## Events

| Event                   | Description                                                               | Type                  |
| ----------------------- | ------------------------------------------------------------------------- | --------------------- |
| `amalitechRatingChange` | The event emmitted when the star rating is changed or a selection is made | `CustomEvent<number>` |


## CSS Custom Properties

| Name                                | Description                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| `--star-rating-active`              | The color of the star when active default is #dd5928       |
| `--star-rating-disabled`            | The color of the star when disabled default is #c1c4d6     |
| `--star-rating-gap`                 | The gap between the stars default is 0                     |
| `--star-rating-transition-duration` | The transition duration of the star rating default is 0.3s |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
