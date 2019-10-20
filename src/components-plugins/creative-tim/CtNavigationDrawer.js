import mixins from "vuetify/lib/util/mixins";
import { VNavigationDrawer, VImg } from "vuetify/lib";

export default mixins(VNavigationDrawer)
  .extend()
  .extend({
    name: "ct-navigation-drawer",
    props: {
      app: {
        type: Boolean,
        default: true
      },
      dark: {
        type: [Boolean],
        default: true
      },
      width: {
        type: [Number, String],
        default: 260
      },
      gradient: {
        type: String,
        default: "to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)"
      }
    },
    methods: {
      genBackground() {
        const props = {
          height: "100%",
          width: "100%",
          src: this.src,
          gradient: this.gradient
        };

        const image = this.$scopedSlots.img
          ? this.$scopedSlots.img(props)
          : this.$createElement(VImg, { props });

        return this.$createElement(
          "div",
          {
            staticClass: "v-navigation-drawer__image"
          },
          [image]
        );
      }
    }
  });
