import Vue from 'vue';

// router， store 文件在 src 目录下
// @ => src/
import router from '@/router';
import store from '@/store';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
