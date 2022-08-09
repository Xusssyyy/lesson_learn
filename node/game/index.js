//和输入输出设备打交道
const game = require('./game.js')

let winCount = 0;//计算赢的次数

//进程 隔离资源的最小单元
//buffer二进制流
process.stdin.on('data',(buffer)=>{
    // console.log(buffer);//二进制缓冲
    const action = buffer.toString().trim();
    const result = game(action);//用户的输入 交给游戏逻辑 并告诉我赢了还是输了

    if(result==1){
        winCount++
        if(winCount>=3){
            console.log('不玩了....');
            process.exit()//退出进程api
        }
    }
})