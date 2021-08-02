import Vue from 'vue';

// router， store 文件在 src 目录下
// @ => src/
import router from '@/router';
import store from '@/store';
import Vant from 'vant';
import App from './App.vue';

// Vant
import 'vant/lib/index.css';

Vue.config.productionTip = false;

Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
