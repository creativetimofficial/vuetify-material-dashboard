import mixins from "vuetify/lib/util/mixins";
import { VCard, VCardActions, VCardText, VDivider, VSheet } from "vuetify/lib";

export default mixins(VCard)
  .extend()
  .extend({
    name: "CtChartCard",
    props: {
      chartColor: {
        type: String,
        default: "green"
      },
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
          ...VCard.options.computed.classes.call(this),
          "ct-card": true,
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
              color={this.chartColor}
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
    },
    render(h) {
      const { tag, data } = this.generateRouteLink();
      data.style = this.styles;

      if (this.isClickable) {
        data.attrs = data.attrs || {};
        data.attrs.tabindex = 0;
      }

      return h(tag, this.setBackgroundColor(this.color, data), [
        this.getHeader(h),
        this.genProgress(),
        h(VCardText, [this.$slots.default]),
        this.$slots.actions ? h(VDivider, { class: "mt-2" }) : null,
        this.$slots.actions ? h(VCardActions, [this.$slots.actions]) : null
      ]);
    }
  });
