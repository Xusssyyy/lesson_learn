let obj = {//被代理的对象
    age:18
}
//get set 处理合集
obj.age//get
obj.age = 'ssss';//set 赋值的同时，监听
//p代理
let p = new Proxy(target,handler)