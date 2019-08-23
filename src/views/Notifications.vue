<template>
  <v-container
    fluid
    fill-height
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <material-card color="success">
          <template v-slot:header>
            <div class="px-3">
              <div class="title font-weight-light mb-2">
                Notifications
              </div>

              <div class="category">
                Handcrafted by us with
                <v-icon size="17">
                  mdi-heart
                </v-icon>
              </div>
            </div>
          </template>

          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <h2 class="title font-weight-light mb-3">
                  Notifications Style
                </h2>

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
                >
                  This is a notification with close button.
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
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <h2 class="title font-weight-light">
                  Notifcation States
                </h2>

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
                  <strong>DANGER</strong> - This is a regular notification made with `color="error"`
                </material-notification>

                <material-notification
                  class="mb-3"
                  color="purple"
                  dismissible
                >
                  <strong>PRIMARY</strong> - This is a regular notification made with `color="purple"`
                </material-notification>
              </v-col>
            </v-row>

            <div class="text-center">
              <h2 class="title font-weight-light mb-2">
                Notification Places
              </h2>
              <span class=" subheading font-weight-light grey--text">Click to view notifications</span>
            </div>

            <v-container>
              <v-row justify="center">
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-btn
                    block
                    color="success"
                    @click="snack('top', 'left')"
                  >
                    Top Left
                  </v-btn>
                </v-col>

                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-btn
                    block
                    color="success"
                    @click="snack('top')"
                  >
                    Top Center
                  </v-btn>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-btn
                    block
                    color="success"
                    @click="snack('top', 'right')"
                  >
                    Top Right
                  </v-btn>
                </v-col>

                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-btn
                    block
                    color="success"
                    @click="snack('bottom', 'left')"
                  >
                    Bottom Left
                  </v-btn>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-btn
                    block
                    color="success"
                    @click="snack('bottom')"
                  >
                    Bottom Center
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-btn
                    block
                    color="success"
                    @click="snack('bottom', 'right')"
                  >
                    Bottom Right
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>

            <v-snackbar
              v-model="snackbar"
              :bottom="bottom"
              :color="color"
              :left="left"
              :right="right"
              :top="top"
              :timeout="900000"
              dark
            >
              <v-icon
                color="white"
                class="mr-3"
              >
                mdi-bell-plus
              </v-icon>
              <div>Welcome to <b>Vuetify Material Dashboard</b> - a beautiful freebie for every web developer.</div>
              <v-btn
                icon
                @click="snackbar = false"
              >
                <v-icon>
                  mdi-close-circle
                </v-icon>
              </v-btn>
            </v-snackbar>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      color: null,
      colors: [
        'purple',
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
