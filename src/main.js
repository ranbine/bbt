// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Qs from 'qs'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = axios.create({
  baseURL: 'http://yjhapi.agxx.club/iweb/',
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }],
  transformResponse: [(data) => {
    let res = data.slice(1)
    return JSON.parse(res)
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
