// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import EvaIcons from 'vue-eva-icons'
import Uimini from 'uimini/dist/css/uimini.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(EvaIcons)
Vue.use(Uimini)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
