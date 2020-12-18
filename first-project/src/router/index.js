import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/Home'
import classify from '@/view/Classify'
import user from '@/view/User'
import order from '@/view/Order'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: home
    },{
      name: 'classify',
      path: '/classify',
      component: classify,
    },{
      name: 'user',
      path: '/user',
      component: user
    },{
      name: 'order',
      path: '/order',
      component: order
    }
  ]
})
