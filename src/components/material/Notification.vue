<template>
  <v-alert
    v-bind="$attrs"
    :elevation="elevation"
    :value="value"
    :dark="dark"
    v-on="$listeners"
  >
    <slot />
  </v-alert>
</template>

<script>
  export default {
    name: 'MaterialNotification',

    inheritAttrs: false,

    props: {
      dark: {
        type: Boolean,
        default: true
      },
      elevation: {
        type: [Number, String],
        default: 6
      },
      value: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
