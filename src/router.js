
import  VueRouter from'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import ShopCar from './components/tabbar/ShopCar.vue'
import Search from './components/tabbar/Search.vue'
import newslist from './components/news/newslist.vue'
import  newsinfo from './components/news/newsinfo.vue'

let router  = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},  // 路由重定向
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shop',component:ShopCar},
        {path:'/search',component:Search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo}
    ],
    linkActiveClass:"mui-active" //覆盖默认的路由高亮的类
})

export  default  router