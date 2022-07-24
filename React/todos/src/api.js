// API 应用程序接口 Application Interface
// 前端和后端数据交换格式是json
const todos = [
    {
        id:1,
        text:'todo1',
        finished:true
    },
    {
        id:2,
        text:'todo2',
        finished:false
    },
    {
        id:3,
        text:'todo3',
        finished:true
    },
    {
        id:4,
        text:'todo4',
        finished:true
    },
    {
        id:5,
        text:'todo5',
        finished:false
    }
]

// delay函数
const delay = time => new Promise(resolve => setTimeout(resolve,time));

// withDelay(function(){}) return async函数
const withDelay = fn => async(...args) =>{
    await delay(1000);
    return fn(...args)
}

export const fetchTodos = withDelay(params=>{
    // console.log(params);
    const { query,tab } = params
    // console.log(query,tab);
    let result = todos;
    if (tab){
        switch(tab){
            case "已完成":
                result = result.filter(todo => todo.finished === true);
                break;
            case "未完成":
                result = result.filter(todo => todo.finished === false);
                break;
            default:
                break;
        }
    }
    // Promise静态resolve方法
    return Promise.resolve({
        tab,result
    })
})