import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.css'
import axiosPlugin from './plugins/axios'

Vue.config.productionTip = false

Vue.use(axiosPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
