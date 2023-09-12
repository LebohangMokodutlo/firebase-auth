import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginForm from '../views/LoginForm.vue';
import RegisterForm from '../views/RegisterForm.vue';
import SecretView from '../views/SecretView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/loginform',
    name: 'loginForm',
    component: LoginForm,
  },
  {
    path: '/registerform',
    name: 'registerForm',
    component: RegisterForm,
  },
  {
    path: '/secretview',
    name: 'secretView',
    component: SecretView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
