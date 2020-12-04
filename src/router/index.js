import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../component/Login.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

// export default new VueRouter({
//   routes: [{
//     path: '/login',
//     component: Login
//   }]
// })