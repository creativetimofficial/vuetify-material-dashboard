module.exports = {
  devServer: {
    disableHostCheck: true
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      sass: {
        data: `@import "~@/assets/styles/shared.scss"`
      },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        data: `@import "~@/assets/styles/shared.scss";`
      }
    }
  }
};
