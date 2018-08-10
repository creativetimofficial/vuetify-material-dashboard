<template>
  <v-card
    v-bind="$attrs"
    :style="{
      marginBottom: `${offset}px`,
      marginTop: `${offset}px`
    }"
  >
    <helper-offset
      :full-width="fullWidth"
      :offset="offset"
    >
      <slot name="offset" />
    </helper-offset>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 32
    }
  }
}
</script>
