<template>
  <v-toolbar
    id="core-toolbar"
    fixed
    flat
    prominent
    color="bg-success"
    style="background: #eee;"
  >
    <div class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text font-weight-light"
      >
        <v-btn
          v-if="responsive"
          class="default v-btn--simple sidebar-button"
          icon
          @click="toggleSidebar"
        >
          <v-icon style="color: #FFF !important">mdi-view-list</v-icon>
        </v-btn>
        {{ title }}<span class="docs-version"> - V{{version}}</span>
      </v-toolbar-title>
    </div>
    <v-flex
      align-center
      layout
      py-2
    >
      <v-toolbar-items>
        <a
        v-if="responsiveLink"
          v-ripple
          target="_blank"
          class="toolbar-items"
          href="https://github.com/creativetimofficial/vuetify-material-dashboard"
          >
          <i class="fab fa-github"></i>
        </a>
        <a
        v-if="responsiveLink"
          target="_blank"
          v-ripple
          class="toolbar-items"
          href="https://twitter.com/creativetim"
          >
          <i class="fab fa-twitter"></i>
        </a>
      </v-toolbar-items>
    </v-flex>

    <v-spacer />


    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2
      >
      <a
        v-if="responsiveLink"
        v-ripple
        target="_blank"
        class="toolbar-items"
        href="https://demos.creative-tim.com/vuetify-material-dashboard"
        >
        <i class="fas fa-tv"></i>
        <span>Live Preview</span>
      </a>
        <SearchBox v-if="($site.themeConfig.search !== false) && responsiveLink"/>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>

</template>
<script>
import {
  mapMutations
} from 'vuex'
  import SearchBox from '../../node_modules/vuepress/lib/default-theme/SearchBox.vue';

  export default {
    components: {
      SearchBox
    },
    data: () => ({
      title: 'Vuetify Material Dashboard',
      responsive: false,
      responsiveLink: true,
      version: '1.0.0',
    }),

    props: {
      toggleSidebar: {
        type: Function
      }
    },

    mounted () {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },

    methods: {

      onClick () {
        //
      },
      onResponsiveInverted () {
        if (window.innerWidth < 720) {
          this.responsive = true
          this.responsiveLink = false
        } else {
          this.responsive = false
          this.responsiveLink = true
        }
      }
    }
  }
</script>
<style lang="scss">
    nav.main-nav {
      z-index: 50;
        &.navbar {
            background-color: #42b883;
            box-shadow: rgba(116, 129, 141, .1) 0 1px 1px 0;
            position: fixed;
            .container {
                max-width: 100%;
                width: 100%;
            }
            .navbar-brand,
            .navbar-brand:hover{
                color: white;
            }
        }

        &.navbar .nav-link {
            color: white !important;
            &:hover {
                border: 0 !important;
                margin: 0 !important;
            }
            &.router-link-active {
                color: white !important;
                border-bottom: 2px solid white !important;
            }
        }

        &.navbar .search-box .suggestion a {
            color: inherit;
        }
    }
</style>
