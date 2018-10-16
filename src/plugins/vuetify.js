import Vue from 'vue'
import Vuetify from '../../node_modules/vuetify'
import theme from './theme'
import '../../node_modules/vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})
