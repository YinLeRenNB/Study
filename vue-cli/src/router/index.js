import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/list',
      name: 'HelloWorld',
      component: List
    }
  ]
})
