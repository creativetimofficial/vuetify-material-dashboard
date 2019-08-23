<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn
      slot="activator"
      class="elevation-0"
      color="grey"
      dark
      fab
      fixed
      style="top: 96px;"
      top
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-row>
          <v-col cols="12">
            <div class="text-center body-2 text-uppercase sidebar-filter">
              Sidebar Filters
            </div>

            <v-row justify-center>
              <v-avatar
                v-for="c in colors"
                :key="c"
                :class="[c === color ? 'color-active color-' + c: 'color-' + c]"
                size="23"

                @click="setColor(c)"
              />
            </v-row>
            <v-divider class="mt-3" />
          </v-col>

          <v-col cols="12">
            <div class="text-center body-2 text-uppercase sidebar-filter">
              Images
            </div>
          </v-col>

          <v-col
            v-for="img in images"
            :key="img"
            cols="3"
          >
            <v-img
              :class="[image === img ? 'image-active' : '']"
              :src="img"
              height="120"
              @click.native="setImage(img)"
            />
          </v-col>

          <v-col cols="12">
            <v-btn
              color="green"
              block
            >
              Free Download
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn
              class="white--text"
              color="purple"
              block
            >
              Documentation
            </v-btn>
          </v-col>

          <v-col cols="12">
            <div class="text-center body-2 text-uppercase">
              <div class=" sidebar-filter">
                Thank You for Sharing!
              </div>

              <div>
                <v-btn
                  color="indigo"
                  class="mr-2 v-btn-facebook"
                  dark
                  fab
                  icon
                  small
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  color="cyan"
                  class="v-btn-twitter"
                  dark
                  fab
                  icon
                  small
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    data: () => ({
      colors: [
        'primary',
        'info',
        'success',
        'warning',
        'danger'
      ],
      images: [
        'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg',
        'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
        'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg',
        'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg'
      ]
    }),

    computed: {
      ...mapState('app', ['image', 'color']),
      color () {
        return this.$store.state.app.color
      }
    },

    methods: {
      ...mapMutations('app', ['setImage']),
      setColor (color) {
        this.$store.state.app.color = color
      }
    }
  }
</script>

<style lang="scss">
  .v-avatar,
  .v-responsive {
    cursor: pointer;
  }
</style>
