<template>
    <div class="theme-container ct-documentation bd-docs" :class="{'sidebar-open' : sidebar}">
        <Navbar :toggle-sidebar="closeMenu"></Navbar>
        <div
                class="sidebar-mask"
                @click="toggleSidebar(false)"
        ></div>

        <Sidebar
                :items="sidebarItems"
        >
            <slot
                    name="sidebar-top"
                    slot="top"
            />
            <slot
                    name="sidebar-bottom"
                    slot="bottom"
            />
        </Sidebar>

        <div
                class="custom-layout"
                v-if="$page.frontmatter.layout"
        >
            <component :is="$page.frontmatter.layout"/>
        </div>

        <Home v-else-if="$page.frontmatter.home"/>

        <Page class="custom-page"
                v-else
                :sidebar-items="sidebarItems"
        >
            <slot
                    name="page-top"
                    slot="top"
            />
            <slot
                    name="page-bottom"
                    slot="bottom"
            />
        </Page>

    </div>
</template>
<script>
  import Navbar from './Navbar';
  import Sidebar from '../../node_modules/vuepress/lib/default-theme/Sidebar';
  import Home from '../../node_modules/vuepress/lib/default-theme/Home';
  import Page from '../../node_modules/vuepress/lib/default-theme/Page';
  import {resolveSidebarItems} from '../../node_modules/vuepress/lib/default-theme/util';
  import 'prismjs/themes/prism-tomorrow.css';
  import '../../node_modules/vuepress/lib/default-theme/styles/theme.styl';

  export default {
    components: {
      Navbar,
      Sidebar,
      Home,
      Page
    },
    data() {
      return {
        sidebar: false
      }
    },
    computed: {
      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$route,
          this.$site,
          this.$localePath
        )
      },
    },
    methods: {
      closeMenu () {
        this.sidebar = !this.sidebar;
      },
      toggleSidebar (to) {
        this.sidebar = to;
      }
    }
  }
</script>
<style>
    .theme-content {
        margin-top: 100px;
    }
    .page.custom-page .content{
        margin: 60px 20px 20px;
        max-width: 100%;
    }
</style>
