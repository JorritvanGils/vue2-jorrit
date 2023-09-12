import Vue from 'vue'
import App from './App'
import store from './store/'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './routes'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router: router,
  vuetify,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
