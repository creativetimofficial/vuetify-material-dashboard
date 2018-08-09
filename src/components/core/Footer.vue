<template>
  <v-footer
    id="core-footer"
    absolute
    class="px-5"
    height="96"
  >
    <a
      v-for="link in links"
      :key="link"
      href="#"
      class="tertiary--text mr-5"
      v-text="link"
    />
    <v-spacer/>
    <span class="subheading font-weight-thin">
      &copy;
      {{ (new Date()).getFullYear() }}
      Creative Tim, made with
      <v-icon
        color="tertiary"
        size="22">mdi-heart</v-icon>
      for a better web
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'Company',
      'Portfolio',
      'Blog'
    ]
  })
}
</script>

<style>
#core-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 0;
}

#core-footer a {
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
