import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'index',
    redirect:'/index/one',
    component: () => import('@/views/index'),
    children:[
      {
        path: '/index/one',
        name: 'index_one',
        component: () => import('@/views/one'),
        children:[
          {
            path:'/index/one/home',
            name:'index_one_home',
            component:()=>('@/views/one_home')
          }
        ]
      },
      {
        path: '/index/shop',
        name: 'index_shop',
        component: () => import('@/views/shop'),
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
