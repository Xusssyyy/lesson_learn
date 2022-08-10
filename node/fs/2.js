const fs = require('fs');
const files = ['a.txt','readme.md','b.txt'];

for(let file of files){
    fs.readFile(file,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data.toString);
    })
}