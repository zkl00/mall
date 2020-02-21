import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('../views/home/Home')//首页
const Categconore = ()=>import('../views/categore/Categore')//分类
const Cart = ()=>import('../views/cart/Cart')//购物车
const ProFile = ()=>import('../views/profile/ProFile')//我的
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/categore',
    name:'categore',
    component:Categconore
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/proFile',
    name:'proFile',
    component:ProFile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
