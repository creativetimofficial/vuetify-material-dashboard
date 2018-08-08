<template>
  <v-toolbar app>
    <v-toolbar-title v-text="$t('Core.Toolbar.title')"/>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        href="https://community.vuetifyjs.com"
        target="_blank"
      >
        <span v-text="$t('Common.needHelp')" />
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
