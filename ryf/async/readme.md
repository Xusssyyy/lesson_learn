- 队列 同一时刻只能做一件事，队列的缺点
    与js运行方式相关，js是单线程语言，相对于多线程而言  
    同一时刻，js只能有一个任务在执行  
    - 优点
        简单，好理解
    - 缺点
        低效果
    - 线程（thread）
        代码执行的最小单元

- 假如数据请求fetch/ajax，js单线程，如果同步的话，会给我们的页面显示带来什么麻烦
    1. 慢这个问题不存在
    2. 某时刻只能做一件事
    3. 滚动或在页面交互的时候，数据请求在发生，假如ajax同步的阻塞当前js单线程，scoll
    不会响应  页面进入僵死状态
    4. 假如所有任务都是同步任务（顺序执行）  
    单线程=同步（简单，易读）+异步（复杂性，eventloop）
