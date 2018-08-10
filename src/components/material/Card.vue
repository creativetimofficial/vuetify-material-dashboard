<template>
  <v-card
    v-bind="$attrs"
    :style="styles"
  >
    <helper-offset
      v-if="$slots.offset"
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
  },

  computed: {
    styles () {
      if (!this.$slots.offset) return null

      return {
        marginBottom: `${this.offset}px`,
        marginTop: `${this.offset}px`
      }
    }
  }
}
</script>
