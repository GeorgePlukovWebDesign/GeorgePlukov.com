import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

// const router = new VueRouter({history: true, root: config.root});

export default new Router({
  mode: 'history',

  routes: [
    {
      path:'/dev',
      name: 'dev',
      component: function (resolve) {
        require(['@/components/custom/Css.vue',], resolve)
      }
    },
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
      path:'/upload',
      name: 'upload',
      component: function (resolve) {
        require(['@/components/Upload.vue'], resolve)
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
