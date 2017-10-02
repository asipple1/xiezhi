import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Coins from '@/components/Coins'
import Gify from '@/components/Gify'
import Blog from '@/components/Blog'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/gify',
      name: 'Gify',
      component: Gify
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
