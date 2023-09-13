import Vue from 'vue';
import axios from 'axios'; // import axios
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import App from './App.vue';
import router from './router';
import store from './store';
// let's you use axios everywhere throughout the whole project
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4mFBgFmOmatEJw8YKSNVUBS-6UCftzUM',
  authDomain: 'qualityproject-8f22a.firebaseapp.com',
  projectId: 'qualityproject-8f22a',
  storageBucket: 'qualityproject-8f22a.appspot.com',
  messagingSenderId: '529768307481',
  appId: '1:529768307481:web:2dff4c45ce898520a5c388',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAuth(app);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
