import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/positions/',
      name: 'positions',
      component: function (resolve) {
        require(['@/components/Positions.vue'], resolve)
      }
    },
    {
      path: '/',
      name: 'default',
      component: function (resolve) {
        require(['@/components/Index.vue'], resolve)
      }
    }

  ]
})
