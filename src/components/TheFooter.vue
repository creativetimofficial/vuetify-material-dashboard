<template>
  <v-footer app inset absolute color="transparent" width="auto" height="auto">
    <v-container>
      <v-row align="center">
        <v-col
          v-for="link in links"
          :key="link.name"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a :href="link.Link" rel="noopener" class="mr-0">{{ link.name }}</a>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            &copy;
            {{ new Date().getFullYear() }}, made with
            <v-icon size="18">mdi-heart</v-icon>
            by <a href="https://www.creative-tim.com">Creative Tim</a> for a
            better web.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Home", Link: "/#" },
        { name: "Creative Tim", Link: "https://www.creative-tim.com" },
        { name: "About Us", Link: "https://creative-tim.com/presentation" },
        { name: "Blog", Link: "https://blog.creative-tim.com" }
      ]
    };
  }
};
</script>

<style></style>
