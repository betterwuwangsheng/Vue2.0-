// vue.config.js
// 可选的配置文件
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: `src/project/${process.env.VUE_APP_PROJECTNAME}/main.js`,
    },
  },
  //配置 scss
  css: {
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
        // 因为 `scss` 语法在内部也是由 sass-loader 处理的
        // 但是在配置 `prependData` 选项的时候
        // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
        // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
        prependData: `@import "~@/assets/styles/main/index.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        project: "@/project",
      },
    },
  },
};
