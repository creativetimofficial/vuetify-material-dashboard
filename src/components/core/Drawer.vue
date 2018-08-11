<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    class="elevation-12"
    dark
    floating
    persistent
  >
    <v-img
      height="100%"
      src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
    >
      <v-layout
        class="pa-3 fill-height"
        style="background: rgba(0, 0, 0, 0.7);"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png"
              height="32"
              contain
              class="mt-1"
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title font-weight-light">
            VUE MD
          </v-list-tile-title>
        </v-list-tile>
        <v-divider
          class="mt-2 mb-4"
        />
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          active-class="secondary"
          avatar
          class="mb-2"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            class="font-weight-thin"
            v-text="link.text"
          />
        </v-list-tile>
        <v-list-tile
          active-class="secondary"
          class="v-list__tile--buy"
          to="/upgrade"
        >
          <v-list-tile-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="font-weight-light">
            Upgrade To PRO
          </v-list-tile-title>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    links: [
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ]
  }),
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

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
      }
    }
  }
</style>
