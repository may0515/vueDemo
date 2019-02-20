import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test'
import navMenu from '@/views/navMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'navMenu',
      component: navMenu
    }
  ]
})
