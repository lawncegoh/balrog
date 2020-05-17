import Vue from 'vue';
import VueRouter from 'vue-router';

//import Chat from '../Chat.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/razeawareness',
    name: 'razeawareness',
    component: () => import('../views/Dashboard/RazeAwareness.vue')
  },
  {
    path: '/razefunds',
    name: 'razefunds',
    component: () => import('../RazeFunds.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Landing/loginuser.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Landing/Register.vue')
  },
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/Landing/Landing.vue')
  },
  {
    path: '/razescanner',
    name: 'razescanner',
    component: () => import('../views/RazeScanner.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile/Profile.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
