module.exports = {
  devServer: {
    disableHostCheck: true
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/assets/styles/variables.scss'`
      },
      scss: {
        data: `@import '@/assets/styles/variables.scss';`
      }
    }
  },
  chainWebpack: config => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach(match => {
      config.module
        .rule("scss")
        .oneOf(match)
        .use("sass-loader")
        .tap(opt =>
          Object.assign(opt, {
            data: `@import '@/assets/styles/variables.scss';`
          })
        );

      config.module
        .rule("sass")
        .oneOf(match)
        .use("sass-loader")
        .tap(opt =>
          Object.assign(opt, {
            data: `@import '@/assets/styles/variables.scss'`
          })
        );
    });
  },
  transpileDependencies: ["vuetify"]
};
