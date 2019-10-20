import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.pink.base,
        secondary: colors.purple.base,
        tertiary: "#495057",
        accent: "#82B1FF",
        error: "#f55a4e",
        info: "#00d3ee",
        success: colors.green.base,
        warning: colors.orange.darken1
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
