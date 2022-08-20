- event loop   event内置type key touch

- 自定义事件
    - 自定义任何类型的事件，并且使用emit触发回调
    - EventEmitter构造函数中使用Map作为存储的容器
    - 编写addListener事件
    - emit方法，使用相应的type取出对应的函数执行
    - 事件并不复杂

- 设计模式，订阅发布者模式

- react MVVM核心 