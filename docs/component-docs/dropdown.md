# Dropdown

To use the dropdown you don't need to import the component because it's global registered, so you can use it like this:

<script>
module.exports = {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ]
  })
}
</script>


### As Button

:::demo
```html
<v-menu
  offset-y
  content-class="dropdown-menu"
  transition="slide-y-transition">
  <v-btn
  slot="activator"
    color="success"
  >
  <v-icon left>mdi-bell</v-icon>
    Dropdown
  </v-btn>
  <v-card>
    <v-list dense>
      <v-list-tile
        v-for="notification in notifications"
        :key="notification"
      >
        <v-list-tile-title
          v-text="notification"
        />
      </v-list-tile>
    </v-list>
  </v-card>
</v-menu>

<script>
  export default {
    data: () => ({
      notifications: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You\'re now a friend with Andrew',
        'Another Notification',
        'Another One'
      ]
    })
  }
</script>
```
:::


> Note: for more details about the dropdown props and attributes please see the **Dropdown** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/menus#usage--1)
