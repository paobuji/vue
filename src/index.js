
import Vue from 'vue'
// 1. 导入包
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

import  VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';

// import './css/index.css'
/*需要引入插件 style-loader css-loader*/


// 按需导入mintui 组件
import 'mint-ui/lib/style.css'
import { Header,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入Mui(因为导入了未来的css文件,记得在配置文件中配置好css样式和css字体)
import  '../mui-master/dist/css/mui.min.css'
// // 导入额外的购物车图标
import '../mui-master/dist/css/icons-extra.css'

import router from "./router.js";
//导入根组件
import  App from './App.vue'

new Vue({
    el:"#app",
    data:{
    },
    render:function (createElements) {
        return createElements(App)
    },
    router
})
// 渲染vue组件需要下载两个包 vue-loader vue-template-compiler

/*
import  {title,tit} from "./test.js";
console.log(tit);
console.log(title);
*/

/*
import  title  from './test'
console.log(title);
*/


/*
class Person {
    // 使用static 关键字,可以定义静态属性(可以通过类名直接访问的属性)
    // 实例属性,只能通过类的实例来访问的属性
    static  info = {name:'zs',age:20}
}
// 访问Person 类身上的info静态属性
console.log(Person.info);
//在webpack中,默认只能处理一部分es6的新语法,更高级的处理不了,需要借助第三方的
//loader帮助把高级语法转化为低级语法.
// Babel 可以实现
// 第一套包: npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 第二套包: npm i babel-preset-env babel-preset-stage-0 -D
//打开配置文件,在module节点下的rules数组中,添加一个新的匹配规则,
// {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 在配置babel的loader规则的时候,必须把 node_modules排除掉
//  在项目的根目录中,新建一个叫做.babelrc的Babel配置文件,这个配置文件属于Json格式
/!*{
    "presets":["env","stage-0"],
    "plugins":["transform-runtime"]
}*!/
*/





