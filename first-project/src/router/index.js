import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import classify from '@/components/Classify'
import user from '@/components/User'
import cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
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
      name: 'cart',
      path: '/cart',
      component: cart
    }
  ]
})
