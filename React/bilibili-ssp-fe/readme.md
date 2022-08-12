- 大前端项目
    1. bilibili-api 提供数据接口服务
        - koa 后端框架
            以中间件为特色的开发思路
        - index.js 单点入口，
            - http服务
            - 路由、跨域、数据库连接、session服务等中间件
                koa-cors
            - 注意  保持简洁
            - 路由不让在index.js中出现

- 路由模块化如何做
    1. 添加一个routers目录
    2. 每个路由模块都有独立的文件
    3. Router.get 返回 router.routes()
    4. index.js根路由router.use（'/search',searchRouter）
    5. app.use(router.routes)

- fastmock -> routes + data

- 前端react全家桶 + ts
    1. 做准备
        - css reset iconfont rem.js
            styled-components createGlobalStyle
            rem.ts 要模块化
    2. vite.config.js   alias
        npm i @types/node