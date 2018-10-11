# Checkboxes

The checkboxes that are used in our Vue Material Dashboard are the standard checkboxes from [Vuetify](https://vuetifyjs.com/en/components/selection-controls#example-checkboxes-boolean). We just re-styled them for a better visual effect. Please visit this site to see more details about checkboxes.

<script>
module.exports = {
  data: () => ({
    checkbox: true,
    checkbox2: false
  })
}
</script>

:::demo
```html
<template>
  <div>
    <v-checkbox
      :label="`Checkbox 1: ${checkbox.toString()}`"
      v-model="checkbox"
      color="green"
    ></v-checkbox>
    <v-checkbox
      :label="`Checkbox 2: ${checkbox2.toString()}`"
      v-model="checkbox2"
      color="green"
    ></v-checkbox>
  </div>
</template>

<script>
  export default {
    data: () => ({
      checkbox: true,
      checkbox2: false
    })
  }
</script>
```
:::
