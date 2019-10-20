import mixins from "vuetify/lib/util/mixins";
import { VAppBar } from "vuetify/lib";
import VToolbar from "vuetify/lib/components/VToolbar/VToolbar";

export default mixins(VAppBar)
  .extend()
  .extend({
    name: "CtAppBar",
    props: {
      height: {
        type: [Number, String],
        default: 75
      },
      color: {
        type: String,
        default: "transparent"
      }
    },
    computed: {
      classes() {
        return {
          ...VAppBar.options.computed.classes.call(this),
          "ct-app-bar": true
        };
      }
    }
  });
