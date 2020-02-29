<template>
  <v-container
    id="buttons"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Buttons"
      link="components/buttons"
    />

    <v-card>
      <v-card-text class="pt-0">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <base-subheading>
              <h5 class="font-weight-light">
                Pick your Color
              </h5>
            </base-subheading>

            <div>
              <v-btn
                v-for="(color, i) in colors"
                :key="i"
                elevation="1"
                :color="color === 'default' ? undefined : color"
                class="ma-1"
              >
                {{ color }}
              </v-btn>
            </div>
          </v-col>

          <v-col
            class="pt-0"
            cols="12"
            md="6"
          >
            <base-subheading>
              <h5 class="font-weight-light">
                Buttons with Label
              </h5>
            </base-subheading>

            <div>
              <v-btn
                v-for="(dir, i) in ['left', 'right']"
                :key="i"
                elevation="1"
                class="ma-1"
              >
                <v-icon
                  :left="dir === 'left'"
                  :right="dir === 'right'"
                  :class="dir === 'right' && 'order-last'"
                  v-text="icons[dir]"
                />
                {{ dir }}
              </v-btn>

              <v-btn
                v-for="(color, i) in colors.slice(2)"
                :key="`btn-${i}`"
                elevation="1"
                :color="color === 'default' ? undefined : color"
                class="ma-1"
              >
                <v-icon
                  left
                  v-text="icons[color]"
                />
                {{ color }}
              </v-btn>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <base-subheading>
              <h5 class="font-weight-light">
                Pick your Size
              </h5>
            </base-subheading>

            <v-btn
              v-for="n in 3"
              :key="n"
              elevation="1"
              :small="n === 1"
              :large="n === 3"
              class="ma-1"
              color="secondary"
            >
              {{ n === 1 ? 'small' : n === 2 ? 'regular' : 'large' }}
            </v-btn>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <base-subheading>
              <h5 class="font-weight-light">
                Pick your Style
              </h5>
            </base-subheading>

            <v-btn
              class="ma-1"
              color="secondary"
            >
              Default
            </v-btn>

            <v-btn
              class="ma-1"
              elevation="1"
              color="secondary"
              rounded
            >
              Rounded
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              elevation="1"
              rounded
            >
              <v-icon left>
                mdi-heart
              </v-icon>
              With Icon
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              elevation="1"
              fab
              small
            >
              <v-icon>
                mdi-heart
              </v-icon>
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              text
            >
              Simple
            </v-btn>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <base-subheading>
              <h5 class="font-weight-light">
                Pagination
              </h5>
            </base-subheading>

            <v-pagination
              :length="5"
              :value="1"
              circle
              class="justify-start"
            />

            <v-pagination
              :length="3"
              :value="2"
              circle
              class="justify-start"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <base-subheading>
              <h5 class="font-weight-light">
                Button Group
              </h5>
            </base-subheading>

            <v-sheet>
              <v-btn-toggle color="teal">
                <v-btn
                  v-for="dir in ['left', 'middle', 'right']"
                  :key="dir"
                >
                  {{ dir }}
                </v-btn>
              </v-btn-toggle>
            </v-sheet>

            <div class="my-6" />

            <v-btn-toggle
              color="teal"
              rounded
            >
              <v-btn
                v-for="n in 4"
                :key="n"
              >
                {{ n }}
              </v-btn>
            </v-btn-toggle>

            <div class="my-2" />

            <v-btn-toggle
              color="teal"
              rounded
            >
              <v-btn
                v-for="n in 3"
                :key="n"
              >
                {{ n + 4 }}
              </v-btn>
            </v-btn-toggle>
          </v-col>

          <template v-for="(s, i) in social">
            <v-col
              :key="i"
              cols="12"
              class="py-1"
            >
              <base-subheading
                v-if="i === 0"
                :key="`heading-${i}`"
              >
                <h5 class="font-weight-light">
                  Social buttons
                </h5>
              </base-subheading>

              <v-row dense>
                <v-col
                  cols="auto"
                  md="4"
                  sm="5"
                >
                  <v-btn
                    elevation="1"
                    :color="s.color"
                    dark
                  >
                    <v-icon
                      left
                      v-text="s.icon"
                    />
                    {{ s.text }}
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="1"
                  sm="1"
                >
                  <v-btn
                    elevation="1"
                    :color="s.color"
                    dark
                    min-width="0"
                    max-width="41"
                  >
                    <v-icon v-text="s.icon" />
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="1"
                  sm="1"
                >
                  <v-btn
                    elevation="1"
                    :color="s.color"
                    dark
                    fab
                    min-width="0"
                    small
                  >
                    <v-icon v-text="s.icon" />
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="1"
                  sm="1"
                >
                  <v-btn
                    :color="s.color"
                    dark
                    icon
                    min-width="0"
                  >
                    <v-icon
                      :color="s.color"
                      v-text="s.icon"
                    />
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="3"
                  sm="4"
                >
                  <v-btn
                    :color="s.color"
                    dark
                    text
                  >
                    <v-icon
                      left
                      :color="s.color"
                      v-text="s.icon"
                    />
                    {{ s.text }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardButtons',

    data: () => ({
      colors: [
        'default',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
      ],
      icons: {
        left: 'mdi-chevron-left',
        right: 'mdi-chevron-right',
        info: 'mdi-exclamation',
        success: 'mdi-check',
        warning: 'mdi-alert',
        error: 'mdi-close',
      },
      social: [
        {
          color: '#55ACEE',
          icon: 'mdi-twitter',
          text: 'Connect with Twitter',
        },
        {
          color: '#3B5998',
          icon: 'mdi-facebook',
          text: 'Share - 2.2K',
        },
        {
          color: '#DD4b39',
          icon: 'mdi-google-plus',
          text: 'Share on Google+',
        },
        {
          color: '#0976B4',
          icon: 'mdi-linkedin',
          text: 'Connect with LinkedIn',
        },
        {
          color: '#CC2127',
          icon: 'mdi-pinterest',
          text: 'Pint It - 212',
        },
        {
          color: '#E52D27',
          icon: 'mdi-youtube',
          text: 'View on Youtube',
        },
        {
          color: '#35465C',
          icon: 'mdi-tumblr',
          text: 'Repost',
        },
        {
          color: '#333333',
          icon: 'mdi-github-circle',
          text: 'Connect with Github',
        },
        {
          color: '#1769FF',
          icon: 'mdi-behance',
          text: 'Follow Us',
        },
        {
          color: '#EA4C89',
          icon: 'mdi-dribbble',
          text: 'Follow us on Dribbble',
        },
        {
          color: '#FF4500',
          icon: 'mdi-reddit',
          text: 'Repost - 232',
        },
      ],
    }),
  }
</script>
