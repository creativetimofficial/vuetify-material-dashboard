<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <h1 class="display-2" v-text="$t('Home.title')" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Vuetify Alpha',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    }
  }
</script>
