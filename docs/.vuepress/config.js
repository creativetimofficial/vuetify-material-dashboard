const markdownParser = require('./markdownParser')
const path = require('path');
module.exports = {
  title: 'Vuetify Material Dashboard',
  base: '/vuetify-material-dashboard/documentation/',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'creativetimofficial/vuetify-material-dashboard',
    sidebar: [
      {
        title: 'General Information',
        collapsable: false,
        children: [
          '/',
          '/component-docs/license'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/component-docs/buttons',
          '/component-docs/cards',
          '/component-docs/checkboxes',
          '/component-docs/dropdown',
          '/component-docs/inputs',
          '/component-docs/textarea',
          '/component-docs/maps',
          '/component-docs/notifications',
          '/component-docs/data-tables',
          '/component-docs/tabs',
          '/component-docs/tooltips',
          '/component-docs/drawer',
          '/component-docs/material-icons',
          '/component-docs/toolbar'
        ]
      }
    ]
  }
};
