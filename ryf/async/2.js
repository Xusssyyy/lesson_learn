function f1(){
    // console.log('f1');
    setTimeout(()=>{
        console.log('f1');
    },2000)
}
function f2(){
    console.log('f2');
}
//单线程的js设计了异步任务机制来解决阻塞及程序僵持问题
//代码的编写顺序和执行顺序是有差异的，有损可读性
f1();//在f1中添加setTimeout 异步
f2();

//解决异步任务同步化问题
//1.回调函数 第一种解决方法
f1(f2)//高级函数