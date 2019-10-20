<template>
  <v-container id="typography" fluid>
    <section class="mb-12 text-center">
      <h1
        class="font-weight-light mb-2"
        style="color: rgb(60, 72, 88); font-size: 24px;"
      >
        Vuetify Typography
      </h1>
      <span
        class="font-weight-light"
        style="font-size: 16px; color: rgb(60, 72, 88);"
      >
        Please checkout the
        <a
          href="https://vuetifyjs.com/styles/typography"
          rel="noopener"
          target="_blank"
          class="secondary--text"
          style="text-decoration: none;"
        >
          full documentation
        </a>
      </span>
    </section>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <ct-card
          header-color="green"
          header-title="Material Dashboard Heading"
          header-text="Created using Roboto Font Family"
        >
          <v-container class="pa-0" fluid>
            <v-row
              align="center"
              v-for="(typography, index) in typographys"
              :key="index"
            >
              <v-col md="3" cols="1">
                <span class="tim-note">{{ typography.title }}</span>
              </v-col>
              <v-col cols="8">
                <component :is="typography.tag" :class="typography.class">
                  {{ typography.text }}
                </component>
              </v-col>
            </v-row>
          </v-container>
        </ct-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const leader =
  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.";
const leaderShort = leader.slice(0, 105) + "...";
const material = "The Life of Material Dashboard";

export default {
  name: "Typography",
  data() {
    return {
      typographys: [
        {
          title: "Display 4",
          tag: "h1",
          class: "display-4",
          text: material
        },
        {
          title: "Display 3",
          tag: "h2",
          class: "display-3",
          text: material
        },
        {
          title: "Display 2",
          tag: "h3",
          class: "display-2",
          text: material
        },
        {
          title: "Display 1",
          tag: "h4",
          class: "display-1",
          text: material
        },
        {
          title: "Headline",
          tag: "h5",
          class: "headline",
          text: material
        },
        {
          title: "Title",
          tag: "h6",
          class: "title",
          text: material
        },
        {
          title: "Paragraph",
          tag: "p",
          class: "body-1",
          text: leader
        },
        {
          title: "Quote",
          tag: "blockquote",
          class: "body-2",
          text: leader
        },
        {
          title: "Muted Text",
          tag: "p",
          class: "body-1 text--disabled",
          text: leaderShort
        },
        {
          title: "Primary Text",
          tag: "p",
          class: "body-1 primary--text",
          text: leaderShort
        },
        {
          title: "Info Text",
          tag: "p",
          class: "body-1 info--text",
          text: leaderShort
        },
        {
          title: "Success Text",
          tag: "p",
          class: "body-1 success--text",
          text: leaderShort
        },
        {
          title: "Warning Text",
          tag: "p",
          class: "body-1 warning--text",
          text: leaderShort
        },
        {
          title: "Error Text",
          tag: "p",
          class: "body-1 error--text",
          text: leaderShort
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.tim-note {
  bottom: 10px;
  color: #c0c1c2;
  display: block;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  left: 0;
  margin-left: 20px;
  width: 260px;
}
</style>
