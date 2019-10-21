import Vue from "vue";
import CtCard from "../components-plugins/creative-tim/CtCard";
import CtChartCard from "../components-plugins/creative-tim/CtChartCard";
import CtStatsCard from "../components-plugins/creative-tim/CtStatsCard";
import CtNotification from "../components-plugins/creative-tim/CtNotification";

const CreativeTim = {
  install(Vue) {
    Vue.component("CtCard", CtCard);
    Vue.component("CtChartCard", CtChartCard);
    Vue.component("CtStatsCard", CtStatsCard);
    Vue.component("CtNotification", CtNotification);
  }
};

Vue.use(CreativeTim);
