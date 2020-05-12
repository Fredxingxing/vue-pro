// eslint-disable-next-line
import Vue from 'vue'
import VueRouter from 'vue-router'
// Home
import Home from './pages/Home/index'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ]
})
export default router
