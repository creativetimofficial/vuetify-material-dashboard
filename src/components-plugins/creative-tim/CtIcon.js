import mixins from "vuetify/lib/util/mixins";
import { VIcon } from "vuetify/lib";

export default mixins(VIcon)
  .extend()
  .extend({
    name: "ct-icon",
    functional: true,
    extend: VIcon,
    props: {
      size: {
        default: 20,
        type: [Number, String]
      }
    },
    render(h, { data, children }) {
      return h(VIcon, data, children);
    }
  });
