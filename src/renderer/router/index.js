import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/LoginPage').default
    },
    {
      path: '/app',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthorized) {
          next()
        } else {
          next({ name: 'login' })
        }
      }
    },
    {
      path: '*',
      redirect: '/app'
    }
  ]
})
