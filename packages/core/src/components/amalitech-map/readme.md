# amalitech-map



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute           | Description                                        | Type      | Default                                                  |
| ---------------- | ------------------- | -------------------------------------------------- | --------- | -------------------------------------------------------- |
| `height`         | `height`            | Sets the height of the map                         | `string`  | `'600px'`                                                |
| `hideNearByList` | `hide-near-by-list` | If set to true, hides the list of nearby landmarks | `boolean` | `false`                                                  |
| `iconUrl`        | `icon-url`          | Specifies the icon url                             | `string`  | `'https://i.ibb.co/LYT961S/352521-location-on-icon.png'` |
| `latitude`       | `latitude`          | Specifies the latitude value                       | `number`  | `-0.1514209`                                             |
| `longitude`      | `longitude`         | Specifies the longitude value                      | `number`  | `5.6339642`                                              |
| `name`           | `name`              | Adds a name to be shown in the popup               | `string`  | `''`                                                     |
| `width`          | `width`             | Sets the width of the map                          | `string`  | `'100%'`                                                 |
| `zoom`           | `zoom`              | Sets the zoom level of the map                     | `number`  | `19`                                                     |


## Methods

### `addMarker(lat: number, long: number, name: string, iconUrl?: string, zoom?: number) => Promise<void>`

Adds a marker to the map

#### Parameters

| Name      | Type     | Description            |
| --------- | -------- | ---------------------- |
| `lat`     | `number` |                        |
| `long`    | `number` | , name, iconUrl, zoom} |
| `name`    | `string` |                        |
| `iconUrl` | `string` |                        |
| `zoom`    | `number` |                        |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
