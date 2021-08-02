import Vue from 'vue';

// router， store 文件在 src 目录下
// @ => src/
import router from '@/router';
import store from '@/store';
import App from './App.vue';

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
// svgicon
import "@/icon";

Vue.config.productionTip = false;

Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
