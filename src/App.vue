<template>
  <v-app>
    <the-app-bar />
    <the-drawer />
    <the-view />
    <the-footer />
  </v-app>
</template>

<script>
import TheAppBar from "./components/TheAppBar";
import TheView from "./components/TheView";
import TheDrawer from "./components/TheDrawer";
import TheFooter from "./components/TheFooter";

export default {
  components: {
    TheAppBar,
    TheDrawer,
    TheView,
    TheFooter
  }
};
</script>
