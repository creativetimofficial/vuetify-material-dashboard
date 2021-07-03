<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Alerts"
      link="components/alerts"
    />

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text>
            <base-subheading subheading="Notification Style" />

            <base-material-alert
              color="info"
              dark
            >
              This is a plain notification.
            </base-material-alert>

            <base-material-alert
              color="info"
              dark
              dismissible
            >
              This is a notification with close button.
            </base-material-alert>

            <base-material-alert
              color="info"
              dark
              dismissible
              icon="mdi-bell"
            >
              This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
            </base-material-alert>

            <base-material-alert
              color="primary"
              dark
              dismissible
              icon="mdi-bell"
            >
              You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
            </base-material-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text>
            <base-subheading subheading="Notification states" />

            <base-material-alert
              v-for="color in colors"
              :key="color"
              :color="color"
              dark
              dismissible
            >
              <span
                class="text-uppercase"
                v-text="color"
              /> — This is a regular alert made with the color of "{{ color }}"
            </base-material-alert>

            <base-material-alert
              color="secondary"
              dark
              dismissible
            >
              <span>PRIMARY</span> — This is a regular alert made with the color "secondary"
            </base-material-alert>

            <base-material-alert
              color="pink darken-1"
              dark
              dismissible
            >
              <span>PINK DARKEN-1</span> — This is a regular alert made with the color "pink darken-1"
            </base-material-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center">
            <base-subheading
              class="text-center"
              subheading="Snackbar Locations"
            />

            <v-row
              class="mt-n12"
              justify="center"
            >
              <v-col
                cols="10"
                lg="8"
              >
                <v-row>
                  <v-col
                    v-for="dir in directions"
                    :key="dir"
                    cols="4"
                  >
                    <v-btn
                      color="secondary"
                      default
                      class="v-btn--block"
                      @click="randomColor(), direction = dir, snackbar = true"
                    >
                      {{ dir }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <base-subheading
              class="text-center"
              subheading="Dialogs"
            />

            <v-row
              class="mt-n12"
              justify="center"
            >
              <v-col
                cols="10"
                lg="8"
              >
                <v-row>
                  <v-col cols="4">
                    <v-btn
                      color="secondary"
                      default
                      rounded
                      @click="dialog = true"
                    >
                      Classic Dialog
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn
                      color="info"
                      default
                      rounded
                      @click="dialog2 = true"
                    >
                      Notice Modal
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn
                      color="pink darken-1"
                      dark
                      default
                      rounded
                      @click="dialog3 = true"
                    >
                      Small Alert Modal
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <base-material-snackbar
      v-model="snackbar"
      :type="color"
      v-bind="{
        [parsedDirection[0]]: true,
        [parsedDirection[1]]: true
      }"
    >
      Welcome to <span class="font-weight-bold">&nbsp;MATERIAL DASHBOARD&nbsp;</span> — a beautiful admin panel for every web developer.
    </base-material-snackbar>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card class="text-center">
        <v-card-title>
          Dialog Title

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="dialog = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      max-width="500"
    >
      <v-card>
        <v-card-title>
          How do you become an affiliate?

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="dialog2 = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text class="text-body-1 text-center">
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              <div>
                <div>
                  <strong>1. Register</strong>
                </div>

                <div class="grey--text">
                  The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you.
                </div>
              </div>
            </v-col>

            <v-col
              class="hidden-sm-and-down"
              md="4"
            >
              <v-sheet>
                <v-img
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/card-1.jpg"
                  height="100"
                  width="200"
                />
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              md="8"
            >
              <div>
                <div>
                  <strong>2. Apply</strong>
                </div>

                <div class="grey--text">
                  The first step is to create an account at <a href="http://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.
                </div>
              </div>
            </v-col>

            <v-col
              class="hidden-sm-and-down"
              md="4"
            >
              <v-sheet>
                <v-img
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/card-2.jpg"
                  height="100"
                  width="200"
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!
            </v-col>
          </v-row>

          <v-btn
            class="mt-6"
            color="info"
            depressed
            default
            rounded
            @click="dialog2 = false"
          >
            Sounds good
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog3"
      max-width="300"
    >
      <v-card>
        <v-card-title>
          Are you sure?

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="dialog3 = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text class="pb-6 pt-12 text-center">
          <v-btn
            class="mr-3"
            text
            @click="dialog3 = false"
          >
            Nevermind
          </v-btn>

          <v-btn
            color="success"
            text
            @click="dialog3 = false"
          >
            Yes
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardNotifications',

    data: () => ({
      color: 'info',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      dialog: false,
      dialog2: false,
      dialog3: false,
      direction: 'top center',
      directions: [
        'top left',
        'top center',
        'top right',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
      snackbar: false,
    }),

    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },

    methods: {
      randomColor () {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      },
    },
  }
</script>
