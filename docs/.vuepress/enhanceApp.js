import './docs.scss'
import * as plugins from '@/plugins/index';
import * as components from '@/components/index';
import '@/styles/index.scss'
import DemoBlock from './demo-block/demo-block'

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  Vue.component('demo-block', DemoBlock);
  Object.keys(components).forEach(compKey => {
    let componentInstance = components[compKey];
    if(componentInstance.name){
      Vue.component(componentInstance.name, componentInstance);
    }
  });
}
