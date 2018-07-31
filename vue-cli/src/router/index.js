import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Index from '@/components/Index'
import SubList1 from '@/components/SubList1'
import SubList2 from '@/components/SubList2'
import Url from '@/components/Url'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children: [
        {
          path: '/list/sublist1',
          name: 'SubList1',
          component: SubList1
        },{
          path: '/list/sublist2',
          name: 'SubList2',          
          component: SubList2
        }
      ]
    },
    {
      path: '/url/:username/:age',
      component: Url
    },
    {
      path: "/home",
      redirect: '/'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
