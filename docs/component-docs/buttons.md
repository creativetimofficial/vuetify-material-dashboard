# Buttons

To use the custom button you don't need to import the custom made component, you can easily use it like this:

```html
<v-btn>
  Button
 </v-btn>
```

## Colors

We has changed the predefined button styles from [vuetifyjs.com](https://vuetifyjs.com/en/components/buttons#introduction), each serving its own semantic purpose, with a few extras thrown in for more control.

::: demo
```html
<v-btn color="primary">Primary</v-btn>
 <v-btn color="success">Success</v-btn>
 <v-btn color="danger">Danger</v-btn>
 <v-btn color="warning">Warning</v-btn>
 <v-btn color="info">Info</v-btn>
```
:::

## Style Buttons

::: demo
```html
<v-btn color="primary">Default</v-btn>
 <v-btn color="primary" round>Round</v-btn>
 <v-btn color="primary">
  <v-icon left>mdi-heart</v-icon>
  With Icon
 </v-btn>
 <v-btn color="primary" icon round><v-icon>mdi-heart</v-icon></v-btn>
 <v-btn color="primary" icon><v-icon>mdi-heart</v-icon></v-btn>
 <v-btn color="primary" class="v-btn--simple">simple</v-btn>
```
:::

## Sizes

Fancy larger or smaller buttons? Add the attributes `large` or `small` for additional sizes.

::: demo
```html
<v-btn color="primary" small>Small</v-btn>
<v-btn color="primary">Normal</v-btn>
<v-btn color="primary" large>Large</v-btn>
```
:::

## Block

We added extra classes that can help you better customise the look. Please see the examples:

::: demo
```html
<v-btn color="primary" block>btn-block</v-btn>
```
:::

> Note: for more details about the buttons props and attributes please see the **Button** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/buttons#introduction)
