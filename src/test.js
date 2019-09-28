// 在Node中,使用let 名称 = require('模块标识符')
// module.exports 和 exports来暴露成员

// 在ES6中,通过import 模块名称 from '模块标识符'
// 使用export default 和 export 向外暴露成员

// 在一个模块中,export default 只允许向外暴露一次
// 在一个模块中,可以同时使用export default 和 export 向外暴露成员

// 使用export向外暴露的成员,只能使用{}的形式来接收,这种形式叫做按需导出
// export 可以向外暴露多个成员

// 按需导出, 不一定导出几个,就一定要接收几个
/*
export  var title = 'apple'
export  var tit = 'egg'
*/

// export default 暴露的成员,可以拿任意成员来接收

/*
let info = {
    name :"cp",
    age : 20
}
export  default  info
*/

// export default 导出的数据接收的时候可以改名字
// export 导出的数据接收的时候最好不改