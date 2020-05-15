import Vue from 'vue';
import './plugins';
import VueChatScroll from 'vue-chat-scroll';
import App from './App';
import router from './router';
import store from './store';
import { CarouselPlugin } from 'bootstrap-vue';
import { NavbarPlugin } from 'bootstrap-vue';
import './firebase/init';
import firebase from 'firebase/app';
import jQuery from 'jquery';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from 'vuetify';
import 'vue-material-design-icons/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from 'vue-star-rating';
import 'vue-chartist';
import 'vuetify/dist/vuetify.min.css';
import FullCalendar from 'vue-full-calendar';

Vue.use(FullCalendar);
Vue.config.productionTip = false;
Vue.use(VueChatScroll);
Vue.use(CarouselPlugin);
Vue.use(NavbarPlugin);
Vue.use(Vuetify);
Vue.use(require('vue-chartist'));

window.$ = window.jQuery = jQuery;

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user);
});

new Vue({
  render: (h) => h(App),
  router,
  store,
  components: { App, StarRating },
}).$mount('#app');
