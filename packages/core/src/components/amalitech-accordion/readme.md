# amalitech-accordion



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                | Type      | Default     |
| ------------- | ------------- | -------------------------------------------------------------------------- | --------- | ----------- |
| `animated`    | `animated`    | Indicates whether the accordion is animated or not.                        | `boolean` | `false`     |
| `description` | `description` | The description or content to be displayed when the accordion is expanded. | `string`  | `'Content'` |
| `label`       | `label`       | The label for the accordion button.                                        | `string`  | `'Label'`   |


## Events

| Event    | Description                                  | Type               |
| -------- | -------------------------------------------- | ------------------ |
| `toggle` | Event emitted when the accordion is toggled. | `CustomEvent<any>` |


## CSS Custom Properties

| Name                       | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `--accordionBackground`    | Background color of the accordion, default is `#f6f6f8`             |
| `--accordionFocusColor`    | Color of the accordion outline when focused, default is `#eb9c7f`   |
| `--accordionFontFamily`    | Font family of the accordion label, default is `$base-font-family`  |
| `--accordionFontSize`      | Font size of the accordion, default is `1rem`                       |
| `--accordionFontWeight`    | Font weight of the accordion label, default is `#d3d3d3`            |
| `--accordionLabelPadding`  | Padding between the icon and the accordion label, default is `1rem` |
| `--openedAccordionBorder`  | Border of the opened accordion, default is `0.063rem solid #f6f6f8` |
| `--openedAccordionPadding` | Padding around the opened accordion, default is `0.5rem 1rem`       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
