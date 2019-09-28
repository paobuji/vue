let path = require('path');

let VueloaderPlugin  = require('vue-loader/lib/plugin')
// 新版vue-loader需要的插件

// 导入生成html页面的插件
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dest'),
        filename : 'bundle.min.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            // 创建一个在内存生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
            // 指定生成页面的名称
        }),
        new VueloaderPlugin() // 新版的vue-loader需要的插件
    ],
    module:{
        // 这个节点用于配置所有的第三方的规则
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},  // 这是处理css文件的
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'}, // 这是处理css文件中图片链接的
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理字体的(不要忘了)
            {test:/\.js$/,use:'babel-loader', exclude: /node_modules/}, // 配置babel转化高级语法
            {test:/\.vue$/, use: 'vue-loader'} // 配置vue组件的
        ]
    }
    /*resolve: {
        alias: {
            // 设置vue的路径
            'vue$':'vue/dist/vue.js'
        }
    }*/
}