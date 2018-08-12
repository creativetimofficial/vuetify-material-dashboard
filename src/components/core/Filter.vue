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
      class="elevation-10"
      color="grey"
      dark
      fab
      fixed
      right
      style="top: 96px;"
      top
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase mb-3">Primary Color</div>

            <v-layout justify-center>
              <v-avatar
                v-for="c in colors"
                :key="c"
                :style="{
                  backgroundColor: c
                }"
                :class="[c === color ? 'elevation-10' : '']"
                class="mx-1"
                size="24"
                @click="setColor(c)"
              >
                <v-icon
                  v-if="c === color"
                  class="white--text"
                  small
                >
                  mdi-check
                </v-icon>
              </v-avatar>
            </v-layout>
            <v-divider class="mt-3"/>
          </v-flex>
          <v-flex
            v-for="img in images"
            :key="img"
            xs3
          >
            <v-img
              :class="[image === img ? 'elevation-12' : '']"
              :src="img"
              height="120"
              @click.native="setImage(img)"
            />
          </v-flex>
          <v-flex xs12>
            <v-btn
              color="success"
              block
            >
              Free Download
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn
              class="white--text"
              color="purple"
              block
            >
              Documentation
            </v-btn>
          </v-flex>
        </v-layout>
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
import colors from 'vuetify/es5/util/colors'

export default {
  data: () => ({
    colors: [
      colors.purple.base,
      colors.teal.base,
      colors.green.base,
      colors.orange.base,
      colors.red.base
    ],
    images: [
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg'
    ]
  }),

  computed: {
    ...mapState('app', ['image']),
    color () {
      return this.$vuetify.theme.primary
    }
  },

  methods: {
    ...mapMutations('app', ['setImage']),
    setColor (color) {
      this.$vuetify.theme.primary = color
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
