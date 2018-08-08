<template>
  <v-navigation-drawer
    fixed
    temporary
    v-model="inputValue"
    right
  >
    <v-list>
      <v-list-tile>
        <v-spacer />
        <v-btn icon @click="toggleDrawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-list-tile-title v-text="item.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      inputValue: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return this.$t('Layout.View.items')
      }
    },

    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
    }
  }
</script>
