// vue.config.js
// 可选的配置文件
module.exports = {
  
  // 格式化设置
  lintOnSave: false,
  // 在 multi-page 模式下构建应用。
  // 每个“page”应该有一个对应的 JavaScript 入口文件。
  // 其值应该是一个对象，对象的 key 是入口的名字，
  // value 是： 一个指定了 
  // entry, template, filename, title 和 chunks 的对象
  // (除了 entry 之外都是可选的) ；或一个指定其 entry 的字符串。
  pages: {
    index: {
      // cars 项目的入口
      // entry: 'src/project/cars/main.js',
      
      // library 项目入口
      // entry: 'src/project/library/main.js',
      
      // 根据控制台输入的命令自行选择
      // 使用 ES6 语法自动获取环境变量的值
      entry: `src/project/${process.env.VUE_APP_PROJECTNAME}/main.js`
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpagename.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpagename.html`。
    // library: 'src/project/library/main.js'
  }
}