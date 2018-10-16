import Vue from 'vue'
import 'chartist/dist/chartist.min.css'

// chartist-node-safe.js
const SafeChartist = typeof window !== 'undefined' ? require('vue-chartist') : {}

Vue.use(SafeChartist)
