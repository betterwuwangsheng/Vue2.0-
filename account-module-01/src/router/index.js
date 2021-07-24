import Vue from "vue";
import VueRouter from "vue-router";

// 使用模块化机制编程，导入 VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

const routes = [];

// 创建路由实例对象
const router = new VueRouter({
  // 设置路径模式 -> 无 # 模式
  mode: "history",
  routes,
});

export default router;