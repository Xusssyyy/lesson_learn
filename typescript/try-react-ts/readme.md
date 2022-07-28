- typescript 是js的超级
    1. ts可以提供类型化的js
        let ch:Person
            ch.name
            ch.sex

- 如何使用ts完成子组件UI开发
    1. 后缀为.tsx
    2. prop-types可以下课了
        由语言本身来打理
    3. 子组件接住父组件的props传递
        - 接口interface 
            子组件里定义
        - ts提供的高级面向对象功能 传统的面向对象思想
    4. HelloComponents:React.FC<Props>
        <> 泛型  泛指内部的类型 关心的核心 props：Props
    5. ts如java 先编译再运行

- change事件的typescript化
    1. e:React.ChangeEvent<HTMLInputElement>
        来自@types/react
    2. 子组件向父组件报告 调用函数
        如果不做处理，会把复杂性带给父组件
    3. 父组件 接受子组件传过来的value
        子组件把原来的onChange语义改为onNameUpdated中转一下就好了

- typescript中架构多了个model