- 前端在3000端口
- json-server 数据库在1234端口
- 把文章列表显示到页面上
    先显示页面
    domContentLoaded useEffect
    fetch('http://lcoalhost:1234/posts')
    .then(()=>{
        //json 数组 -> jsx 数组 -> {}
        //setPosts useState 响应式
    })