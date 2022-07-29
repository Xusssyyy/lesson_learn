- weui css 框架
- weui-react UI框架
- axios + fast mock 伪造远程接口
- 组件化思想
    1. html+css+js 类section 一个功能组件的封装
    2. 界面开发，组件化开发
    3. 采用一个好用的react UI组件库

- 状态
    1. 组件有自有数据状态和props useState + props
    2. 静态界面，界面的状态

- 父子组件传值的时候，prop类型的检测
    prop-types npm

    Address.propTypes = {
    address:PropTypes.array
    }

    当父组件传的值不是我们需要的话，prop-types会报相应的错误