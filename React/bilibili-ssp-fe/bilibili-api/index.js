const koa = require("koa");
const app = new koa();
const cors = require('koa-cors')
const router = require('koa-router')()
const mainRouter = require('./routers/index')
const searchRouter = require('./routers/search')
const videosRouter = require('./routers/videos')

//挂载跨域中间件
app.use(cors())
app.use(mainRouter)
router.use('/search',searchRouter)
router.use('/videos',videosRouter)
app.use(router.routes())

app.listen(3011,()=>{
    console.log("Your app is running");
})