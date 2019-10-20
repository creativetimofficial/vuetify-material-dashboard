import Vue from "vue";
import CtAppBar from "../components-plugins/creative-tim/CtAppBar";
import CtIcon from "../components-plugins/creative-tim/CtIcon";
import CtNavigationDrawer from "../components-plugins/creative-tim/CtNavigationDrawer";
import CtCard from "../components-plugins/creative-tim/CtCard";
import CtChartCard from "../components-plugins/creative-tim/CtChartCard";
import CtStatsCard from "../components-plugins/creative-tim/CtStatsCard";

const CreativeTim = {
  install(Vue) {
    Vue.component("CtAppBar", CtAppBar);
    Vue.component("CtIcon", CtIcon);
    Vue.component("CtNavigationDrawer", CtNavigationDrawer);
    Vue.component("CtCard", CtCard);
    Vue.component("CtChartCard", CtChartCard);
    Vue.component("CtStatsCard", CtStatsCard);
  }
};

Vue.use(CreativeTim);
