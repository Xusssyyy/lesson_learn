1. HTTP协议有什么限制
    - 无状态
    - 完成即断开
    - 在线聊天室 HTTP怎么做
        setInterval + ajax + dom 请求服务器  缺点是性能
        服务端有推送能力 websocket 在协议层提供新的应用方案
    - websocket web端的Socket html5功能 弥补了HTTP1.X的缺陷，HTTP请求只能由客服端发送请求
    - 双向通信的Socket在web端实现html5
    - 当客服端和服务端建立websocket时，客服端会向服务端发送一个HTTP请求

2. HTTP模块 server