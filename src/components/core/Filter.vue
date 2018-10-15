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
        <v-layout wrap>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">Sidebar Filters</div>

            <v-layout justify-center>
              <v-avatar
                v-for="c in colors"
                :key="c"
                :class="[c === color ? 'color-active color-' + c: 'color-' + c]"
                size="23"

                @click="setColor(c)"
              />
            </v-layout>
            <v-divider class="mt-3"/>
          </v-flex>
          <v-flex
            xs12
          >
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">Images</div>
          </v-flex>
          <v-flex
            v-for="img in images"
            :key="img"
            xs3
          >
            <v-img
              :class="[image === img ? 'image-active' : '']"
              :src="img"
              height="120"
              @click.native="setImage(img)"
            />
          </v-flex>
          <v-flex xs12>
            <v-btn
              :href="freeUrl"
              target="_blank"
              color="success"
              block
            >
              Free Download
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn
              :href="documentationLink"
              target="_blank"
              class="white--text"
              color="primary"
              block
            >
              Documentation
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase">
              <div class=" sidebar-filter">
                Thank You for Sharing!
              </div>

              <social-sharing :url="shareUrl" inline-template
                              title="Vuetify Material Dashboard - Admin Template for Vue.js"
                              hashtags="vuejs, vuex, dashboard, vuetify, vuetify material" twitter-user="creativetim">
                <div class="centered-buttons">
                  <network network="facebook" class="mr-2 v-btn-facebook v-btn v-btn--floating v-btn--icon v-btn--small theme--dark indigo">
                    <i class="v-icon mdi mdi-facebook theme--dark"></i>
                  </network>
                  <network network="twitter" class="v-btn-twitter v-btn v-btn--floating v-btn--icon v-btn--small theme--dark cyan">
                    <i class="v-icon mdi mdi-twitter theme--dark"></i>
                  </network>
                </div>
              </social-sharing>
            </div>

            <v-btn
              color="success"
              icon
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <div class="text-center">
              <gh-btns-star slug="creativetimofficial/vue-material-dashboard" show-count></gh-btns-star>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>

import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

Vue.use(SocialSharing)
Vue.use(VueGitHubButtons, {useCache: true})

export default {
  data: () => ({
    documentationLink: 'https://demos.creative-tim.com/vuetify-material-dashboard/documentation',
    shareUrl: 'https://www.creative-tim.com/product/vuetify-material-dashboard',
    buyUrl: '',
    freeUrl: 'https://www.creative-tim.com/product/vuetify-material-dashboard',
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

<style lang="scss" scoped>
  .v-avatar,
  .v-responsive {
    cursor: pointer;
  }

  .v-btn {
    cursor: pointer;
  }

  .text-center {
    display: flex;
    justify-content: center;
  }
</style>
