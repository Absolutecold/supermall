import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Home = () => import('../views/home/Home.vue')
const Fen = () => import('../views/fen/Fen.vue')
const My = () => import('../views/my/My.vue')
const Shopcat = () => import('../views/shopcat/Shopcat.vue')
const Details = () => import('../views/details/Details.vue')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/shopcat",
    component: Shopcat
  },
  {
    path: "/fen",
    component: Fen
  },
  {
    path: "/details/:iid",
    component: Details
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
