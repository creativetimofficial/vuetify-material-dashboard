<template>
  <v-card
    :style="{
      marginTop: `${offset}px`
    }"
    class="mb-5"
  >
    <div
      :style="styles"
      class="v-card__offset">
      <slot name="offset" />
    </div>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    offset: {
      type: [Number, String],
      default: 32
    }
  },

  computed: {
    styles () {
      return {
        marginBottom: `${-Number(this.offset)}px`,
        top: `${-Number(this.offset)}px`
      }
    }
  }
}
</script>

<style>
.v-card__offset {
  padding: 16px;
  position: relative;
}
</style>
