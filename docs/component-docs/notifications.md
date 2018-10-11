# Notifications

<script>
module.exports = {
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

The default notification plugin was re-styled, you can use it like this:

### Trigger Notifications

::: demo
```html
<template>
  <v-container grid-list-lg>
    <v-layout
      justify-center
      row
      wrap>
      <v-flex
        xs12
        sm4>
        <v-btn
          block
          color="success"
          @click="snack('top', 'left')"
        >
          Top Left
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        sm4>
        <v-btn
          block
          color="success"
          @click="snack('top')"
        >
          Top Center
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout
      justify-center
      row
      wrap>
      <v-flex
        xs12
        sm4>
        <v-btn
          block
          color="success"
          @click="snack('top', 'right')"
        >
          Top Right
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        sm4>
        <v-btn
          block
          color="success"
          @click="snack('bottom', 'left')"
        >
          Bottom Left
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout
      justify-center
      row
      wrap>
      <v-flex
        xs12
        sm4>
        <v-btn
          block
          color="success"
          @click="snack('bottom')"
        >
          Bottom Center
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        sm4>
        <v-btn
          block
          color="success"
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
    <div>Welcome to <b>Vue Material Dashboard</b> - a beautiful freebie for every web developer.</div>
    <v-icon
      size="16"
      @click="snackbar = false"
    >
      mdi-close-circle
    </v-icon>
  </v-snackbar>
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

```
:::

> Note: for more details about the sanckbars props and attributes please see the **Snackbars** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/snackbars#introduction)
