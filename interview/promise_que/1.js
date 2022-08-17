// Promise 手写，了解Promise细节
// this.state 状态三种 pending fullfiled rejected 
const promise = new Promise((resolve,reject)=>{
    resolve('success1');
    reject('error');
    resolve('success2');
})
promise
    .then(res=>{
        console.log("then:",res);
    })
    .catch(err=>{
        console.log("catch:",err);
    })