<template>
  <material-card
    v-bind="$attrs"
    class="v-card--material-stats"
    v-on="$listeners"
  >
    <v-card
      slot="offset"
      :class="`elevation-${elevation}`"
      :color="color"
      class="pa-4"
      dark
    >
      <v-icon
        size="40"
      >
        {{ icon }}
      </v-icon>
    </v-card>
    <div class="text-xs-right">
      <div
        class="subheading grey--text font-weight-light"
        v-text="title"
      />
      <div
        class="display-1 font-weight-light"
        v-text="value"
      />
    </div>

    <v-layout
      slot="actions"
      align-center
      py-3
      px-4
    >
      <v-icon
        :color="subIconColor"
        size="20"
        class="mr-2"
      >
        {{ subIcon }}
      </v-icon>
      <span
        class="caption font-weight-light"
        v-text="subText"
      />
    </v-layout>

  </material-card>
</template>

<script>
import Card from './Card'

export default {
  inheritAttrs: false,

  props: {
    ...Card.props,
    icon: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      default: undefined
    }
  }
}
</script>

<style lang="scss">
.v-card--material-stats {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .v-offset {
    display: inline-block;
    flex: 0 1;
    margin-top: 0;
    margin-left: 0;
    margin-right: auto;
    margin-bottom: 0 !important;
    max-width: auto;
    padding: 0 16px 0;
  }

  .v-card {
    border-radius: 4px;
    flex: 0 1 auto;
  }

  .v-card__text {
    display: inline-block;
    flex: 1 0 calc(100% - 120px);
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  .v-card__actions {
    flex: 1 0 100%;
  }
}
</style>
