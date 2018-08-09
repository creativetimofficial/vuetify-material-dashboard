<template>
  <v-content>
    <v-container
      fluid>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
    <core-footer />
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      titleTemplate: '%s — Material Design'
    }
  }
}
</script>
