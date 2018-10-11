# Tabs

If you have information that you don't need to show at once, we suggest you use tabs. We carefully re-styled the custom tabs component from vuetifyjs.com which you can easily use.

<script>
module.exports = {
  data () {
    return {
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>

## Nav Tabs table

::: demo
```html
<material-card
  class="card-tabs"
  color="green">
  <v-flex
    slot="header"
  >
    <v-tabs
      v-model="tabs"
      color="transparent"
      slider-color="white"
    >
      <span
        class="subheading font-weight-light mr-3"
        style="align-self: center"
      >Tasks:</span>
      <v-tab class="mr-3">
        <v-icon class="mr-2">mdi-bug</v-icon>
        Bugs
      </v-tab>
      <v-tab class="mr-3">
        <v-icon class="mr-2">mdi-code-tags</v-icon>
        Website
      </v-tab>
      <v-tab>
        <v-icon class="mr-2">mdi-cloud</v-icon>
        Server
      </v-tab>
    </v-tabs>
  </v-flex>

  <v-tabs-items v-model="tabs">
    <v-tab-item
      v-for="n in 3"
      :key="n"
    >
      <v-list three-line>
        <v-list-tile @click="complete(0)">
          <v-list-tile-action>
            <v-checkbox
              :value="list[0]"
              color="green"
            />
          </v-list-tile-action>
          <v-list-tile-title>
            Sign contract for "What are conference organized afraid of?"
          </v-list-tile-title>
          <div class="d-flex">
            <v-tooltip
              top
              content-class="top">
              <v-btn
                slot="activator"
                class="v-btn--simple"
                color="success"
                icon
              >
                <v-icon color="primary">mdi-pencil</v-icon>
              </v-btn>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip
              top
              content-class="top">
              <v-btn
                slot="activator"
                class="v-btn--simple"
                color="danger"
                icon
              >
                <v-icon color="error">mdi-close</v-icon>
              </v-btn>
              <span>Close</span>
            </v-tooltip>

          </div>
        </v-list-tile>
        <v-divider/>
        <v-list-tile @click="complete(1)">
          <v-list-tile-action>
            <v-checkbox
              :value="list[1]"
              color="green"
            />
          </v-list-tile-action>
          <v-list-tile-title>
            Lines From Great Russian Literature? Or E-mails From My Boss?
          </v-list-tile-title>
          <div class="d-flex">
            <v-tooltip
              top
              content-class="top">
              <v-btn
                slot="activator"
                class="v-btn--simple"
                color="success"
                icon
              >
                <v-icon color="primary">mdi-pencil</v-icon>
              </v-btn>
              <span>Edit</span>
            </v-tooltip>

            <v-tooltip
              top
              content-class="top">
              <v-btn
                slot="activator"
                class="v-btn--simple"
                color="danger"
                icon>
                <v-icon color="error">mdi-close</v-icon>
              </v-btn>
              <span>Close</span>
            </v-tooltip>
          </div>
        </v-list-tile>
        <v-divider/>
        <v-list-tile @click="complete(2)">
          <v-list-tile-action>
            <v-checkbox
              :value="list[2]"
              color="green"
            />
          </v-list-tile-action>
          <v-list-tile-title>
            Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
          </v-list-tile-title>
          <div class="d-flex">
            <v-tooltip
              top
              content-class="top">
              <v-btn
                slot="activator"
                class="v-btn--simple"
                color="success"
                icon
              >
                <v-icon color="primary">mdi-pencil</v-icon>
              </v-btn>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip
              top
              content-class="top">
              <v-btn
                slot="activator"
                class="v-btn--simple"
                color="danger"
                icon
              >
                <v-icon color="error">mdi-close</v-icon>
              </v-btn>
              <span>Close</span>
            </v-tooltip>
          </div>
        </v-list-tile>
      </v-list>
    </v-tab-item>
  </v-tabs-items>
</material-card>
<script>
export default{
  data () {
    return {
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
```
:::

> Note: for more details about the tabs that can you use please see the **Tabs** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/tabs#)
