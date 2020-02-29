<template>
  <v-container
    id="timeline"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Timelines"
      link="components/timelines"
    />

    <v-row>
      <v-col>
        <v-timeline align-top>
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            :icon="timeline.icon"
            fill-dot
            large
          >
            <v-card class="pa-6">
              <v-chip
                :color="timeline.color"
                class="overline mb-3"
                small
              >
                {{ timeline.chip }}
              </v-chip>

              <p
                class="subtitle-1 font-weight-light"
                v-text="timeline.text"
              />

              <div
                class="text-uppercase body-2"
                v-text="timeline.subtext"
              />

              <template v-if="timeline.action">
                <v-divider class="mb-3" />

                <v-menu
                  v-model="menu"
                  bottom
                  offset-y
                  origin="top left"
                  right
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      v-bind="attrs"
                      :color="timeline.action"
                      large
                      rounded
                      v-on="on"
                    >
                      <v-icon
                        left
                        v-text="timeline.actionIcon"
                      />
                      <v-icon right>
                        {{ menu ? 'mdi-menu-up' : 'mdi-menu-down' }}
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-sheet>
                    <v-list>
                      <v-list-item
                        v-for="a in timeline.actions"
                        :key="a"
                        link
                      >
                        <v-list-item-title v-text="a" />
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-menu>
              </template>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardPagesTimeline',

    data: () => ({
      menu: false,
      timelines: [
        {
          chip: 'Some title',
          color: 'error',
          icon: 'mdi-briefcase',
          text: 'Wifey made the best Father\'s Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.',
          subtext: '11 hours ago via twitter',
        },
        {
          chip: 'Another one',
          color: 'success',
          icon: 'mdi-puzzle',
          text: 'Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....',
        },
        {
          chip: 'Another title',
          color: 'info',
          icon: 'mdi-fingerprint',
          text: 'Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn\'t make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye',
          action: 'info',
          actionIcon: 'mdi-wrench',
          actions: [
            'Action',
            'Another Action',
            'Something else here',
          ],
        },
        {
          chip: 'Another one',
          color: 'warning',
          icon: 'mdi-airplane-landing',
          text: 'Tune into Big Boy\'s 92.3 I\'m about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team',
        },
      ],
    }),
  }
</script>
