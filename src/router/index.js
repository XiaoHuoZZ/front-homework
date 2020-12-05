import Vue from 'vue'
import VueRouter from 'vue-router'

const Login =() => import('../views/Login')
const Student = () => import('../views/Student')
const Internships = () => import('../components/studendt/Internships')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/student'
}, {
  path: '/login',
  component: Login
},{
  path:'/student',
  component:Student,
  children:[
    {
      path:'/internships',
      component: Internships
    }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
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