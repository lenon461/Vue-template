import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import DetailPage from '@/pages/DetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    }
  ]
})
