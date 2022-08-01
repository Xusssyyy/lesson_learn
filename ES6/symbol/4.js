const spread = [12,5,8,8,130,44,130];
//用filter方法来数组去重
const uniqueArr = spread.filter((item,index,arr)=>{
    // console.log(item,index,arr);
    //重复项就false
    return arr.indexOf(item)==index;
})
console.log(uniqueArr);

//es6中的set方法去重
const  arr = [...new Set(spread)];
console.log(arr);