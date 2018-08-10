<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card>
          <v-card
            slot="offset"
            color="secondary"
            class="elevation-10"
            dark
          >
            <div class="pa-3">
              <div class="title font-weight-light mb-2">Material Dashboard Heading</div>
              <div class="subheading font-weight-thin grey--text text--lighten-2">
                Created using Roboto Font Family
              </div>
            </div>
          </v-card>

          <v-card-text>
            <h1 class="display-2 font-weight-light mb-4">Typography</h1>

            <v-container
              class="pa-0"
              grid-list-xl
              fluid
            >
              <v-layout
                v-for="(t, i) in typography"
                :key="i"
                align-end
                wrap
              >
                <v-flex xs4>
                  <span
                    class="subheading font-weight-medium grey--text"
                    v-text="t[0]"
                  />
                </v-flex>
                <v-flex xs8>
                  <span
                    :class="i"
                    v-text="t[1]"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const leader = 'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
const leaderShort = leader.slice(0, 105) + '...'
const material = 'The Life of Material Dashboard'

export default {
  data: () => ({
    typography: {
      'display-4': ['Header 1', material],
      'display-3': ['Header 2', material],
      'display-2': ['Header 3', material],
      'display-1': ['Header 4', material],
      'headline text-uppercase': ['Header 5', material],
      'title': ['Header 6', material],
      'subheading': ['Paragraph', leader],
      'subheading text--disabled': ['Muted Text', leaderShort],
      'subheading primary--text': ['Primary Text', leaderShort],
      'subheading info--text': ['Info Text', leaderShort],
      'subheading success--text': ['Success Text', leaderShort],
      'subheading warning--text': ['Warning Text', leaderShort],
      'subheading error--text': ['Danger Text', leaderShort]
    }
  })
}
</script>
