<template>
  <v-card
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  >
    <helper-offset
      v-if="$slots.header || $slots.offset"
      :inline="inline"
      :full-width="fullWidth"
      :offset="offset"
    >
      <v-card
        v-if="!$slots.offset"
        :color="color"
        :class="`elevation-${elevation}`"
        class="v-card--material__header"
        dark
      >
        <slot name="header" />
      </v-card>
      <slot
        v-else
        name="offset"
      />
    </helper-offset>

    <v-card-text>
      <slot />
    </v-card-text>

    <v-divider
      v-if="$slots.actions"
      class="mx-3"
    />

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 24
    }
  },

  computed: {
    styles () {
      if (!this.$slots.header &&
        !this.$slots.offset
      ) return null

      return {
        marginBottom: `${this.offset}px`,
        marginTop: `${this.offset * 2}px`
      }
    }
  }
}
</script>

<style lang="scss">
  .v-card--material {
    &__header {
      &.v-card {
        border-radius: 4px;
      }
    }
  }
</style>
