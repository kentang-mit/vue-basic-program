// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
  	path:'log-time',
  	component: resolve => require(['./components/LogTime.vue'], resolve),
  }]
}, {
  path: '/',
  component: Home
}];


const router = new VueRouter({
  routes
});


const app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
})




/* eslint-disable no-new */

/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/