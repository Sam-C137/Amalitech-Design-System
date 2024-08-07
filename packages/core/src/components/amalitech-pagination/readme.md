# amalitech-pagination

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                           | Type                             | Default     |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `limitNumber`     | `limit-number`      | The number of items per page                                                                                                                          | `number`                         | `10`        |
| `pageNumber`      | `page-number`       | The current page number                                                                                                                               | `number`                         | `1`         |
| `siblings`        | `siblings`          | The number of siblings to show in +2 increments before ellipses. eg: `1 = 5, 2 = 7, 3 = 9`                                                            | `number`                         | `1`         |
| `size`            | `size`              | The size of the pagination component                                                                                                                  | `"large" \| "medium" \| "small"` | `'medium'`  |
| `totalItems`      | `total-items`       | The total number of items in the data set                                                                                                             | `number`                         | `100`       |
| `totalPagesCount` | `total-pages-count` | (optional) The total number of pages if you do not want the component to handle calculating the total pages based on the total items and limit number | `number \| undefined`            | `undefined` |


## Events

| Event                 | Description                                                                | Type                  |
| --------------------- | -------------------------------------------------------------------------- | --------------------- |
| `amalitechPageChange` | This event is emmitted with the selected page number when the page changes | `CustomEvent<number>` |


## CSS Custom Properties

| Name                              | Description                                                                 |
| --------------------------------- | --------------------------------------------------------------------------- |
| `--pagination-active-bg`          | The background color of the pagination when active default is `$orange-100` |
| `--pagination-active-color`       | The text color of the pagination when active default is `$orange-500`       |
| `--pagination-font-size`          | The font size of the pagination default is `1rem`                           |
| `--pagination-gap`                | The gap between page items default is `0.375rem`                            |
| `--pagination-item-border-radius` | The border radius of the pagination item default is `0.375rem`              |
| `--pagination-item-color`         | The text color of the pagination item default is `$neutral-400`             |
| `--pagination-item-padding`       | The padding of the pagination item default is `0.5rem 1rem`                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
