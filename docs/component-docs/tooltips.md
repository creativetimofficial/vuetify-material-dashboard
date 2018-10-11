# Tooltips

We used, Tooltip from vuematerial.io and customized the look of it. It's a really handy component and can be integrated very easily.

::: demo
```html
<div class="text-xs-center d-flex align-center">
  <v-tooltip
    content-class="bottom"
    bottom>
    <v-btn
      slot="activator"
      color="primary"
      dark
    >
      Button
    </v-btn>
    <span>Tooltip</span>
  </v-tooltip>

  <v-tooltip
    content-class="bottom"
    bottom>
    <v-icon
      slot="activator"
      color="primary"
    >mdi-heart</v-icon>
    <span>Tooltip</span>
  </v-tooltip>

  <v-tooltip
    content-class="top"
    top
    >
    <span slot="activator">This text has a tooltip</span>
    <span>Tooltip</span>
  </v-tooltip>
</div>
```
:::

> Note: for more details about the tooltip props and tooltips that you can use, please see the **Tooltip** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/tooltips#introduction)
