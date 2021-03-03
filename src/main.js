import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './routes'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.axios = axios

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

