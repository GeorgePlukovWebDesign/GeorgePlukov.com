import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',

  routes: [
    {
      path:'/positions',
      name: 'positions',
      component: function (resolve) {
        require(['@/components/Positions.vue',], resolve)
      }
    },
    {
      path:'/gallery',
      name: 'gallery',
      component: function (resolve) {
        require(['@/components/Gallery.vue'], resolve)
        // require(['@components/subpage/InProgress.vue'], resolve)


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
