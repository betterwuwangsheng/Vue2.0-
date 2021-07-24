// 使用模块化机制编程，导入 Vue 和 VueRoux，要调用 Vue.use(xxx)
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
