import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Edit from '@/components/todoedit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/edit/:todoid',
      name: 'todoedit',
      component: Edit
    }],
  mode: 'history',
  base: '/',
  linkActiveClass: 'active'
})
