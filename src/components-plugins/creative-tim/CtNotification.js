import mixins from "vuetify/lib/util/mixins";
import { VAlert } from "vuetify/lib";

export default mixins(VAlert)
  .extend()
  .extend({
    name: "CtNotification",
    props: {
      dark: {
        type: Boolean,
        default: true
      },
      elevation: {
        type: [Number, String],
        default: 6
      },
      value: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      classes() {
        return {
          ...VAlert.options.computed.classes.call(this),
          "ct-alert": true
        };
      }
    }
  });
