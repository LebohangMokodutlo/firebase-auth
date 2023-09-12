import Vue from 'vue';
import axios from 'axios'; // import axios
import App from './App.vue';
import router from './router';
import store from './store';

// let's you use axios everywhere throughout the whole project
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
