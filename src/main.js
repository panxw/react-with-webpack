var taxval = require('./common.js');//import taxval from './common';

//加载css文件时，使用到了style-loader和css-loader
//require('style-loader!css-loader!./main.css'); //不用在打包时指定css-loader
//require('./css/main.css'); //打包时用--module-bind "style-loader!css-loader"指定加载的loader
//webpack.config.js 中配置style-loader和css-loader
require('./css/main.css');

//es6 demo
import HelloWorld from './test.jsx';


//test
console.log('main=：');
console.log(taxval(4500)); //50
console.log(taxval(9000)); //275
console.log(taxval(12500)); //275

//alert
alert(taxval(15000));
