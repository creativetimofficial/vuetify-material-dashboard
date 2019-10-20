import mixins from "vuetify/lib/util/mixins";
import { VSheet } from "vuetify/lib";
import CtCard from "./CtCard";

export default mixins(CtCard)
  .extend()
  .extend({
    name: "CtChartCard",
    props: {
      data: {
        type: Object,
        default: () => ({})
      },
      eventHandlers: {
        type: Array,
        default: () => []
      },
      options: {
        type: Object,
        default: () => ({})
      },
      ratio: {
        type: String,
        default: undefined
      },
      responsiveOptions: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        required: true,
        validator: v => ["Bar", "Line", "Pie"].includes(v)
      }
    },
    computed: {
      classes() {
        return {
          ...CtCard.options.computed.classes.call(this),
          "ct-chart-card": true
        };
      }
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      getHeader(h) {
        return (
          <div class="d-flex grow flex-wrap">
            <VSheet
              dark={true}
              color={this.headerColor}
              class="text-start ct-card--material__heading mb-n6 pa-7"
              style="width: 100%;"
            >
              <Chartist
                data={this.data}
                event-handlers={this.eventHandlers}
                options={this.options}
                ratio={this.ratio}
                responsive-options={this.responsiveOptions}
                type={this.type}
                style="max-height: 150px;"
              />
            </VSheet>
          </div>
        );
      }
    }
  });
