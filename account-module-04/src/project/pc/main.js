import Vue from "vue";
import App from "./App.vue";

// router， store 文件在 src 目录下
// @ => src/
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
