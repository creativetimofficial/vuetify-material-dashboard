# Toolbar

We re-styled the default toolbar from vuetifyjs.com and you can easily use this like the example below:


::: demo
```html
<v-toolbar
  id="core-toolbar"
  app
  color="bg-default"
  prominent
>
  <div class="v-toolbar-title">
    <v-toolbar-title
      class="tertiary--text font-weight-light"
    >
      Vuetify
    </v-toolbar-title>
  </div>

  <v-spacer />
  <v-toolbar-items>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-btn color="default v-btn--simple">Link One</v-btn>
      <v-btn color="default v-btn--simple">Link Two</v-btn>
      <v-btn color="default v-btn--simple">Link Three</v-btn>
    </v-flex>
  </v-toolbar-items>
</v-toolbar>
```
:::

## Colors

The default color option is the attribute `color` and you have another attribute option for the `v-toolbar` component to change the color with what color you want. To do this you have to remove the attribute `color="value"` and add the `style` attribute like this:

```html
<v-toolbar
 style="background: #eee;"
 >

 </v-toolbar>
```

::: demo
```html
<v-toolbar
  id="core-toolbar"
  app
  color="bg-primary"
  prominent
>
  <div class="v-toolbar-title">
    <v-toolbar-title
      class="tertiary--text font-weight-light"
    >
      Vuetify
    </v-toolbar-title>
  </div>

  <v-spacer />
  <v-toolbar-items>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-btn color="default v-btn--simple">Link One</v-btn>
      <v-btn color="default v-btn--simple">Link Two</v-btn>
      <v-btn color="default v-btn--simple">Link Three</v-btn>
    </v-flex>
  </v-toolbar-items>
</v-toolbar>

<v-toolbar
  id="core-toolbar"
  app
  color="bg-danger"
  prominent
>
  <div class="v-toolbar-title">
    <v-toolbar-title
      class="tertiary--text font-weight-light"
    >
      Vuetify
    </v-toolbar-title>
  </div>

  <v-spacer />
  <v-toolbar-items>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-btn color="default v-btn--simple">Link One</v-btn>
      <v-btn color="default v-btn--simple">Link Two</v-btn>
      <v-btn color="default v-btn--simple">Link Three</v-btn>
    </v-flex>
  </v-toolbar-items>
</v-toolbar>

<v-toolbar
  id="core-toolbar"
  app
  color="bg-warning"
  prominent
>
  <div class="v-toolbar-title">
    <v-toolbar-title
      class="tertiary--text font-weight-light"
    >
      Vuetify
    </v-toolbar-title>
  </div>

  <v-spacer />
  <v-toolbar-items>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-btn color="default v-btn--simple">Link One</v-btn>
      <v-btn color="default v-btn--simple">Link Two</v-btn>
      <v-btn color="default v-btn--simple">Link Three</v-btn>
    </v-flex>
  </v-toolbar-items>
</v-toolbar>

<v-toolbar
  id="core-toolbar"
  app
  color="bg-info"
  prominent
>
  <div class="v-toolbar-title">
    <v-toolbar-title
      class="tertiary--text font-weight-light"
    >
      Vuetify
    </v-toolbar-title>
  </div>

  <v-spacer />
  <v-toolbar-items>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-btn color="default v-btn--simple">Link One</v-btn>
      <v-btn color="default v-btn--simple">Link Two</v-btn>
      <v-btn color="default v-btn--simple">Link Three</v-btn>
    </v-flex>
  </v-toolbar-items>
</v-toolbar>

<v-toolbar
  id="core-toolbar"
  app
  color="bg-success"
  prominent
>
  <div class="v-toolbar-title">
    <v-toolbar-title
      class="tertiary--text font-weight-light"
    >
      Vuetify
    </v-toolbar-title>
  </div>

  <v-spacer />
  <v-toolbar-items>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-btn color="default v-btn--simple">Link One</v-btn>
      <v-btn color="default v-btn--simple">Link Two</v-btn>
      <v-btn color="default v-btn--simple">Link Three</v-btn>
    </v-flex>
  </v-toolbar-items>
</v-toolbar>
```
:::

> Note: for more details about toolbar please see the **Toolbar** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/toolbars#introduction)
