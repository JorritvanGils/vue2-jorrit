import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './routes'

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
