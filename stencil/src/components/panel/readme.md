# Panel



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `title`  | `title`   | Panel Title | `string` | `undefined` |


## Events

| Event    | Description                             | Type                                     |
| -------- | --------------------------------------- | ---------------------------------------- |
| `toggle` | Event emitted on click of panel header. | `CustomEvent<{ isCollapsed: boolean; }>` |


## Methods

### `togglePanel() => Promise<void>`

Call this method to toggle panel content visibility programmatically.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                | Description                   |
| ------------------- | ----------------------------- |
| `--header-bg-color` | Panel header background color |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
