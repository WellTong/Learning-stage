import Vue from 'vue'
import Router from 'vue-router'
import home from '@/component/home'
import classify from '@/component/classify'
import user from '@/component/user'
import cart from '@/component/cart'

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
      children: {

      }
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
