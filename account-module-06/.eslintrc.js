module.exports = {
  root: true,
  env: {
    // 添加browser和es6的环境
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  // 使用语言及版本
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
