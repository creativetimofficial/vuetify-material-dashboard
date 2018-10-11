# Drawer

Our sidebar is made from the `v-navigation-drawer` component who is displayed like the example below. For more details about the attributes that we used and more attributes for this drawer you can view the [vuetifyjs.com](https://vuetifyjs.com/en/components/navigation-drawers#introduction) navigation drawer page.

```html
<v-navigation-drawer
  id="app-drawer"
  v-model="inputValue"
  app
  dark
  floating
  persistent
  mobile-break-point="991"
  width="260"
>
  <v-img
    :src="image"
    height="100%"
  >
    <v-layout
      class="fill-height"
      tag="v-list"
      column
    >
      <v-list-tile avatar>
        <v-list-tile-avatar
          color="white"
        >
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png"
            height="34"
            contain
          />
        </v-list-tile-avatar>
        <v-list-tile-title class="title">
          Vuetify MD
        </v-list-tile-title>
      </v-list-tile>
      <v-divider/>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :active-class="color"
        avatar
        class="v-list-item"
      >
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title
          v-text="link.text"
        />
      </v-list-tile>
      <v-list-tile
        disabled
        active-class="primary"
        class="v-list-item v-list__tile--buy"
        to="/upgrade"
      >
        <v-list-tile-action>
          <v-icon>mdi-package-up</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="font-weight-light">
          Upgrade To PRO
        </v-list-tile-title>
      </v-list-tile>
    </v-layout>
  </v-img>
</v-navigation-drawer>
```
