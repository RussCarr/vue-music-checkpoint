import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyTunes from '@/components/MyTunes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users/:userId/collections',
      name: 'MyTunes',
      component: MyTunes
  },
  ]
})
