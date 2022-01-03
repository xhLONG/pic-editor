import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },{
      path: '/index',
      component: Index,
  },{
      path: '*',
      redirect: '/index',
  }
]

const router = new VueRouter({
  routes
})

export default router
