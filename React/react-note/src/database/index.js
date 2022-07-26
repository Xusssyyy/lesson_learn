// 封装数据库模块
import Loki from 'lokijs'
//增删改查
//建数据库 notes数据库
//连接数据库，db代表数据库对象 句柄
//通过db就可以操作数据库了
//建个表|打开表
//CRUD操作（增删改查）
export const db = new Loki('notes',{
    autoload:true,
    autoloadCallback:databaseInitialize,
    autosave:true,//自动保存
    autosaveInterval:3000,//每隔3秒执行一下
    persistenceMethod:'localStorage'//持久化的方式
})

// 初始化时检测有没有准备好表
function databaseInitialize(){
    //数据库初始化
    const notes = db.getCollection('notes')//数据集合
    if(notes===null){
        db.addCollection('notes')//创建一个表
    }
}

//select 供其他模块调用
export function loadCollection(collection){

}