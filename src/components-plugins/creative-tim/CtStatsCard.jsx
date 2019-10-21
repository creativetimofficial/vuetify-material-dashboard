import mixins from "vuetify/lib/util/mixins";
import { VCard, VSheet, VDivider, VIcon } from "vuetify/lib";

export default mixins(VCard)
  .extend()
  .extend({
    name: "CtStatsCard",
    props: {
      headerColor: {
        type: String,
        default: "green"
      },
      headerTitle: {
        type: String,
        default: ""
      },
      headerValue: {
        type: String,
        default: ""
      },
      headerIcon: {
        type: String,
        required: true
      },
      smallValue: {
        type: String,
        default: ""
      },
      subIcon: {
        type: String,
        required: true
      },
      subIconColor: {
        type: String,
        default: ""
      },
      subText: {
        type: String,
        default: ""
      },
      subTextColor: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        return {
          ...VCard.options.computed.classes.call(this),
          "ct-card": true,
          "ct-stats-card": true
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
              style="width: auto; max-height: 90px;"
            >
              <VIcon size={32}>{this.headerIcon}</VIcon>
            </VSheet>
            <div class="ml-6">
              <div class="ml-auto text-right">
                <div class="body-3 grey--text font-weight-light">
                  {this.headerTitle}
                </div>
                <h3 class="headline font-weight-light text--primary">
                  {this.headerValue}{" "}
                  {this.smallValue !== "" ? (
                    <small> {this.smallValue}</small>
                  ) : null}
                </h3>
              </div>
            </div>
          </div>
        );
      },
      // eslint-disable-next-line no-unused-vars
      getFooter(h) {
        return (
          <div>
            <VIcon color={this.subIconColor} size={16} class="ml-2 mr-1">
              {this.subIcon}
            </VIcon>
            <span
              class={this.subTextColor + " body-2 font-weight-light grey--text"}
            >
              {this.subText}
            </span>
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
        this.genProgress(),
        this.getHeader(h),
        h(VDivider, { class: "my-2" }),
        this.getFooter(h)
      ]);
    }
  });
