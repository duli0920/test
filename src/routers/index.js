import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {//重定向，如果地址栏输入错误，自动跳转到movie页面
      path:'/*',
      redirect:'/movie'
    }
  ]
})
