//node提供了内置fs
const fs = require('fs');//require是node里的关键字，又称为commonjs模块化规范之一
fs.readFile('./readme.md',function(err,data){
    if(!err){
        console.log(data.toString());
  
    }else{
        console.log(err);
    }
})

// const files = ['./a.txt','./b.txt','./readme.md'];
// files.forEach((files)=>{
//     fs.readFile(file,function(err,data){
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data.toString);
//     })
// })

//多个异步任务要完成，顺序怎么控制
// const files = ['./a.txt','./readme.md','./b.txt'];
// function readFile(path,callback){
//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         callback(data);
//     })
// }
// readFile('./readme.md',(data)=>{
//     console.log(data);
// })