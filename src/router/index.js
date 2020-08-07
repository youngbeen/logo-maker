import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/colorMonitor',
    name: 'colorMonitor',
    component: () => import(/* webpackChunkName: "colorMonitor" */ '../views/ColorMonitor.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
