//变量声明
//let local
//var global
//const  value not changeable
//console.log()输出调试信息


/**
 *程序三大结构：
 **/
console.log('程序的结构');
console.log();

/**
 * 一、顺序结构，语句按顺序先后被执行
 **/
let hello=()=>{
	let i=1;
	let j=2;
	console.log(i);
	console.log(j);
}
// console.log('顺序结构：');
// hello();

/**
 * 二、选择结构，语句按条件被执行
 **/
let taxval=(salary) =>{
	let tax=0;
	if(salary<3500) {
		tax=0;
	} else if(salary>=3500 && salary<9000) {
		tax=(salary-3500)*0.05;
	} else if(salary>=9000) {
		tax=(salary-9000)*0.1+(9000-3500)*0.05;
	}
	return tax;
}
// console.log('选择结构：');
// console.log(taxval(4500)); //50
// console.log(taxval(9000)); //275
// console.log(taxval(12500)); //625

/**
 * 三、循环结构，在满足给定条件下循环执行
 **/
/*循环结构形式1， for语句，计算1-100的和*/
let sum0=()=>{
	let sum=0;
	let i=0;
	for(i=0;i<=100;i++) {
		sum+=i;
	}
	return sum;
}
// console.log('循环结构：for语句');
// console.log(sum0()); //5050

/*循环结构形式2，while语句，计算1-100的和*/
let sum1=()=>{
	let sum=0;
	let i=0;
	while(i<100) {
		i++;
		sum+=i;
	}
	return sum;
}
// console.log('循环结构：while语句');
// console.log(sum1()); //5050

/*循环结构形式3，do while语句，计算1-100的和*/
let sum2=()=>{
	let sum=0;
	let i=0;
	do{
		i++;
		sum+=i;
	}while(i<100);
	return sum;
}
// console.log('循环结构：do while语句');
// console.log(sum2()); //5050

/**
 * while语句示例，计算1-100的所有奇数之和
 **/
let jishu=()=>{
	let sum=0;
	let i=1;
	while(i<100) {
		sum+=i;
		i+=2;
	}
	return sum;	
}
// console.log('循环结构举例：计算1-100所有奇数之和');
// console.log(jishu()); //2500

/**
 * do while语句示例，计算1-100的所有偶数之和
 **/
let oushu=()=>{
	let sum=0;
	let i=0;
	do{
		sum+=i;
		i+=2;
	} while(i<=100);
	return sum;
}
// console.log('循环结构举例：计算0-100所有偶数之和');
// console.log(oushu());//2550

/**
 * 四、js中的对象（属性+方法）
 **/
let rect={
	width:20, 
	height:10, 
	area:function(){
		return this.width*this.height;
	}
};
// console.log('js中的对象');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.area());


var a=100;
var f=function(){
	console.log(this.a);//100
	console.log(a);//undefined
	var a=10; 
	console.log(a); //10
	this.a=99;
	console.log(this.a);//99
	console.log(a);//10
};
// console.log(a);
// f();

module.exports = taxval;