<template>
  <v-content>
    <v-container id="core-view">
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
      title: 'Vue Material Dashboard by CreativeTim'
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 128px;
}
</style>
