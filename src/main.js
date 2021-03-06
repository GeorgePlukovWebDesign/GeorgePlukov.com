
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue2Filters from 'vue2-filters'

var VueFire = require('vuefire')

Vue.use(VueFire)
Vue.use(Vue2Filters)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

 // firebase binding
 // https://github.com/vuejs/vuefire

  template: '<App/>',
  components: { App }
})
