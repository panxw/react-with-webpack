webpack打包入门教程

1.单个文件打包
webpack test.js bundle.js //指定输入文件为test.js, 打包输出文件为bundle.js

2.多个js或相关文件时，输入文件指定为js入口文件，如main.js中require了两次其它模块:
//main.js
require('style-loader!css-loader!./css/main.css');
require('./common.js');

这时，打包命令是：
webpace  main.js bundle.js //指定入文件文件main.js即可

3.使用相应loader
如require时css使用了css-loader条件，2中提到的在require时可指定loader，但不推荐这样做。
使用命令行执行webpack可以通过--module-bind指定loader，如下：
webpack main.js bundle.js --module-bind "css=style-loader!css-loader" --progress --display-modules --display-reasons 

4.配置webpack.config.js
最好使用这种配置文件的方式，方便配置loader，及打包时所用到的插件。
//webpack.config.js
require('webpack')
module.export={
	
}


