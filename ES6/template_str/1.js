//重复了，违反了Dry ,使用封装方法
const name = 'Snickers';
const age = 2;
// console.log('My dog ' + name + ' is ' + age + ' year old');
const name2 = 'egg';
const age2 = 1;
console.log('My dog ' + name2 + ' is ' + age2 + ' year old');
//函数
function sayMyDog(name,age){
    //es6字符串模板
    return `My dog ${name} is ${age} years old`;
    // return 'My dog ' + name2 + ' is' + age2 + ' years old';
}
//构造函数首字母大写
//匿名函数
const sayMyDog = function (name,age){
    //es6字符串模板
    return `My dog ${name} is ${age} years old`;
    // return 'My dog ' + name2 + ' is' + age2 + ' years old';
}
//箭头函数  不需要function关键字
const sayMyDog = (name,age)=>{
    //es6字符串模板
    return `My dog ${name} is ${age} years old`;
    // return 'My dog ' + name2 + ' is' + age2 + ' years old';
}
//如果函数体只有一句代码，并且是返回值的话，可以省略 花括号
const sayMyDog = (name,age)=> `My dog ${name} is ${age} years old`;
    // return 'My dog ' + name2 + ' is' + age2 + ' years old';

console.log(sayMyDog(name,age));