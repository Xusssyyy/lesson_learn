let s = Symbol(); // 独一无二  
console.log(typeof s);
let s2 = Symbol();
console.log(s == s2);


let obj = {
    a: 1,
    [Symbol()]: function(arg) {
        console.log('----')
    },
    [Symbol()]: function(arg) {
        console.log('++++')
    }
}
// console.log(obj);
for (let key in obj) {
    console.log(key);
}
console.log(Object.keys(obj))
console.log(
    Object.getOwnPropertyNames(obj)
)

Object.getOwnPropertySymbols(obj)
    .forEach(item => {
        obj[item]();
    })

    
// obj.a
// console.log(obj[s2]())