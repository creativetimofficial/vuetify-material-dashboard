<template>
  <v-container fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card>
          <div
            slot="header"
            class="pa-3"
          >
            <div class="title font-weight-light mb-2">Notifications</div>
            <div class="subheading font-weight-thin grey--text text--lighten-3">
              Handcrafted by us with
              <v-icon
                color="grey lighten-2"
                size="22"
              >
                mdi-heart
              </v-icon>
            </div>
          </div>

          <v-card-text>
            <h2 class="title font-weight-light mb-3">Notifications Style</h2>

            <material-notification
              class="mb-3"
              color="info"
            >
              This is a plain notification
            </material-notification>
            <material-notification
              class="mb-3"
              color="info"
            >
              This is a plain notification
            </material-notification>
            <material-notification
              class="mb-3"
              color="info"
              dismissible
              icon="mdi-bell-plus"
            >

              This is a notification with close button and icon.
            </material-notification>
            <material-notification
              class="mb-3"
              color="info"
              dismissible
              icon="mdi-bell-plus"
            >

              This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
            </material-notification>

            <h2 class="title font-weight-light mt-4 mb-3">Notifcation States</h2>

            <material-notification
              class="mb-3"
              color="info"
              dismissible
            >
              <strong>INFO</strong> - This is a regular notification made with `color="info"`
            </material-notification>

            <material-notification
              class="mb-3"
              color="success"
              dismissible
            >
              <strong>SUCCESS</strong> - This is a regular notification made with `color="success"`
            </material-notification>

            <material-notification
              class="mb-3"
              color="warning"
              dismissible
            >
              <strong>WARNING</strong> - This is a regular notification made with `color="warning"`
            </material-notification>

            <material-notification
              class="mb-3"
              color="error"
              dismissible
            >
              <strong>DANGER</strong> - This is a regular notification made with `color="danger"`
            </material-notification>

            <material-notification
              class="mb-3"
              color="primary"
              dismissible
            >
              <strong>PRIMARY</strong> - This is a regular notification made with `color="primary"`
            </material-notification>

            <div class="text-xs-center mt-5 mb-3">
              <h2 class="title font-weight-light mb-2">Notification Places</h2>
              <span class=" subheading font-weight-light grey--text">Click to view notifications</span>
            </div>

            <v-container grid-list-lg>
              <v-layout justify-center>
                <v-flex xs3>
                  <v-btn
                    block
                    color="primary"
                    large
                    @click="snack('top', 'left')"
                  >
                    Top Left
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    block
                    color="primary"
                    large
                    @click="snack('top')"
                  >
                    Top Center
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout justify-center>
                <v-flex xs3>
                  <v-btn
                    block
                    color="primary"
                    large
                    @click="snack('top', 'right')"
                  >
                    Top Right
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    block
                    color="primary"
                    large
                    @click="snack('bottom', 'left')"
                  >
                    Bottom Left
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout justify-center>
                <v-flex xs3>
                  <v-btn
                    block
                    color="primary"
                    large
                    @click="snack('bottom')"
                  >
                    Bottom Center
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    block
                    color="primary"
                    large
                    @click="snack('bottom', 'right')"
                  >
                    Bottom Right
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>

            <v-snackbar
              :color="color"
              :bottom="bottom"
              :top="top"
              :left="left"
              :right="right"
              v-model="snackbar"
              dark
            >
              <v-icon
                color="white"
                class="mr-3"
              >
                mdi-bell-plus
              </v-icon>
              Welcome to MATERIAL DASHBOARD - a beautiful freebie for every web developer.
            </v-snackbar>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    color: null,
    colors: [
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error'
    ],
    top: true,
    bottom: false,
    left: false,
    right: false,
    snackbar: false
  }),

  methods: {
    snack (...args) {
      this.top = false
      this.bottom = false
      this.left = false
      this.right = false

      for (const loc of args) {
        this[loc] = true
      }

      this.color = this.colors[Math.floor(Math.random() * this.colors.length)]

      this.snackbar = true
    }
  }
}
</script>
