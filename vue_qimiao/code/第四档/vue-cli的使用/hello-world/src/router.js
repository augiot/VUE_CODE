import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
//  路由懒加载模式
const Home = ()=> import('./views/Home.vue')
const About = ()=> import('./views/About.vue')
const Zag = () => import('./views/Zag.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.(懒加载模式)
      component: About
    },
    {
      path:"/zag",
      name:"zag",
      component:Zag
    }
  ]
})
