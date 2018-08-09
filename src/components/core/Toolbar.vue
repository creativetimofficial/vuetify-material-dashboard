<template>
  <v-toolbar
    id="core-toolbar"
    app
    color="transparent"
    flat
    prominent
  >
    <v-toolbar-title
      class="tertiary--text font-weight-light"
      v-text="title"
    />
    <v-spacer />
    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2
      >
        <v-text-field
          class="mr-4 mt-2"
          label="Search..."
          hide-details
        />
        <div
          v-ripple
          class="pa-3"
        >
          <v-icon color="tertiary">mdi-view-dashboard</v-icon>
        </div>
        <v-menu
          bottom
          left
          offset-y
          transition="slide-y-transition">
          <router-link
            v-ripple
            slot="activator"
            class="pa-3"
            to="/notifications"
          >
            <v-badge
              color="error"
              overlap
            >
              <template slot="badge">
                {{ notifications.length }}
              </template>
              <v-icon color="tertiary">mdi-bell</v-icon>
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-tile-title
                  v-text="notification"
                />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
        <router-link
          v-ripple
          class="pa-3"
          to="/user-profile"
        >
          <v-icon color="tertiary">mdi-account</v-icon>
        </router-link>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  methods: {
    onClick () {
      //
    }
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>
